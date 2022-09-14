import { canvas, ctx, pixelRatio, getFullWidth, getFullHeight } from './canvas-config-data.js';

class App {
  #simulator;

  constructor(simulator) {
    this.#simulator = simulator;

    this.#adjustCanvasScale();
    addEventListener('resize', this.#adjustCanvasScale.bind(this));
  }

  #adjustCanvasScale() {
    canvas.width = getFullWidth() * pixelRatio;
    canvas.height = getFullHeight() * pixelRatio;
    ctx.scale(pixelRatio, pixelRatio);
  }

  render() {
    window.requestAnimationFrame(this.render.bind(this));
    ctx.clearRect(0, 0, getFullWidth(), getFullHeight());

    this.#simulator.run();
  }
}

export default App;
