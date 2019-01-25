var scaleBiker = 1;
var xBiker = 295;
var yBiker = 345;
var move_biker;

function setup() {
   createCanvas(400, 400);

   move_biker = true;
}

function trunk(x, y){
	fill(228, 211, 218);
	rect(x, y, 10, 120);
	
	push();
	stroke(89, 70, 65);
	strokeWeight(1);
	line(x+1, y+85, x+5, y+85);
	line(x+3, y+60, x+5, y+60);
	line(x+2, y+30, x+7, y+30);
	line(x+4, y+45, x+9, y+45);
	line(x+1, y+35, x+8, y+35);
	line(x+1, y+70, x+5, y+70);
	line(x+5, y+95, x+8, y+95);
	line(x+2, y+90, x+7, y+90);
	line(x+2, y+100, x+9, y+100);
	line(x+6, y+80, x+9, y+80);
	line(x+5, y+55, x+9, y+55);
	pop();
}

function treeTop(x,y){

	push();
	translate(x, y);
	rotate(12*PI/13);
	fill(129, 136, 94);
	ellipse(0,0, 60, 100);
	pop();
	
	fill(129, 136, 94);
	arc(x-23, y-70, 80, 80, PI/4, PI/2);

	push();
	translate(x-5, y-45);
	rotate(6*PI/8);
	fill(129, 136, 94);
	ellipse(0, 0, 20, 50);
	pop();
	
	push();
	translate(x-23, y-30);
	fill(129, 136, 94);
	ellipse(0, 0, 10, 60);
	pop();
}

// Biker
function drawBiker(x, y, rot, sc){
		push();
		translate(x, y);
		rotate(rot);
		scale(sc);
		
		// Tires
			push();
			noFill();
			stroke(85);
			strokeWeight(2);
			// Back tire
			ellipse(-50, 10, 23, 19);
			// Front tire
			ellipse(10, 10, 23, 19);
			pop();

		// Back leg
			push();
			translate(-35, -15);
			rotate(-PI/32);
			fill(80,70,136);
			rect(-1,4,5,20);
			pop();

		// Frame
			push();
			noFill();
			stroke(114, 157, 202);
			strokeWeight(1.75);
			triangle(-50, 10, -35, -5, -27, 13);
			triangle(-35, -5, 0, -5, -26,13);
			line(0, -5, 10, 10);
			pop();

		// Chain and pedal
			fill(114, 157, 202);
			ellipse(-27, 13, 8, 8);
			fill(175,179,191);
			ellipse(-27, 13, 5, 5);
			fill(60);
			ellipse(-27, 17, 11, 3);
			push();
			translate(-27, 13);
			rotate(PI/12);
			fill(99,108,71);
			rect(-1, -7, 2, 9);
			rotate(-PI/12);
			rect(1, -7, 4, 2);
			pop();

		// Seat
			push();
			translate(-37, -10);
			rotate(-PI/12);
			fill(199,193,187);
			rect(0, 0, 2, 5);
			pop();
			push();
			translate(-38, -12);
			rotate(PI/2.5);
			fill(96,76, 74);
			ellipse(0, 0, 4, 8);
			pop();

		// Foot and leg
			push();
			translate(-23, 2);
			rotate(PI/12);
			fill(203,193,191);
			rect(-3,-7, 5, 8);
			fill(85);
			ellipse(1, 2, 10, 4);
			fill(96, 63, 64);
			rect(-3, -14, 5, 9);
			rect(-8,-16, 9, 6);
			ellipse(0, -13.75, 5, 5);
			fill(80,70,136);
			ellipse(-11, -13,15,10);
			pop();

		// Shirt, neck, head
			//Neck and head
			push();
			translate(-34, -18);
			rotate(-PI/48);
			fill(96, 63, 64);
			rect(17,-17, 8,6);
			pop();
			push();
			translate(-34, -18);
			rotate(PI/18);
			fill(96, 63, 64);
			ellipse(22, -20, 10, 8);
			pop();
				//Shirt
				push();
				translate(-34, -18);
				fill(103, 113, 75);
				quad(0, 0, 17, -19.5, 19, -8, 7, .5);
				push();
				rotate(-6*PI/8);
				fill(103, 113, 75);
				ellipse(1, 12, 8, 27);
				pop();

		// Arms
			push();
			translate(16, -7);
			fill(96, 63, 64);
			quad(0, 1, 3, -1 , 17.5, 14, 13, 14);
			pop();

		// Hat
			push();
			translate(15, 0);
			fill(255);
			arc(11, -17.5, 9, 8, 9*PI/8, PI/8);
			pop();
			push();
			translate(27, -17.5);
			rotate(PI/6);
			stroke(255);
			strokeWeight(.75);
			line(0,0, 7, -1);
			pop();
		pop();
}

function draw()
{
	background(223, 208, 215);
	noStroke();

	// Text
		push();
		fill(222, 100, 126);
		textSize(72);
		textFont("Helvetica");
		text("ESCAPE", 40, 90);
		pop();

	// Sky
		fill(128, 171, 216);
		rect(0, height/4, width, 3*height/4);

	// Grass
		fill(107, 116, 75);
		rect(0, 5*height/6, width, height/6);

	// Path
		fill(206, 198, 205);
		rect(0, 7*height/8, width, height/16);

	// Tree Trunks
		push();
		trunk(50, 217);
		trunk(180, 217);
		trunk(308, 217);
		pop();

	/* Mouse Tracker
		fill(0);
		rect(mouseX + 1, mouseY - 20, 80, 20);
		fill(255);
		text('(' + mouseX + ", " + mouseY + (')'), mouseX, mouseY);
	*/

	// Tree tops
		treeTop(50, 190);
		treeTop(183,190);
		treeTop(310, 190);

	drawBiker(xBiker, yBiker, 0, 1);
}

