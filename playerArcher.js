class PlayerArcher{
    constructor(x, y, width, height, archerAngle) {
        var options = {
          restitution: 0.8,
          friction: 1.0,
          density: 1.0,
          isStatic: true
        };
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x, y, this.width, this.height, options);
        this.image = loadImage("./assets/playerArcher.png");
        World.add(world, this.body);
      }
    
     display() {
      if(move === "UP" && playerArcher.body.angle < 1.77){
        angleValue = 0.1;
      }else{
        angleValue = -0.1;
      }
    
      if(move === "DOWN" && playerArcher.body.angle < 1.47){
        angleValue = -0.1;
      }else{
        angleValue = 0.1;
      }

        var pos = this.body.position;
        var angle = this.body.angle;

        Matter.Body.setAngle(this.body, -PI/2);
    
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}