class Paper {
    constructor(x, y, r) {
        var options = {
            "isStatic": false,
            "retitution": 0.3,
            "friction": 0.5,
            "density": 1.2
        }
        this.body = Bodies.circle(x, y, r / 2, options)
        this.image=loadImage("paper.png");
        World.add(world, this.body);
    }
    
    display() {
        push()
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER)
        fill(255, 0, 255);
        image(this.image,0, 0, this.r, this.r)
        pop()
    }
}