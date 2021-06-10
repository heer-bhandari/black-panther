var canvas = new fabric.Canvas("myCanvas");
player_x = 10;
player_y = 10;
block_image_width = 30;
block_image_height = 30;
var player_object = "";
var block_image_object;

function player_update() { fabric.Image.fromURL("player.png", function(Img) 
{ player_object = Img; 
    player_object.scaleToWidth(150); 
    player_object.scaleToHeight(140); 
    player_object.set({ top:player_y, left:player_x });
 canvas.add(player_object); }); }


function newImage(get_image) { fabric.Image.fromURL( get_image, function(Img) 
{ block_image_object = Img; 
    block_image_object.scaleToWidth(block_image_width); 
    block_image_object.scaleToHeight(block_image_height); 
    block_image_object.set({ top:player_y, left:player_x });
 canvas.add(block_image_object); }); }

 window.addEventListener("keydown" , myKeyDown);
 function myKeyDown(e){
    keyPressed = e.keyCode; 
    console.log(keyPressed); 
    if(e.shiftKey == true && keyPressed == '80') { 
    console.log("p and shift pressed together"); 
    block_image_width = block_image_width + 10; 
    block_image_height = block_image_height + 10; 
    document.getElementById("mine_width").innerHTML = block_image_width; 
    document.getElementById("mine_height").innerHTML = block_image_height; }

    if(e.shiftKey == true && keyPressed == '77') { 
        console.log("m and shift pressed together"); 
        block_image_width = block_image_width - 10; 
        block_image_height = block_image_height - 10; 
        document.getElementById("mine_width").innerHTML = block_image_width; 
        document.getElementById("mine_height").innerHTML = block_image_height; }
       
        if(keyPressed == '38') { 
            up(); 
            console.log("up"); }
        
            if(keyPressed == '40') { 
                down(); 
                console.log("down"); }

                if(keyPressed == '37') { 
                    left(); 
                    console.log("left"); }

                    if(keyPressed == '39') { 
                        right(); 
                        console.log("right"); }
    

                        if(keyPressed == '67') 
                        {
                            newImage('B-C.jpeg'); 
                            console.log("c"); }


                            if(keyPressed == '77') 
                            {
                              newImage('B-M.jpeg'); 
                                console.log("m"); }


                            if(keyPressed == '78') 
                        {
                          newImage('B-N.jpg'); 
                              console.log("n"); }


                              if(keyPressed == '80') 
                              {
                                newImage('player.png'); 
                                    console.log("p"); }


                                    if(keyPressed == '83') 
                              {
                                newImage('Screen Shot 2021-05-13 at 2.51.19 PM'); 
                                    console.log("s"); }


                                    
                                    if(keyPressed == '66') 
                              {
                                newImage('Screen Shot 2021-05-13 at 2.52.30 PM'); 
                                    console.log("b"); }


                                    if(keyPressed == '65') 
                                    {
                                      newImage('Screen Shot 2021-05-13 at 2.52.41 PM'); 
                                          console.log("a"); }


                                    if(keyPressed == '84') 
                                    {
                                      newImage('Screen Shot 2021-05-13 at 2.52.53 PM'); 
                                          console.log("t"); }

                                          
 }
function up(){
  if (player_y >= 0) {
player_y = player_y - 10;
console.log ("player_x = " + player_x);
console.log ("player_y = " + player_y);
canvas.remove(player_object);
player_update();
  }
}

function down(){
    if (player_y <= 600) {
  player_y = player_y + 10;
  console.log ("player_x = " + player_x);
  console.log ("player_y = " + player_y);
  canvas.remove(player_object);
  player_update();
    }
  }

  function left(){
    if (player_x >= 0) {
  player_x = player_x - 10;
  console.log ("player_x = " + player_x);
  console.log ("player_y = " + player_y);
  canvas.remove(player_object);
  player_update();
    }
  }

  function right(){
    if (player_x <= 800) {
  player_x = player_x + 10;
  console.log ("player_x = " + player_x);
  console.log ("player_y = " + player_y);
  canvas.remove(player_object);
  player_update();
    }
  }