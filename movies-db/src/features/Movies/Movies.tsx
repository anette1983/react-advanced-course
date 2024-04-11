import { connect } from "react-redux";
import { Movie } from "../../reducers/movies";
import { RootState } from "../../store";
import MovieCard from "./MovieCard";
import "./Movies.css";

interface Props {
  movies: Movie[];
}

function Movies({ movies }: Props) {
  return (
    <section>
      <div>
        {movies.map((m) => (
          <>
            {/* <h2>{m.title}</h2>
                <p>{m.overview}</p>
                <p>{m.popularity}</p> */}
            <MovieCard
            //   id={m.id}
              //   title={m.title}
              //   overview={m.overview}
              //   popularity={m.popularity}
              movie={m}
            />
          </>
        ))}
      </div>
    </section>
  );
}

const mapStateToProps = (state: RootState) => ({
  movies: state.movies.top,
});
const connector = connect(mapStateToProps);
export default connector(Movies);
