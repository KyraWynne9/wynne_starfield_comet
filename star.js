export class Star {


    x = 25;
    y = 25;
    size = Math.random();
    realSize = 5;
    pencil;
    canvas;
    speed = 2;

    constructor(canvas, pencil) {
        this.pencil = pencil;
        this.canvas = canvas;
        this.x = canvas.width * Math.random();
        this.y = canvas.height * Math.random();
    }

    draw(pencil) {
        this.pencil.beginPath();
        this.pencil.arc(this.x, this.y, this.size * this.realSize, 0, 2 * Math.PI);
        this.pencil.fillStyle = "white";
        this.pencil.fill();
        this.pencil.closePath();
    }

    move() {
        this.x += this.speed * this.size;
    }

    tryToRecycle() {
        if(this.x > this.canvas.width) {
            this.x = 0;
        }
        
    }

}