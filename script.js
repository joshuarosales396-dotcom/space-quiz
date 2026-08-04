// ======================================
// SPACE QUIZ GAME - SCRIPT.JS (FIXED)
// ======================================

// Variables
let currentCategory = "arithmeticSequence";
let currentDifficulty = "easy";
let currentQuestionIndex = 0;
let score = 0;
let lives = 3;
let timer = 20;
let timerInterval = null;

let currentQuestions = [];

// DOM Elements
const loadingScreen = document.getElementById("loading");
const startScreen = document.getElementById("start-screen");
const categoryScreen = document.getElementById("category-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");

const questionElement = document.getElementById("question");
const choicesElement = document.getElementById("choices");

const scoreElement = document.getElementById("score");
const livesElement = document.getElementById("lives");
const timerElement = document.getElementById("timer");
const progressBar = document.getElementById("progress");

const finalScore = document.getElementById("final-score");
const startButton = document.getElementById("start-btn");
const categoryButtons = document.querySelectorAll(".category-btn");
const restartButton = document.getElementById("restart-btn");

// Sound Effects
const correctSound = new Audio("sounds/correct.mp3");
const wrongSound = new Audio("sounds/wrong.mp3");
const clickSound = new Audio("sounds/click.mp3");
const bgMusic = new Audio("sounds/space.mp3");

bgMusic.loop = true;
bgMusic.volume = 0.4;

// Screen Navigator Function
function showScreen(screen) {
    if (startScreen) startScreen.style.display = "none";
    if (categoryScreen) categoryScreen.style.display = "none";
    if (quizScreen) quizScreen.style.display = "none";
    if (resultScreen) resultScreen.style.display = "none";

    if (screen) screen.style.display = "block";
}

// Start Game Button Handler
if (startButton) {
    startButton.addEventListener("click", () => {
        clickSound.play().catch(() => {});
        bgMusic.play().catch(() => {});
        showScreen(categoryScreen);
    });
}

// Category Selection Handler
categoryButtons.forEach(button => {
    button.addEventListener("click", () => {
        clickSound.play().catch(() => {});
        currentCategory = button.dataset.category || "arithmeticSequence";
        currentDifficulty = "easy";
        currentQuestionIndex = 0;
        score = 0;
        lives = 3;

        if (scoreElement) scoreElement.textContent = score;
        if (livesElement) livesElement.textContent = lives;

        // Check if questions variable exists globally
        if (typeof questions !== 'undefined' && questions[currentCategory]) {
            currentQuestions = questions[currentCategory].filter(q =>
                q.difficulty === currentDifficulty
            );
        } else {
            currentQuestions = [];
        }

        showScreen(quizScreen);
        loadQuestion();
    });
});

// Load Question Function
function loadQuestion() {
    if (currentQuestionIndex >= currentQuestions.length) {
        handleDifficultyTransition();
        return;
    }

    const currentQuestion = currentQuestions[currentQuestionIndex];
    if (questionElement) questionElement.textContent = currentQuestion.question;
    if (choicesElement) choicesElement.innerHTML = "";

    if (currentQuestion && currentQuestion.choices) {
        currentQuestion.choices.forEach(choice => {
            const button = document.createElement("button");
            button.textContent = choice;
            button.classList.add("choice-btn");

            button.addEventListener("click", () => {
                clickSound.play().catch(() => {});
                checkAnswer(choice);
            });

            if (choicesElement) choicesElement.appendChild(button);
        });
    }

    updateProgress();
    startTimer();
}

// Check Answer Function
function checkAnswer(selectedAnswer) {
    clearInterval(timerInterval);

    const currentQuestion = currentQuestions[currentQuestionIndex];

    if (currentQuestion && selectedAnswer === currentQuestion.answer) {
        correctSound.play().catch(() => {});
        score += 10;
        if (scoreElement) scoreElement.textContent = score;
    } else {
        wrongSound.play().catch(() => {});
        lives--;
        if (livesElement) livesElement.textContent = lives;

        if (lives <= 0) {
            showResult();
            return;
        }
    }

    currentQuestionIndex++;

    if (currentQuestionIndex >= currentQuestions.length) {
        handleDifficultyTransition();
    } else {
        loadQuestion();
    }
}

// Handle Difficulty Transition (Easy -> Medium -> Hard)
function handleDifficultyTransition() {
    if (typeof questions === 'undefined' || !questions[currentCategory]) {
        showResult();
        return;
    }

    if (currentDifficulty === "easy") {
        currentDifficulty = "medium";
        currentQuestionIndex = 0;
        currentQuestions = questions[currentCategory].filter(q => q.difficulty === "medium");
        loadQuestion();
    } else if (currentDifficulty === "medium") {
        currentDifficulty = "hard";
        currentQuestionIndex = 0;
        currentQuestions = questions[currentCategory].filter(q => q.difficulty === "hard");
        loadQuestion();
    } else {
        showResult();
    }
}

// Timer Function
function startTimer() {
    clearInterval(timerInterval);

    timer = 20;
    if (timerElement) timerElement.textContent = timer;

    timerInterval = setInterval(() => {
        timer--;
        if (timerElement) timerElement.textContent = timer;

        if (timer <= 0) {
            clearInterval(timerInterval);
            wrongSound.play().catch(() => {});
            lives--;
            if (livesElement) livesElement.textContent = lives;

            if (lives <= 0) {
                showResult();
                return;
            }

            currentQuestionIndex++;
            if (currentQuestionIndex >= currentQuestions.length) {
                handleDifficultyTransition();
            } else {
                loadQuestion();
            }
        }
    }, 1000);
}

// Update Progress Bar Function
function updateProgress() {
    if (!progressBar) return;
    const total = currentQuestions.length || 1;
    const percent = (currentQuestionIndex / total) * 100;
    progressBar.style.width = percent + "%";
}

// Show Result Screen Function
function showResult() {
    clearInterval(timerInterval);
    showScreen(resultScreen);
    if (finalScore) finalScore.textContent = score;
}

// Restart Game Button Handler
if (restartButton) {
    restartButton.addEventListener("click", () => {
        clickSound.play().catch(() => {});
        currentCategory = "arithmeticSequence";
        currentDifficulty = "easy";
        currentQuestionIndex = 0;
        score = 0;
        lives = 3;

        if (scoreElement) scoreElement.textContent = score;
        if (livesElement) livesElement.textContent = lives;

        showScreen(startScreen);
    });
}

// ======================================
// AUTO-HIDE LOADING SCREEN ON WINDOW LOAD
// ======================================
window.addEventListener("load", () => {
    if (loadingScreen) {
        loadingScreen.style.display = "none";
    }
    showScreen(startScreen);
});
