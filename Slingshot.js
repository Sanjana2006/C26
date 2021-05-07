class Slingshot {
    constructor(b1,point){
        var options = {
            bodyA:b1,
            pointB:point,

            length:10,
            stiffness:2
        }
    
        this.sling = Constraint.create(options);
    
        World.add(world, this.sling);
    }

    display(){
        var pointA = this.sling.bodyA.position;
        var pointB = this.sling.pointB;

        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}