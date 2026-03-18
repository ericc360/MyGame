class plane{
    constructor(){
        this.plane = document.createElement("a-image");
        this.altitude = 50; this.fuel = 100; this.health = 100;
        this.refuelable = true; 
        this.key = ""; this.nothing;
        this.cameradx = 1, this.cameradz = 0;
        this.damagetaken = false;
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

        this.textloot = document.createElement("a-text");
        this.textloot.setAttribute("position", "0.7 0 -1.5");
        this.textloot.setAttribute("color", "yellow")
        this.textloot.setAttribute("scale", ".7 .8 .8")
        this.textloot.setAttribute("value", "Loot collected: 0");
        this.textfuel = document.createElement("a-text");
        this.textfuel.setAttribute("position", "-2.1 -.7 -1.5"); 
        this.textfuel.setAttribute("color", "#7392B7");
        this.textfuel.setAttribute("value", "Fuel:     [+][+][+][+][+][+][+][+][+][+]");
        this.texthealth = document.createElement("a-text");
        this.texthealth.setAttribute("position", "-2.1 -1 -1.5"); 
        this.texthealth.setAttribute("color", "#b5d99c");
        this.texthealth.setAttribute("value", "Health: [+][+][+][+][+][+][+][+][+][+]");
        this.info = document.createElement("a-text");
        this.info.setAttribute("position", "-2.1 1 -1.5"); 
        this.info.setAttribute("color", "white");
        this.info.setAttribute("value", "Mouse to move | E/Q to ascend/descend");
        this.plane.setAttribute("src", "#cockpit");
        this.plane.setAttribute("position","0 0 -1.5"); 
        this.plane.setAttribute("scale","4.5 2.6");
        camera.append(this.textfuel);
        camera.append(this.texthealth);
        camera.append(this.textloot);
        camera.append(this.info);
        camera.append(this.plane);

        
    }
    hudbehaviors(){
        for(let i = 0; i<10; i++){
            if(this.fuel<this.textfueloptsparameters[i] && this.fuel>this.textfueloptsparameters[i+1]){
                this.textfuel.setAttribute("value", `Fuel:     ${this.textfuelopts[i]}`);
            } else if(this.fuel<=0){
                this.textfuel.setAttribute("value", `Fuel:     ${this.textfuelopts[10]}`);
            }
        }
        for(let i = 0; i<10; i++){
            if(this.health<this.textfueloptsparameters[i] && this.health>this.textfueloptsparameters[i+1]){
                this.texthealth.setAttribute("value", `Health: ${this.textfuelopts[i]}`);
            } else if(this.health<=0){
                this.texthealth.setAttribute("value", `Health: ${this.textfuelopts[10]}`);
            }
        }
        this.textloot.setAttribute("value", "Loot collected: " + loot_collected);


    }

    altitudebehaviors(){
        console.log(this.altitude + " " + this.fuel);
        camera.object3D.position.y = this.altitude;
        this.altitude -= .05;
        if(this.key == "e" && this.fuel > 0){
            this.altitude += .5;
            this.fuel -= 1;
        } else if(this.key == "q"){
            this.altitude -= .5;
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

        movementbehaviors(){
        this.cameradx = Math.sin(camera.object3D.rotation.y);
        this.cameradz = Math.cos(camera.object3D.rotation.y);
        camera.object3D.position.x -= this.cameradx;
        camera.object3D.position.z -= this.cameradz;
        console.log( camera.object3D.rotation.y)
    }

    }

  



    


