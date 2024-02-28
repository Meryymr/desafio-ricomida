// ACTIVAR TOOLTIPS
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
console.log(tooltipTriggerList)
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

//EVENTO CLIC 
$(document).ready(function () {
    $('#enviarCorreo').click(function () {
        alert('El correo fue enviado correctamente...');
    });
});

$(document).ready(function () {
    $('#favoritos').click(function () {
        alert('Receta añadida a favoritos');
    });
});

//DOBLE CLICK 
$("#parrafo1").on("dblclick", function () {
    $(this).css("color", "red");
});

$("#parrafo2").on("dblclick", function () {
    $(this).css("color", "red");
});


//TOGGLE EN CARDS
$("#titulo1").on("click", function () {
    $(".card-text1").toggle("slow");
})
$("#titulo2").on("click", function () {
    $(".card-text2").toggle("slow");
})
$("#titulo3").on("click", function () {
    $(".card-text3").toggle("slow");
})