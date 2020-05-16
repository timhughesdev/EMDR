var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

var x = Math.random() * innerWidth;
var y = Math.random() * innerHeight;
var dx = (Math.random() - 0) * 30;
var dy = (Math.random() - 0) * 8;
var radius = 25;
function animate() {
    window.requestAnimationFrame(animate);
    c.clearRect(0, 0,  innerWidth, innerHeight);

    c.beginPath();
    c.strokeStyle = 'yellow';
    c.lineWidth = 10;
    c.fillStyle = 'darkblue';
    c.arc(x, y, radius, 0, Math.PI * 2, false);
    c.stroke();

    if (x + radius > innerWidth || x - radius < 0) {
        dx = -dx;
    }
    if (y + radius > innerHeight || y - radius < 0) {
        dy = -dy;
    }
    x += dx;
   // y += dy;
}
animate();