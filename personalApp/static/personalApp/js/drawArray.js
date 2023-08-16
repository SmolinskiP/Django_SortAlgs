export function drawArray(X, Y, LastX, LastY) {
	for (var i = 0; i < X.length; ++i) {
		ctx.beginPath();
		ctx.moveTo(LastX[i],LastY[i]);
		ctx.lineTo(X[i],Y[i]);
		ctx.stroke();
	}
}
