import { Link } from "react-router-dom";
import { Movie } from "../../reducers/movies";

interface Props {
  //   id: number;
  //   title: string;
  //   popularity: number;
  //   overview: string;
  movie: Movie;
}

function MovieCard({ movie }: Props) {
  return (
    // <div className="Movies-card">
    //   <div>
    //     <Link to={`/movies/${id}`}>{title}</Link>
    //   </div>
    //   <span className="Movies-card-oveview">{overview}</span>
    //   <div className="Movies-card-pop">{popularity}</div>
    // </div>
    <div className="Movies-card">
      <div className="Movie-card-header">
        <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
        {movie.adult && <span className="Movie-card-adult">18+</span>}
      </div>
      {movie.poster_path && <img src={movie.poster_path} alt={movie.title} />}
      <span className="Movies-card-overview">{movie.overview}</span>
      <div className="Movies-card-pop">
        <div>Language: {movie.original_language.toUpperCase()}</div>
        <div>Release Date: {movie.release_date}</div>
        <div>Popularity: {movie.popularity.toFixed(2)}</div>
        <div>
          Rating: {movie.vote_average} ({movie.vote_count} votes)
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
