class Bird extends BaseBox {
    constructor(x, y) {
      var width = 50;
      var height = 50;
      super(x,y,width,height)  
      this.image=loadImage("sprites/bird.png")
      this.images=loadImage("sprites/smoke.png")
      this.trajectory=[]
        
      
    };
    display(){
      var pos = this.body.position;
      super.display()
      if(this.body.position.x>250 && this.body.speed>10){
        var position=[this.body.position.x,this.body.position.y]
      this.trajectory.push(position)//this.trajectory is an array of arrays
      }
      for(var i=0 ; i<=this.trajectory.length-1 ; i=i+1){
        var item = this.trajectory[i]
        image(this.images,item[0],item[1],8,8 )

      }
      }
    
       clearSmoke (){
        
        this.trajectory=[]

      }

    }

      
  