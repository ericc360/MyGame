let rnd=(l,u)=>Math.random()*(u-l)+l;
let scene,camera,rain,player;
let clouds=[],islands=[],lilys=[],lollipops=[],candies=[],darkclouds=[],marshmallow=[];


window.addEventListener("DOMContentLoaded",function(){
  scene=document.querySelector("a-scene");
  camera=document.querySelector("a-camera");

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
  for(let i=0;i<40;i++){
    let m = new marshmallows(rnd(-60,60), rnd(20,60), rnd(-60,60));
    marshmallow.push(m);
  }

  player = new plane();
  this.setInterval(loop, 100);
  this.setInterval(runtime, 100);
});

function loop(){
  for(let cloud of clouds){ 
    if(distance(cloud.obj, camera)>50){
      cloud.inrange = false;
    }
    cloud.drift(-50,50) 
    cloud.reposition();
  }
  for(let dc of darkclouds){ 
    if(distance(dc.obj, camera)>50){
      dc.inrange = false;
    }
    dc.drift(-50,50) 
    dc.reposition();
  }
  for(let l of lollipops){ 
    if(distance(l.obj, camera)>60){
      l.inrange = false;
    }
    l.float();
    l.reposition();
  }
  for(let ci of islands){ 
    if(distance(ci.obj, camera)>60){
      ci.inrange = false;
    }
    ci.float();
    ci.reposition();
  }
  for(let cr of candies){
    if(distance(cr.obj, camera)>60){
      cr.inrange = false;
    }
    cr.reposition();
  }
  for(let m of marshmallow){
    m.inrange = false;
  }
}
m.reposition();

function runtime(){
  player.altitudebehaviors();
  player.hudbehaviors();
  player.movementbehaviors();
}

function distance(obj1,obj2){
  let x1 = obj1.object3D.position.x;
  let z1 = obj1.object3D.position.z;
  let x2 = obj2.object3D.position.x;
  let z2 = obj2.object3D.position.z;

  let d = Math.sqrt(Math.pow(x1-x2,2) + Math.pow(z1-z2,2));
  return d;
};


