/**@type {HTMLCanvasElement} */

const canvas= document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
CANVAS_WIDTH = canvas.width = 500;
CANVAS_HEIGHT = canvas.height = 600;
const numberOfEnemies = 10;
const enemiesArray = [];
const enemyControls = document.getElementById('enemyControls');
let enemyName = enemyControls.value;
let enemyNumber= enemyControls.number;
let gameFrame =0;
const enemyAnimations =[
{
    name: 'enemy1',
    frames: '6',
    spriteWidth:293,
    spriteHeight:155,
},
{
    name:'enemy2',
    frames:'6',
    spriteWidth:266,
    spriteHeight:188,
},
{
    name:'enemy3',
    frames:'6',
    spriteWidth:218,
    spriteHeight:177,
},
{
    name:'enemy4',
    frames:'9',
    spriteWidth:213,
    spriteHeight:212,
}]
class Enemy{
    constructor() {
        
       this.image = new Image();
       this.image.src ="assets/enemies/enemy1.png"
        this.speed = Math.random() *4 -2   
        this.spriteWidth=293;
        this.spriteHeight=155;
        this.width = this.spriteWidth/3;
        this.height = this.spriteHeight/3;
        this.frame=0;
        this.totalFrames = 6;
        this.flapSpeed= Math.floor(Math.random() * 3 + 1);
        this.x = Math.random() * (canvas.width-this.width);
        this.y= Math.random() * (canvas.height-this.height);
    }
    update(){
        
        this.x+= Math.random() * 7 -3.5;
        this.y+=Math.random() * 10 -5;
        if(gameFrame % this.flapSpeed === 0){
            this.frame > totalFrames-2 ? this.frame =0:this.frame++;
        }
    
    }

   

    changeSprite(src,spriteWidth,spriteHeight,totalFrames){
        this.image.src = src;
        this.totalFrames=totalFrames;
        this.spriteWidth=spriteWidth;
        this.spriteHeight=spriteHeight;
    }

    draw(){
        
        ctx.drawImage(this.image,this.frame*this.spriteWidth,0,this.spriteWidth,this.spriteHeight,
            this.x,this.y,this.width,this.height);
    }

};


for(let i = 0; i < numberOfEnemies; i++){
enemiesArray.push(new Enemy());
}
function animate(){
    ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
    enemiesArray.forEach(enemy => {
      //  enemy.changeSprite(`assets/enemies/${enemyName}.png`,enemyAnimations[enemyName].frames,enemyAnimations[enemyName].frames,enemyAnimations[enemyName].frames)
        enemy.update();
        enemy.draw();
        
    })
    gameFrame++;
   requestAnimationFrame(animate);
}

enemyControls.addEventListener('change',function(e){
   enemyName= e.target.value;
   enemyNumber= e.target.number;
   console.log(enemyNumber);
   enemiesArray.forEach(enemy => {
     //  enemy.changeSprite(`assets/enemies/${enemyName}.png`);
   })
})
animate();
