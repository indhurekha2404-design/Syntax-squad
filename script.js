// ============================================
// MathVerse - Main JavaScript
// ============================================

// ==============================
// REGISTER
// ==============================

function registerUser() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let role = document.getElementById("role").value;

    if (name === "" || email === "" || password === "") {
        alert("Please fill all details.");
        return;
    }

    let user = {
        name: name,
        email: email,
        password: password,
        role: role
    };

    localStorage.setItem("user", JSON.stringify(user));

    alert("Registration Successful!");

    window.location.href = "login.html";
}

// ==============================
// LOGIN
// ==============================

function loginUser() {

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let user = JSON.parse(localStorage.getItem("user"));

    if (user && user.email === email && user.password === password) {

        localStorage.setItem("login", "true");

        alert("Login Successful!");

    switch(user.role){

    case "student":
        window.location.href = "student.html";
        break;

    case "teacher":
        window.location.href = "teacher.html";
        break;

    case "admin":
        window.location.href = "admin.html";
        break;

    default:
        alert("Invalid user role.");
}

    } else {

        alert("Invalid Email or Password");

    }

}

// ==============================
// LOGOUT
// ==============================

function logout() {

    localStorage.removeItem("login");

    window.location.href = "math.html";

}

// ==============================
// CHECK LOGIN
// ==============================

function checkLogin() {

    if (localStorage.getItem("login") !== "true") {

        window.location.href = "login.html";

    }

}

// ==============================
// THEME
// ==============================

function changeTheme() {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {

        localStorage.setItem("theme", "dark");

    } else {

        localStorage.setItem("theme", "light");

    }

}

// ==============================
// QUIZ ENGINE
// ==============================

function checkScore() {

    let score = 0;

    if (document.getElementById("q1") &&
        document.getElementById("q1").value == "4") {

        score++;

    }

    if (document.getElementById("q2") &&
        document.getElementById("q2").value.toLowerCase() == "2x") {

        score++;

    }

    if (document.getElementById("q3") &&
        document.getElementById("q3").value == "10") {

        score++;

    }

    localStorage.setItem("score", score);

    saveScore("Practice Quiz", score);

    if (document.getElementById("result")) {

        document.getElementById("result").innerHTML =
            "🎉 Your Score is " + score + " / 3";

    }

}

// ==============================
// SAVE SCORES
// ==============================

function saveScore(subject, score) {

    let scores = JSON.parse(localStorage.getItem("scores")) || [];

    scores.push({

        subject: subject,
        score: score

    });

    localStorage.setItem("scores", JSON.stringify(scores));

}

// ==============================
// DISPLAY SCORES
// ==============================

function showScores() {

    let table = document.getElementById("scoreData");

    if (!table) return;

    let scores = JSON.parse(localStorage.getItem("scores")) || [];

    table.innerHTML = "";

    scores.forEach(function (item) {

        table.innerHTML += `

        <tr>

            <td>${item.subject}</td>

            <td>${item.score}</td>

        </tr>

        `;

    });

}

// ==============================
// PROGRESS
// ==============================

function updateProgress() {

    let scores = JSON.parse(localStorage.getItem("scores")) || [];

    let progress = document.getElementById("progress");

    if (!progress) return;

    let value = scores.length * 10;

    if (value > 100) {

        value = 100;

    }

    progress.style.width = value + "%";

    progress.innerHTML = value + "%";

}

// ==============================
// TEACHER
// ==============================

function addLesson() {

    let title = document.getElementById("lessonTitle").value;

    if (title == "") {

        alert("Enter lesson title.");

        return;

    }

    localStorage.setItem("lesson", title);

    alert("Lesson Added Successfully!");

}

function addQuestion() {

    let question = document.getElementById("question").value;

    if (question == "") {

        alert("Enter a question.");

        return;

    }

    localStorage.setItem("question", question);

    alert("Question Added Successfully!");

}

// ==============================
// ADMIN
// ==============================

function viewUsers() {

    let user = JSON.parse(localStorage.getItem("user"));

    if (user) {

        alert(
            "Registered User\n\n" +
            "Name : " + user.name +
            "\nEmail : " + user.email +
            "\nRole : " + user.role
        );

    } else {

        alert("No registered users.");

    }

}

function deleteUsers() {

    localStorage.removeItem("user");

    alert("User Deleted.");

}

function addCourse() {

    let course = document.getElementById("courseName").value;

    if (course == "") {

        alert("Enter course name.");

        return;

    }

    localStorage.setItem("course", course);

    alert(course + " added successfully!");

}

// ==============================
// PAGE LOAD
// ==============================

window.onload = function () {

    // Theme

    if (localStorage.getItem("theme") == "dark") {

        document.body.classList.add("dark-mode");

    }

    // Teacher Score

    let teacherScore = document.getElementById("teacherScore");

    if (teacherScore) {

        teacherScore.innerHTML =
            localStorage.getItem("score") || "0";

    }

    // Score Table

    showScores();

    // Progress

    updateProgress();

};