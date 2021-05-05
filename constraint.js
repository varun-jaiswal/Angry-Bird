class Chain {
    constructor(bA,bB){
    this.bodyA = bA
    this.bodyB = bB
    var options = { 
        stiffness : 0.4,
        length : 50 ,
        bodyA : bA ,
        bodyB :  bB
    }
    
    
    chain = Matter.Constraint.create(options)
    Matter.World.add(world,chain)
}

 display(){
     push()
    stroke ("black")
    strokeWeight ("5")
    line (this.bodyA.position.x,this.bodyA.position.y,this.bodyB.position.x,this.bodyB.position.y) 
    pop()
}

}

