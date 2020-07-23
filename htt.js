let canvas = document.getElementById('sandbox');
	context = canvas.getContext('2d');
let circle;

circle = new Path2D();
circle.arc(150, 150, 100,0,2 * Math.PI);
context.fillStyle = 'rgb(230,230,230)';
context.fill(circle);

let R = 300/2;
	for(let d = 0;d < 60;  ++d){
		let angle = (d/60) * (2 * Math.PI);
		let pX = Math.cos(angle)* R;
		let pY = -Math.sin(angle)* R;
		let qX = 0.9 * pX;
		let qY = 0.9 * pY;
		pX += R; pY += R;
		qX += R; qY += R;


	}