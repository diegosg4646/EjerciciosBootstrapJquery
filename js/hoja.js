/*
Vamos a hacer hojas que caen por la pagina web

crearemos una clase.

Atributos:
    speed
    x,y
    imagen
    width, height

Comportamiento:
    mover

*/

class Hoja {
    constructor(x, y, width, height, speed, rotation) {
        this.x = x;
        this.y = y;
        this.width = y;
        this.height = height;
        this.speed = speed;
        this.rotation = rotation;

        //asignamos los valores del objeto a cada elemento html
        $("#hoja").css("left", this.x + "px");
        $("#hoja").css("top", this.y + "px");

        $("#imagenHoja").css("width", this.width);
        $("#imagenHoja").css("height", this.height);


    }

    mover() {
        this.y = this.y + this.speed;
        this.rotation = this.rotation + 1;
        this.dibujar();
    }

    dibujar() {
        $("#hoja").css("top", this.y + "px");
        $("#hoja").css("transform", "rotate(" + this.rotation + "deg" + ")");
    }
}