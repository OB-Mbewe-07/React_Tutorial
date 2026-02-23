import type { Mode } from "../data/data";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

interface NavBarProps {
  onModeChange: (mode: Mode) => void;
}

export default function NavBar({ onModeChange }: NavBarProps){
    return(
        <div className="Nav_Container">
            <nav className="navbar navbar-expand-lg custom-navbar">

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#" onClick={() => onModeChange("closest")}>Earliest Showtime</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#" onClick={() => onModeChange("furthest")}>Latest Showtime</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a
                            className="nav-link dropdown-toggle"
                            href="#"
                            id="navbarDropdown"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            >
                            Sort
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="#" onClick={() => onModeChange("price-asc")}>Price (Low to High)</a>
                            <a className="dropdown-item" href="#" onClick={() => onModeChange("price-desc")}>Price (High to Low)</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#" onClick={() => onModeChange("rating-asc")}>Rating (Low to High)</a>
                            <a className="dropdown-item" href="#" onClick={() => onModeChange("rating-desc")}>Rating (High to Low)</a>
                        </div>
                    </li>
                    </ul>
                    <form className="frm_search d-flex gap-2">
                        <input
                            className="form-control hero-search"
                            type="search"
                            placeholder="Search anime..."
                            aria-label="Search"
                        />
                        <button
                            className="btn hero-btn"
                            type="submit"
                        >
                            Search
                        </button>
                    </form>
                </div>
            </nav> 
        </div>
    );
};