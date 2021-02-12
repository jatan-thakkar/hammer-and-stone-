class Rubber {
    constructor(x, y, r) {
        var options = {
    restitution:0.3,
    friction:5,
    density:1

        }
        this.body = Bodies.circle(x, y,r, options);
        this.width = width;
        this.height = height;
        this.r=r
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipseMode(CENTER);
        ellipse( 0, 0, this.r, this.r);
        pop();
      }
}