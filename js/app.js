AOS.init();
let boton = document.getElementById("boton");
boton.addEventListener("click", mostrar_menu);
let menuabajo = document.getElementById("menuabajo");
menuabajo.addEventListener("click", ocultar_menu);
let items = document.querySelectorAll(".item");
items.forEach((item) => {
    item.addEventListener("click", desaparecer);
})
nav = document.getElementById("nav");
function mostrar_menu() {
    nav.style.left = "0px";
    menuabajo.style.display = "block";
}
function ocultar_menu() {
    nav.style.left = "-70%";
    menuabajo.style.display = "none";
}
function desaparecer() {
    nav.style.left = "-70%";
    menuabajo.style.display = "none";
}
window.addEventListener("scroll", function () {
    var header = document.getElementById("bajar");

    header.classList.toggle("abajo-s", window.scrollY > 0);
});
