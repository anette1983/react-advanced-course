// import styles from "./MovieCard.module.scss";

// import { Link } from "react-router-dom";

// interface Props {
//     id: number
//     title: string;
//     popularity: number;
//     overview: string;
// }

// function MovieCard({ id, title, overview, popularity }: Props) {
//     return (
//         <div className={styles.card}>
//             <img className={styles.thumbnail} src="/movie-thumb.png" alt="Movie thumbnail" />
//             <div className={styles.content}>
//                 <div>
//                     <Link to={`/movies/${id}`}>{title}</Link>
//                 </div>
//                 <span className={styles.overview}>{overview}</span>
//                 <div className={styles.popularity}>{popularity}</div>
//             </div>
//         </div>
//     );
// }

// export default MovieCard;
import React from "react";
import {
  Card,
  Image,
  CardContent,
  CardHeader,
  CardMeta,
  CardDescription,
} from "semantic-ui-react";
import { Link } from "react-router-dom";

interface Props {
  id: number;
  title: string;
  popularity: number;
  overview: string;
}

function MovieCard({ id, title, overview, popularity }: Props) {
  return (
    <Card>
      <Image src="/movie-thumb.png" wrapped ui={false} />
      <CardContent>
        <CardHeader>
          <Link to={`/movies/${id}`}>{title}</Link>
        </CardHeader>
        <CardMeta>Popularity: {popularity}</CardMeta>
        <CardDescription>{overview}</CardDescription>
      </CardContent>
    </Card>
  );
}

export default MovieCard;
