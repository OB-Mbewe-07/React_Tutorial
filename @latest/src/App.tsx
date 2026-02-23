import entertainmentSchedule from "./data/data";
import sortItems from "./Utils/Sort_logic";
import "./App.css";
import type { Mode, AnimeItem } from "./data/data";

export default function App({
  mode = "closest",
  onSelectAnime
}: {
  mode?: Mode;
  onSelectAnime: (anime: AnimeItem) => void;
}) {

  const movies = sortItems(entertainmentSchedule, mode);

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <div
          className="card"
          style={{ width: "17rem" }}
          onClick={() => onSelectAnime(movie)}
        >
          <img
            src={movie.image}
            className="card-img-top"
            alt={`${movie.title} image`}
          />
          <div className="card-body">
            <h5 className="card-title">{movie.title}</h5>
            <p className="card-text">{movie.description}</p>
            <button className="btn btn-primary mt-auto">
              View Details
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}