canvas  = document.getElementById('canvas');
ctx = canvas.getContext("2d");
car1_width = 120;
car1_height = 70;
car1_image = "car1.png";
car1_x = 10;
car1_y = 10;

car2_width = 120;
car2_height = 70;
car2_image = "car2.png";
car2_x = 10;
car2_y = 100;
background_image = "racing.jpg";

function add(){
background_image_tag = new Image();
background_image_tag.onload = uploadBackground;
background_image_tag.src = background_image;

car1_image_tag = new Image();
car1_image_tag.onload = uploadCar1;
car1_image_tag.src = car1_image;
}
function uploadBackground(){
ctx.drawImage(background_image_tag,0,0,canvas.width,canvas.height);    
}
function uploadCar1(){
ctx.drawImage(car1_image_tag,car1_x,car1_y,car1_width,car1_height);    
}
window.addEventListener("keydown",my_keydown);
function my_keydown(){
keyPressed = e.keycode;
console.log(keyPressed);
if(keyPressed=='38'){
car1_up();
console.log("up arrow key")
}
if(keyPressed=='40'){
car1_down();
console.log("down arrow key")
}
if(keyPressed=='37'){
car1_down();
console.log("left arrow key")
}
if(keyPressed=='39'){
car1_down();
console.log("right arrow key")
}
if(keyPressed = '87'){
car2_up();
console.log("key w");    
}
}