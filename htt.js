let canvas = document.getElementById('sandbox');
let	context = canvas.getContext('2d');

let w = 298;
let R = w / 2;

drawWatch()

function newDot(x,y){
	return{x: x, y: y};
}

function drawWatch() {
	context.clearRect(0, 0, w, w);
	drawDel();
	drawArrows();
	drawCircles();
	setTimeout(drawWatch, 1000);
}

function drawDel() {
	for (let d = 0; d < 60; d++){
		let dot1 = calculateDot(d);
		let dot2 = alphaDot(0.9, dot1);
		width = (d % 5 == 0 ? 3 : 1);
		color = "black";
		drawLine(dot1, dot2, width,color);
	}
}

function drawCircles() {
	drawCircle(R , "rgba(200,200,200,0.3)");
	drawCircle(R *0.04, "rgba(255,215, 0, 1)");
}

function drawCircle(rad, color){
	let circle = new Path2D();
	circle.arc(w/2+1, w/2+1, rad, 0, 2*Math.PI);
	context.strokeStyle = 'black';
	context.fillStyle = color;
	context.stroke(circle);
	context.fill(circle);
}

function calculateDot(pos) {
	let angle = Math.PI/2 - (pos/60) * 2 * Math.PI;
	return newDot(R + Math.cos(angle) * R, R - Math.sin(angle) * R);
}

function alphaDot(alpha, dot){
	return newDot(R + alpha * (dot.x - R), R + alpha * (dot.y - R))
}

function drawLine(dot1, dot2, width,color){
	let line = new Path2D();
	context.lineWidth = width;
	context.strokeStyle = color;
	line.moveTo(dot1.x, dot1.y);
	line.lineTo(dot2.x, dot2.y);
	context.stroke(line);
}

function drawArrows() {
	let date = new Date();
	let h = date.getHours()%12;
	let m = date.getMinutes();
	let s = date.getSeconds();
	center = newDot(w/2+1, w/2+1);
	let doth = alphaDot(0.6, calculateDot(h*5));
	drawLine(center, doth, 8, 'black');

	let dotm = alphaDot(0.8, calculateDot(m));
	drawLine(center, dotm, 5, 'black');

	let dots = alphaDot(0.95, calculateDot(s));
	drawLine(center, dots, 2, 'red');
}