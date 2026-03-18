class Robot{
   constructor(x,y,z){
    this.x = x;
    this.y = y;
    this.z = z;

    this.obj=document.createElement("a-gltf-model");
    this.obj.setAttribute("src","#robot")
    this.obj.setAttribute("scale", "0.5 0.5 0.5");
    this.obj.setAttribute("position", { x: this.x, y: this.y, z: this.z });
    scene.append(this.obj);

   }
   follow(target){
    let pos = this.obj.object3D.position;
    let targetPos = target.object3D.position;

    let dx = targetPos.x - pos.x;
    let dy = targetPos.y - pos.y;
    let dz = targetPos.z - pos.z;

    let dist = Math.sqrt(dx*dx + dz*dz);

    if(dist > 0){
        pos.x += (dx/dist) * 0.8;
        pos.z += (dz/dist) * 0.8;
        pos.y += (dy/dist) * .8;
    }

   }
}