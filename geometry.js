```javascript
/* =================================
   MATHNOVA GEOMETRY LAB JS
================================= */


const canvas = document.getElementById("geometryCanvas");
const ctx = canvas.getContext("2d");


// Canvas size

canvas.width = 700;
canvas.height = 550;



// Clear canvas initially

ctx.clearRect(0,0,canvas.width,canvas.height);




// Draw Triangle

function drawTriangle(){


    clearCanvas();


    ctx.beginPath();

    ctx.moveTo(350,80);

    ctx.lineTo(150,400);

    ctx.lineTo(550,400);

    ctx.closePath();


    ctx.fillStyle="#667eea";

    ctx.fill();


    ctx.strokeStyle="#333";

    ctx.lineWidth=3;

    ctx.stroke();



    ctx.font="20px Arial";

    ctx.fillStyle="black";

    ctx.fillText(
        "Triangle",
        300,
        450
    );


}








// Draw Rectangle

function drawRectangle(){


    clearCanvas();


    ctx.beginPath();


    ctx.rect(
        180,
        150,
        350,
        220
    );


    ctx.fillStyle="#764ba2";

    ctx.fill();


    ctx.strokeStyle="#333";

    ctx.lineWidth=3;

    ctx.stroke();



    ctx.font="20px Arial";

    ctx.fillStyle="black";


    ctx.fillText(
        "Rectangle",
        300,
        420
    );


}









// Draw Circle

function drawCircle(){


    clearCanvas();


    ctx.beginPath();


    ctx.arc(
        350,
        280,
        120,
        0,
        Math.PI*2
    );


    ctx.fillStyle="#667eea";

    ctx.fill();


    ctx.strokeStyle="#333";

    ctx.lineWidth=3;

    ctx.stroke();



    ctx.font="20px Arial";

    ctx.fillStyle="black";


    ctx.fillText(
        "Circle",
        320,
        450
    );


}









// Clear Canvas

function clearCanvas(){


    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );


}









// Area Calculator

function calculateArea(){


    let length =
    Number(document.getElementById("length").value);



    let width =
    Number(document.getElementById("width").value);



    let result =
    document.getElementById("result");



    if(!length || !width){


        result.innerHTML =
        "Enter values first";


        return;


    }



    let area = length * width;



    result.innerHTML =
    "Area = " + area + " units²";



}









// Perimeter Calculator

function calculatePerimeter(){


    let length =
    Number(document.getElementById("length").value);



    let width =
    Number(document.getElementById("width").value);



    let result =
    document.getElementById("result");



    if(!length || !width){


        result.innerHTML =
        "Enter values first";


        return;


    }




    let perimeter =
    2*(length+width);



    result.innerHTML =
    "Perimeter = " + perimeter + " units";



}
```
