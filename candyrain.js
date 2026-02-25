class CandyRain{
  constructor(x,y,z){
    this.x=x;
    this.y=y;
    this.z=z;
    this.speed= rnd(0.05,0.12);

    this.obj = document.createElement("a-entity");

    let center = document.createElement("a-sphere");
    center.setAttribute("radius",0.35);
    center.setAttribute("color", "#ffb6c1");
    center.setAttribute("position", "0 0 0"); // center
    this.obj.append(center);

    let leftside = document.createElement("a-cone");
    leftside.setAttribute("radius-bottom", 0.25);
    leftside.setAttribute("radius-top", 0);
    leftside.setAttribute("height", 0.5);
    leftside.setAttribute("color", "#ffb6c1");
    leftside.setAttribute("position", "0 0.4 0");
    this.obj.append(leftside);

    let rightside = document.createElement("a-cone");
    rightside.setAttribute("radius-bottom", 0.25);
    rightside.setAttribute("radius-top", 0);
    rightside.setAttribute("height", 0.5);
    rightside.setAttribute("color", "#ffb6c1");
    rightside.setAttribute("position", "0 -0.4 0");
    rightside.setAttribute("rotation", "180 0 0");
    this.obj.append(rightside);

    this.obj.setAttribute("position",{x:this.x, y:this.y, z:this.z});
    scene.append(this.obj);
  }

  fall(){
    let pos = this.obj.object3D.position;
    pos.y -= this.speed;

    if(pos.y<0){
      pos.y = rnd(20,50);
      pos.x = rnd(-40,40);
      pos.z = rnd(-40,40);
    
    this.obj.setAttribute("position",{x: pos.x, y: pos.y, z: pos.z});
    };
  };
}
