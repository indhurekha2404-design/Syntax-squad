/* =====================================
   MathNova Teacher Dashboard JS
===================================== */


/* Data Storage */

let lessons = JSON.parse(localStorage.getItem("lessons")) || [];

let quizzes = JSON.parse(localStorage.getItem("quizzes")) || [];

let announcements = JSON.parse(localStorage.getItem("announcements")) || [];





/* Update Dashboard Numbers */


function updateDashboard(){


    let lessonCount = document.querySelectorAll(".teacher-card h1")[0];

    let quizCount = document.querySelectorAll(".teacher-card h1")[1];


    if(lessonCount){

        lessonCount.innerHTML = lessons.length || 50;

    }


    if(quizCount){

        quizCount.innerHTML = quizzes.length || 120;

    }


}



updateDashboard();







/* Add Lesson */


function addLesson(){


    let title =
    document.getElementById("lessonTitle").value;


    let content =
    document.getElementById("lessonContent").value;



    if(title=="" || content==""){

        alert("Please fill lesson details");

        return;

    }



    let lesson={

        title:title,

        content:content,

        date:new Date().toLocaleDateString()

    };



    lessons.push(lesson);



    localStorage.setItem(
        "lessons",
        JSON.stringify(lessons)
    );



    alert("Lesson Added Successfully 🎉");



    document.getElementById("lessonTitle").value="";

    document.getElementById("lessonContent").value="";


    updateDashboard();


}







/* Add Quiz Question */


function addQuestion(){


    let question =
    document.getElementById("question").value;


    let answer =
    document.getElementById("answer").value;




    if(question=="" || answer==""){

        alert("Enter question and answer");

        return;

    }



    let quiz={

        question:question,

        answer:answer

    };



    quizzes.push(quiz);



    localStorage.setItem(

        "quizzes",

        JSON.stringify(quizzes)

    );



    alert("Quiz Question Added ✅");



    document.getElementById("question").value="";

    document.getElementById("answer").value="";


    updateDashboard();


}







/* Upload Notes */


function uploadNotes(){


    let title =
    document.getElementById("noteTitle").value;



    if(title==""){

        alert("Enter notes title");

        return;

    }



    alert(
    "Notes uploaded successfully 📄"
    );


}







/* Send Announcement */


function sendAnnouncement(){


    let message =
    document.getElementById("announcementText").value;



    if(message==""){

        alert("Write announcement first");

        return;

    }



    announcements.push({

        message:message,

        date:new Date().toLocaleString()

    });



    localStorage.setItem(

        "announcements",

        JSON.stringify(announcements)

    );



    alert(
    "Announcement sent to students 📢"
    );



    document.getElementById(
    "announcementText"
    ).value="";


}







/* Student Score Simulation */


let studentScores=[

{

name:"Arun",

course:"Algebra",

score:95

},


{

name:"Priya",

course:"Geometry",

score:82

},


{

name:"Rahul",

course:"Calculus",

score:75

}


];





function loadStudentData(){


let table=document.querySelector(".teacher-table");



if(!table){

return;

}



studentScores.forEach(student=>{


let row=table.insertRow();



row.innerHTML=`

<td>${student.name}</td>

<td>${student.course}</td>

<td>${student.score}%</td>

<td>

${

student.score>=90

?

"Excellent 🏆"

:

student.score>=75

?

"Good 👍"

:

"Need Improvement 📚"

}

</td>

`;



});



}



loadStudentData();







/* Welcome Message */


window.onload=function(){


console.log(
"MathNova Teacher Dashboard Loaded 🚀"
);


};