var canvas;
var music;
var block1,block2,block3,block4;
var box;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(100,500,150,20);
    block2 = createSprite(300,500,150,20);
    block3 = createSprite(500,500,150,20);
    block4 = createSprite(700,500,150,20);

    block1.shapeColor = "blue";
    block2.shapeColor = "orange";
    block3.shapeColor = "maroon";
    block4.shapeColor = "green";
box = createSprite(random(20,750),100,20,20);
box.shapeColor = "white";
box.setVelocity(3,2);


    //create 4 different surfaces



    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite

    edges = createEdgeSprites();
    box.bounceOff(edges);

    if(block1.isTouching(box)){
        box.shapeColor = block1.shapeColor
        music.loop();
        box.bounceOff(block1);
    }

    if(block2.isTouching(box)){
        box.shapeColor = block2.shapeColor
        music.loop();

        box.bounceOff(block2);

    }if(block3.isTouching(box)){
        box.shapeColor = block3.shapeColor
        //box.bounceOff(block3);

        box.setVelocity(0,0);
        music.stop();

    }if(block4.isTouching(box)){
        box.shapeColor = block4.shapeColor
        music.loop();

        box.bounceOff(block4);
    }
drawSprites();


    //add condition to check if box touching surface and make it box
}
