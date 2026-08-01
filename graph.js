let calculator;



window.onload=function(){


const element=document.getElementById("calculator");


if(element){


calculator=Desmos.GraphingCalculator(element,{

expressions:true,
settingsMenu:true,
zoomButtons:true,
lockViewport:false

});



calculator.setExpression({

id:"default",

latex:"y=x^2"

});


}



};






function plotEquation(){


let equation=document.getElementById("equation").value.trim();


if(equation===""){

alert("Please enter an equation");

return;

}



calculator.setExpression({

id:"userGraph",

latex:equation

});


}





function loadGraph(eq){


calculator.setExpression({

id:"userGraph",

latex:eq

});


}





function clearGraph(){


calculator.removeExpression({

id:"userGraph"

});


}





function resetGraph(){


calculator.setViewport({

xmin:-10,

xmax:10,

ymin:-10,

ymax:10

});


}





function randomGraph(){


let graphs=[

"y=x^2",

"y=sin(x)",

"y=cos(x)",

"y=x^3",

"y=e^x",

"y=log(x)"

];



let randomGraph=

graphs[Math.floor(Math.random()*graphs.length)];



calculator.setExpression({

id:"randomGraph",

latex:randomGraph

});


}