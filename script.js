let rnd=(l,u)=>Math.random()*(u-l)+l;
let scene,camera,rain,player,bullet,loot_collected=0;
let clouds=[],islands=[],lollipops=[],candies=[],darkclouds=[],marshmallow=[], timer=0;


window.addEventListener("DOMContentLoaded",function(){
  scene=document.querySelector("a-scene");
  camera=document.querySelector("a-camera");
  time=this.document.getElementById("time");
  ammo = document.getElementById("ammo");
  


  for(let i = 0; i < 20; i++){
    let cloud = new Cloud(rnd(-50,50), rnd(20,60), rnd(-50,50));
    clouds.push(cloud);
  }
  for(let i = 0; i < 20; i++){
    let dc = new DarkCloud(rnd(-50,50), rnd(20,60), rnd(-50,50));
    darkclouds.push(dc);
  }
  for(let i = 0; i < 7; i++){
    let l = new Lollipop(rnd(-60,60), rnd(20,60), rnd(-60,60));
    lollipops.push(l);
  }
  for(let i=0;i<4;i++){
    let ci = new CandyIsland(rnd(-50,50), rnd(20,60), rnd(-50,50));
    islands.push(ci);
  }
  for(let i=0;i<10;i++){
    let m = new marshmallows(rnd(-60,60), rnd(20,60), rnd(-60,60));
    marshmallow.push(m);
  }

  player = new plane();
  this.setInterval(loop, 100);
  this.setInterval(runtime, 100);
  this.setInterval(countdown, 1000)
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
    if(distance(dc.obj,camera)>50){
      dc.inrange = false;
    }
    if(distance(dc.obj, camera)<10){
      player.damagetaken = true;
    } else {
      player.damagetaken = false;
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
    l.checkcollect();
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
    if(distance(cr.obj, camera) < 3){
    loot_collected += 1;
    cr.obj.object3D.position.set(9999,9999,9999);
    }
    cr.reposition();
  }
  for(let m of marshmallow){
    if(distance(m.obj, camera) > 60)
        m.inrange = false;
    
    m.float();
    m.reposition();
    m.checkcollect();
}


}

function runtime(){
  player.altitudebehaviors();
  player.hudbehaviors();
  player.movementbehaviors();
}

function countdown(){
  timer+= 1;
  if(loot_collected >= 50 && timer <= 120){
    time.setAttribute("value", "Time: YOU WIN!")
  } else if(timer > 120 && loot_collected < 50){
    time.setAttribute("value", "Time: GAME OVER BUT YOU WIN")
  }else {
    time.setAttribute("value", "Time: " + timer +"/120")
  }
}

function distance(obj1,obj2){
  let x1 = obj1.object3D.position.x;
  let z1 = obj1.object3D.position.z;
  let x2 = obj2.object3D.position.x;
  let z2 = obj2.object3D.position.z;

  let d = Math.sqrt(Math.pow(x1-x2,2) + Math.pow(z1-z2,2));
  return d;
};


