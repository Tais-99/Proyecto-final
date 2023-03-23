const Datos = document.getElementById("pic")
const conocimiento = document.getElementById("cono")
const contacto = document.getElementById("con")

const cargarDatos = (entradas, observador) => {
    // console.log("entradas")
    // console.log("observador")

    entradas.forEach((entrada) => {
        if(entrada.isIntersecting){
            entrada.target.classList.add("visible")
        } else{
            entrada.target.classList.remove("visible")
        }
    })
}

const observador = new IntersectionObserver (cargarDatos, {
    root: null,
    rootMargin: "0px 0px",
    threshold: .5
});

observador.observe(Datos);
observador.observe(conocimiento);
observador.observe(contacto);



window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})