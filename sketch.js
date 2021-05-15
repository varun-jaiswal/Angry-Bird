const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, pig1 , bgImg ,  ground2 , slingShot , bgImg2 , bgFinal
var gameState 
var onsling = 1
var notOnSling =2
var timeAPI = "http://worldtimeapi.org/api/timezone/Asia/Kolkata"

function preload (){
bgImg = loadImage ("sprites/bg.png")
bgImg2 = loadImage ("sprites/bg2.jpg")
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,height,1200,20)
    ground2 = new Ground(150,300,300,170)

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);
    

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(100,100);

    gameState = onsling 

    var pointB = {
        x : 200 , 
        y : 50 ,
    }    
    slingShot = new SlingShot(bird.body,pointB)

    var list = [
        1,2,3,4
    ]
    console.log(list[0])//printing first element of list 
    console.log(list[1])

    var complicatedList = [
        [1,2],
        [3,4],
    ]
    console.log(complicatedList[0])//will print [1,2]
    getTime()


}
    

function draw(){
    if(bgFinal!=null){
    background(bgFinal);
    }else{
        background(bg2Img)
    }
    Engine.update(engine);
    box1.display();
    box2.display();
    ground.display();
    ground2.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();
    slingShot.display();

    bird.display();}

function mouseDragged() {
    //console.log("bird is dragged")
        if(gameState === onsling){
            Matter.Body.setPosition(bird.body,{
                x : mouseX , 
                y : mouseY  })
        }
}

function mouseReleased () {
    console.log("bird is released")
    slingShot.fly()
    gameState=notOnSling
 }

function keyPressed()  {
    if(keyCode===32)  {
      slingShot.attach()
      Matter.Body.setPosition(bird.body,{
          x :  200 ,
          y : 50 ,
      })
      gameState=onsling
      bird.clearSmoke()
      Matter.Body.setAngle(bird.body,0)
      Matter.Body.setAngle(bird.body,0) 
  
    }
  
  }

 async function getTime(){
      var timeResponse = await fetch (timeAPI)
      console.log(timeResponse)
      var timeResponseJSON = await timeResponse.json()
      console.log(timeResponseJSON.datetime)
      var hour = timeResponseJSON.datetime.slice(11,13)
      console.log(hour)
      if(hour<18){
     bgFinal=bgImg2
     }else{
        bgFinal=bgImg
    }

  }

  