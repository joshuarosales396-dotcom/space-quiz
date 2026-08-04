// ======================================
// SPACE QUIZ GAME - SCRIPT.JS
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

// Screen Navigator
function showScreen(screen) {
    startScreen.style.display = "none";
    categoryScreen.style.display = "none";
    quizScreen.style.display = "none";
    resultScreen.style.display = "none";

    screen.style.display = "block";
}

// Initial Screen Setup
showScreen(startScreen);

// Start Game & Music
startButton.addEventListener("click", () => {
    clickSound.play().catch(() => {});
    bgMusic.play().catch(() => {});
    showScreen(categoryScreen);
});

// Category Selection
categoryButtons.forEach(button => {
    button.addEventListener("click", () => {
        clickSound.play().catch(() => {});
        currentCategory = button.dataset.category;
        currentDifficulty = "easy";
        currentQuestionIndex = 0;
        score = 0;
        lives = 3;

        scoreElement.textContent = score;
        livesElement.textContent = lives;

        currentQuestions = questions[currentCategory].filter(q =>
            q.difficulty === currentDifficulty
        );

        showScreen(quizScreen);
        loadQuestion();
    });
});

// Load Question
function loadQuestion() {
    if (currentQuestionIndex >= currentQuestions.length) {
        handleDifficultyTransition();
        return;
    }

    const currentQuestion = currentQuestions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    choicesElement.innerHTML = "";

    currentQuestion.choices.forEach(choice => {
        const button = document.createElement("button");
        button.textContent = choice;
        button.classList.add("choice-btn");

        button.addEventListener("click", () => {
            clickSound.play().catch(() => {});
            checkAnswer(choice);
        });

        choicesElement.appendChild(button);
    });

    updateProgress();
    startTimer();
}

// Check Answer & Score System
function checkAnswer(selectedAnswer) {
    clearInterval(timerInterval);

    const currentQuestion = currentQuestions[currentQuestionIndex];

    if (selectedAnswer === currentQuestion.answer) {
        correctSound.play().catch(() => {});
        score += 10;
        scoreElement.textContent = score;
    } else {
        wrongSound.play().catch(() => {});
        lives--;
        livesElement.textContent = lives;

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

// Timer System
function startTimer() {
    clearInterval(timerInterval);

    timer = 20;
    timerElement.textContent = timer;

    timerInterval = setInterval(() => {
        timer--;
        timerElement.textContent = timer;

        if (timer <= 0) {
            clearInterval(timerInterval);
            wrongSound.play().catch(() => {});
            lives--;
            livesElement.textContent = lives;

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

// Progress Bar
function updateProgress() {
    const total = currentQuestions.length;
    const percent = (currentQuestionIndex / total) * 100;
    progressBar.style.width = percent + "%";
}

// Show Result Screen
function showResult() {
    clearInterval(timerInterval);
    showScreen(resultScreen);
    finalScore.textContent = score;
}

// Restart Game
if (restartButton) {
    restartButton.addEventListener("click", () => {
        clickSound.play().catch(() => {});
        currentCategory = "arithmeticSequence";
        currentDifficulty = "easy";
        currentQuestionIndex = 0;
        score = 0;
        lives = 3;

        scoreElement.textContent = score;
        livesElement.textContent = lives;

        showScreen(startScreen);
    });
}
