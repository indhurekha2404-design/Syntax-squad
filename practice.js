// ===============================
// MathNova Practice - practice.js
// ===============================

// Question Database

const quizData = {

algebra: [

{
question: "Solve: x + 5 = 12",
options: ["5", "7", "8", "9"],
answer: 1,
explanation: "12 - 5 = 7"
},

{
question: "2x = 18. Find x.",
options: ["6", "7", "8", "9"],
answer: 3,
explanation: "18 ÷ 2 = 9"
},

{
question: "x² = 49",
options: ["±7", "7", "14", "49"],
answer: 0,
explanation: "Both 7 and -7 satisfy."
}

],

geometry: [

{
question: "Sum of angles in a triangle?",
options: ["90°", "180°", "270°", "360°"],
answer: 1,
explanation: "Triangle angle sum = 180°"
},

{
question: "A square has ____ sides.",
options: ["3", "4", "5", "6"],
answer: 1,
explanation: "A square has four equal sides."
}

],

trigonometry: [

{
question: "sin 90° = ?",
options: ["0", "1", "-1", "½"],
answer: 1,
explanation: "sin 90° = 1"
}

],

coordinate: [

{
question: "Distance between (0,0) and (3,4)?",
options: ["4", "5", "6", "7"],
answer: 1,
explanation: "Distance = √(3²+4²)=5"
}

],

calculus: [

{
question: "Derivative of x²?",
options: ["x", "2x", "2", "x²"],
answer: 1,
explanation: "Power Rule"
}

],

matrices: [

{
question: "Identity matrix diagonal values?",
options: ["0", "1", "2", "-1"],
answer: 1,
explanation: "Diagonal elements are 1."
}

],

probability: [

{
question: "Probability of Head?",
options: ["0", "½", "1", "2"],
answer: 1,
explanation: "One favourable outcome out of two."
}

],

statistics: [

{
question: "Average is called?",
options: ["Mode", "Median", "Mean", "Range"],
answer: 2,
explanation: "Average = Mean"
}

]

};

// Variables

let currentTopic = [];
let currentQuestion = 0;
let score = 0;
let timer = 600;
let interval;

// HTML Elements

const questionBox = document.getElementById("questionBox");
const progressBar = document.getElementById("progressBar");
const timerDisplay = document.getElementById("timer");
const quizTitle = document.getElementById("quizTitle");

// ===============================
// Load Topic
// ===============================

function loadTopic(topic) {

    currentTopic = quizData[topic];
    currentQuestion = 0;
    score = 0;
    timer = 600;

    quizTitle.innerHTML =
        topic.charAt(0).toUpperCase() + topic.slice(1) + " Practice";

    document.getElementById("resultSection").style.display = "none";
    document.querySelector(".quiz-section").style.display = "block";

    startTimer();
    showQuestion();
}


// ===============================
// Timer
// ===============================

function startTimer() {

    clearInterval(interval);

    interval = setInterval(function () {

        let minutes = Math.floor(timer / 60);
        let seconds = timer % 60;

        timerDisplay.innerHTML =
            `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

        timer--;

        if (timer < 0) {
            clearInterval(interval);
            showResult();
        }

    }, 1000);

}


// ===============================
// Show Question
// ===============================

function showQuestion() {

    let q = currentTopic[currentQuestion];

    let html = `
        <div class="question-card">

            <h2>
                Question ${currentQuestion + 1} of ${currentTopic.length}
            </h2>

            <h3>${q.question}</h3>

            <div class="options">
    `;

    q.options.forEach(function (option, index) {

        html += `
            <button
                class="option-btn"
                onclick="checkAnswer(${index})">

                ${option}

            </button>
        `;

    });

    html += `
            </div>

            <div id="explanation"></div>

        </div>
    `;

    questionBox.innerHTML = html;

    progressBar.style.width =
        ((currentQuestion + 1) / currentTopic.length) * 100 + "%";

    if (window.MathJax) {
        MathJax.typesetPromise();
    }

}

// ===============================
// Check Answer
// ===============================

function checkAnswer(selected) {

    let q = currentTopic[currentQuestion];
    let explanation = document.getElementById("explanation");
    let buttons = document.querySelectorAll(".option-btn");

    buttons.forEach(button => {
        button.disabled = true;
    });

    if (selected === q.answer) {

        score++;

        explanation.innerHTML =
        `<p style="color:green;">
            ✅ Correct! <br><br>
            ${q.explanation}
        </p>`;

    } else {

        buttons[q.answer].style.background = "#4CAF50";
        buttons[selected].style.background = "#e74c3c";

        explanation.innerHTML =
        `<p style="color:red;">
            ❌ Wrong! <br><br>
            ${q.explanation}
        </p>`;

    }

}


// ===============================
// Next Question
// ===============================

function nextQuestion() {

    if (currentQuestion < currentTopic.length - 1) {

        currentQuestion++;
        showQuestion();

    } else {

        showResult();

    }

}


// ===============================
// Previous Question
// ===============================

function previousQuestion() {

    if (currentQuestion > 0) {

        currentQuestion--;
        showQuestion();

    }

}


// ===============================
// Result Screen
// ===============================

function showResult() {

    clearInterval(interval);

    document.querySelector(".quiz-section").style.display = "none";

    document.getElementById("resultSection").style.display = "block";

    let percentage =
        Math.round((score / currentTopic.length) * 100);

    document.getElementById("finalScore").innerHTML =
        percentage + "%";

    let message = "";

    if (percentage >= 90) {

        message = "🌟 Outstanding!";

    } else if (percentage >= 75) {

        message = "🎉 Excellent Work!";

    } else if (percentage >= 50) {

        message = "👍 Good Job! Keep Practicing.";

    } else {

        message = "📚 Practice More and Try Again.";

    }

    document.getElementById("scoreMessage").innerHTML = message;



    // Save current topic score

let topicName = quizTitle.innerHTML
    .replace(" Practice", "")
    .toLowerCase();

localStorage.setItem(
    topicName + "Score",
    score
);

// Save overall best percentage

let best = Number(localStorage.getItem("bestPracticeScore")) || 0;

if (percentage > best) {

    localStorage.setItem(
        "bestPracticeScore",
        percentage
    );

}

}


// ===============================
// Restart Quiz
// ===============================

function restartQuiz() {

    document.getElementById("resultSection").style.display = "none";

    document.querySelector(".quiz-section").style.display = "block";

    currentQuestion = 0;
    score = 0;
    timer = 600;

    startTimer();
    showQuestion();

}
