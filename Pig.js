class Pig extends BaseBox{
    constructor(x, y) {
      var width = 50;
       var height = 50;
      super(x,y,width,height)
      this.visiblity=255//this.visiblity is transperacy  // 255 is the highest one byte number
    this.image=loadImage("sprites/enemy.png")
  }   
    
    display(){
      push()
      if(this.body.speed>3){
        console.log(this.body.speed)
        Matter.World.remove(world,this.body)
        this.visiblity=this.visiblity-10
        tint(255,this.visiblity)
        image(this.image,this.body.position.x,this.body.position.y,50,50)
      }  
      else{
        super.display()
      }
      pop()


      
    }
  
  }
  
    