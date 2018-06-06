var SimpleCanvas = /** @class */ (function () {
    function SimpleCanvas(container) {
        this.tempCanvas = null;
        this.tempContext = null;
        var containerElement;
        if (typeof container == "string")
            containerElement = document.getElementById(container);
        else
            containerElement = container;
        if (containerElement.tagName == "CANVAS") {
            this.mainCanvas = containerElement;
        }
        else {
            this.mainCanvas = document.createElement("canvas");
            var dimmentions = containerElement.getBoundingClientRect();
            this.mainCanvas.width = dimmentions.width;
            this.mainCanvas.height = dimmentions.height;
        }
        this.mainContext = this.mainCanvas.getContext("2d");
    }
    //#endregion
    SimpleCanvas.prototype.drawRect = function (x, y, width, height, strokeColor, lineWidth, fillColor, alpha) {
        if (strokeColor === void 0) { strokeColor = "black"; }
        if (lineWidth === void 0) { lineWidth = 1; }
        if (fillColor === void 0) { fillColor = ""; }
        if (alpha === void 0) { alpha = 1; }
        var context = this.mainContext;
        context.globalAlpha = alpha;
        if (fillColor) {
            context.fillStyle = fillColor;
            context.fillRect(x, y, width, height);
        }
        if (lineWidth) {
            context.strokeStyle = strokeColor;
            context.lineWidth = lineWidth;
            context.strokeRect(x, y, width, height);
        }
    };
    SimpleCanvas.prototype.drawLine = function (x1, y1, x2, y2, color, lineWidth, alpha) {
        if (color === void 0) { color = "black"; }
        if (lineWidth === void 0) { lineWidth = 1; }
        if (alpha === void 0) { alpha = 1; }
        var context = this.mainContext;
        context.globalAlpha = alpha;
        context.beginPath();
        context.moveTo(x1, y1);
        context.lineTo(x2, y2);
        if (lineWidth) {
            context.strokeStyle = color;
            context.lineWidth = lineWidth;
            context.stroke();
        }
    };
    SimpleCanvas.prototype.drawCircle = function (x, y, radius, strokeColor, lineWidth, fillColor, alpha) {
        if (strokeColor === void 0) { strokeColor = "black"; }
        if (lineWidth === void 0) { lineWidth = 1; }
        if (fillColor === void 0) { fillColor = ""; }
        if (alpha === void 0) { alpha = 1; }
        var context = this.mainContext;
        context.beginPath();
        context.lineWidth = lineWidth;
        context.globalAlpha = alpha;
        context.arc(x, y, radius, 0, Math.PI * 2, true);
        context.closePath();
        if (lineWidth) {
            context.strokeStyle = strokeColor;
            context.stroke();
        }
        if (fillColor) {
            context.fillStyle = fillColor;
            context.fill();
        }
    };
    SimpleCanvas.prototype.drawImage = function (src, x, y, width, height, alpha) {
        if (alpha === void 0) { alpha = 1; }
        var context = this.mainContext;
        var img = new Image();
        img.src = src;
        context.globalAlpha = alpha;
        img.onload = function () {
            context.drawImage(img, x, y, width, height);
        };
    };
    return SimpleCanvas;
}());
export default SimpleCanvas;
//# sourceMappingURL=index.js.map