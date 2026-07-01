
const CONFIG = {
  title: "Examen de Práctica, AZ-900",
  subtitle: "Microsoft Azure Fundamentals",
  // tagline: "Practica varias veces antes del examen real",
  author: "por Antonio Linares",
  note: "💡 Una vez hayas obtenido unas 5 veces sobre 80%, preséntate al examen."
};

const MAX_TIME = 60 * 60; // 60 minutos en segundos

const questions = shuffleArray(QUESTIONS).slice(0, 50);

const state = {
  current: 0,
  showEnglish: false,
  started: false,
  elapsed: 0,
  timer: null,
  answers: {},
  locked: {}
};

const startScreen = document.getElementById('startScreen');
const quizScreen = document.getElementById('quizScreen');
const summaryScreen = document.getElementById('summaryScreen');

const startQuizBtn = document.getElementById('startQuiz');
const restartQuizBtn = document.getElementById('restartQuiz');

const counter = document.getElementById('counter');
const answeredBadge = document.getElementById('answeredBadge');
const correctBadge = document.getElementById('correctBadge');
const timerBadge = document.getElementById('timerBadge');
const progressBar = document.getElementById('progressBar');
const categoryTag = document.getElementById('categoryTag');
const modeTag = document.getElementById('modeTag');
const questionText = document.getElementById('questionText');
const questionTextEn = document.getElementById('questionTextEn');
const optionsWrap = document.getElementById('optionsWrap');
const resultBox = document.getElementById('resultBox');

const confirmBtn = document.getElementById('confirmBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function shuffleArray(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

function applyConfig() {
  document.getElementById('quizTitle').textContent = CONFIG.title;
  document.getElementById('quizSubtitle').textContent = CONFIG.subtitle;
  document.getElementById('quizTagline').textContent = CONFIG.tagline;
  document.getElementById('quizAuthor').textContent = CONFIG.author;
  document.getElementById('quizNote').textContent = CONFIG.note;

  const categories = new Set(questions.map(q => q.category || "Microsoft Azure Fundamentals"));
  // document.getElementById('availableCount').textContent = `${questions.length} preguntas disponibles`;
  document.getElementById('statQuestions').textContent = questions.length;
  document.getElementById('statAvailable').textContent = `${questions.length} de ${QUESTIONS.length}`;
  document.getElementById('statCategories').textContent = categories.size;
}

function letters(i) {
  return "ABCDEFGHIJKLMNOPQRSTUVWXYZ"[i] || String(i + 1);
}

// function isCorrect(q, selected) {
//   if (q.type === "dropdown_code") {
//     if (!selected || typeof selected !== "object") return false;
//     return q.blanks.every(blank => selected[blank.id] === blank.correct);
//   }

//   const a = [...selected].sort((x,y) => x-y);
//   const b = [...q.correct].sort((x,y) => x-y);
//   return a.length === b.length && a.every((v, i) => v === b[i]);
// }

function isCorrect(q, selected) {

  if (q.type === "dropdown_code") {
    if (!selected || typeof selected !== "object") return false;

    return q.blanks.every(blank => {
      const userValue = String(selected[blank.id] || "").trim().toLowerCase();
      const correctValue = String(blank.correct || "").trim().toLowerCase();

      return userValue === correctValue;
    });
  }

  if (q.type === "match") {
    if (!selected || typeof selected !== "object") return false;

    return q.matches.every(
      m => selected[m.left] === m.correct
    );
  }

  if (q.type === "match_dropdown") {
  if (!selected || typeof selected !== "object") return false;

  return q.matches.every(match =>
    selected[match.left] === match.correct
  );
}

  const a = [...selected].sort((x, y) => x - y);
  const b = [...q.correct].sort((x, y) => x - y);

  return a.length === b.length &&
         a.every((v, i) => v === b[i]);
}

function getSelectedFromDOM() {
  return [...optionsWrap.querySelectorAll('input:checked')].map(i => Number(i.value)).sort((a,b) => a-b);
}

function answeredCount() {
  return questions.filter(q => {
    const ans = state.answers[q.id];

    if (q.type === "dropdown_code") {
      if (!ans || typeof ans !== "object") return false;

      return q.blanks.every(blank =>
        ans[blank.id] && ans[blank.id] !== ""
      );
    }

    if (q.type === "match" || q.type === "match_dropdown") {
      if (!ans || typeof ans !== "object") return false;

      return q.matches.every(match =>
        ans[match.left] && ans[match.left] !== ""
      );
    }

    return Array.isArray(ans) && ans.length > 0;
  }).length;
}

function correctCount() {
  return questions.filter(q => state.answers[q.id] && isCorrect(q, state.answers[q.id])).length;
}




function calculateScore() {
  let score = 0;
  let maxScore = 0;

  questions.forEach(q => {
    const ans = state.answers[q.id];

    if (!ans) return;

    const perSelection = q.points_per_selection === true;

    if (q.type === "single") {
      maxScore += 1;

      if (isCorrect(q, ans)) {
        score += 1;
      }
    }

    else if (q.type === "multiple") {
      if (perSelection) {
        maxScore += q.correct.length;

        q.correct.forEach(idx => {
          if (ans.includes(idx)) {
            score += 1;
          }
        });
      } else {
        maxScore += 1;

        const correctHits = q.correct.filter(idx => ans.includes(idx)).length;
        const wrongHits = ans.filter(idx => !q.correct.includes(idx)).length;

        const partialScore = Math.max(
          0,
          (correctHits - wrongHits) / q.correct.length
        );

        score += partialScore;
      }
    }

    else if (q.type === "dropdown_code") {
      if (perSelection) {
        maxScore += q.blanks.length;

        q.blanks.forEach(blank => {
          const userValue = String(ans[blank.id] || "").trim().toLowerCase();
          const correctValue = String(blank.correct || "").trim().toLowerCase();

          if (userValue === correctValue) {
            score += 1;
          }
        });
      } else {
        maxScore += 1;

        if (isCorrect(q, ans)) {
          score += 1;
        }
      }
    }

    else if (q.type === "match" || q.type === "match_dropdown") {
      if (perSelection) {
        maxScore += q.matches.length;

        q.matches.forEach(match => {
          const userValue = String(ans[match.left] || "").trim().toLowerCase();
          const correctValue = String(match.correct || "").trim().toLowerCase();

          if (userValue === correctValue) {
            score += 1;
          }
        });
      } else {
        maxScore += 1;

        if (isCorrect(q, ans)) {
          score += 1;
        }
      }
    }
  });

  const percent = maxScore > 0
    ? Math.round((score / maxScore) * 100)
    : 0;

  return {
    score: Number(score.toFixed(2)),
    maxScore,
    percent
  };
}





function fmtTime(sec) {
  const mm = String(Math.floor(sec / 60)).padStart(2, '0');
  const ss = String(sec % 60).padStart(2, '0');
  return `${mm}:${ss}`;
}

function updateTopStats() {
  counter.textContent = `${state.current + 1}/${questions.length}`;
  answeredBadge.textContent = `${answeredCount()} respondidas`;
  correctBadge.textContent = `${correctCount()} correctas`;
  timerBadge.textContent = fmtTime(state.elapsed);
  progressBar.style.width = `${((state.current + 1) / questions.length) * 100}%`;
}

function renderQuestion() {
  const q = questions[state.current];
  updateTopStats();

  const questionCard = document.getElementById('questionCard');

  questionCard.style.display = "block";

  categoryTag.textContent = q.category || "Microsoft Azure Fundamentals";

  modeTag.textContent = q.type === "multiple"
    ? "Varias respuestas correctas"
    : "Una respuesta correcta";

  questionText.innerHTML = `
    ${q.note_es ? `
      <div class="question-note">
        ${q.note_es}
      </div>
    ` : ""}

    <div class="question-main">
      ${q.question_es || ""}
    </div>
  `;

  questionTextEn.innerHTML = q.question_en || "";

  if (state.showEnglish) quizScreen.classList.add('show-en');
  else quizScreen.classList.remove('show-en');

  const selected = state.answers[q.id] || (
    q.type === "dropdown_code" || q.type === "match" || q.type === "match_dropdown" ? {} : []
  );

  const locked = !!state.locked[q.id];

  resultBox.className = "result";
  resultBox.innerHTML = "";

  if (q.type === "dropdown_code") {
    const tableHtml = q.table_es
      ? `
        <div class="question-table-wrap">
          <table class="question-table">
            <thead>
              <tr>
                ${q.table_es.headers.map(h => `<th>${h}</th>`).join("")}
              </tr>
            </thead>
            <tbody>
              ${q.table_es.rows.map(row => `
                <tr>
                  ${row.map(cell => `<td>${cell}</td>`).join("")}
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      `
      : "";

    const codeHtml = q.code_lines.map(line => {
      let rendered = line;

      q.blanks.forEach(blank => {
        const currentValue = selected[blank.id] || "";

        const selectHtml = `
          <select class="code-select-inline" id="select_${q.id}_${blank.id}" ${locked ? "disabled" : ""}>
            <option value="">Seleccionar una opción</option>
            ${blank.options.map(opt => `
              <option value="${opt.replace(/"/g, '&quot;')}" ${currentValue === opt ? "selected" : ""}>
                ${opt}
              </option>
            `).join("")}
          </select>
        `;

        rendered = rendered.replace(`___${blank.id}___`, selectHtml);
      });

      return `<div class="code-line inline-dropdown-line">${rendered}</div>`;
    }).join("");

    optionsWrap.innerHTML = `
      ${q.prompt_top_es ? `<div class="code-prompt">${q.prompt_top_es.replace(/\n/g, "<br>")}</div>` : ""}
      ${tableHtml}
      ${q.prompt_bottom_es ? `<div class="code-prompt">${q.prompt_bottom_es.replace(/\n/g, "<br>")}</div>` : ""}
      <div class="code-block">
        ${codeHtml}
      </div>
    `;

    if (locked) {
      const ok = isCorrect(q, selected);

      resultBox.className = `result show ${ok ? 'ok' : 'bad'}`;

      const correctAnswerText = q.blanks
        .map(blank => {
          const userValue = String(selected[blank.id] || "").trim().toLowerCase();
          const correctValue = String(blank.correct || "").trim().toLowerCase();

          const okItem = userValue === correctValue;
          const icon = okItem ? "✅" : "❌";
          const label = blank.label || blank.id;

          return `
            <div>
              ${icon} <strong>${label}:</strong> ${blank.correct}
            </div>
          `;
        })
        .join("");

      resultBox.innerHTML = `
        <div style="margin-top:8px;">${correctAnswerText}</div>
        <div style="margin-top:8px;">${q.explanation_es}</div>
      `;
    }

  } else if (q.type === "match" || q.type === "match_dropdown") {

    const usedValues = q.type === "match"
      ? Object.values(selected).filter(v => v !== "")
      : [];

    optionsWrap.innerHTML = `
      <div class="match-container">
        ${q.matches.map((m, idx) => {
          const currentValue = selected[m.left] || "";

          return `
            <div class="match-row">
              <div class="match-left">
                ${m.left}
              </div>

              <div class="yesno-options">
                ${m.options.map(opt => `
                  <label class="yesno-label">
                    <input
                      type="radio"
                      name="match_${q.id}_${idx}"
                      value="${opt}"
                      data-left="${m.left}"
                      ${currentValue === opt ? "checked" : ""}
                      ${locked ? "disabled" : ""}
                    >

                    <span class="yesno-circle"></span>
                    <span class="yesno-text">${opt}</span>
                  </label>
                `).join("")}
              </div>

            </div>
          `;
        }).join("")}
      </div>
    `;

    if (locked) {
      const ok = isCorrect(q, selected);

      resultBox.className = `result show ${ok ? 'ok' : 'bad'}`;

      const correctAnswers = q.matches.map(m => {
        const userValue = String(selected[m.left] || "").trim().toLowerCase();
        const correctValue = String(m.correct || "").trim().toLowerCase();

        const okItem = userValue === correctValue;
        const icon = okItem ? "✅" : "❌";

        const status = okItem
          ? "Correcta seleccionada"
          : "Incorrecta seleccionada";

        return `
          <div>
            ${icon} <strong>${m.left}</strong> 
            <span style="font-size:13px; opacity:.75;">${status}</span>
          </div>
        `;
      }).join("");

      resultBox.innerHTML = `
        <div>${correctAnswers}</div>
        <div style="margin-top:8px;">${q.explanation_es}</div>
      `;
    }

  } else {

    optionsWrap.innerHTML = q.options_es.map((opt, idx) => {
      const checked = selected.includes(idx);
      const correct = q.correct.includes(idx);

      let cls = "option";

      if (checked && !locked) cls += " selected";
      if (checked && locked) cls += " locked-selected";
      if (locked && correct) cls += " correct";
      if (locked && checked && !correct) cls += " wrong";

      return `
        <label class="${cls}">
          <input
            type="${q.type === 'multiple' ? 'checkbox' : 'radio'}"
            name="q${q.id}"
            value="${idx}"
            ${checked ? 'checked' : ''}
            ${locked ? 'disabled' : ''}
          >
          <span class="letter">${letters(idx)}</span>
          <span class="text">${opt}</span>
        </label>
      `;
    }).join('');

    if (locked) {
      const ok = isCorrect(q, selected);

      resultBox.className = `result show ${ok ? 'ok' : 'bad'}`;

      const answerReview = q.options_es
        .map((opt, idx) => {
          const isCorrectOption = q.correct.includes(idx);
          const wasSelected = selected.includes(idx);

          if (!isCorrectOption && !wasSelected) return "";

          let icon = "";
          let label = "";

          if (isCorrectOption && wasSelected) {
            icon = "✅";
            label = "Correcta seleccionada";
          } else if (isCorrectOption && !wasSelected) {
            icon = "✅";
            label = "Correcta no seleccionada";
          } else if (!isCorrectOption && wasSelected) {
            icon = "❌";
            label = "Incorrecta seleccionada";
          }

          return `
            <div>
              ${icon} <strong>${opt}</strong>
              <span style="font-size:13px; opacity:.75;">${label}</span>
            </div>
          `;
        })
        .join("");

      resultBox.innerHTML = `
        <div style="margin-top:8px;">
          ${answerReview}
        </div>

        <div style="margin-top:8px;">
          ${q.explanation_es}
        </div>
      `;
    }
  }

  prevBtn.disabled = state.current === 0;
  nextBtn.textContent = state.current === questions.length - 1 ? "Finalizar →" : "Siguiente →";

  if (locked) {
    confirmBtn.classList.add('hidden');
    nextBtn.classList.remove('hidden');
  } else {
    confirmBtn.classList.remove('hidden');
    nextBtn.classList.add('hidden');
  }
}

function saveCurrentSelection() {
  const q = questions[state.current];

  if (q.type === "dropdown_code") {
    const answer = {};

    q.blanks.forEach(blank => {
      const el = document.getElementById(`select_${q.id}_${blank.id}`);
      answer[blank.id] = el ? el.value : "";
    });

    state.answers[q.id] = answer;

  } else if (q.type === "match" || q.type === "match_dropdown") {
    const answer = {};

    q.matches.forEach((m, idx) => {
      const checked = optionsWrap.querySelector(
        `input[name="match_${q.id}_${idx}"]:checked`
      );

      answer[m.left] = checked ? checked.value : "";
    });

    state.answers[q.id] = answer;

  } else {
    state.answers[q.id] = getSelectedFromDOM();
  }

  updateTopStats();
}

startQuizBtn.addEventListener('click', () => {
  state.started = true;

  startScreen.classList.add('hidden');
  summaryScreen.classList.add('hidden');
  quizScreen.classList.remove('hidden');

  if (state.timer) clearInterval(state.timer);
  state.elapsed = MAX_TIME;

  state.timer = setInterval(() => {
    state.elapsed -= 1;

    updateTopStats();

    if (state.elapsed <= 0) {
      clearInterval(state.timer);
      finishExam(); // 👈 función nueva
    }
  }, 1000);

  renderQuestion();
});

function finishExam() {

  quizScreen.classList.add('hidden');
  summaryScreen.classList.remove('hidden');

  const result = calculateScore();

  const correctQuestions = correctCount();
  const wrongQuestions = questions.length - correctQuestions;
  const passed = result.percent >= 80;

  document.getElementById('sumPercent').textContent =
    `${result.percent}%`;

  document.getElementById('sumScore').textContent =
    `${correctQuestions}/${questions.length}`;

  document.getElementById('sumCorrectPoints').textContent =
    correctQuestions;

  document.getElementById('sumWrongPoints').textContent =
    wrongQuestions;

  document.getElementById('sumStatus').textContent =
  passed ? "✓" : "X";

  document.getElementById('sumStatusText').textContent =
    passed ? "Aprobado" : "Reprobado";

  if (passed) {
    document.getElementById('sumEmoji').textContent = "🎉";
    document.getElementById('sumMessage').textContent = "¡Felicitaciones!";
    document.getElementById('sumSubMessage').textContent =
      "Has aprobado el examen de práctica.";
  } else {
    document.getElementById('sumEmoji').textContent = "💪";
    document.getElementById('sumMessage').textContent = "A seguir practicando";
    document.getElementById('sumSubMessage').textContent =
      "No te rindas, la práctica hace al maestro.";
  }
}

confirmBtn.addEventListener('click', () => {
  const q = questions[state.current];
  if (state.locked[q.id]) return;

  saveCurrentSelection();
  const selected = state.answers[q.id] || (q.type === "dropdown_code" ? {} : []);

  if (q.type === "dropdown_code") {

    const completed = q.blanks.every(
      blank => selected[blank.id] &&
              selected[blank.id] !== ""
    );

    if (!completed) {
      resultBox.className = "result show bad";
      resultBox.innerHTML =
        "Selecciona una opción en cada espacio antes de confirmar.";
      return;
    }

  } else if (q.type === "match") {

    const completed = q.matches.every(
      m => selected[m.left] &&
          selected[m.left] !== ""
    );

    if (!completed) {
      resultBox.className = "result show bad";
      resultBox.innerHTML =
        "Completa todas las relaciones antes de confirmar.";
      return;
    }
  } else if (q.type === "match" || q.type === "match_dropdown") {
  const completed = q.matches.every(match =>
    selected[match.left] && selected[match.left] !== ""
  );

  if (!completed) {
    resultBox.className = "result show bad";
    resultBox.innerHTML = "Completa todas las respuestas antes de confirmar.";
    return;
  }
} else {
    if (selected.length === 0) {
      resultBox.className = "result show bad";
      resultBox.innerHTML = "Selecciona al menos una opción antes de confirmar.";
      return;
    }
  }

  state.locked[q.id] = true;
  renderQuestion();
});

// clearBtn.addEventListener('click', () => {
//   const q = questions[state.current];
//   if (state.locked[q.id]) return;
//   state.answers[q.id] = [];
//   renderQuestion();
// });

// toggleEnglishBtn.addEventListener('click', () => {
//   state.showEnglish = !state.showEnglish;
//   toggleEnglishBtn.textContent = state.showEnglish ? "Ocultar inglés" : "Mostrar inglés";
//   renderQuestion();
// });

optionsWrap.addEventListener('change', (e) => {
  const q = questions[state.current];
  if (state.locked[q.id]) return;

  if (q.type === "multiple") {
    const checked = [
      ...optionsWrap.querySelectorAll('input:checked')
    ];

    const maxSelections = q.correct.length;

    if (checked.length > maxSelections) {
      e.target.checked = false;
      return;
    }
  }

  saveCurrentSelection();

  if (
    q.type !== "dropdown_code" &&
    q.type !== "match"
  ) {
    renderQuestion();
  }
});

prevBtn.addEventListener('click', () => {
  if (state.current > 0) {
    saveCurrentSelection();
    state.current -= 1;
    renderQuestion();
  }
});

nextBtn.addEventListener('click', () => {
  saveCurrentSelection();
  if (state.current < questions.length - 1) {
    state.current += 1;
    renderQuestion();
  } else {
    if (state.timer) clearInterval(state.timer);
    finishExam();
  }
});

restartQuizBtn.addEventListener('click', () => {
  state.current = 0;
  state.showEnglish = false;
  state.started = false;
  state.elapsed = MAX_TIME;
  state.answers = {};
  state.locked = {};
  if (state.timer) clearInterval(state.timer);
  state.timer = null;
  // toggleEnglishBtn.textContent = "Mostrar inglés";
  summaryScreen.classList.add('hidden');
  quizScreen.classList.add('hidden');
  startScreen.classList.remove('hidden');
});

applyConfig();
