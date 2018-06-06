import SimpleCanvas from '../src/index'

document.onreadystatechange = function () {
    var canvas = new SimpleCanvas("mycanvas");
    canvas.drawLine(10, 10, 200, 200, "red", 2);
    canvas.drawCircle(200, 200, 100, "black", 1, "yellow", .4);
    canvas.drawImage("myson.png", 300, 100, 296, 337);
}