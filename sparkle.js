class Sparkles {
  constructor(count = 150) {
    this.parts = [];

    for (let i = 0; i < count; i++) {
      const p = document.createElement('a-sphere');
      p.setAttribute('radius', 0.05);
      p.setAttribute('color', '#ffffff');
      p.setAttribute('opacity', 0.9);
      p.setAttribute('position', {
        x: rnd(-40,40),
        y: rnd(2,25),
        z: rnd(-40,40)
      });
      scene.append(p);

      this.parts.push({
        el: p,
        phase: Math.random()*100
      });
    }
  }

  update() {
    this.parts.forEach(p => {
      p.phase += 0.05;
      p.el.setAttribute('opacity', 0.5 + Math.sin(p.phase)*0.5);
    });
  }
}
