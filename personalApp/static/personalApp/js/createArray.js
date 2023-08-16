
export function createArray(X, Y, LastX, LastY, number, height) {
	for (var i = 0; i < number; i++) {
		X.push(pos_x);
		LastX.push(pos_x);
		Y.push(height);
		LastY.push(pos_y);
		pos_x = pos_x - delay;
		pos_y = pos_y - delay_y;
		
	}
}

export function createStepArray(X, Y, LastX, LastY, number, height) {
	for (var i = 0; i < number; i++) {
		X.push(pos_x);
		LastX.push(pos_x);
		Y.push(height);
		pos_x = pos_x - delay;
		pos_y = pos_y - delay_y;
	}
	var step = LastX.length / 10;
	var steep = height/10;
	while (LastY.length < LastX.length) {
		if (LastY.length < step){
			LastY.push(steep - height/10);
		}
		else{
			step = (step + LastX.length/10);
			steep = (steep + height/13);
		}
	}
	LastY = LastY.reverse();
	
}