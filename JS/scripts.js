var acordeones = document.querySelectorAll(".acordeon__visible");
var button = document.querySelector(".btn__acordeon");
var imagenes = document.querySelectorAll(".acordeon__visible__imagen");
// var modificado = document.querySelector(".acordeon__visible__imagen");
// modificado.src = "assets/images/icon-minus.svg";

// Código de Acordeon funcionando 04/01/2024
// acordeones.forEach((acordeon) =>
// {
//     acordeon.addEventListener("click", () =>
//     {
//         var parrafo = acordeon.nextElementSibling;
//         parrafo.classList.toggle("acordeon__p__active");
//         var modificado = document.querySelector(".acordeon__visible__imagen");
//         modificado.src = "assets/images/icon-minus.svg";
//     });
// });


// Código de Acordeon para pruebas 04/01/2024
acordeones.forEach((acordeon, i) =>
{
    acordeones[i].addEventListener("click", () =>
    {
        var parrafo = acordeon.nextElementSibling;
        parrafo.classList.toggle("acordeon__p__active");
        // if(imagenes[i].src === "assets/images/icon-plus.svg")    // No funciona con esta sintaxis
        if(imagenes[i].src === "http://127.0.0.1:5500/faq-accordion-main/assets/images/icon-plus.svg")
        {
            // alert("Se cambio a imagen menos");
            imagenes[i].src = "assets/images/icon-minus.svg";
        }
        else
        {
            // alert("Se cambio a imagen mas");
            imagenes[i].src = "assets/images/icon-plus.svg";
        }
        // alert(imagenes[i].src); // Para saber la ruta exacta de la imagen
    });
});
