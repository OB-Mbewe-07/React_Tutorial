import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import NavBar from "./components/Nav.tsx";
import SliderHero from "./components/Hero.tsx";
import AnimeDetailsModal from "./components/popups.tsx";
import entertainmentSchedule from "./data/data";
import type { Mode, AnimeItem } from "./data/data";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import "./styles/Cards.css";
import "./styles/Hero.css";
import "./styles/popup.css";
import "./styles/mobile.css";

const root = createRoot(document.getElementById("root")!);

function renderApp(
  mode: Mode,
  selectedAnime: AnimeItem | null = null
) {
  root.render(
    <StrictMode>
      <NavBar onModeChange={(newMode) => renderApp(newMode, selectedAnime)} />
      <SliderHero />
      <App
        mode={mode}
        onSelectAnime={(anime) => renderApp(mode, anime)}
      />

      {selectedAnime && (
        <AnimeDetailsModal
          anime={selectedAnime}
          onClose={() => renderApp(mode, null)}
        />
      )}
    </StrictMode>
  );
}

renderApp("closest");