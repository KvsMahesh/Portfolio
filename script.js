
const menuIcon = document.querySelector(".hamenu");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("change");
});

window.addEventListener("scroll",function(){
    var nav = document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 0 );
    })
window.addEventListener('load',
    setTimeout(function(){document.querySelector('.load-wrap').style.display = 'none';},3000)
);
