class Cloud{
  constructor(x,y,z){
    this.x=x;
    this.y=y;
    this.z=z;
    this.startY=y;

    this.dx=rnd(0.009,0.01);
    this.offset=rnd(0,1000);

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
      puff.setAttribute("opacity","0.7");

      this.obj.append(puff);
    }

    this.obj.setAttribute("position",{x,y,z});
    scene.append(this.obj);
  }

  drift(){
    this.x+=this.dx;

    if(this.x>60) this.x=-60;

    let bob=Math.sin((Date.now()+this.offset)*0.001)*0.6;

    this.obj.object3D.rotation.y+=0.001;

    this.obj.setAttribute("position",{x:this.x,y:this.startY+bob,z:this.z});
  }
}
