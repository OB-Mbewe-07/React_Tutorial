import type {AnimeItem} from "../data/data";

interface Props {
  anime: AnimeItem;
  onClose: () => void;
}

type TimeSpan = "Morning" | "Afternoon" | "Evening" | "Night";

function timeSpanShowtime(showtime: string): TimeSpan {
    const [dayStr, timeStr] = showtime.split(' ');
    const [hours, minutes] = timeStr.split(':').map(Number);

    if (hours >= 5 && hours < 12) return "Morning";
    if (hours >= 12 && hours < 17) return "Afternoon";
    if (hours >= 17 && hours < 21) return "Evening";
    return "Night" ;         
}


export default function AnimeDetailsModal({
  anime,
  onClose
}: Props) {
  return (
    <div className="cinema-overlay" onClick={onClose}>
      <div
        className="cinema-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="cinema-left">
          <div className="cinema-info">
            <h1>{anime.title}</h1>

            <div className="cinema-meta">
              <span className="stars">
                {"⭐".repeat(anime.stars)}
              </span>
              <span>{anime.category}</span>
              <span>{anime.type.toUpperCase()}</span>
            </div>

        
            <p className="cinema-description">
              {anime.description}
            </p>

           

            <div className="event-details">
              <p><strong>📍 Venue:</strong> {anime.venue}</p>
              <p>
                <strong>🕒 Showtimes:</strong>{" "}
                {anime.showtimes.join(", ")}
              </p>
              <p><strong>💰 Price:</strong> R{anime.price}</p>
              <p className="notes">
                <strong>🔥 Notes:</strong> {anime.notes}
              </p>
            </div>

            {anime.showtimes.map((showtime) => (
                <span key={showtime} className="showtime">
                  {timeSpanShowtime(showtime)}
                </span>
            ))}
          </div>
        </div>

        

        {/* RIGHT SIDE */}
        <div
          className="cinema-right"
          style={{
            backgroundImage: `url(${anime.image})`
          }}
        />

        <button className="cinema-close" onClick={onClose}>
          ✕
        </button>
      </div>
    </div>
  );
}