class Bob {
    constructor(x, y,diameter) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      this.x=x;
      this.y=y;
      this.diameter = diameter;
      this.body = Bodies.circle(x, y, this.diameter/2, options);
     
      
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
      
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS);
    
      strokeWeight(4);
      stroke("blue");
      
      fill("red");
      ellipse(0, 0, this.diameter/2,this.diameter/2);
      pop();

     

    }
  };
  