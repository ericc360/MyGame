class CandyRain {
  constructor(count = 120) {
    this.candies = [];
    this.colors = ['#ffb6c1','#ffc8dd','#ffe066','#caffbf','#bde0fe','#f5e1ff'];

    for (let i = 0; i < count; i++) {
      const c = document.createElement('a-sphere');
      c.setAttribute('radius', 0.15 + Math.random() * 0.15);
      c.setAttribute('color', this.colors[Math.floor(Math.random()*this.colors.length)]);
      c.setAttribute('position', {
        x: rnd(-40,40),
        y: rnd(10,50),
        z: rnd(-40,40)
      });
      scene.append(c);

      this.candies.push({
        el: c,
        speed: rnd(0.02,0.05)
      });
    }
  }

  update() {
    this.candies.forEach(c => {
      let pos = c.el.object3D.position;
      pos.y -= c.speed;

      if (pos.y < 0) {
        pos.y = rnd(20,40);
        pos.x = rnd(-40,40);
        pos.z = rnd(-40,40);
      }
    });
  }
}
