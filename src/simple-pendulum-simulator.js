import { ctx, getFullWidth } from './canvas-config-data.js';

class SimplePendulumSimulator {
  #length;
  #gravity;
  // #damping;

  #angle;
  #angularVelocity;
  #angularAccerelation;

  constructor() {
    this.#length = 400;
    this.#gravity = 0.00098;
    //this.damping = 0.997;

    this.#angle = Math.PI / 4;
    this.#angularVelocity = 0;
    this.#angularAccerelation = 0;
  }

  get #pivotPosition() {
    return {
      x: getFullWidth() / 2,
      y: -5,
    };
  }

  get #targetPosition() {
    return {
      x: this.#length * Math.sin(this.#angle) + this.#pivotPosition.x,
      y: this.#length * Math.cos(this.#angle) + this.#pivotPosition.y + 5,
    };
  }

  #drawBob() {
    ctx.beginPath();
    ctx.fillStyle = 'orange';
    ctx.arc(this.#targetPosition.x, this.#targetPosition.y, 40, 0, Math.PI * 2, false);
    ctx.fill();
    ctx.closePath();
  }

  #drawLine() {
    ctx.beginPath();
    ctx.strokeStyle = 'orange';
    ctx.lineWidth = 8;
    ctx.moveTo(this.#pivotPosition.x, this.#pivotPosition.y);
    ctx.lineTo(this.#targetPosition.x, this.#targetPosition.y);
    ctx.stroke();
    ctx.closePath();
  }

  #updateAngle() {
    this.#angularAccerelation = -1 * this.#gravity * Math.sin(this.#angle);
    this.#angularVelocity += this.#angularAccerelation;
    //this.#angularVelocity *= this.#damping;
    this.#angle += this.#angularVelocity;
  }

  run() {
    this.#drawBob();
    this.#drawLine();
    this.#updateAngle();
  }
}

export default SimplePendulumSimulator;
