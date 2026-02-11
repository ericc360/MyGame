class Candy {
  constructor(x,y,z){
    this.x=x; this.y=y; this.z=z;
    this.baseY=y;

    this.angle=Math.random()*Math.PI*2;
    this.spin=rnd(0.01,0.03);

    this.dx=rnd(-0.02,0.02);
    this.dz=rnd(-0.02,0.02);

    this.create();
  }

  create(){
    this.el=document.createElement("a-sphere");

    const colors=[
      "#ffd6e7",
      "#e6dcff",
      "#ffe4d6",
      "#d9fff2",
      "#fff5fb"
    ];

    let color=colors[Math.floor(Math.random()*colors.length)];

    this.el.setAttribute("radius",rnd(0.6,1.1));
    this.el.setAttribute("color",color);
    this.el.setAttribute("opacity","0.9");
    this.el.setAttribute("material","emissive:"+color+"; emissiveIntensity:0.7");
    this.el.setAttribute("position",{x:this.x,y:this.y,z:this.z});

    this.el.addEventListener("click",()=>this.interact());

    scene.append(this.el);
  }

  interact(){
    this.el.setAttribute("animation__pop",{
      property:"scale",
      to:"1.6 1.6 1.6",
      dur:150,
      dir:"alternate",
      loop:1
    });
  }

  update(){
    this.angle+=0.03;

    this.x+=this.dx;
    this.z+=this.dz;

    if(this.x>50) this.x=-50;
    if(this.x<-50) this.x=50;
    if(this.z>50) this.z=-50;
    if(this.z<-50) this.z=50;

    let float=Math.sin(this.angle)*0.4;

    this.el.object3D.rotation.y+=this.spin;

    this.el.setAttribute("position",{x:this.x,y:this.baseY+float,z:this.z});
  }
}
