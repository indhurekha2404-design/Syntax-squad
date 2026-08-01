const subjects = [
"algebra",
"geometry",
"calculus",
"statistics"
];

let total = 0;
let highest = 0;
let best = "-";
let attempted = 0;

subjects.forEach(subject => {

let score =
Number(localStorage.getItem(subject + "Score")) || 0;

let cell =
document.getElementById(subject + "Score");

if(cell){

cell.innerHTML = score + " / 3";

}

let status =
document.getElementById(subject + "Status");

if(status){

if(score==3){

status.innerHTML="🏆 Excellent";

}
else if(score>=2){

status.innerHTML="✅ Passed";

}
else if(score==1){

status.innerHTML="⚠ Needs Practice";

}
else{

status.innerHTML="❌ Not Attempted";

}

}

if(score>0){

attempted++;

}

total += score;

if(score>highest){

highest = score;
best = subject.charAt(0).toUpperCase()+subject.slice(1);

}

});

let average =
Math.round((total/12)*100);

document.getElementById("averageScore").innerHTML =
average+"%";

document.getElementById("highestScore").innerHTML =
highest+"/3";

document.getElementById("bestSubject").innerHTML =
best;

document.getElementById("quizCount").innerHTML =
attempted;

document.getElementById("progressFill").style.width =
average+"%";

document.getElementById("progressFill").innerHTML =
average+"%";