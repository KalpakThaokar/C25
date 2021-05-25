class ground
{
	constructor(x,y,w,h)
	{
		var options={
			isStatic:true,			
		    restution : 0.3,
            friction : 0.5,
			density : 1.2,
		}
		
		this.body=Bodies.rectangle(x, y, w, h , options);
 		World.add(world, this.body);

	}
	display()
	{
			
			var groundPos=this.body.position;		

			push()
			translate(groundPos.x, groundPos.y);
			rectMode(CENTER)
			//strokeWeight(4);
			fill(200,0,225)
			rect(this.ground.position.x,this.ground.position.y,1200, 20);
			pop()
			
	}

}