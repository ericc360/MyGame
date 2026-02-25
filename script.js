let rnd=(l,u)=>Math.random()*(u-l)+l;
let scene,camera,rain,sparkles,lily,player;
let clouds=[],islands=[],lilys=[],lollipops=[],candies=[],darkclouds=[];


window.addEventListener("DOMContentLoaded",function(){
  scene=document.querySelector("a-scene");
  camera=document.querySelector("a-camera");
  for(let i = 0; i < 100; i++){
    let candy = new CandyRain(rnd(-60,60), rnd(20,60), rnd(-60,60));
    candies.push(candy);
  }
  for(let i = 0; i < 50; i++){
    let cloud = new Cloud(rnd(-50,50), rnd(20,60), rnd(-50,50));
    clouds.push(cloud);
  }
  for(let i = 0; i < 50; i++){
    let dc = new DarkCloud(rnd(-50,50), rnd(20,60), rnd(-50,50));
    darkclouds.push(dc);
  }
  for(let i = 0; i < 40; i++){
    let l = new Lollipop(rnd(-60,60), rnd(20,60), rnd(-60,60));
    lollipops.push(l);
  }
  for(let i=0;i<5;i++){
    let ci = new CandyIsland(rnd(-50,50), rnd(20,60), rnd(-50,50));
    islands.push(ci);
    }

  for(let i=0;i<7;i++){
    lilys.push(new Lily(rnd(-30,30),rnd(-30,30)));
  }
  player = new plane();
  this.setInterval(loop, 100);
  this.setInterval(runtime, 100);
  loop();
  runtime();
});

function loop(){
  for(let cloud of clouds){ cloud.drift(-50,50) }
  for(let l of lollipops){ l.float() }
  for(let ci of islands){ ci.float() }
  for(let dc of darkclouds){ dc.drift(-50,50) }
}

function runtime(){
  player.altitudebehaviors();
  player.hudbehaviors();
}

function distance(obj1,obj2){
  let x1 = obj1.object3D.position.x;
  let y1 = obj1.object3D.position.y;
  let z1 = obj1.object3D.position.z;
  let x2 = obj2.object3D.position.x;
  let y2 = obj2.object3D.position.y;
  let z2 = obj2.object3D.position.z;

  let d = Math.sqrt(Math.pow(x1-x2,2) + Math.pow(y1-y2,2) + Math.pow(z1-z2,2));
  return d;
}
