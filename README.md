# SimpleCanvas
**Simple HTML5 Canvas wrapper written with typescript.**

This is a simple wrapper around HTML5 canvas. It simplifies using canvas.

Example:
```
var canvas = new SimpleCanvas("my-canvas");
canvas.drawLine(20, 20, 150, 200, "red");
```

# API

**constructor**

`var canvas = new SimpleCanvas("mycanvas");`
Creates a new SimpleCanvas.

*Parameters:*

| Name | Type | Description | Default value
|---|---|---|---
container | string or HTMLElement  | Either ID of the container element or ID of the canvas or container element itself or the canvas element itself |

if the 'container' argument is not a canvas (or ID of a canvas element), then a canvas will be created inside the container.

- **drawLine(x1, y1, x2, y2, color, lineWidth, alpha)**

Draws a line from (x1,y1) to (x2,y2).

*Parameters:*

| Name | Type | Description | Default value
|---|---|---|---
x1, y1 | number | Starting point coordinates |
x2, y2 | number | End point coordinates |
color | string | Drawing color | "black"
lineWidth | number | Line width | 1
alpha | floating point number | Alpha. 0 means transparent. 1 means opaque. | 1



- **drawRect(x, y, width, height, strokeColor, lineWidth, fillColor, alpha)**
    
Draws a rectangle. Optionally filled with a color.

*Parameters:*

| Name | Type | Description | Default value
|---|---|---|---
x, y | number | Top-left corner coordinates |
width, height | number | Size of the rectangle |
strokeColor | string | Lines color | "black"
lineWidth | number | Line width | 1
fillColor | string | Fill color | '' (not filled)
alpha | floating point number | Alpha. 0 means transparent. 1 means opaque. 

- **drawCircle(x, y, radius, strokeColor, lineWidth, fillColor, alpha)**

Draws a circle. Optionally filled with a color.

*Parameters:*

| Name | Type | Description | Default value
|---|---|---|---
x, y | number | Center coordinates |
radius | number | Circle radius |
strokeColor | string | Line color | "black"
lineWidth | number | Line width | 1
fillColor | string | Fill color | '' (not filled)
alpha | floating point number | Alpha. 0 means transparent. 1 means opaque. 

- **drawImage(src, x, y, width, height, alpha)**
    
Draws an image with specified URL on the canvas.

*Parameters:*

| Name | Type | Description | Default value
|---|---|---|---
src | string | URL of the image | 
x, y | number | Top-left corner coordinates |
width, height | number | Size of the image |
alpha | floating point number | Alpha. 0 means transparent. 1 means opaque. 
