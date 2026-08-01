```javascript
/* =================================
   MATHNOVA GEOMETRY LAB JS
================================= */


// Open Geometry Tool Page

function openGeometryLab(){

    window.location.href = "geometry.html";

}



// Run after complete page loading

document.addEventListener("DOMContentLoaded", function(){



    // Topic buttons interaction

    const topics = document.querySelectorAll(".topic-list span");


    topics.forEach(function(topic){


        topic.addEventListener("click", function(){


            alert(
                "Exploring " + this.innerText + " Geometry 🚀"
            );


        });


    });





    // Floating shape animation delay

    const shapes = document.querySelectorAll(
        ".triangle, .circle, .square"
    );


    shapes.forEach(function(shape,index){


        shape.style.animationDelay = index + "s";


    });





    // Feature card reveal animation

    const cards = document.querySelectorAll(
        ".feature-card"
    );


    function revealCards(){


        cards.forEach(function(card){


            let position =
            card.getBoundingClientRect().top;



            if(position < window.innerHeight - 100){


                card.style.opacity = "1";

                card.style.transform =
                "translateY(0)";


            }


        });


    }



    window.addEventListener(
        "scroll",
        revealCards
    );


    revealCards();



});
```
