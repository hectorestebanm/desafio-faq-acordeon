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
        if(imagenes[i].src === "assets/images/icon-plus.svg")
        {
            imagenes[i].src = "assets/images/icon-minus.svg";
        }
        else
        {
            imagenes[i].src = "assets/images/icon-minus.svg";
        }
    });
});
