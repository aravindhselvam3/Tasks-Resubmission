class Movie {
    constructor(title, studio, rating = "PG") {
      this.title = title;
      this.studio = studio;
      this.rating = rating;
    }
  }
  
  function getPG(movieArray) {
    return movieArray.filter(movie => movie.rating === "PG");
  }
  
  // Creating an instance of the Movie class
  const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");
  
  // Example usage of getPG method with an array of Movie instances
  const movies = [
    new Movie("Movie1", "Studio1", "PG"),
    new Movie("Movie2", "Studio2", "PG-13"),
    new Movie("Movie3", "Studio3", "PG"),
    new Movie("Movie4", "Studio4", "R"),
  ];
  
  const pgMovies = getPG(movies);
  console.log(pgMovies);
  