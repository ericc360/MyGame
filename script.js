let rnd=(l,u)=>Math.random()*(u-l)+l;

let scene,camera,rain,sparkles,lily;
let clouds=[],islands=[],candies=[],lilys=[];

window.addEventListener("DOMContentLoaded",function(){
  scene=document.querySelector("a-scene");
  camera=document.querySelector("a-camera");

  for(let i=0;i<80;i++){
    clouds.push(new Cloud(rnd(-50,50),rnd(10,50),rnd(-50,50)));
  }

  for(let i=0;i<100;i++){
    candies.push(new Candy(rnd(-50,50),rnd(1,50),rnd(-50,50)));
  }

  for(let i=0;i<12;i++){
    islands.push(new CandyIsland(rnd(-40,40),rnd(3,8),rnd(-40,40),rnd(0.7,1.4)));
  }

  for(let i=0;i<7;i++){
  lilys.push(new Lily(rnd(-30,30),rnd(-30,30)));
}


  rain=new CandyRain();
  sparkles=new Sparkles();
  lily = new Lily();
  player = new plane();


  animate();
  this.setInterval(runtime, 10);
});

function animate(){
  clouds.forEach(c=>c.drift());
  candies.forEach(c=>c.update());
  rain.update();
  sparkles.update();
  requestAnimationFrame(animate);
}
function runtime(){
  player.altitudebehaviors();
  player.hudbehaviors();
}
