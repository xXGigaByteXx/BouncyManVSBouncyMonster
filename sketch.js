const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var example = 0;
var ground;
var superhero, monster;
var box1;
var box2;
var box3;
var box4;
var box5;
var box6;
var box7;
var box8;
var box9;
var box10;
var box11;
var box12;
var box13;
var box14;
var box15;
/*var box16;
var box17;
var box18;
var box19;
var box20;*/


function preload() {

}
function setup() {
    engine = Engine.create();
    world = engine.world;
    canvas = createCanvas(1600, 800);
    ground = new Ground(800, 780, 1600, 20);
    superhero = new Person(300, 400, 200, 200)
    monster = new Person(1200, 400, 200, 200);
    if(example = 1) {
        superhero.image = loadImage("Superhero-01.png");
    }
    if(example = 0) {
        superhero.image = loadImage("Superhero-02.png");
    }
    box1 = new Box(700, 100, 100, 100);
    box2 = new Box(700, 100, 100, 100);
    box3 = new Box(700, 100, 100, 100);
    box4 = new Box(700, 100, 100, 100);
    box5 = new Box(700, 100, 100, 100);
    box6 = new Box(800, 100, 100, 100);
    box7 = new Box(800, 100, 100, 100);
    box8 = new Box(800, 100, 100, 100);
    box9 = new Box(800, 100, 100, 100);
    box10 = new Box(800, 100, 100, 100);
    box11 = new Box(900, 100, 100, 100);
    box12 = new Box(900, 100, 100, 100);
    box13 = new Box(900, 100, 100, 100);
    box14 = new Box(900, 100, 100, 100);
    box15 = new Box(900, 100, 100, 100);
    /*box16 = new Box(1000, 100, 100, 100);
    box17 = new Box(1000, 100, 100, 100);
    box18 = new Box(1000, 100, 100, 100);
    box19 = new Box(1000, 100, 100, 100);
    box20 = new Box(1000, 100, 100, 100);*/
}
function draw() {
    //console.log("X: " + mouseX + ", Y: " + mouseY)
    console.log(monster.body.position.x)
    background("black");
    //text("X: " + mouseX + ", Y: " + mouseY, mouseX, mouseY)
    Engine.update(engine);
    ground.display();
    superhero.display();
    monster.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    /*box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();*/

}

function mouseDragged() {
    Matter.Body.setPosition(superhero.body, {x: mouseX, y: mouseY});
    example = 1;
}