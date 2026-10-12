/* =========================================================
   QUIZMASTER
   ADVANCED VANILLA JAVASCRIPT
========================================================= */

"use strict";

/* =========================================================
   QUESTION DATABASE
========================================================= */

const questions = [

    // ================= SCIENCE =================

    {
        category: "science",
        difficulty: "easy",
        question: "Cili planet njihet si Planeti i Kuq?",
        answers: [
            "Venusi",
            "Marsi",
            "Jupiteri",
            "Merkuri"
        ],
        correct: 1
    },

    {
        category: "science",
        difficulty: "medium",
        question: "Cili është elementi kimik me simbolin O?",
        answers: [
            "Ari",
            "Oksigjeni",
            "Ozoni",
            "Osmiumi"
        ],
        correct: 1
    },

    {
        category: "science",
        difficulty: "hard",
        question: "Cila grimcë ka ngarkesë elektrike negative?",
        answers: [
            "Protoni",
            "Neutroni",
            "Elektroni",
            "Fotoni"
        ],
        correct: 2
    },

    {
        category: "science",
        difficulty: "medium",
        question: "Sa kocka ka zakonisht skeleti i një të rrituri?",
        answers: [
            "106",
            "206",
            "306",
            "406"
        ],
        correct: 1
    },

    // ================= TECHNOLOGY =================

    {
        category: "technology",
        difficulty: "easy",
        question: "Çfarë do të thotë HTML?",
        answers: [
            "HyperText Markup Language",
            "HighText Machine Language",
            "HyperTool Multi Language",
            "HomeText Markup Language"
        ],
        correct: 0
    },

    {
        category: "technology",
        difficulty: "medium",
        question: "Cila gjuhë përdoret kryesisht për interaktivitet në web?",
        answers: [
            "HTML",
            "CSS",
            "JavaScript",
            "SQL"
        ],
        correct: 2
    },

    {
        category: "technology",
        difficulty: "medium",
        question: "Çfarë përdoret për të ruajtur të dhëna në browser në mënyrë persistente?",
        answers: [
            "localStorage",
            "console.log",
            "setTimeout",
            "querySelector"
        ],
        correct: 0
    },

    {
        category: "technology",
        difficulty: "hard",
        question: "Cili koncept JavaScript ekzekuton funksionin pas përfundimit të një Promise?",
        answers: [
            "finally",
            "then",
            "loop",
            "render"
        ],
        correct: 1
    },

    // ================= HISTORY =================

    {
        category: "history",
        difficulty: "easy",
        question: "Në cilin vit përfundoi Lufta e Dytë Botërore?",
        answers: [
            "1940",
            "1943",
            "1945",
            "1950"
        ],
        correct: 2
    },

    {
        category: "history",
        difficulty: "medium",
        question: "Cila qytetërim ndërtoi piramidat e Gizës?",
        answers: [
            "Romakët",
            "Egjiptianët",
            "Vikingët",
            "Persianët"
        ],
        correct: 1
    },

    {
        category: "history",
        difficulty: "hard",
        question: "Cili perandor ishte i lidhur me themelimin e Kostandinopojës si kryeqytet?",
        answers: [
            "Augusti",
            "Konstandini i Madh",
            "Neroni",
            "Trajani"
        ],
        correct: 1
    },

    // ================= GEOGRAPHY =================

    {
        category: "geography",
        difficulty: "easy",
        question: "Cili është oqeani më i madh në Tokë?",
        answers: [
            "Atlantiku",
            "Indian",
            "Arktiku",
            "Paqësori"
        ],
        correct: 3
    },

    {
        category: "geography",
        difficulty: "medium",
        question: "Cili është kryeqyteti i Japonisë?",
        answers: [
            "Osaka",
            "Kyoto",
            "Tokio",
            "Hiroshima"
        ],
        correct: 2
    },

    {
        category: "geography",
        difficulty: "hard",
        question: "Cili është mali më i lartë në botë mbi nivelin e detit?",
        answers: [
            "K2",
            "Everest",
            "Kilimanjaro",
            "Mont Blanc"
        ],
        correct: 1
    },

    // ================= SPORTS =================

    {
        category: "sports",
        difficulty: "easy",
        question: "Sa lojtarë ka një ekip futbolli në fushë?",
        answers: [
            "9",
            "10",
            "11",
            "12"
        ],
        correct: 2
    },

    {
        category: "sports",
        difficulty: "medium",
        question: "Sa pikë vlen një gjuajtje normale në basketboll nga brenda vijës së trepikëshit?",
        answers: [
            "1",
            "2",
            "3",
            "4"
        ],
        correct: 1
    },

    {
        category: "sports",
        difficulty: "hard",
        question: "Në cilin sport përdoret termi 'birdie'?",
        answers: [
            "Tenis",
            "Golf",
            "Hokej",
            "Volejboll"
        ],
        correct: 1
    }
];

/* =========================================================
   DOM ELEMENTS
========================================================= */

const $ = selector => document.querySelector(selector);

const startScreen = $("#startScreen");
const quizScreen = $("#quizScreen");
const resultScreen = $("#resultScreen");

const startBtn = $("#startBtn");
const restartBtn = $("#restartBtn");
const homeBtn = $("#homeBtn");

const categorySelect = $("#category");
const difficultySelect = $("#difficulty");
const questionCountSelect = $("#questionCount");
const timeLimitSelect = $("#timeLimit");

const questionNumber = $("#questionNumber");
const questionText = $("#questionText");
const answersContainer = $("#answers");

const scoreElement = $("#score");
const streakElement = $("#streak");

const progressBar = $("#progressBar");

const categoryBadge = $("#categoryBadge");
const difficultyBadge = $("#difficultyBadge");

const timeLeftElement = $("#timeLeft");
const timerElement = $("#timer");

const nextBtn = $("#nextBtn");

const feedback = $("#feedback");

const finalScore = $("#finalScore");
const correctAnswers = $("#correctAnswers");
const wrongAnswers = $("#wrongAnswers");
const accuracy = $("#accuracy");
const finalStreak = $("#finalStreak");

const resultTitle = $("#resultTitle");
const resultMessage = $("#resultMessage");
const resultIcon = $("#resultIcon");

const newRecord = $("#newRecord");

const themeBtn = $("#themeBtn");
const soundBtn = $("#soundBtn");

const toast = $("#toast");

const bestScoreElement = $("#bestScore");
const bestStreakElement = $("#bestStreak");
const gamesPlayedElement = $("#gamesPlayed");

/* =========================================================
   GAME STATE
========================================================= */

const state = {

    questions: [],

    currentIndex: 0,

    score: 0,

    streak: 0,

    bestStreak: 0,

    correct: 0,

    wrong: 0,

    timeLeft: 20,

    timer: null,

    answered: false,

    soundEnabled: true

};

/* =========================================================
   LOCAL STORAGE
========================================================= */

const storage = {

    get(key, defaultValue = 0) {

        const value = localStorage.getItem(key);

        return value === null
            ? defaultValue
            : JSON.parse(value);
    },

    set(key, value) {

        localStorage.setItem(
            key,
            JSON.stringify(value)
        );
    }

};

/* =========================================================
   INITIALIZATION
========================================================= */

function init() {

    loadStatistics();

    loadTheme();

    soundBtn.textContent =
        state.soundEnabled ? "🔊" : "🔇";

}

init();

/* =========================================================
   START QUIZ
========================================================= */

startBtn.addEventListener("click", startQuiz);

function startQuiz() {

    const category = categorySelect.value;
    const difficulty = difficultySelect.value;

    let filteredQuestions = [...questions];

    /* Filter category */

    if (category !== "all") {

        filteredQuestions =
            filteredQuestions.filter(
                q => q.category === category
            );

    }

    /* Filter difficulty */

    if (difficulty !== "all") {

        filteredQuestions =
            filteredQuestions.filter(
                q => q.difficulty === difficulty
            );

    }

    /* Check */

    if (!filteredQuestions.length) {

        showToast(
            "Nuk u gjetën pyetje për këtë kombinim."
        );

        return;

    }

    /* Shuffle */

    filteredQuestions =
        shuffleArray(filteredQuestions);

    const count =
        Number(questionCountSelect.value);

    state.questions =
        filteredQuestions.slice(
            0,
            Math.min(count, filteredQuestions.length)
        );

    /* Reset state */

    state.currentIndex = 0;
    state.score = 0;
    state.streak = 0;
    state.bestStreak = 0;
    state.correct = 0;
    state.wrong = 0;
    state.answered = false;

    state.timeLeft =
        Number(timeLimitSelect.value);

    scoreElement.textContent = "0";
    streakElement.textContent = "0";

    showScreen("quiz");

    loadQuestion();

}

/* =========================================================
   LOAD QUESTION
========================================================= */

function loadQuestion() {

    clearInterval(state.timer);

    state.answered = false;

    nextBtn.disabled = true;

    feedback.className = "feedback";
    feedback.textContent = "";

    const question =
        state.questions[state.currentIndex];

    const total =
        state.questions.length;

    /* Question number */

    questionNumber.textContent =
        `Pyetja ${state.currentIndex + 1} / ${total}`;

    /* Question */

    questionText.textContent =
        question.question;

    /* Category */

    categoryBadge.textContent =
        getCategoryName(question.category);

    /* Difficulty */

    difficultyBadge.textContent =
        question.difficulty.toUpperCase();

    difficultyBadge.className =
        `difficulty-badge ${question.difficulty}`;

    /* Points */

    const points =
        getBasePoints(question.difficulty);

    $("#pointsLabel").textContent =
        `+${points} pikë`;

    /* Progress */

    const progress =
        (state.currentIndex / total) * 100;

    progressBar.style.width =
        `${progress}%`;

    /* Answers */

    renderAnswers(question);

    /* Timer */

    state.timeLeft =
        Number(timeLimitSelect.value);

    updateTimer();

    startTimer();

}

/* =========================================================
   RENDER ANSWERS
========================================================= */

function renderAnswers(question) {

    answersContainer.innerHTML = "";

    const letters = ["A", "B", "C", "D"];

    question.answers.forEach(
        (answer, index) => {

            const button =
                document.createElement("button");

            button.className = "answer";

            button.dataset.index = index;

            button.innerHTML = `
                <span class="answer-letter">
                    ${letters[index]}
                </span>

                <span class="answer-text">
                    ${escapeHTML(answer)}
                </span>
            `;

            button.addEventListener(
                "click",
                () => selectAnswer(index)
            );

            answersContainer.appendChild(button);

        }
    );

}

/* =========================================================
   SELECT ANSWER
========================================================= */

function selectAnswer(selectedIndex) {

    if (state.answered) return;

    state.answered = true;

    clearInterval(state.timer);

    const question =
        state.questions[state.currentIndex];

    const answerButtons =
        document.querySelectorAll(".answer");

    const isCorrect =
        selectedIndex === question.correct;

    answerButtons.forEach(
        (button, index) => {

            button.classList.add("disabled");

            if (index === question.correct) {

                button.classList.add("correct");

            }

            if (
                index === selectedIndex &&
                !isCorrect
            ) {

                button.classList.add("wrong");

            }

        }
    );

    if (isCorrect) {

        handleCorrect(question);

    } else {

        handleWrong();

    }

    nextBtn.disabled = false;

}

/* =========================================================
   CORRECT ANSWER
========================================================= */

function handleCorrect(question) {

    state.correct++;

    state.streak++;

    state.bestStreak =
        Math.max(
            state.bestStreak,
            state.streak
        );

    const base =
        getBasePoints(question.difficulty);

    const timeBonus =
        Math.round(state.timeLeft * 5);

    const streakBonus =
        state.streak > 1
            ? (state.streak - 1) * 25
            : 0;

    const totalPoints =
        base + timeBonus + streakBonus;

    state.score += totalPoints;

    scoreElement.textContent =
        state.score;

    streakElement.textContent =
        state.streak;

    feedback.className =
        "feedback correct";

    feedback.innerHTML =
        `✓ Saktë! +${totalPoints} pikë`;

    playSound("correct");

}    

/* =========================================================
   WRONG ANSWER
========================================================= */

function handleWrong() {

    state.wrong++;

    state.streak = 0;

    streakElement.textContent = "0";

    feedback.className =
        "feedback wrong";

    feedback.innerHTML =
        "✕ Jo saktë. Përgjigjja e saktë është e shënuar me të gjelbër.";

    playSound("wrong");

}

/* =========================================================
   TIMER
========================================================= */

function startTimer() {

    updateTimer();

    state.timer =
        setInterval(() => {

            state.timeLeft--;

            updateTimer();

            if (state.timeLeft <= 0) {

                clearInterval(state.timer);

                timeOut();

            }

        }, 1000);

}

function updateTimer() {

    timeLeftElement.textContent =
        state.timeLeft;

    if (state.timeLeft <= 5) {

        timerElement.classList.add("warning");

    } else {

        timerElement.classList.remove("warning");

    }

}

function timeOut() {

    if (state.answered) return;

    state.answered = true;

    state.wrong++;

    state.streak = 0;

    streakElement.textContent = "0";

    const question =
        state.questions[state.currentIndex];

    const answerButtons =
        document.querySelectorAll(".answer");

    answerButtons.forEach(
        (button, index) => {

            button.classList.add("disabled");

            if (index === question.correct) {

                button.classList.add("correct");

            }

        }
    );

    feedback.className =
        "feedback wrong";

    feedback.textContent =
        "⏰ Koha mbaroi!";

    nextBtn.disabled = false;

    playSound("wrong");

}

/* =========================================================
   NEXT QUESTION
========================================================= */

nextBtn.addEventListener(
    "click",
    nextQuestion
);

function nextQuestion() {

    if (!state.answered) return;

    state.currentIndex++;

    if (
        state.currentIndex >=
        state.questions.length
    ) {

        finishQuiz();

        return;

    }

    loadQuestion();

}

/* =========================================================
   FINISH QUIZ
========================================================= */

function finishQuiz() {

    clearInterval(state.timer);

    progressBar.style.width = "100%";

    saveStatistics();

    const total =
        state.questions.length;

    const accuracyValue =
        Math.round(
            (state.correct / total) * 100
        );

    finalScore.textContent =
        state.score;

    correctAnswers.textContent =
        state.correct;

    wrongAnswers.textContent =
        state.wrong;

    accuracy.textContent =
        `${accuracyValue}%`;

    finalStreak.textContent =
        state.bestStreak;

    updateResultMessage(accuracyValue);

    showScreen("result");

}

/* =========================================================
   RESULT MESSAGE
========================================================= */

function updateResultMessage(percent) {

    if (percent >= 90) {

        resultIcon.textContent = "🏆";

        resultTitle.textContent =
            "Fantastike!";

        resultMessage.textContent =
            "Performancë e jashtëzakonshme! Je një Quiz Master.";

    } else if (percent >= 75) {

        resultIcon.textContent = "🔥";

        resultTitle.textContent =
            "Shumë mirë!";

        resultMessage.textContent =
            "Ke treguar njohuri shumë të mira.";

    } else if (percent >= 50) {

        resultIcon.textContent = "👏";

        resultTitle.textContent =
            "Mirë!";

        resultMessage.textContent =
            "Je në rrugën e duhur. Vazhdo të praktikosh.";

    } else {

        resultIcon.textContent = "💪";

        resultTitle.textContent =
            "Mos u dorëzo!";

        resultMessage.textContent =
            "Provo përsëri dhe përpiqu të thyesh rekordin.";

    }

}

/* =========================================================
   RESTART
========================================================= */

restartBtn.addEventListener(
    "click",
    startQuiz
);

homeBtn.addEventListener(
    "click",
    () => {

        clearInterval(state.timer);

        loadStatistics();

        showScreen("start");

    }
);

/* =========================================================
   SCREEN NAVIGATION
========================================================= */

function showScreen(screen) {

    startScreen.classList.remove("active");
    quizScreen.classList.remove("active");
    resultScreen.classList.remove("active");

    if (screen === "start") {

        startScreen.classList.add("active");

    }

    if (screen === "quiz") {

        quizScreen.classList.add("active");

    }

    if (screen === "result") {

        resultScreen.classList.add("active");

    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}

/* =========================================================
   SCORING
========================================================= */

function getBasePoints(difficulty) {

    switch (difficulty) {

        case "easy":
            return 100;

        case "medium":
            return 150;

        case "hard":
            return 200;

        default:
            return 100;

    }

}

/* =========================================================
   SHUFFLE
========================================================= */

function shuffleArray(array) {

    const copy = [...array];

    for (
        let i = copy.length - 1;
        i > 0;
        i--
    ) {

        const j =
            Math.floor(
                Math.random() * (i + 1)
            );

        [copy[i], copy[j]] =
            [copy[j], copy[i]];

    }

    return copy;

}

/* =========================================================
   CATEGORY NAME
========================================================= */

function getCategoryName(category) {

    const names = {

        science: "Shkencë",

        technology: "Teknologji",

        history: "Histori",

        geography: "Gjeografi",

        sports: "Sport"

    };

    return names[category] || category;

}

/* =========================================================
   LOCAL STORAGE STATISTICS
========================================================= */

function loadStatistics() {

    const bestScore =
        storage.get("quiz_best_score", 0);

    const bestStreak =
        storage.get("quiz_best_streak", 0);

    const gamesPlayed =
        storage.get("quiz_games_played", 0);

    bestScoreElement.textContent =
        bestScore;

    bestStreakElement.textContent =
        bestStreak;

    gamesPlayedElement.textContent =
        gamesPlayed;

}

function saveStatistics() {

    const oldBest =
        storage.get("quiz_best_score", 0);

        
    const oldStreak =
        storage.get("quiz_best_streak", 0);

    const games =
        storage.get("quiz_games_played", 0);

    const isNewRecord =
        state.score > oldBest;

    if (isNewRecord) {

        storage.set(
            "quiz_best_score",
            state.score
        );

        newRecord.classList.remove("hidden");

    } else {

        newRecord.classList.add("hidden");

    }

    storage.set(
        "quiz_best_streak",
        Math.max(
            oldStreak,
            state.bestStreak
        )
    );

    storage.set(
        "quiz_games_played",
        games + 1
    );

    loadStatistics();

}

/* =========================================================
   THEME
========================================================= */

themeBtn.addEventListener(
    "click",
    toggleTheme
);

function toggleTheme() {

    document.body.classList.toggle("light");

    const isLight =
        document.body.classList.contains("light");

    themeBtn.textContent =
        isLight ? "☀️" : "🌙";

    storage.set(
        "quiz_theme",
        isLight ? "light" : "dark"
    );

}

function loadTheme() {

    const theme =
        storage.get("quiz_theme", "dark");

    if (theme === "light") {

        document.body.classList.add("light");

        themeBtn.textContent = "☀️";

    }

}

/* =========================================================
   SOUND
========================================================= */

soundBtn.addEventListener(
    "click",
    () => {

        state.soundEnabled =
            !state.soundEnabled;

        soundBtn.textContent =
            state.soundEnabled
                ? "🔊"
                : "🔇";

        storage.set(
            "quiz_sound",
            state.soundEnabled
        );

    }
);

function playSound(type) {

    if (!state.soundEnabled) return;

    /*
       Simple Web Audio API sound.
       Nuk nevojiten audio files.
    */

    try {

        const AudioContext =
            window.AudioContext ||
            window.webkitAudioContext;

        const context =
            new AudioContext();

        const oscillator =
            context.createOscillator();

        const gain =
            context.createGain();

        oscillator.connect(gain);

        gain.connect(context.destination);

        if (type === "correct") {

            oscillator.frequency.value = 700;

        } else {

            oscillator.frequency.value = 180;

        }

        gain.gain.setValueAtTime(
            0.08,
            context.currentTime
        );

        gain.gain.exponentialRampToValueAtTime(
            0.001,
            context.currentTime + 0.18
        );

        oscillator.start();

        oscillator.stop(
            context.currentTime + 0.18
        );

    } catch (error) {

        console.warn(
            "Audio nuk u aktivizua."
        );

    }

}

/* =========================================================
   TOAST
========================================================= */

let toastTimeout;

function showToast(message) {

    clearTimeout(toastTimeout);

    toast.textContent = message;

    toast.classList.add("show");

    toastTimeout =
        setTimeout(() => {

            toast.classList.remove("show");

        }, 3000);

}

/* =========================================================
   HTML SECURITY
========================================================= */

function escapeHTML(value) {

    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");

}

/* =========================================================
   KEYBOARD CONTROLS
========================================================= */

document.addEventListener(
    "keydown",
    event => {

        /* A/B/C/D */

        if (
            quizScreen.classList.contains("active") &&
            !state.answered
        ) {

            const keys = {
                a: 0,
                b: 1,
                c: 2,
                d: 3
            };

            const key =
                event.key.toLowerCase();

            if (
                Object.hasOwn(keys, key)
            ) {

                selectAnswer(keys[key]);

            }

        }

        /* Enter = next */

        if (
            event.key === "Enter" &&
            state.answered &&
            quizScreen.classList.contains("active")
        ) {

            nextQuestion();

        }

    }
);

state.soundEnabled =
    storage.get(
        "quiz_sound",
        true
    );

soundBtn.textContent =
    state.soundEnabled
        ? "🔊"
        : "🔇";
