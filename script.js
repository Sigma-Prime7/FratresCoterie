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
let gameFrame = 0;
const stggerFrame = 5;

const SpriteAnimations =[];
const animationStates=[
    {
        name:'idle',
        frames: 7,
    }
    {
        name:'jump',
        frames: 7,
    }
]
animationStates.forEach((state,index) =>{
    let frames={
        loc:[],
    }
    for(let j=0; j<state.frames;j++){
        let positionX = j*SPRITE_WIDTH;
        let poistionY=index*SPRITE_HEIGHT;
        frames.loc.push({x:positionX,y:positionY});
    }
    spriteAnimation[state.name] = frames;
});
console.log(spriteAnimation);
function animate(){
    ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
    let position =Math.floor(gameFrame/stggerFrame)%6;
    frameX = SPRITE_WIDTH * position;
    ctx.drawImage(playerImage,frameX,frameY*SPRITE_HEIGHT,SPRITE_WIDTH,SPRITE_HEIGHT,0,0,SPRITE_WIDTH,SPRITE_HEIGHT);


    gameFrame++;
    requestAnimationFrame(animate);
}
animate();


