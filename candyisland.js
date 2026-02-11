class CandyIsland {
  constructor(x,y,z,scale=1){
    this.x=x;
    this.y=y;
    this.z=z;
    this.baseY=y;
    this.scale=scale;

    this.t=Math.random()*Math.PI*2;

    this.dx=rnd(-0.01,0.01);
    this.dz=rnd(-0.01,0.01);

    this.candies=[];

    this.create();
    this.animate();
    this.addPlaygroundCandies();
    this.interact();
  }

  create(){
    this.el=document.createElement("a-entity");
    this.el.setAttribute("scale",{x:this.scale,y:this.scale,z:this.scale});
    this.el.setAttribute("class","clickable");

    const base=document.createElement("a-cylinder");
    base.setAttribute("radius",2);
    base.setAttribute("height",1);
    base.setAttribute("color","#ffd6e7");
    this.el.append(base);

    const top=document.createElement("a-sphere");
    top.setAttribute("radius",1.9);
    top.setAttribute("position","0 0.6 0");
    top.setAttribute("color","#fff5fb");
    this.el.append(top);

    scene.append(this.el);
  }

  animate(){
    const loop=()=>{
      this.t+=0.01;

      this.x+=this.dx;
      this.z+=this.dz;

      if(this.x>45) this.x=-45;
      if(this.x<-45) this.x=45;
      if(this.z>45) this.z=-45;
      if(this.z<-45) this.z=45;

      let yFloat=Math.sin(this.t)*0.7;
      let rot=Math.sin(this.t*0.3)*8;

      this.el.object3D.rotation.y=rot*Math.PI/180;
      this.el.setAttribute("position",{x:this.x,y:this.baseY+yFloat,z:this.z});

      this.candies.forEach(c=>c.update());

      requestAnimationFrame(loop);
    };
    loop();
  }

  interact(){
    this.el.addEventListener("mouseenter",()=>{
      this.el.setAttribute("scale",`${this.scale*1.1} ${this.scale*1.1} ${this.scale*1.1}`);
    });

    this.el.addEventListener("mouseleave",()=>{
      this.el.setAttribute("scale",`${this.scale} ${this.scale} ${this.scale}`);
    });

    this.el.addEventListener("click",()=>{
      this.el.setAttribute("animation__squish",{
        property:"scale",
        to:`${this.scale*0.9} ${this.scale*0.6} ${this.scale*0.9}`,
        dur:120,
        dir:"alternate",
        loop:1
      });
    });
  }

  addPlaygroundCandies(count=6){
    for(let i=0;i<count;i++){
      const x=this.x+rnd(-1.5,1.5);
      const y=this.baseY+1+rnd(0,0.5);
      const z=this.z+rnd(-1.5,1.5);
      this.candies.push(new Candy(x,y,z));
    }
  }
}
