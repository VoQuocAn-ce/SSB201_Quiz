(() => {
  const STORAGE_KEY = "ssb201_cute_pink_quiz_v1";
  const LETTERS = ["A", "B", "C", "D", "E"];

  // DOM references
  const homeView = document.getElementById("homeView");
  const quizView = document.getElementById("quizView");
  const summaryView = document.getElementById("summaryView");
  const studyView = document.getElementById("studyView");
  const quizGrid = document.getElementById("quizGrid");

  const headerTitle = document.getElementById("headerTitle");
  const headerSubtitle = document.getElementById("headerSubtitle");
  const quizTopActions = document.getElementById("quizTopActions");
  const progressTrack = document.getElementById("progressTrack");
  const progressFill = document.getElementById("progressFill");
  const navButtonText = document.getElementById("navButtonText");
  const btnStudyModeTop = document.getElementById("btnStudyModeTop");

  const toggleShuffleQuestions = document.getElementById("toggleShuffleQuestions");
  const toggleShuffleOptions = document.getElementById("toggleShuffleOptions");

  const qCounter = document.getElementById("qCounter");
  const qTopic = document.getElementById("qTopic");
  const btnToggleHint = document.getElementById("btnToggleHint");
  const btnPeekCurrentAnswer = document.getElementById("btnPeekCurrentAnswer");
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
  const btnStudyFromSummary = document.getElementById("btnStudyFromSummary");

  // Study Mode DOM references
  const studyQuizIcon = document.getElementById("studyQuizIcon");
  const studyQuizTitle = document.getElementById("studyQuizTitle");
  const studyQuizDesc = document.getElementById("studyQuizDesc");
  const btnStudyBackHome = document.getElementById("btnStudyBackHome");
  const btnStudyStartQuiz = document.getElementById("btnStudyStartQuiz");
  const btnStudyStartQuizBottom = document.getElementById("btnStudyStartQuizBottom");

  const studySearchInput = document.getElementById("studySearchInput");
  const btnClearStudySearch = document.getElementById("btnClearStudySearch");
  const btnResetStudySearch = document.getElementById("btnResetStudySearch");
  const toggleStudyOnlyCorrect = document.getElementById("toggleStudyOnlyCorrect");
  const toggleStudyCollapseHints = document.getElementById("toggleStudyCollapseHints");
  const studyMasteredText = document.getElementById("studyMasteredText");

  const studyJumpList = document.getElementById("studyJumpList");
  const studyQuestionsContainer = document.getElementById("studyQuestionsContainer");
  const studyEmptyState = document.getElementById("studyEmptyState");
  const btnStudyScrollTop = document.getElementById("btnStudyScrollTop");
  const btnFloatingTop = document.getElementById("btnFloatingTop");

  // Application state
  let store = loadStore();
  let activeQuiz = null; // { id, title, subtitle, questions: [...], currentIndex, answers: { [qIndex]: chosenOptIndex }, hintsShown: {} }
  let currentStudyQuiz = null;

  function loadStore() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (!Array.isArray(parsed.wrongQuestionKeys)) {
          const legacy = Array.isArray(parsed.wrongQuestionIds) ? parsed.wrongQuestionIds : [];
          parsed.wrongQuestionKeys = legacy.map((id) => `quiz1-full:${id}`);
        }
        if (!Array.isArray(parsed.masteredQuestionKeys)) {
          parsed.masteredQuestionKeys = [];
        }
        return parsed;
      }
    } catch (_) {
      // Ignore malformed storage
    }
    return { sessions: {}, wrongQuestionKeys: [], masteredQuestionKeys: [] };
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
    let items = rawQuestions.map((q, qIdx) => {
      const sourceQuizId = q.sourceQuizId || defaultQuizId;
      const qId = q.id !== undefined ? q.id : (qIdx + 1);
      const correctList = Array.isArray(q.correctIndices)
        ? q.correctIndices
        : (typeof q.correctAnswer === "number" ? [q.correctAnswer] : []);
      const indexedOptions = q.options.map((opt, idx) => ({
        ...opt,
        isCorrect: correctList.includes(idx)
      }));
      const finalOptions = shuffleOpt ? shuffleArray(indexedOptions) : indexedOptions;
      return {
        id: qId,
        sourceQuizId,
        uniqueKey: `${sourceQuizId}:${qId}`,
        topic: q.topic || "SSB201 Core Knowledge",
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
    if (studyView) studyView.classList.toggle("hidden", viewName !== "study");

    const inSession = viewName === "quiz" || viewName === "summary";
    const inStudy = viewName === "study";
    quizTopActions.classList.toggle("hidden", !inSession && !inStudy);
    progressTrack.classList.toggle("hidden", !inSession);

    if (inStudy) {
      btnOpenNav.classList.add("hidden");
      if (btnStudyModeTop) btnStudyModeTop.classList.add("hidden");
    } else {
      btnOpenNav.classList.remove("hidden");
      if (btnStudyModeTop) btnStudyModeTop.classList.toggle("hidden", viewName !== "quiz");
    }

    if (viewName === "home") {
      headerTitle.textContent = "SSB201 - Cute Quiz Studio";
      headerSubtitle.textContent = "Chọn bài Quiz để bắt đầu ôn tập cùng gợi ý & giải thích chi tiết";
      renderHome();
    } else if (viewName === "study") {
      window.scrollTo({ top: 0, behavior: "smooth" });
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

    const masteredKeys = new Set(store.masteredQuestionKeys || []);

    cards.forEach((item) => {
      const savedSession = store.sessions[item.id];
      const stats = savedSession ? computeSessionStats(savedSession) : null;
      const hasProgress = stats && stats.answered > 0;

      const totalQ = item.questions.length;
      let masteredInQuiz = 0;
      item.questions.forEach((q, idx) => {
        const qId = q.id !== undefined ? q.id : (idx + 1);
        if (masteredKeys.has(`${item.id}:${qId}`)) {
          masteredInQuiz++;
        }
      });

      const card = document.createElement("article");
      card.className = "quiz-card";

      const masteredBadgeHtml = masteredInQuiz > 0
        ? `<span class="stat-mastered" style="display:inline-flex; align-items:center; gap:4px; font-size:12px; font-weight:800; color:#065F46; background:#D1FAE5; border:1px solid #6EE7B7; border-radius:999px; padding:2px 8px;">🔖 Đã thuộc: ${masteredInQuiz}/${totalQ}</span>`
        : "";

      const statsHtml = hasProgress
        ? `
          <div class="quiz-stats-mini">
            <span>Đã làm: <strong>${stats.answered}/${stats.total}</strong></span>
            <span class="stat-ok">✓ ${stats.correct} đúng</span>
            <span class="stat-err">✗ ${stats.wrong} sai</span>
            ${masteredBadgeHtml}
          </div>
        `
        : `
          <div class="quiz-stats-mini">
            <span>✨ Có gợi ý &amp; giải thích tiếng Việt</span>
            ${masteredBadgeHtml}
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
            <button type="button" class="btn-card-study" data-action="study" title="Xem trước toàn bộ đáp án và lời giải của đề này để học">
              <span>📖 Xem đáp án</span>
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

      card.querySelector('[data-action="study"]').addEventListener("click", () => {
        openStudyView(item);
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
    if (window.CuteMascot) {
      window.CuteMascot.reactStart();
    }
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

    // Peek answer state
    if (btnPeekCurrentAnswer) {
      btnPeekCurrentAnswer.disabled = isAnswered;
      btnPeekCurrentAnswer.title = isAnswered
        ? "Câu hỏi này đã được trả lời"
        : "Hiện ngay đáp án chính xác và lời giải cho câu này";
    }

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

    if (window.CuteMascot && picked) {
      if (picked.isCorrect) {
        window.CuteMascot.reactCorrect();
      } else {
        window.CuteMascot.reactWrong();
      }
    }
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

    if (window.CuteMascot) {
      window.CuteMascot.reactSummary(pct);
    }
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

  // ==========================================
  // Study & Preview Answers Mode Logic
  // ==========================================
  function openStudyView(quizItem) {
    if (!quizItem) return;
    currentStudyQuiz = quizItem;

    headerTitle.textContent = "SSB201 - Chế Độ Học & Xem Trước Đáp Án";
    headerSubtitle.textContent = `Xem toàn bộ đáp án và lời giải chi tiết của ${quizItem.title}`;

    if (studyQuizIcon) studyQuizIcon.textContent = quizItem.icon || "🌸";
    if (studyQuizTitle) studyQuizTitle.textContent = `${quizItem.title}`;
    if (studyQuizDesc) {
      studyQuizDesc.textContent = quizItem.description || "Xem toàn bộ câu hỏi, đáp án chính xác và lời giải chi tiết từng phương án bằng tiếng Việt để ghi nhớ kiến thức trước khi làm bài thi.";
    }

    if (studySearchInput) studySearchInput.value = "";
    if (btnClearStudySearch) btnClearStudySearch.classList.add("hidden");
    if (toggleStudyOnlyCorrect) toggleStudyOnlyCorrect.checked = false;
    if (toggleStudyCollapseHints) toggleStudyCollapseHints.checked = false;

    showView("study");
    renderStudyView();

    if (window.CuteMascot && typeof window.CuteMascot.say === "function") {
      window.CuteMascot.say(`Bé Thỏ đang cùng bạn xem đáp án đề ${quizItem.title} nè! Chúc bạn học thuộc thật nhanh và nhớ thật lâu nhé! 🌸✨`);
    }
  }

  function renderStudyView() {
    if (!currentStudyQuiz || !Array.isArray(currentStudyQuiz.questions)) return;

    const questions = currentStudyQuiz.questions;
    const total = questions.length;
    const quizId = currentStudyQuiz.id;
    const masteredKeys = new Set(store.masteredQuestionKeys || []);

    // 1. Render Quick Jump Bar
    if (studyJumpList) {
      studyJumpList.innerHTML = "";
      questions.forEach((q, idx) => {
        const qId = q.id !== undefined ? q.id : (idx + 1);
        const uniqueKey = `${quizId}:${qId}`;
        const isMastered = masteredKeys.has(uniqueKey);

        const pill = document.createElement("button");
        pill.type = "button";
        pill.className = `study-jump-pill ${isMastered ? "is-mastered" : ""}`;
        pill.dataset.idx = String(idx);
        pill.textContent = String(idx + 1);
        pill.title = `Nhảy đến câu ${idx + 1}${isMastered ? " (Đã thuộc)" : ""}`;

        pill.addEventListener("click", () => {
          const target = document.getElementById(`study-q-${idx}`);
          if (target) {
            target.scrollIntoView({ behavior: "smooth", block: "center" });
            target.style.transition = "box-shadow 0.3s ease, border-color 0.3s ease";
            target.style.borderColor = "#F472B6";
            target.style.boxShadow = "0 0 0 3px #F472B6, 0 12px 32px rgba(216, 92, 132, 0.25)";
            setTimeout(() => {
              target.style.boxShadow = "";
              target.style.borderColor = "";
            }, 1400);
          }
        });

        studyJumpList.appendChild(pill);
      });
    }

    // 2. Render Questions List
    if (studyQuestionsContainer) {
      studyQuestionsContainer.innerHTML = "";

      questions.forEach((q, idx) => {
        const qId = q.id !== undefined ? q.id : (idx + 1);
        const uniqueKey = `${quizId}:${qId}`;
        const isMastered = masteredKeys.has(uniqueKey);

        const correctList = Array.isArray(q.correctIndices)
          ? q.correctIndices
          : (typeof q.correctAnswer === "number" ? [q.correctAnswer] : []);

        const card = document.createElement("article");
        card.className = `study-q-card ${isMastered ? "is-mastered" : ""}`;
        card.id = `study-q-${idx}`;
        card.dataset.idx = String(idx);
        card.dataset.topic = (q.topic || "").toLowerCase();
        card.dataset.question = (q.question || "").toLowerCase();

        // Card Header
        const headerDiv = document.createElement("div");
        headerDiv.className = "study-q-header";
        headerDiv.innerHTML = `
          <div class="study-q-title-wrap">
            <span class="study-q-number">CÂU ${idx + 1} / ${total}</span>
            <span class="topic-pill">🌸 ${escapeHtml(q.topic || "SSB201")}</span>
            <span class="badge-mastered ${isMastered ? "" : "hidden"}">✓ Đã thuộc</span>
          </div>
          <button type="button" class="btn-master-toggle ${isMastered ? "active" : ""}" title="Đánh dấu đã thuộc câu này">
            <span>${isMastered ? "✓ Đã thuộc" : "○ Đánh dấu đã thuộc"}</span>
          </button>
        `;

        // Mastered Toggle Listener
        const toggleBtn = headerDiv.querySelector(".btn-master-toggle");
        const masteredBadge = headerDiv.querySelector(".badge-mastered");
        toggleBtn.addEventListener("click", () => {
          const currentSet = new Set(store.masteredQuestionKeys || []);
          let nowMastered = false;
          if (currentSet.has(uniqueKey)) {
            currentSet.delete(uniqueKey);
            nowMastered = false;
          } else {
            currentSet.add(uniqueKey);
            nowMastered = true;
          }
          store.masteredQuestionKeys = Array.from(currentSet);
          saveStore();

          // Update UI
          card.classList.toggle("is-mastered", nowMastered);
          toggleBtn.classList.toggle("active", nowMastered);
          toggleBtn.querySelector("span").textContent = nowMastered ? "✓ Đã thuộc" : "○ Đánh dấu đã thuộc";
          masteredBadge.classList.toggle("hidden", !nowMastered);

          // Update Jump Pill
          const pill = studyJumpList.querySelector(`[data-idx="${idx}"]`);
          if (pill) {
            pill.classList.toggle("is-mastered", nowMastered);
            pill.title = `Nhảy đến câu ${idx + 1}${nowMastered ? " (Đã thuộc)" : ""}`;
          }

          // Update Stats
          updateStudyMasteredCount();

          if (nowMastered && window.CuteMascot && typeof window.CuteMascot.say === "function") {
            window.CuteMascot.say(`Đã thuộc câu ${idx + 1} rồi nè! Cố lên bạn ơi! 🌸✨`);
          }
        });

        card.appendChild(headerDiv);

        // Question Text
        const qText = document.createElement("div");
        qText.className = "study-q-text";
        qText.innerHTML = escapeHtml(q.question).replace(/\n/g, "<br />");
        card.appendChild(qText);

        // Hint Box
        if (q.hint) {
          const hintEl = document.createElement("div");
          hintEl.className = "study-hint-box";
          hintEl.innerHTML = `
            <span class="study-hint-icon">💡</span>
            <div><strong>Gợi ý:</strong> ${escapeHtml(q.hint)}</div>
          `;
          card.appendChild(hintEl);
        }

        // Options List
        const optContainer = document.createElement("div");
        optContainer.className = "study-options-list";

        let optionsSearchText = "";

        q.options.forEach((opt, optIdx) => {
          const isCorrect = correctList.includes(optIdx);
          const letter = LETTERS[optIdx] || String(optIdx + 1);
          optionsSearchText += " " + (opt.text || "") + " " + (opt.explanation || "");

          const optDiv = document.createElement("div");
          optDiv.className = `study-opt-item ${isCorrect ? "is-correct" : "is-wrong"}`;

          optDiv.innerHTML = `
            <div class="study-opt-header">
              <div class="study-opt-title">
                <span class="option-letter ${isCorrect ? "correct" : "wrong"}">${letter}</span>
                <span class="study-opt-text">${escapeHtml(opt.text)}</span>
              </div>
              ${
                isCorrect
                  ? `<span class="status-badge badge-correct">✓ ĐÁP ÁN ĐÚNG</span>`
                  : `<span class="status-badge badge-wrong">✕ Lựa chọn sai</span>`
              }
            </div>
            <div class="study-opt-explanation ${isCorrect ? "correct-exp" : "wrong-exp"}">
              ${
                isCorrect
                  ? `<strong>💡 Giải thích vì sao đúng:</strong> `
                  : `<strong>Vì sao sai:</strong> `
              }${escapeHtml(opt.explanation)}
            </div>
          `;

          optContainer.appendChild(optDiv);
        });

        card.dataset.options = optionsSearchText.toLowerCase();
        card.appendChild(optContainer);
        studyQuestionsContainer.appendChild(card);
      });
    }

    updateStudyMasteredCount();
    filterStudyQuestions();
  }

  function updateStudyMasteredCount() {
    if (!currentStudyQuiz || !Array.isArray(currentStudyQuiz.questions)) return;
    const questions = currentStudyQuiz.questions;
    const total = questions.length;
    const quizId = currentStudyQuiz.id;
    const masteredKeys = new Set(store.masteredQuestionKeys || []);

    let masteredCount = 0;
    questions.forEach((q, idx) => {
      const qId = q.id !== undefined ? q.id : (idx + 1);
      if (masteredKeys.has(`${quizId}:${qId}`)) {
        masteredCount++;
      }
    });

    const pct = total > 0 ? Math.round((masteredCount / total) * 100) : 0;
    if (studyMasteredText) {
      studyMasteredText.innerHTML = `Đã thuộc: <strong>${masteredCount}</strong> / ${total} câu (${pct}%)`;
    }
  }

  function filterStudyQuestions() {
    if (!studyQuestionsContainer) return;
    const query = (studySearchInput ? studySearchInput.value : "").trim().toLowerCase();
    const onlyCorrect = toggleStudyOnlyCorrect ? toggleStudyOnlyCorrect.checked : false;
    const collapseHints = toggleStudyCollapseHints ? toggleStudyCollapseHints.checked : false;

    if (btnClearStudySearch) {
      btnClearStudySearch.classList.toggle("hidden", query.length === 0);
    }

    const cards = studyQuestionsContainer.querySelectorAll(".study-q-card");
    let visibleCount = 0;

    cards.forEach((card) => {
      const qText = card.dataset.question || "";
      const optText = card.dataset.options || "";
      const topicText = card.dataset.topic || "";

      const matches = !query || qText.includes(query) || optText.includes(query) || topicText.includes(query);
      card.classList.toggle("is-hidden", !matches);
      if (matches) visibleCount++;

      // Options list only-correct toggle
      const optList = card.querySelector(".study-options-list");
      if (optList) {
        optList.classList.toggle("only-correct", onlyCorrect);
      }

      // Hints toggle
      const hintBox = card.querySelector(".study-hint-box");
      if (hintBox) {
        hintBox.classList.toggle("hidden", collapseHints);
      }
    });

    if (studyEmptyState) {
      studyEmptyState.classList.toggle("hidden", visibleCount > 0);
    }
  }

  function startQuizFromStudy() {
    if (!currentStudyQuiz) return;
    const item = currentStudyQuiz;
    const saved = store.sessions[item.id];
    const stats = saved ? computeSessionStats(saved) : null;
    if (stats && stats.answered > 0 && !item.isWrongReview) {
      resumeQuiz(item.id);
    } else {
      startNewQuiz(item);
    }
  }

  // Event listeners
  btnBackHome.addEventListener("click", () => showView("home"));
  btnSummaryHome.addEventListener("click", () => showView("home"));

  if (studySearchInput) studySearchInput.addEventListener("input", filterStudyQuestions);
  if (btnClearStudySearch) {
    btnClearStudySearch.addEventListener("click", () => {
      studySearchInput.value = "";
      filterStudyQuestions();
      studySearchInput.focus();
    });
  }
  if (btnResetStudySearch) {
    btnResetStudySearch.addEventListener("click", () => {
      if (studySearchInput) studySearchInput.value = "";
      if (toggleStudyOnlyCorrect) toggleStudyOnlyCorrect.checked = false;
      if (toggleStudyCollapseHints) toggleStudyCollapseHints.checked = false;
      filterStudyQuestions();
    });
  }
  if (toggleStudyOnlyCorrect) toggleStudyOnlyCorrect.addEventListener("change", filterStudyQuestions);
  if (toggleStudyCollapseHints) toggleStudyCollapseHints.addEventListener("change", filterStudyQuestions);

  if (btnStudyBackHome) btnStudyBackHome.addEventListener("click", () => showView("home"));
  if (btnStudyScrollTop) {
    btnStudyScrollTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  if (btnFloatingTop) {
    window.addEventListener(
      "scroll",
      () => {
        const scrolled = window.scrollY > 300;
        btnFloatingTop.classList.toggle("hidden", !scrolled);
      },
      { passive: true }
    );
    btnFloatingTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
  if (btnStudyStartQuiz) btnStudyStartQuiz.addEventListener("click", startQuizFromStudy);
  if (btnStudyStartQuizBottom) btnStudyStartQuizBottom.addEventListener("click", startQuizFromStudy);

  if (btnStudyModeTop) {
    btnStudyModeTop.addEventListener("click", () => {
      if (!activeQuiz) return;
      const catalogMatch = QUIZ_CATALOG.find((c) => c.id === activeQuiz.id) || {
        id: activeQuiz.id,
        title: activeQuiz.title,
        description: activeQuiz.subtitle,
        icon: "🌸",
        questions: activeQuiz.questions
      };
      openStudyView(catalogMatch);
    });
  }

  if (btnPeekCurrentAnswer) {
    btnPeekCurrentAnswer.addEventListener("click", () => {
      if (!activeQuiz) return;
      const idx = activeQuiz.currentIndex;
      if (typeof activeQuiz.answers[idx] === "number") return;
      const q = activeQuiz.questions[idx];
      const correctOptIdx = q.options.findIndex((o) => o.isCorrect);
      if (correctOptIdx >= 0) {
        selectOption(correctOptIdx);
        if (window.CuteMascot && typeof window.CuteMascot.say === "function") {
          window.CuteMascot.say("Đây là đáp án chính xác và lời giải chi tiết nè! Bạn ghi nhớ để lần sau làm đúng nhé! 🌸✨");
        }
      }
    });
  }

  if (btnStudyFromSummary) {
    btnStudyFromSummary.addEventListener("click", () => {
      if (!activeQuiz) return;
      const catalogMatch = QUIZ_CATALOG.find((c) => c.id === activeQuiz.id) || {
        id: activeQuiz.id,
        title: activeQuiz.title,
        description: activeQuiz.subtitle,
        icon: "🌸",
        questions: activeQuiz.questions
      };
      openStudyView(catalogMatch);
    });
  }

  btnToggleHint.addEventListener("click", () => {
    if (!activeQuiz) return;
    const idx = activeQuiz.currentIndex;
    activeQuiz.hintsShown[idx] = !activeQuiz.hintsShown[idx];
    if (activeQuiz.id !== "quiz-wrong-bank" && activeQuiz.id !== "retry-session") {
      store.sessions[activeQuiz.id] = activeQuiz;
      saveStore();
    }
    renderQuestion();

    if (activeQuiz.hintsShown[idx] && window.CuteMascot) {
      window.CuteMascot.reactHint();
    }
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

  // Cute Marquee Pause/Resume Toggle
  const cuteMarqueeBar = document.getElementById("cuteMarqueeBar");
  const btnToggleMarquee = document.getElementById("btnToggleMarquee");
  const marqueeToggleIcon = document.getElementById("marqueeToggleIcon");

  if (btnToggleMarquee && cuteMarqueeBar && marqueeToggleIcon) {
    btnToggleMarquee.addEventListener("click", () => {
      const isPaused = cuteMarqueeBar.classList.toggle("is-paused");
      marqueeToggleIcon.textContent = isPaused ? "▶️" : "⏸️";
      btnToggleMarquee.setAttribute(
        "title",
        isPaused ? "Chạy tiếp dòng chữ" : "Tạm dừng dòng chữ"
      );
    });
  }

  // Initial render
  showView("home");
})();
