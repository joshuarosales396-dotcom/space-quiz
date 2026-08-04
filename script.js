// ======================================
// SPACE QUIZ GAME
// SCRIPT.JS - PART 1
// ======================================

let currentCategory = "arithmeticSequence";
let currentDifficulty = "easy";
let currentQuestionIndex = 0;
let score = 0;
let lives = 3;
let timer = 20;
let timerInterval = null;

let currentQuestions = [];

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

function showScreen(screen) {
    startScreen.style.display = "none";
    categoryScreen.style.display = "none";
    quizScreen.style.display = "none";
    resultScreen.style.display = "none";

    screen.style.display = "block";
}

showScreen(startScreen);// ======================================
// SCRIPT.JS - PART 2
// Start Game & Category Selection
// ======================================

const startButton = document.getElementById("start-btn");
const categoryButtons = document.querySelectorAll(".category-btn");

startButton.addEventListener("click", () => {
    showScreen(categoryScreen);
});

categoryButtons.forEach(button => {
    button.addEventListener("click", () => {

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
});// ======================================
// SCRIPT.JS - PART 3
// Load Question
// ======================================

function loadQuestion() {

    if (currentQuestionIndex >= currentQuestions.length) {
        showResult();
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
            checkAnswer(choice);
        });

        choicesElement.appendChild(button);

    });

    updateProgress();

    startTimer();

}// ======================================
// SCRIPT.JS - PART 4
// Check Answer & Score System
// ======================================

function checkAnswer(selectedAnswer) {

    clearInterval(timerInterval);

    const currentQuestion = currentQuestions[currentQuestionIndex];

    if (selectedAnswer === currentQuestion.answer) {

        score += 10;
        scoreElement.textContent = score;

    } else {

        lives--;
        livesElement.textContent = lives;

        if (lives <= 0) {
            showResult();
            return;
        }

    }

    currentQuestionIndex++;

    // Easy → Medium → Hard
    if (
        currentQuestionIndex >= currentQuestions.length &&
        currentDifficulty === "easy"
    ) {

        currentDifficulty = "medium";
        currentQuestionIndex = 0;

        currentQuestions = questions[currentCategory].filter(
            q => q.difficulty === "medium"
        );

    } else if (
        currentQuestionIndex >= currentQuestions.length &&
        currentDifficulty === "medium"
    ) {

        currentDifficulty = "hard";
        currentQuestionIndex = 0;

        currentQuestions = questions[currentCategory].filter(
            q => q.difficulty === "hard"
        );

    } else if (
        currentQuestionIndex >= currentQuestions.length &&
        currentDifficulty === "hard"
    ) {

        showResult();
        return;

    }

    loadQuestion();

}// ======================================
// SCRIPT.JS - PART 5
// Timer, Progress & Result
// ======================================

function startTimer() {

    clearInterval(timerInterval);

    timer = 20;
    timerElement.textContent = timer;

    timerInterval = setInterval(() => {

        timer--;
        timerElement.textContent = timer;

        if (timer <= 0) {

            clearInterval(timerInterval);

            lives--;
            livesElement.textContent = lives;

            if (lives <= 0) {
                showResult();
                return;
            }

            currentQuestionIndex++;
            loadQuestion();

        }

    }, 1000);

}

function updateProgress() {

    const total = currentQuestions.length;

    const percent = (currentQuestionIndex / total) * 100;

    progressBar.style.width = percent + "%";

}

function showResult() {

    clearInterval(timerInterval);

    showScreen(resultScreen);

    finalScore.textContent = score;

}// ======================================
// SCRIPT.JS - PART 6
// Restart Game & Sound Effects
// ======================================

// Sound Effects
const correctSound = new Audio("sounds/correct.mp3");
const wrongSound = new Audio("sounds/wrong.mp3");
const clickSound = new Audio("sounds/click.mp3");
const bgMusic = new Audio("sounds/space.mp3");

bgMusic.loop = true;
bgMusic.volume = 0.4;

// Play music when Start button is clicked
startButton.addEventListener("click", () => {
    bgMusic.play().catch(() => {});
});

// Restart Button
const restartButton = document.getElementById("restart-btn");

if (restartButton) {

    restartButton.addEventListener("click", () => {

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

// Play sound when answering
const originalCheckAnswer = checkAnswer;

checkAnswer = function(selectedAnswer) {

    const currentQuestion = currentQuestions[currentQuestionIndex];

    if (selectedAnswer === currentQuestion.answer) {
        correctSound.play();
    } else {
        wrongSound.play();
    }

    originalCheckAnswer(selectedAnswer);

};
