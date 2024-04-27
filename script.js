const canvas= document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width=600;
const CANVAS_HEIGHT= canvas.height=600;

const playerImage = new Image();
playerImage.src="assets/shadow_dog.png";
const SPRITE_WIDTH = 575;
const SPRITE_HEIGHT = 523;

let frameX=0;
let frameY=0;

function animate(){
    ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
   // ctx.fillRect(50,50,100,100);
   //ctx.drawImage(image,sx,sy,sw,sh,dx,dy,dw,dh)
    ctx.drawImage(playerImage,frameX*SPRITE_WIDTH,frameY*SPRITE_HEIGHT,SPRITE_WIDTH,SPRITE_HEIGHT,0,0,SPRITE_WIDTH,SPRITE_HEIGHT);
    requestAnimationFrame(animate);
}
animate();


