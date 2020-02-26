console.log("Cargando navegador.js...");

var visible = false;

$(document).ready(function() {
    // alert("jquery cargado");
    console.log("Inicializando...");

    // Asociaciones de eventos a los selectores

    $("#menu").click(function() {
        gestionarMenu();
    });

    $("#p1").click(function() {
        $("#div1").css("left", "0px");
        $("#div2").css("left", "-100%");

    });

    $("#p2").click(function() {
        $("#div1").css("left", "-100%");
        $("#div2").css("left", "0px");
    });

    $(".enlace").mouseenter(function() {
        $(this).css("font-size", "4em");

    });

    $(".enlace").mouseleave(function() {
        $(this).css("font-size", "2em");
    });

    //Hoja que se mueve
    hoja = new Hoja(50, 50, 70, 70, 1, 0);

    setInterval(function() {
        hoja.mover();
    }), 1000;



});

// function inicializar() {
//     console.log("Inicializando...");

//     // Asociaciones de eventos a los selectores

//     $("#menu").click(function() {
//         gestionarMenu();
//     });

//     $("#p1").click(function() {
//         $("#div1").css("left", "0px");
//         $("#div2").css("left", "-100%");

//     });

//     $("#p2").click(function() {
//         $("#div1").css("left", "-100%");
//         $("#div2").css("left", "0px");
//     });

//     $(".enlace").mouseenter(function() {
//         $(this).css("font-size", "4em");

//     });

//     $(".enlace").mouseleave(function() {
//         $(this).css("font-size", "2em");
//     });
// }

function gestionarMenu() {

    console.log("llamada a gestion menu");
    if (visible) {
        $("#menu").css("left", "-60%");
        visible = false;
    } else {
        $("#menu").css("left", "0px");
        visible = true;
    }



}



// function gestionarMenu(){

//     var menu = document.getElementById("menu");

//     if (visible==true){
//         menu.style.left = "0%";
//         visible = false;

//     }
//     else {
//         menu.style.left = "-60%";
//         visible =true;

//     }

// }