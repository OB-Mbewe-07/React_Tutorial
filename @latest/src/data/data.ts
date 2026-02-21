const entertainmentSchedule = [
  // 🎞️ CLASSICS
  {
    title: "The Shawshank Redemption",
    type: "movie",
    category: "Classic",
    genre: ["Drama"],
    venue: "Ster-Kinekor Throwback Cinema – Rosebank",
    showtimes: ["Saturday 14:00", "Tuesday 18:30"],
    price: 50,
    image: "https://image.tmdb.org/t/p/original/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
    notes: "Part of Throwback Cinema series"
  },
  {
    title: "Pulp Fiction",
    type: "movie",
    category: "Classic",
    genre: ["Crime", "Drama"],
    venue: "The Bioscope – Milpark",
    showtimes: ["Friday 20:00"],
    price: 70,
    image: "https://image.tmdb.org/t/p/original/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
    notes: "Cult classic screening"
  },
  {
    title: "Casablanca",
    type: "movie",
    category: "Classic",
    genre: ["Romance", "Drama"],
    venue: "Ster-Kinekor Throwback – Sandton",
    showtimes: ["Sunday 15:00"],
    price: 50,
    image: "https://image.tmdb.org/t/p/original/5K7cOHoay2mZusSLezBOY0Qxh8a.jpg",
    notes: "Golden age cinema"
  },

  // 🍿 NEW MOVIES
  {
    title: "Scream 7",
    type: "movie",
    category: "New Release",
    genre: ["Horror"],
    venue: "Nu Metro – The Glen",
    showtimes: ["Friday 21:30", "Saturday 19:45"],
    price: 120,
    image: "https://image.tmdb.org/t/p/original/1Lr5xYIYkYVQvFQKzW0fvkYlEYw.jpg",
    notes: "Evening horror screening"
  },
  {
    title: "Dune: Part Two",
    type: "movie",
    category: "New Release",
    genre: ["Sci-Fi", "Adventure"],
    venue: "Ster-Kinekor IMAX – Sandton",
    showtimes: ["Saturday 16:00", "Sunday 13:00"],
    price: 160,
    image: "https://image.tmdb.org/t/p/original/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
    notes: "IMAX experience"
  },

  // 🎌 ANIME
  {
    title: "Spirited Away",
    type: "movie",
    category: "Anime Classic",
    genre: ["Fantasy"],
    venue: "The Bioscope – Milpark",
    showtimes: ["Friday 19:00"],
    price: 70,
    image: "https://image.tmdb.org/t/p/original/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg",
    notes: "Studio Ghibli masterpiece"
  },
  {
    title: "Your Name",
    type: "movie",
    category: "Anime",
    genre: ["Romance", "Fantasy"],
    venue: "Nu Metro VIP – Rosebank",
    showtimes: ["Saturday 15:30"],
    price: 150,
    image: "https://image.tmdb.org/t/p/original/q719jXXEzOoYaps6babgKnONONX.jpg",
    notes: "Emotional anime drama"
  },
  {
    title: "Akira",
    type: "movie",
    category: "Anime Classic",
    genre: ["Sci-Fi"],
    venue: "Community Screening – Braamfontein",
    showtimes: ["Sunday 18:00"],
    price: 80,
    image: "https://image.tmdb.org/t/p/original/8i3rZ0mC3o2E2P5nYF0az2QmiFj.jpg",
    notes: "Cyberpunk cult classic"
  },

  // 📺 SERIES EVENTS
  {
    title: "Stranger Things",
    type: "series",
    category: "Series Marathon",
    genre: ["Sci-Fi", "Thriller"],
    venue: "The Bioscope – Special Event",
    showtimes: ["Friday 18:00 (Season 1 Marathon)"],
    price: "R90",
    image: "https://image.tmdb.org/t/p/original/49WJfeN0moxb9IPfGn8AIqMGskD.jpg",
    notes: "Retro 80s horror vibes"
  },
  {
    title: "Money Heist",
    type: "series",
    category: "Series Marathon",
    genre: ["Crime", "Thriller"],
    venue: "Private Screening – Rosebank",
    showtimes: ["Saturday 16:00 (Top Episodes)"],
    price: 0,
    image: "https://image.tmdb.org/t/p/original/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg",
    notes: "La Casa de Papel special"
  },

  // 🎥 MORE MOVIES (to reach ~20)
  {
    title: "The Dark Knight",
    type: "movie",
    category: "Modern Classic",
    genre: ["Action", "Crime"],
    venue: "Ster-Kinekor – Sandton",
    showtimes: ["Sunday 17:00"],
    price: 110,
    image: "https://image.tmdb.org/t/p/original/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    notes: "Christopher Nolan masterpiece"
  },
  {
    title: "Interstellar",
    type: "movie",
    category: "Sci-Fi Classic",
    genre: ["Sci-Fi", "Drama"],
    venue: "Ster-Kinekor IMAX – Rosebank",
    showtimes: ["Saturday 20:00"],
    price: 160,
    image: "https://image.tmdb.org/t/p/original/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
    notes: "IMAX space experience"
  },
  {
    title: "Parasite",
    type: "movie",
    category: "International",
    genre: ["Thriller", "Drama"],
    venue: "The Bioscope – Milpark",
    showtimes: ["Thursday 19:30"],
    price: 70,
    image: "https://image.tmdb.org/t/p/original/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
    notes: "Oscar-winning thriller"
  },
  {
    title: "The Matrix",
    type: "movie",
    category: "Sci-Fi Classic",
    genre: "Sci-Fi / Action",
    venue: "Ster-Kinekor Throwback – Rosebank",
    showtimes: ["Tuesday 18:00"],
    price: 50,
    image: "https://image.tmdb.org/t/p/original/aoiuZAjPaRIE6CMzbazvcHuHXDc.jpg",
    notes: "Red pill or blue pill?"
  },
  {
    title: "Inception",
    type: "movie",
    category: "Modern Classic",
    genre: ["Sci-Fi", "Thriller"],
    venue: "Nu Metro VIP – The Glen",
    showtimes: ["Saturday 19:00"],
    price: 120,
    image: "https://image.tmdb.org/t/p/original/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg",
    notes: "Dream within a dream"
  }
];

export default entertainmentSchedule;
