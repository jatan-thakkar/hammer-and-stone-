class Hammer {
    constructor(x, y, width, height) {
        var options = {
    density:2,
    friction:1,
    restitution:0.5
        }
        this.body = Bodies.rectangle(x, y, 150,40, options);
        this.width = 150;
        this.height = 40;
        
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        this.body.position.x=mouseX
        this.body.position.y=mouseY
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        rect( 0, 0, this.width, this.height);
        pop();
      }
}