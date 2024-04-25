/**@type {HTMLCanvasElement} */

const canvas= document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
CANVAS_WIDTH = canvas.width = 500;
CANVAS_HEIGHT = canvas.height = 600;
const numberOfEnemies = 10;
const enemiesArray= [];
const enemiesArray1 = [];
const enemiesArray2 = [];
const enemiesArray3 = [];
const enemiesArray4 = [];
const enemyControls = document.getElementById('enemyControls');
let enemyNumber = 1;
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
    constructor(name,totalFrames,spriteWidth,spriteHeight) {
        
       this.image = new Image();
       this.image.src =`assets/enemies/${name}.png`;
        this.speed = Math.random() *4 -2   
        this.spriteWidth=spriteWidth;
        this.spriteHeight=spriteHeight;
        this.width = this.spriteWidth/3;
        this.height = this.spriteHeight/3;
        this.frame=0;
        this.totalFrames = totalFrames;
        this.flapSpeed= Math.floor(Math.random() * 3 + 1);
        this.x = Math.random() * (canvas.width-this.width);
        this.y= Math.random() * (canvas.height-this.height);
    }
    update(){
        
        this.x+= Math.random() * 7 -3.5;
        this.y+=Math.random() * 10 -5;
        if(gameFrame % this.flapSpeed === 0){
            this.frame > this.totalFrames-2 ? this.frame =0:this.frame++; //totalFrames-2
        }
    
    }

   


    draw(){
        
        ctx.drawImage(this.image,this.frame*this.spriteWidth,0,this.spriteWidth,this.spriteHeight,
            this.x,this.y,this.width,this.height);
    }

};


for(let i = 0; i < numberOfEnemies; i++){
enemiesArray1.push(new Enemy(enemyAnimations[0].name,enemyAnimations[0].frames,enemyAnimations[0].spriteWidth,enemyAnimations[0].spriteHeight));
enemiesArray2.push(new Enemy(enemyAnimations[1].name,enemyAnimations[1].frames,enemyAnimations[1].spriteWidth,enemyAnimations[1].spriteHeight));
enemiesArray3.push(new Enemy(enemyAnimations[2].name,enemyAnimations[2].frames,enemyAnimations[2].spriteWidth,enemyAnimations[2].spriteHeight));
enemiesArray4.push(new Enemy(enemyAnimations[3].name,enemyAnimations[3].frames,enemyAnimations[3].spriteWidth,enemyAnimations[3].spriteHeight));
}
const enemyArray = [];
enemyArray.push(enemiesArray1);
enemyArray.push(enemiesArray2);
enemyArray.push(enemiesArray3);
enemyArray.push(enemiesArray4);


function animate(){
    ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);

    enemyArray[enemyNumber-1].forEach(enemy => {
        enemy.update();
        enemy.draw();
        
    })
    gameFrame++;
   requestAnimationFrame(animate);
}

enemyControls.addEventListener('change',function(e){
    
   enemyNumber= e.target.value;
   
})
animate();
