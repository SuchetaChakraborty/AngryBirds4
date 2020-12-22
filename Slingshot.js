class SlingShot{
    constructor(bodyA, pointB){
        this.image1 = loadImage("sprites/sling1.png");
        this.image2 = loadImage("sprites/sling2.png");
        this.image3 = loadImage("sprites/sling3.png");
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            stroke(48, 22, 8);

            if(pointA.x < 220){
                strokeWeight(10);
                line(pointA.x-20, pointA.y, pointB.x-10, pointB.y);
                line(pointA.x-20, pointA.y, pointB.x+30, pointB.y-3);
            }
            else{
                strokeWeight(4);
                 line(pointA.x+25, pointA.y, pointB.x-10, pointB.y);
                 line(pointA.x+25, pointA.y, pointB.x+30, pointB.y-3);
            }
            
        }

        image(this.image1, 200, 20);
        image(this.image2, 170, 20);
       // image(this.image, 200, 20);
    }
    
}