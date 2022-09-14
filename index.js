import App from './src/app.js';
import SimplePendulumSimulator from './src/simple-pendulum-simulator.js';

const app = new App(new SimplePendulumSimulator());
app.render();
