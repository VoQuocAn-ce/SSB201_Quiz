(() => {
  const STORAGE_KEY = "ssb201_cute_pink_quiz_v1";
  const LETTERS = ["A", "B", "C", "D", "E"];

  // DOM references
  const homeView = document.getElementById("homeView");
  const quizView = document.getElementById("quizView");
  const summaryView = document.getElementById("summaryView");
  const quizGrid = document.getElementById("quizGrid");

  const headerTitle = document.getElementById("headerTitle");
  const headerSubtitle = document.getElementById("headerSubtitle");
  const quizTopActions = document.getElementById("quizTopActions");
  const progressTrack = document.getElementById("progressTrack");
  const progressFill = document.getElementById("progressFill");
  const navButtonText = document.getElementById("navButtonText");

  const toggleShuffleQuestions = document.getElementById("toggleShuffleQuestions");
  const toggleShuffleOptions = document.getElementById("toggleShuffleOptions");

  const qCounter = document.getElementById("qCounter");
  const qTopic = document.getElementById("qTopic");
  const btnToggleHint = document.getElementById("btnToggleHint");
  const hintBox = document.getElementById("hintBox");
  const hintText = document.getElementById("hintText");
  const questionText = document.getElementById("questionText");
  const optionsList = document.getElementById("optionsList");

  const btnPrev = document.getElementById("btnPrev");
  const btnNext = document.getElementById("btnNext");
  const btnNextLabel = document.getElementById("btnNextLabel");
  const liveCorrect = document.getElementById("liveCorrect");
  const liveWrong = document.getElementById("liveWrong");

  const btnBackHome = document.getElementById("btnBackHome");
  const btnOpenNav = document.getElementById("btnOpenNav");
  const navModal = document.getElementById("navModal");
  const btnCloseNav = document.getElementById("btnCloseNav");
  const navGrid = document.getElementById("navGrid");

  const summaryEmoji = document.getElementById("summaryEmoji");
  const summaryTitle = document.getElementById("summaryTitle");
  const summarySubtitle = document.getElementById("summarySubtitle");
  const metricPercent = document.getElementById("metricPercent");
  const metricCorrect = document.getElementById("metricCorrect");
  const metricWrong = document.getElementById("metricWrong");
  const metricUnanswered = document.getElementById("metricUnanswered");
  const btnRetryWrong = document.getElementById("btnRetryWrong");
  const btnReviewAll = document.getElementById("btnReviewAll");
  const btnRestartQuiz = document.getElementById("btnRestartQuiz");
  const btnSummaryHome = document.getElementById("btnSummaryHome");

  // Application state
  let store = loadStore();
  let activeQuiz = null; // { id, title, subtitle, questions: [...], currentIndex, answers: { [qIndex]: chosenOptIndex }, hintsShown: {} }

  function loadStore() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (!Array.isArray(parsed.wrongQuestionKeys)) {
          const legacy = Array.isArray(parsed.wrongQuestionIds) ? parsed.wrongQuestionIds : [];
          parsed.wrongQuestionKeys = legacy.map((id) => `quiz1-full:${id}`);
        }
        return parsed;
      }
    } catch (_) {
      // Ignore malformed storage
    }
    return { sessions: {}, wrongQuestionKeys: [] };
  }

  function saveStore() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
    } catch (_) {
      // Ignore quota errors
    }
  }

  function shuffleArray(arr) {
    const copy = arr.slice();
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  function findOriginalQuestion(sourceQuizId, qId) {
    const quiz = QUIZ_CATALOG.find((c) => c.id === sourceQuizId);
    if (!quiz) return null;
    return quiz.questions.find((orig) => orig.id === qId) || null;
  }

  function prepareQuestions(rawQuestions, shuffleQ, shuffleOpt, defaultQuizId) {
    let items = rawQuestions.map((q) => {
      const sourceQuizId = q.sourceQuizId || defaultQuizId;
      const indexedOptions = q.options.map((opt, idx) => ({
        ...opt,
        isCorrect: q.correctIndices.includes(idx)
      }));
      const finalOptions = shuffleOpt ? shuffleArray(indexedOptions) : indexedOptions;
      return {
        id: q.id,
        sourceQuizId,
        uniqueKey: `${sourceQuizId}:${q.id}`,
        topic: q.topic,
        question: q.question,
        hint: q.hint,
        options: finalOptions
      };
    });
    if (shuffleQ) {
      items = shuffleArray(items);
    }
    return items;
  }

  function computeSessionStats(session) {
    if (!session || !session.questions) {
      return { answered: 0, correct: 0, wrong: 0, total: 0 };
    }
    let answered = 0;
    let correct = 0;
    let wrong = 0;
    session.questions.forEach((q, idx) => {
      const chosen = session.answers[idx];
      if (typeof chosen === "number") {
        answered++;
        if (q.options[chosen] && q.options[chosen].isCorrect) {
          correct++;
        } else {
          wrong++;
        }
      }
    });
    return { answered, correct, wrong, total: session.questions.length };
  }

  function showView(viewName) {
    homeView.classList.toggle("hidden", viewName !== "home");
    quizView.classList.toggle("hidden", viewName !== "quiz");
    summaryView.classList.toggle("hidden", viewName !== "summary");

    const inSession = viewName === "quiz" || viewName === "summary";
    quizTopActions.classList.toggle("hidden", !inSession);
    progressTrack.classList.toggle("hidden", !inSession);

    if (viewName === "home") {
      headerTitle.textContent = "SSB201 - Cute Quiz Studio";
      headerSubtitle.textContent = "Chọn bài Quiz để bắt đầu ôn tập cùng gợi ý & giải thích chi tiết";
      renderHome();
    }
  }

  function renderHome() {
    quizGrid.innerHTML = "";

    // Build list of available quizzes + optional wrong-answer review card
    const cards = [...QUIZ_CATALOG];
    const wrongKeys = Array.isArray(store.wrongQuestionKeys) ? store.wrongQuestionKeys : [];
    const wrongQuestions = [];
    wrongKeys.forEach((key) => {
      const [quizId, qIdStr] = String(key).split(":");
      const orig = findOriginalQuestion(quizId, Number(qIdStr));
      if (orig) {
        wrongQuestions.push({ ...orig, sourceQuizId: quizId });
      }
    });

    if (wrongQuestions.length > 0) {
      cards.push({
        id: "quiz-wrong-bank",
        title: "Ôn lại các câu từng làm sai",
        subtitle: `${wrongQuestions.length} câu bạn từng chọn nhầm`,
        description: "Tập trung luyện lại những câu bạn đã làm sai trong các bài Quiz trước đó cho đến khi nắm chắc hoàn toàn.",
        icon: "🩹",
        questions: wrongQuestions,
        isWrongReview: true
      });
    }

    cards.forEach((item) => {
      const savedSession = store.sessions[item.id];
      const stats = savedSession ? computeSessionStats(savedSession) : null;
      const hasProgress = stats && stats.answered > 0;

      const card = document.createElement("article");
      card.className = "quiz-card";

      const statsHtml = hasProgress
        ? `
          <div class="quiz-stats-mini">
            <span>Đã làm: <strong>${stats.answered}/${stats.total}</strong></span>
            <span class="stat-ok">✓ ${stats.correct} đúng</span>
            <span class="stat-err">✗ ${stats.wrong} sai</span>
          </div>
        `
        : `
          <div class="quiz-stats-mini">
            <span>✨ Chưa bắt đầu • Có gợi ý &amp; giải thích tiếng Việt</span>
          </div>
        `;

      card.innerHTML = `
        <div>
          <div class="quiz-card-top">
            <div class="quiz-icon-box">${item.icon}</div>
            <span class="quiz-badge-count">${item.questions.length} câu</span>
          </div>
          <h3 style="margin-top: 14px;">${item.title}</h3>
          <p>${item.description}</p>
        </div>
        <div style="display: flex; flex-direction: column; gap: 12px;">
          ${statsHtml}
          <div class="quiz-card-actions">
            <button type="button" class="btn-start" data-action="start">
              <span>${hasProgress ? "▶ Tiếp tục làm" : "🌸 Bắt đầu làm Quiz"}</span>
            </button>
            ${
              hasProgress
                ? `<button type="button" class="btn-reset-mini" data-action="reset" title="Làm lại từ đầu">Làm lại</button>`
                : ""
            }
          </div>
        </div>
      `;

      card.querySelector('[data-action="start"]').addEventListener("click", () => {
        if (hasProgress && !item.isWrongReview) {
          resumeQuiz(item.id);
        } else {
          startNewQuiz(item);
        }
      });

      const resetBtn = card.querySelector('[data-action="reset"]');
      if (resetBtn) {
        resetBtn.addEventListener("click", () => {
          delete store.sessions[item.id];
          saveStore();
          startNewQuiz(item);
        });
      }

      quizGrid.appendChild(card);
    });
  }

  function startNewQuiz(catalogItem) {
    const prepared = prepareQuestions(
      catalogItem.questions,
      toggleShuffleQuestions.checked,
      toggleShuffleOptions.checked,
      catalogItem.id
    );

    activeQuiz = {
      id: catalogItem.id,
      title: catalogItem.title,
      subtitle: catalogItem.subtitle,
      questions: prepared,
      currentIndex: 0,
      answers: {},
      hintsShown: {}
    };

    if (!catalogItem.isWrongReview) {
      store.sessions[catalogItem.id] = activeQuiz;
      saveStore();
    }

    openQuizView();
  }

  function resumeQuiz(quizId) {
    const saved = store.sessions[quizId];
    if (!saved) return;
    activeQuiz = saved;
    openQuizView();
  }

  function openQuizView() {
    headerTitle.textContent = activeQuiz.title;
    headerSubtitle.textContent = activeQuiz.subtitle;
    showView("quiz");
    renderQuestion();
  }

  function renderQuestion() {
    const total = activeQuiz.questions.length;
    const idx = activeQuiz.currentIndex;
    const q = activeQuiz.questions[idx];
    const chosen = activeQuiz.answers[idx];
    const isAnswered = typeof chosen === "number";
    const stats = computeSessionStats(activeQuiz);

    // Header & progress
    navButtonText.textContent = `Câu ${idx + 1}/${total}`;
    const progressPct = total > 0 ? ((idx + 1) / total) * 100 : 0;
    progressFill.style.width = `${progressPct}%`;

    // Meta
    qCounter.textContent = `CÂU HỎI ${idx + 1} / ${total}`;
    qTopic.textContent = `🌸 ${q.topic}`;

    // Hint state
    const hintVisible = Boolean(activeQuiz.hintsShown[idx]);
    hintBox.classList.toggle("hidden", !hintVisible);
    btnToggleHint.classList.toggle("active", hintVisible);
    hintText.innerHTML = `<strong>Gợi ý:</strong> ${escapeHtml(q.hint)}`;

    // Question text (preserve line breaks)
    questionText.innerHTML = escapeHtml(q.question).replace(/\n/g, "<br />");

    // Options
    optionsList.innerHTML = "";
    q.options.forEach((opt, optIdx) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "option-card";

      if (isAnswered) {
        btn.classList.add("locked");
        if (opt.isCorrect) {
          btn.classList.add("is-correct");
        } else if (optIdx === chosen) {
          btn.classList.add("is-wrong-selected");
        } else {
          btn.classList.add("is-wrong-muted");
        }
      }

      let badgesHtml = "";
      if (isAnswered) {
        if (opt.isCorrect) {
          const pickedRight = optIdx === chosen ? `<span class="your-pick-note">(Câu trả lời của bạn)</span>` : "";
          badgesHtml = `
            <div class="option-badges">
              ${pickedRight}
              <span class="status-badge badge-correct">✓ Câu trả lời chính xác</span>
            </div>
          `;
        } else if (optIdx === chosen) {
          badgesHtml = `
            <div class="option-badges">
              <span class="your-pick-note">(Câu trả lời của bạn)</span>
              <span class="status-badge badge-wrong">✗ Không chính xác</span>
            </div>
          `;
        }
      }

      let explanationHtml = "";
      if (isAnswered) {
        const prefix = opt.isCorrect
          ? `<span class="why-wrong-label" style="color:#065F46;">Giải thích đáp án đúng: </span>`
          : `<span class="why-wrong-label">Vì sao sai: </span>`;
        explanationHtml = `
          <div class="option-explanation">
            ${optIdx === chosen && !opt.isCorrect ? "" : prefix}${escapeHtml(opt.explanation)}
          </div>
        `;
      }

      btn.innerHTML = `
        <div class="option-header">
          <div class="option-title-wrap">
            <span class="option-letter">${LETTERS[optIdx] || optIdx + 1}</span>
            <span class="option-text">${escapeHtml(opt.text)}</span>
          </div>
          ${badgesHtml}
        </div>
        ${explanationHtml}
      `;

      if (!isAnswered) {
        btn.addEventListener("click", () => selectOption(optIdx));
      }

      optionsList.appendChild(btn);
    });

    // Footer controls
    btnPrev.disabled = idx === 0;
    btnNextLabel.textContent = idx === total - 1 ? "Hoàn thành" : "Tiếp theo";
    liveCorrect.textContent = `${stats.correct} đúng`;
    liveWrong.textContent = `${stats.wrong} sai`;
  }

  function selectOption(optIdx) {
    const idx = activeQuiz.currentIndex;
    if (typeof activeQuiz.answers[idx] === "number") return;

    activeQuiz.answers[idx] = optIdx;
    const q = activeQuiz.questions[idx];
    const picked = q.options[optIdx];

    // Track wrong question keys globally across all quizzes for the "Ôn lại các câu sai" feature
    const wrongKey = q.uniqueKey || `${q.sourceQuizId || activeQuiz.id}:${q.id}`;
    const wrongSet = new Set(store.wrongQuestionKeys || []);
    if (picked && picked.isCorrect) {
      wrongSet.delete(wrongKey);
    } else {
      wrongSet.add(wrongKey);
    }
    store.wrongQuestionKeys = Array.from(wrongSet);

    if (activeQuiz.id !== "quiz-wrong-bank" && activeQuiz.id !== "retry-session") {
      store.sessions[activeQuiz.id] = activeQuiz;
    }
    saveStore();
    renderQuestion();
  }

  function openSummary() {
    const stats = computeSessionStats(activeQuiz);
    const unanswered = stats.total - stats.answered;
    const pct = stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 0;

    progressFill.style.width = "100%";
    metricPercent.textContent = `${pct}%`;
    metricCorrect.textContent = String(stats.correct);
    metricWrong.textContent = String(stats.wrong);
    metricUnanswered.textContent = String(unanswered);

    if (pct >= 85) {
      summaryEmoji.textContent = "👑🌸";
      summaryTitle.textContent = "Xuất sắc quá đi mất!";
      summarySubtitle.textContent = "Bạn đã nắm rất chắc kiến thức SSB201 rồi đó, tiếp tục phát huy nha!";
    } else if (pct >= 60) {
      summaryEmoji.textContent = "🎀✨";
      summaryTitle.textContent = "Làm tốt lắm!";
      summarySubtitle.textContent = "Kết quả khá ổn rồi, hãy xem lại vài câu sai để đạt điểm tối đa nhé!";
    } else {
      summaryEmoji.textContent = "🍓💪";
      summaryTitle.textContent = "Cố lên nhé!";
      summarySubtitle.textContent = "Đừng lo, bạn có thể bấm nút bên dưới để ôn lại các câu sai và xem giải thích chi tiết!";
    }

    btnRetryWrong.classList.toggle("hidden", stats.wrong === 0);
    showView("summary");
  }

  function openNavModal() {
    navGrid.innerHTML = "";
    activeQuiz.questions.forEach((q, idx) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "nav-num";
      btn.textContent = String(idx + 1);

      if (idx === activeQuiz.currentIndex) {
        btn.classList.add("is-current");
      }

      const chosen = activeQuiz.answers[idx];
      if (typeof chosen === "number") {
        if (q.options[chosen] && q.options[chosen].isCorrect) {
          btn.classList.add("is-right");
        } else {
          btn.classList.add("is-wrong");
        }
      }

      btn.addEventListener("click", () => {
        activeQuiz.currentIndex = idx;
        closeNavModal();
        showView("quiz");
        renderQuestion();
      });

      navGrid.appendChild(btn);
    });

    navModal.classList.remove("hidden");
  }

  function closeNavModal() {
    navModal.classList.add("hidden");
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  // Event listeners
  btnBackHome.addEventListener("click", () => showView("home"));
  btnSummaryHome.addEventListener("click", () => showView("home"));

  btnToggleHint.addEventListener("click", () => {
    if (!activeQuiz) return;
    const idx = activeQuiz.currentIndex;
    activeQuiz.hintsShown[idx] = !activeQuiz.hintsShown[idx];
    if (activeQuiz.id !== "quiz-wrong-bank" && activeQuiz.id !== "retry-session") {
      store.sessions[activeQuiz.id] = activeQuiz;
      saveStore();
    }
    renderQuestion();
  });

  btnPrev.addEventListener("click", () => {
    if (!activeQuiz || activeQuiz.currentIndex <= 0) return;
    activeQuiz.currentIndex--;
    if (activeQuiz.id !== "quiz-wrong-bank" && activeQuiz.id !== "retry-session") {
      store.sessions[activeQuiz.id] = activeQuiz;
      saveStore();
    }
    renderQuestion();
  });

  btnNext.addEventListener("click", () => {
    if (!activeQuiz) return;
    if (activeQuiz.currentIndex < activeQuiz.questions.length - 1) {
      activeQuiz.currentIndex++;
      if (activeQuiz.id !== "quiz-wrong-bank" && activeQuiz.id !== "retry-session") {
        store.sessions[activeQuiz.id] = activeQuiz;
        saveStore();
      }
      renderQuestion();
    } else {
      openSummary();
    }
  });

  btnOpenNav.addEventListener("click", openNavModal);
  btnCloseNav.addEventListener("click", closeNavModal);
  navModal.addEventListener("click", (e) => {
    if (e.target === navModal) closeNavModal();
  });

  btnReviewAll.addEventListener("click", () => {
    if (!activeQuiz) return;
    activeQuiz.currentIndex = 0;
    showView("quiz");
    renderQuestion();
  });

  btnRestartQuiz.addEventListener("click", () => {
    if (!activeQuiz) return;
    const catalogMatch = QUIZ_CATALOG.find((c) => c.id === activeQuiz.id);
    if (catalogMatch) {
      delete store.sessions[catalogMatch.id];
      saveStore();
      startNewQuiz(catalogMatch);
    } else {
      // Restart current wrong-question session
      const raw = activeQuiz.questions
        .map((q) => {
          const srcId = q.sourceQuizId || activeQuiz.id;
          const orig = findOriginalQuestion(srcId, q.id);
          return orig ? { ...orig, sourceQuizId: srcId } : null;
        })
        .filter(Boolean);
      startNewQuiz({
        id: "retry-session",
        title: "Ôn lại câu hỏi",
        subtitle: `${raw.length} câu hỏi luyện tập`,
        questions: raw,
        isWrongReview: true
      });
    }
  });

  btnRetryWrong.addEventListener("click", () => {
    if (!activeQuiz) return;
    const wrongQuestions = activeQuiz.questions
      .filter((q, idx) => {
        const chosen = activeQuiz.answers[idx];
        return typeof chosen === "number" && (!q.options[chosen] || !q.options[chosen].isCorrect);
      })
      .map((q) => {
        const srcId = q.sourceQuizId || activeQuiz.id;
        const orig = findOriginalQuestion(srcId, q.id);
        return orig ? { ...orig, sourceQuizId: srcId } : null;
      })
      .filter(Boolean);

    if (wrongQuestions.length === 0) return;

    startNewQuiz({
      id: "retry-session",
      title: "Làm lại các câu sai",
      subtitle: `${wrongQuestions.length} câu cần ôn lại`,
      questions: wrongQuestions,
      isWrongReview: true
    });
  });

  // Keyboard shortcuts while taking quiz
  document.addEventListener("keydown", (e) => {
    if (!navModal.classList.contains("hidden")) {
      if (e.key === "Escape") closeNavModal();
      return;
    }
    if (quizView.classList.contains("hidden") || !activeQuiz) return;

    if (e.key === "ArrowLeft") {
      btnPrev.click();
    } else if (e.key === "ArrowRight") {
      btnNext.click();
    } else if (e.key.toLowerCase() === "h") {
      btnToggleHint.click();
    } else {
      const upper = e.key.toUpperCase();
      let optIdx = LETTERS.indexOf(upper);
      if (optIdx === -1 && /^[1-5]$/.test(e.key)) {
        optIdx = Number(e.key) - 1;
      }
      if (optIdx >= 0) {
        const q = activeQuiz.questions[activeQuiz.currentIndex];
        if (optIdx < q.options.length) {
          selectOption(optIdx);
        }
      }
    }
  });

  // Initial render
  showView("home");
})();
