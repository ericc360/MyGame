class Cloud{
  constructor(x,y,z){
    this.x=x;
    this.y=y;
    this.z=z;
    this.speed = rnd(0.01, 0.03);
    this.direction = 1;
    this.inrange = true;

    this.obj=document.createElement("a-entity");

    for(let i=0;i<7;i++){
      let puff=document.createElement("a-sphere");
      puff.setAttribute("radius",rnd(1.5,3));
      puff.setAttribute("position",{
        x:rnd(-2,2),
        y:rnd(-1,1),
        z:rnd(-1.5,1.5)
      });
      puff.setAttribute("color","#ffffff");
      this.obj.append(puff);
    }

    this.obj.setAttribute("position", { x: this.x, y: this.y, z: this.z });
    scene.append(this.obj);

  }

  drift(minX = -50, maxX = 50){
    this.x += this.speed * this.direction;
    if(this.x > maxX || this.x < minX){
      this.direction *= -1;
    }
      this.obj.setAttribute("position",{x:this.x,y:this.y,z:this.z});
  }
  reposition(){
    if(this.inrange != true){
      this.x = rnd(camera.object3D.position.x-50, camera.object3D.position.x+50);
      this.y = rnd(20,60)
      this.z = rnd(camera.object3D.position.z-50, camera.object3D.position.z+50),
      this.obj.setAttribute("position", { x: this.x, y:this.y, z: this.z});
      this.inrange = true;
    } else{
      this.inrange = this.inrange;
    }
  }
}

