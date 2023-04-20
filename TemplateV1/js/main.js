// Smooth Scroll - https://github.com/cferdinandi/smooth-scroll

/*var scroll = new SmoothScroll('.navbar a[href*="#"]', {
   speed: 500
});*/

let ola = document.getElementById("bg");
let sm = document.getElementById("sm");

//console.log(text);

window.addEventListener('scroll', function () {

   var value = window.scrollY;

   ola.style.top = value * 1 + 'px';
   sm.style.left = -value * 0.5 + 'px';
   
})



