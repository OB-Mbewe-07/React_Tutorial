import entertainmentSchedule from "./data/data";
import { sortByNextMovie, sortByPrice, sortByRating } from "./Utils/Sort_logic";
import "./App.css";

export default function App(){
  const movies = sortByNextMovie(entertainmentSchedule, true);
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <div className="card" style={{ width: '17rem' }}>
          <img src={movie.image} className="card-img-top" alt={`${movie.title} image`} />
          <div className="card-body">
            <h5 className="card-title">{movie.title}</h5>
            <p className="card-text">{movie.description}</p>
            <button className="btn btn-primary mt-auto">View Details</button>
          </div>
        </div>
      ))}
    </div>
  );
}