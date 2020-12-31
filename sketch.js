//create Physics Engine
//namespacing   short form
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, box;
var box2;
function setup(){
    var canvas = createCanvas(400,400);
    //create engine and world
    engine = Engine.create();
    world = engine.world;


//create box
box=new Box(200,300,50,50)
box2=new Box(240,100,50,100)

//create ground
ground=new Ground()

    Engine.run(engine);
}

function draw(){
    background(0);
    box.display()
    box2.display()
    ground.display()
}