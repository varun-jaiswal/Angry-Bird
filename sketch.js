const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, pig1 , bgImg , log6 ,  chain , ground2

function preload (){
bgImg = loadImage ("sprites/bg.png")
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,height,1200,20)
    ground2 = new Ground(150,300,320,250)

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);
    log6 = new Log (100,50,100,PI/2)

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(100,100);

    chain = new Chain(bird.body,log6.body)

}
    

function draw(){
    background(bgImg);
    Engine.update(engine);
    box1.display();
    box2.display();
    ground.display();
    ground2.display();
    pig1.display();
    log1.display();
    log6.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();
    chain.display();

    bird.display();}