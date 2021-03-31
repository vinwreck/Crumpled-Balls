class Paper {
    
	constructor(x,y)
	{

        this.body=Bodies.circle(x,y,r);
        this.image = loadImage("paper.png");
    }
    
	display() {
        this.body.position.x=mouseX;
        this.body.position.y=mouseY;
        super.display();

        push()
			translate(posLeft.x, posLeft.y);
			imageMode(CENTER);
			strokeWeight(4);
			angleMode(RADIANS)
			fill(255)
			rotate(this.angle)
			image(this.image,0,0,this.dustbinWidth,this.height);
			pop()

			push()
			translate(posRight.x, posRight.y);
			rectMode(CENTER)
			strokeWeight(4);
			angleMode(RADIANS)
			fill(255)
			rotate(-1*this.angle)
			rect(0,0,this.wallThickness, this.dustbinHeight);
			pop()

			push()
			translate(posBottom.x, posBottom.y+10);
			rectMode(CENTER)
			strokeWeight(4);
			angleMode(RADIANS)
			fill(255)
			rect(0,0,this.dustbinWidth, this.wallThickness);
			pop()
			
	}

}
    
