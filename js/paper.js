var x = 50;
var y = 50;
// tool.fixedDistance = 100;
var b = new Rectangle(
      new Point(0,0),
      new Size(100,100));
function onMouseMove(event) {
    // console.log(event.point);
    box = new Path.Rectangle(b);
    box.position.x = snap(event.point.x, 100);
    box.position.y = snap(event.point.y, 100);
    box.fillColor = 'black';
    // setTimeout(function() {
    //   box.fillColor = 'white';
    // },1000);
    // box.blendMode = 'xor';
    // box.opacity = .9
    box.onFrame = fade;
    // fadeOut(box);
}

function snap(x, div) {
    return Math.round(x/div)*div;
}

function fade(box) {
  // setTimeout(function() {
    // box.fillColor = 'white';
  // },1000);
    // while(event.count < 100){
    //   //
    // }
    this.opacity -= .01;
      if (this.opacity <= 0)
        this.opacity = 0;
}

function fadeOut(box) {

}

// function onFrame(event) {
//     box.opacity -= 20;
// }
// for (var i = 0; i < 10; i++) {
//   // for (var k = i; k < 5; i++) {
//     var box = new Path.Rectangle(
//       new Point(x,0),
//       new Size(100,100));
//     box.strokeColor = 'black';
//     box.onMouseEnter = enter;
//     box.onMouseLeave = leave;
//     x += 100;
//   // }
//   // y += 100;
// }

// for (var i = 0; i < 3; i++) {
//   for (var k = 0; k < 3; k++) {
//     var box = new Path.Rectangle(
//       new Point(x,y),
//       new Size(100,100));
//     box.strokeColor = 'white';
//     box.selected = true;
//     box.onMouseEnter = enter;
//     box.onMouseLeave = leave;
//     y += 100;
//   }
//   x += 100;
//   y=0
// }
// var b = new Path.Rectangle(
    //   new Point(0,0),
    //   new Size(100,100));
// var bd = new SymbolDefinition(b);

// for (var i = 0; i < 5; i++) {
//   for (var k = 0; k < 6; k++) {
//     var box = b.clone();
//     box.fillColor = 'red';
    // box.strokeColor = 'white';
    // box.position.x += i * box.bounds.width;
    // box.position.y += k * box.bounds.height;
    // box.selected = true;
    // // console.log(bd.class);
    // box.onMouseEnter = enter;
    // box.onMouseLeave = leave;
    // y += 100;
//   }
//   y=0;
//   x += 100;
//   y=50;
// }

// box.onMouseMove = function(event) {
//     this.opacity = Math.random();
// }

// function enter(event) {
//   console.log(this.bounds);
//   this.fillColor = new Color(1, 0, 0);
// }

// function leave(event) {
//   console.log("Mouse Out")
//   this.fillColor = 'white';
// }

// box.onMouseEnter = function(event) {
//     this.fillColor = 'white';
// }

// function onMouseEnter(event) {
//     box.fillColor = 'white';
// }
