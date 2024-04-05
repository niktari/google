let colors = ["#008744", "#0057e7", "#d62d20", "#ffa700"];
let spans = document.querySelectorAll(".effect");

spans.forEach((span) => {

    span.onmouseover = function() {
    span.style.color = colors[Math.floor(Math.random() * colors.length)];
    span.style.transform = `rotate(${Math.random() * 20 - 10}deg) translate(${Math.random() * 10 - 5}px, ${Math.random() * 10 - 5}px)`

    setTimeout(() => {
        span.style.color = "#000000";
        span.style.transform = "rotate(0)";
    }, 1000)


    }


    
})

