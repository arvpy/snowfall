const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var bg,bgImg;

var snow1
/*,snow2,snow3,snow4,snow5,snow6,snow7,snow8,snow9,snow10,snow11,snow12,
snow13,snow14,snow15,snow16,snow17,snow18,snow19,snow20;*/
var maxnum=100;
var snowarray=[]

function preload() {
  bg = loadImage("snow3.jpg");
}

function setup() {
  createCanvas(900,600);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  for(var i=0; i<maxnum; i++){
            snowarray.push(new Snow1(random(0,600), random(0,600)));
        }
      }





function draw() {
  background(bg);

  Engine.update(engine);
  for(var i = 0; i<maxnum; i++){
        //
        snowarray[i].updatepos();
        snowarray[i].display();


    }





}
