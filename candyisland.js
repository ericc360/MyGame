class CandyIsland {
  constructor(x,y,z){
    this.x = x;
    this.y = y;
    this.z = z;
    this.baseY = y;
    this.angle = Math.random() * Math.PI * 2;
    this.speed = 0.01;
    this.amplitude = .5;

    this.obj = document.createElement("a-gltf-model");
    this.obj.setAttribute("src","#candyisland");
    this.obj.setAttribute("position", { x: this.x, y: this.y, z: this.z });
    this.obj.setAttribute("scale","0.05 0.05 0.05");

    scene.append(this.obj);

    this.obj.addEventListener("click", () => {
      camera.setAttribute("position", { x: this.x, y: this.y + 2, z: this.z });
      camera.setAttribute("wasd-controls", "enabled: false");
    });
  }

  float(){
    this.angle += this.speed;
    this.y = this.baseY + Math.sin(this.angle) * this.amplitude;
    this.obj.setAttribute("position", { x: this.x, y: this.y, z: this.z });
  }
}