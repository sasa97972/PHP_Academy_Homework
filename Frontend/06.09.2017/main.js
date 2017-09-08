window.addEventListener("load", init, false);

var canvas = {
    started: false,
    canvas: document.querySelector(".canvas"),
    ctx: document.querySelector(".canvas").getContext("2d"),
    startDraw: function (evt) {
        canvas.ctx.beginPath();
        canvas.ctx.moveTo(evt.layerX, evt.layerY);
        canvas.started = true;
    },
    draw: function (evt) {
        if (canvas.started) {
            canvas.ctx.lineTo(evt.layerX, evt.layerY);
            canvas.ctx.stroke();
        }

    },
    stopDraw: function (evt) {
        canvas.started = false;
    },
    clear: function () {
      canvas.ctx.clearRect(0,0, canvas.canvas.width, canvas.canvas.height);
    },
    start: function () {
        this.canvas.addEventListener("mousedown", this.startDraw, false);
        this.canvas.addEventListener("mousemove", this.draw, false);
        this.canvas.addEventListener("mouseup", this.stopDraw, false);
        document.querySelector(".canvas_clear").addEventListener("click", this.clear, false);
    }
};

function init() {
    canvas.start();
}

