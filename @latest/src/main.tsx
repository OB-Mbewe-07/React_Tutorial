import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import NavBar from './components/Nav.tsx';
import SliderHero from './components/Hero.tsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import type { Mode } from "./data/data";


const root = createRoot(document.getElementById('root')!);

function renderApp(mode: Mode) {
  root.render(
    <StrictMode>
      <NavBar onModeChange={renderApp} />
      <SliderHero />
      <App mode={mode} />
    </StrictMode>
  );
}

renderApp("closest");