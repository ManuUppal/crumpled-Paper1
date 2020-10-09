class Paper{
    constructor(x,y){
        var paper_options={
            isStatic: false,
            restitution: 0.3,
            friction:0.5,
            density:1.2
        }
	this.x=x;
	this.y=y;
        this.radius =40;
        this.body=Bodies.circle(this.x,this.y,this.radius/2,paper_options);
	
        World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
	push();
	translate(pos.x, pos.y)
        ellipseMode(CENTER);
        fill("pink");
        ellipse(0, 0, this.radius, this.radius);
	pop();
      }
}