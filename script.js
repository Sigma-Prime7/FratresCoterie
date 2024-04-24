const canvas= document.getElementById('#canvas1');
const ctx = canvas.getContext('2d');
const img = new Image();
img.src='assets\enemies\enemy1.png';
ctx.drawImage(img, 0, 0, canvas.width, canvas.height);