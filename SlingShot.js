class SlingShot {
    constructor(bA,pB){
    this.bodyA = bA
    this.pointB = pB
    var options = { 
        stiffness : 0.4,
        length : 50 ,
        bodyA : bA ,
        pointB :  pB
    }
    
    
    this.slingShot = Matter.Constraint.create(options)
    Matter.World.add(world,this.slingShot)
    this.image1 = loadImage("sprites/sling1.png")
    this.image2 = loadImage("sprites/sling2.png")
    this.image3 = loadImage("sprites/sling3.png")
}

 display(){
    push()
    stroke (48,22,8)
    strokeWeight ("5")
   if(this.slingShot.bodyA!=null){// ! and = "means not equal"
      var pointB = this.slingShot.pointB
      var pointA = this.slingShot.bodyA.position
     

    if(pointA.x<200){
     line (pointA.x-20,pointA.y,pointB.x-10,pointB.y)
     line (pointA.x-20,pointA.y,pointB.x+30,pointB.y)
     image(this.image3,pointA.x-30,pointA.y,15,30)
    }
    else {
        line (pointA.x+25,pointA.y,pointB.x-10,pointB.y)
        line (pointA.x+25,pointA.y,pointB.x+30,pointB.y)
        image(this.image3,pointA.x+25,pointA.y,15,30)

    } }
    

    image(this.image1,200,20)
    image(this.image2,170,20)
    pop()
}

 fly (){
this.slingShot.bodyA= null 
}
attach(){
    this.slingShot.bodyA=this.bodyA
}
}

 

