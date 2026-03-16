class Lollipop{
    constructor(x,y,z){
        this.x = x;
        this.y = y;
        this.z = z;
        this.baseY = y + 1;
        this.angle = Math.random() * Math.PI * 2;
        this.speed = 0.05;
        this.amplitude = 0.5;
        this.inrange = true;
        this.collected = false;

        this.obj = document.createElement("a-entity");
        this.obj.setAttribute("position", {x:this.x, y: this.y+1, z: this.z});

        let candy = document.createElement("a-sphere");
        candy.setAttribute("radius","0.8");
        candy.setAttribute("color","lightblue");
        candy.setAttribute("position","0 1 0");
        this.obj.append(candy);

        let stick = document.createElement("a-cylinder");
        stick.setAttribute("radius","0.08");
        stick.setAttribute("height","2.5");
        stick.setAttribute("color","white");
        stick.setAttribute("position","0 -1 0");
        this.obj.append(stick);

        let wrapper = document.createElement("a-cylinder");
        wrapper.setAttribute("radius","0.8");
        wrapper.setAttribute("height","1.8");
        wrapper.setAttribute("position","0 1 0");
        wrapper.setAttribute("material", "src: #wrapper; transparent: true");
        this.obj.append(wrapper);

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
    checkcollect(){

      if(distance(this.obj,camera)<2){
        this.collected = true;
        loot_collected += 1;
        this.obj.object3D.position.set(9999,9999,9999);
      }
    }
}