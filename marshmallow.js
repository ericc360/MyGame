class marshmallows{
    constructor(x,y,z){
    this.x = x;
    this.y = y;
    this.z = z;

    this.obj = document.createElement("a-cylinder");
    this.obj.setAttribute("position",{x:this.x, y:this.y, z:this.z});
    this.obj.setAttribute("radius","1.25");
    this.obj.setAttribute("height","2.5");

    scene.append(this.obj);

    }

        float(){
        this.angle += this.speed;
        this.y = this.baseY + Math.sin(this.angle) * this.amplitude;
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