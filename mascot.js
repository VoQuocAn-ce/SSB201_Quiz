/**
 * Bé Thỏ Mochi - Linh vật cổ vũ học tập dễ thương cho SSB201 Quiz Studio 🌸
 * Đặt ở góc dưới bên phải giao diện với các biểu cảm sinh động, hạt hiệu ứng bay,
 * và lời nhắn động viên học tập cá nhân hóa.
 */
(() => {
  const STORAGE_KEY_MINIMIZED = "ssb201_mascot_minimized";

  // Danh mục lời thoại phong phú, dễ thương & tràn đầy năng lượng
  const QUOTES = {
    idle: [
      "Có công mài, có ngày nên kim🍓",
    ],
    correct: [
      "Tuyệt đỉnh! Chuẩn không cần chỉnh luôn nè! 🎉✨",
      "Woa siêu quá! Giữ vững phong độ này nha! 🍓💯",
      "Đúng rồi đó! Càng làm càng thấy tự tin hơn đúng không? 🌸",
      "10 điểm cho sự chuẩn xác này! Cố lên nhé! ╰(▔∀▔)╯ ⭐",
      "Quá xịn xò! Thêm một câu đúng vào bảng vàng! 👑",
      "Xuất sắc luôn! Cứ thế này thì 10 điểm trong tầm tay! 🎀✨"
    ],
    wrong: [
      "Đừng buồn nha, xem kỹ giải thích để biến nó thành điểm 10 nè! 🌸",
      "Sai câu này là bài học vàng cho kỳ thi thật đó! 🍓💪",
      "Không sao hết nè, đọc lại một lượt rồi tiếp tục nha! 🌷",
      "Hít một hơi thật sâu, câu tiếp theo nhất định sẽ đúng! 🧁",
      "Tớ tin bạn! Vấp một tí để bật nhảy cao hơn thôi mà! 🐾🌸"
    ],
    hint: [
      "Gợi ý đã mở! Chú ý các từ khóa then chốt nha! 💡✨",
      "Đọc kỹ gợi ý một xíu là thấy đáp án sáng tỏ liền! 🔍🌸",
      "Từ khóa quan trọng đang ở ngay đây nè! 💡🎀"
    ],
    start: [
      "Bài Quiz mới bắt đầu rồi! Chúc bạn làm bài thật mượt mà nha! 🌸✨",
      "Tập trung cao độ và rinh trọn điểm số nhé! Cố lên nào! 🍓💪",
      "Cùng chinh phục bài quiz này thật xuất sắc nhé! (ﾉ´ヮ)ﾉ*: ･ﾟ` 🎀"
    ],
    click: [
      "(≧◡≦) ♡",
      "Hân ơi cố lên! Một hai một hai! 🍓✨",
      "Đạt điểm cao rồi nhớ tự thưởng món ngon nha! 🧋🎀",
    ],
    summary_high: [
      "Woa xuất sắc quá! Đỉnh nóc kịch trần luôn! 👑🥳 Chúc mừng bạn nha!",
      "Điểm số tuyệt vời! Bạn đã làm chủ kiến thức SSB201 rồi đấy! 🌸✨"
    ],
    summary_mid: [
      "Làm tốt lắm nè! Luyện lại vài câu sai là tự tin đi thi 100% rồi! 🎀✨",
      "Kết quả rất hứa hẹn! Cùng tớ hoàn thiện những câu chưa chuẩn nhé! 🍓"
    ],
    summary_low: [
      "Cố lên nha! Bấm 'Làm lại các câu sai' để luyện thêm là quen ngay nè! 💪🌸",
      "Vạn sự khởi đầu nan, luyện tập thêm vài lần là đỉnh chóp ngay! 🌷"
    ]
  };

  const EMOJI_PARTICLES = ["🌸", "✨", "💖", "⭐", "🍓", "🎀", "🌷", "🧁"];

  // Elements
  let container, bubble, speechText, avatarWrap, figure, collapsedPill, particlesLayer;
  let btnRefresh, btnCloseBubble, btnMinimize;
  let idleTimer = null;
  let currentMoodTimeout = null;

  function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  function init() {
    container = document.getElementById("cuteMascotContainer");
    bubble = document.getElementById("mascotSpeechBubble");
    speechText = document.getElementById("mascotSpeechText");
    avatarWrap = document.getElementById("mascotAvatarWrap");
    figure = document.getElementById("mascotFigure");
    collapsedPill = document.getElementById("mascotCollapsedPill");
    particlesLayer = document.getElementById("mascotParticlesLayer");

    btnRefresh = document.getElementById("btnMascotRefresh");
    btnCloseBubble = document.getElementById("btnMascotCloseBubble");
    btnMinimize = document.getElementById("btnMascotMinimize");

    if (!container || !avatarWrap) return;

    // Check saved minimized state
    const isMinimized = localStorage.getItem(STORAGE_KEY_MINIMIZED) === "true";
    if (isMinimized) {
      applyMinimize(true);
    }

    // Bind event listeners
    avatarWrap.addEventListener("click", onMascotClick);
    btnRefresh?.addEventListener("click", (e) => {
      e.stopPropagation();
      say(getRandomItem(QUOTES.idle), "mascot-wiggle");
      spawnParticles(3);
    });

    btnCloseBubble?.addEventListener("click", (e) => {
      e.stopPropagation();
      hideBubble();
    });

    btnMinimize?.addEventListener("click", (e) => {
      e.stopPropagation();
      minimize();
    });

    collapsedPill?.addEventListener("click", () => {
      restore();
    });

    // Start idle cycle
    startIdleTimer();
  }

  function say(text, animationClass = null, duration = 6500) {
    if (!speechText || !bubble) return;

    // Show bubble
    bubble.classList.remove("hidden", "bubble-pop-out");
    bubble.classList.add("bubble-pop-in");

    speechText.innerHTML = text;

    // Trigger mascot animation if requested
    if (animationClass && figure) {
      figure.classList.remove("mascot-celebrate", "mascot-comfort", "mascot-wiggle");
      // Force DOM reflow to re-trigger CSS animation
      void figure.offsetWidth;
      figure.classList.add(animationClass);

      if (currentMoodTimeout) clearTimeout(currentMoodTimeout);
      currentMoodTimeout = setTimeout(() => {
        figure.classList.remove(animationClass);
      }, 1200);
    }

    // Reset idle timer
    resetIdleTimer();
  }

  function hideBubble() {
    if (!bubble) return;
    bubble.classList.remove("bubble-pop-in");
    bubble.classList.add("bubble-pop-out");
    setTimeout(() => {
      if (bubble.classList.contains("bubble-pop-out")) {
        bubble.classList.add("hidden");
      }
    }, 280);
  }

  function spawnParticles(count = 5) {
    if (!particlesLayer) return;

    for (let i = 0; i < count; i++) {
      const p = document.createElement("span");
      p.className = "mascot-particle";
      p.textContent = getRandomItem(EMOJI_PARTICLES);

      // Random angles and distances
      const angle = Math.random() * Math.PI * 2;
      const distance = 40 + Math.random() * 50;
      const tx = Math.cos(angle) * distance;
      const ty = -30 - Math.random() * 60; // Bias upwards

      p.style.setProperty("--tx", `${tx}px`);
      p.style.setProperty("--ty", `${ty}px`);
      p.style.left = "50%";
      p.style.top = "50%";

      particlesLayer.appendChild(p);
      setTimeout(() => {
        p.remove();
      }, 900);
    }
  }

  function onMascotClick(e) {
    // Avoid triggering if clicked on minimize button
    if (e.target.closest("#btnMascotMinimize")) return;

    spawnParticles(5);
    say(getRandomItem(QUOTES.click), "mascot-wiggle");
  }

  function minimize() {
    applyMinimize(true);
    localStorage.setItem(STORAGE_KEY_MINIMIZED, "true");
  }

  function restore() {
    applyMinimize(false);
    localStorage.setItem(STORAGE_KEY_MINIMIZED, "false");
    say(getRandomItem(QUOTES.idle), "mascot-wiggle");
    spawnParticles(4);
  }

  function applyMinimize(minimized) {
    if (minimized) {
      container?.classList.add("hidden");
      collapsedPill?.classList.remove("hidden");
    } else {
      container?.classList.remove("hidden");
      collapsedPill?.classList.add("hidden");
    }
  }

  function resetIdleTimer() {
    if (idleTimer) clearInterval(idleTimer);
    startIdleTimer();
  }

  function startIdleTimer() {
    idleTimer = setInterval(() => {
      // Don't auto-speak if container is hidden or minimized
      if (container?.classList.contains("hidden")) return;
      say(getRandomItem(QUOTES.idle));
    }, 24000);
  }

  // Public API for quiz integration
  window.CuteMascot = {
    init,
    say,
    reactCorrect() {
      spawnParticles(6);
      say(getRandomItem(QUOTES.correct), "mascot-celebrate");
    },
    reactWrong() {
      say(getRandomItem(QUOTES.wrong), "mascot-comfort");
    },
    reactHint() {
      say(getRandomItem(QUOTES.hint), "mascot-wiggle");
    },
    reactStart() {
      say(getRandomItem(QUOTES.start), "mascot-celebrate");
    },
    reactSummary(percent) {
      spawnParticles(8);
      if (percent >= 85) {
        say(getRandomItem(QUOTES.summary_high), "mascot-celebrate");
      } else if (percent >= 60) {
        say(getRandomItem(QUOTES.summary_mid), "mascot-celebrate");
      } else {
        say(getRandomItem(QUOTES.summary_low), "mascot-comfort");
      }
    },
    spawnParticles,
    minimize,
    restore
  };

  // Auto initialize on DOM ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
