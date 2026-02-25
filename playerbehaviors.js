class plane{
    constructor(){
        this.plane = document.createElement("a-gltf-model");
        this.altitude = 50; this.fuel = 100;
        this.refuelable = true; 
        this.key = ""; this.nothing;
        this.textfuelopts = [
            "[+][+][+][+][+][+][+][+][+][+]",
            "[+][+][+][+][+][+][+][+][+][=]",
            "[+][+][+][+][+][+][+][+][=][=]",
            "[+][+][+][+][+][+][+][=][=][=]",
            "[+][+][+][+][+][+][=][=][=][=]",
            "[+][+][+][+][+][=][=][=][=][=]",
            "[+][+][+][+][=][=][=][=][=][=]",
            "[+][+][+][=][=][=][=][=][=][=]",
            "[+][+][=][=][=][=][=][=][=][=]",
            "[+][=][=][=][=][=][=][=][=][=]",
            "[=][=][=][=][=][=][=][=][=][=]",
        ];
        this.textfueloptsparameters = [100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 0]
        window.addEventListener("keydown", (e)=>{
            this.key = e.key;
        })
        window.addEventListener("keyup", (e)=>{
            this.key = "~";
        })

        this.textfuel = document.createElement("a-text");
        this.textfuel.setAttribute("position", "-2.1 -.7 -1.5"); 
        this.textfuel.setAttribute("color", "blue"); this.textfuel.setAttribute("value", "[+][+][+][+][+][+][+][+][+][+]");
        this.texthealth = document.createElement("a-text");
        this.texthealth.setAttribute("position", "-2.1 -1 -1.5"); 
        this.texthealth.setAttribute("color", "red"); this.texthealth.setAttribute("value", "[+][+][+][+][+][+][+][+][+][+]");
        this.info = document.createElement("a-text");
        this.info.setAttribute("position", "-2.1 1 -1.5"); 
        this.info.setAttribute("color", "black"); this.info.setAttribute("value", "WASD to move | E to ascend | Q to descend")
        this.plane.setAttribute("src", "#planes")
        this.plane.setAttribute("position","0 -.5 -3"); this.plane.setAttribute("rotation","0 270 0");
        this.plane.setAttribute("scale","3 3 3");
        camera.append(this.textfuel); camera.append(this.texthealth);
        camera.append(this.info);
        camera.append(this.plane);
    }
    hudbehaviors(){
        for(let i = 0; i<10; i++){
            if(this.fuel<this.textfueloptsparameters[i] && this.fuel>this.textfueloptsparameters[i+1]){
                this.textfuel.setAttribute("value", `${this.textfuelopts[i]}`);
            } else if(this.fuel<=0){
                this.textfuel.setAttribute("value", `${this.textfuelopts[10]}`);
            }
        }
    }
    altitudebehaviors(){
        console.log(this.altitude + " " + this.fuel);
        camera.object3D.position.y = this.altitude;
        this.altitude -= .05;
        if(this.key == "e" && this.fuel > 0){
            this.altitude += .15;
            this.fuel -= 1;
        } else if(this.key == "q"){
            this.altitude -= .1;
        }
        if(this.key == "r" && this.refuelable == true){
            this.fuel += 10;
            while(this.fuel>100){
                this.fuel -= 1;
            }
            this.refuelable = false;
        } else if(this.key == "r" && this.refuelable == false){
            this.nothing;
        } else {
            this.refuelable = true;
        }
    }
}