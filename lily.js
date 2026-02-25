class Lily {
  constructor(x,z){
    this.x=x;
    this.z=z;
    this.baseY=rnd(20,40);
    this.dx=rnd(-0.015,0.015);
    this.dz=rnd(-0.015,0.015);
    this.t=Math.random()*100;
    this.create();
    this.setup();
    this.animate();
  }

  create(){
    this.el=document.createElement("a-gltf-model");
    this.el.setAttribute("src","#lily");
    this.el.setAttribute("scale","0.1 0.1 0.1");
    this.el.setAttribute("animation-mixer","");
    this.el.setAttribute("class","clickable");

    scene.append(this.el);
  }

  setup(){
    this.el.addEventListener("click",()=>{
      this.el.setAttribute("animation__jump",{
        property:"position",
        to:`${this.x} ${this.baseY+2} ${this.z}`,
        dur:300,
        dir:"alternate",
        loop:1
      });

      this.el.setAttribute("animation__spin",{
        property:"rotation",
        to:"0 360 0",
        dur:600
      });
    });
  }

  animate(){
    const loop=()=>{
      this.t+=0.03;

      this.x+=this.dx;
      this.z+=this.dz;

      if(this.x>50) this.x=-50;
      if(this.x<-50) this.x=50;
      if(this.z>50) this.z=-50;
      if(this.z<-50) this.z=50;

      let float=Math.sin(this.t)*0.25;

      let angle=Math.atan2(this.dx,this.dz)*180/Math.PI;

      this.el.setAttribute("rotation",{x:0,y:angle,z:0});
      this.el.setAttribute("position",{x:this.x,y:this.baseY+float,z:this.z});

      requestAnimationFrame(loop);
    };
    loop();
  }
}
