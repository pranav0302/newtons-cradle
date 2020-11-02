class StringThread{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1,
            length: 10
        }

        this.pointB = pointB
        this.thread = Constraint.create(options);
        World.add(world, this.thread);
    }


    display(){

            var pointA = this.thread.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(8);
            stroke(48, 22, 8)
            line(pointA.x , pointA.y , pointB.x , pointB.y);

     
    }
}