var x = 50;
var y = 50;
var square = 50;

var b = new Rectangle(
      new Point(x/2,y/2),
      new Size(square,square));

var first = new Path.Rectangle(b);
first.fillColor = 'black';
first.onFrame = fade;

function onMouseMove(event) {
    box = new Path.Rectangle(b);
    box.position.x = snap(event.point.x, square);
    box.position.y = snap(event.point.y, square);
    box.fillColor = 'black';
    box.onFrame = fade;
    console.log(box.bounds);
}

function snap(x, div) {
    return Math.round(x/div)*div;
}

function fade(box) {
    this.opacity -= .01;
      if (this.opacity <= 0)
        this.opacity = 0;
}

function fadeOut(box) {

}
