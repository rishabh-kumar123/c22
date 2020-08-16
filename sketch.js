const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var eng, wor;
var gro;
var ball;

function setup(){
    var canvas = createCanvas(400,400);
    eng = Engine.create();
    wor = eng.world;

    var ground_options ={
        isStatic: true
    }

    gro = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(wor,gro);

var b_options={
    restitution:1
}
    ball=Bodies.circle(200,200,20,b_options);
    World.add(wor,ball);

    console.log(gro);
}

function draw(){
    background(0);
    Engine.update(eng);
    rectMode(CENTER);
    ellipseMode(RADIUS)
    ellipse(ball.position.x,ball.position.y,20,20);
    rect(gro.position.x,gro.position.y,400,20);
}