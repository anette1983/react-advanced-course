// import styles from "./Movies.module.scss";
import { connect } from "react-redux";
import { CardGroup } from "semantic-ui-react";

import { Movie } from "../../reducers/movies";
import { RootState } from "../../store";
import MovieCard from "./MovieCard";

interface Props {
  movies: Movie[];
}

function Movies({ movies }: Props) {
  return (
    <section>
      {/* <div className={styles.list}> */}
      <CardGroup centered stackable>
        {movies.map((m) => (
          <MovieCard
            key={m.id}
            id={m.id}
            title={m.title}
            overview={m.overview}
            popularity={m.popularity}
          />
        ))}
      </CardGroup>
      {/* </div> */}
    </section>
  );
}

const mapStateToProps = (state: RootState) => ({
  movies: state.movies.top,
});

const connector = connect(mapStateToProps);

export default connector(Movies);
