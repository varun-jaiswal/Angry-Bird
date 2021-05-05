class Bird extends BaseBox {
    constructor(x, y) {
      var width = 50;
      var height = 50;
      super(x,y,width,height)  
      this.image=loadImage("sprites/bird.png")
    };
    display(){
      var pos = this.body.position;
      pos.x = mouseX;
      pos.y = mouseY;
      super.display()
   }}
  