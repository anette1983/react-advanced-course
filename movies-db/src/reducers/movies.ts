import { Action, Reducer } from "redux";

// export interface Movie {
//   id: number;
//   title: string;
//   popularity: number;
//   overview: string;
// }

export interface Movie {
  adult: boolean;
  backdrop_path: string;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface MovieState {
  top: Movie[];
}

const initialState: MovieState = {
  top: [
    // {
    //   id: 1,
    //   title: "The Shawshank Redemption",
    //   popularity: 98,
    //   overview: "Redemption...",
    // },
    // { id: 2, title: "The Godfather", popularity: 97, overview: "Godfather..." },
    // {
    //   id: 3,
    //   title: "The Dark Knight",
    //   popularity: 96.5,
    //   overview: "Batman...",
    // },
    // {
    //   id: 4,
    //   title: "The Godfather Part II",
    //   popularity: 96,
    //   overview: "Part II...",
    // },
    // { id: 5, title: "Angry Men", popularity: 94, overview: "Men..." },
    {
      id: 1,
      title: "The Shawshank Redemption",
      adult: false,
      backdrop_path: "",
      original_language: "en",
      original_title: "The Shawshank Redemption",
      overview:
        "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      popularity: 98,
      poster_path: "",
      release_date: "1994-09-23",
      video: false,
      vote_average: 8.7,
      vote_count: 18098,
    },
    {
      id: 2,
      title: "The Godfather",
      adult: false,
      backdrop_path: "",
      original_language: "en",
      original_title: "The Godfather",
      overview:
        "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.",
      popularity: 97,
      poster_path: "",
      release_date: "1972-03-14",
      video: false,
      vote_average: 8.7,
      vote_count: 14358,
    },
    {
      id: 3,
      title: "The Dark Knight",
      adult: false,
      backdrop_path: "",
      original_language: "en",
      original_title: "The Dark Knight",
      overview:
        "Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.",
      popularity: 96.5,
      poster_path: "",
      release_date: "2008-07-16",
      video: false,
      vote_average: 8.5,
      vote_count: 25361,
    },
    {
      id: 4,
      title: "The Godfather Part II",
      adult: false,
      backdrop_path: "",
      original_language: "en",
      original_title: "The Godfather Part II",
      overview:
        "In the continuing saga of the Corleone crime family, a young Vito Corleone grows up in Sicily and in 1910s New York. In the 1950s, Michael Corleone attempts to expand the family business into Las Vegas, Hollywood and Cuba.",
      popularity: 96,
      poster_path: "",
      release_date: "1974-12-20",
      video: false,
      vote_average: 8.6,
      vote_count: 8428,
    },
  ],
};

// function moviesReducer(state, action) => {
//   return initialState;
// для початку просто повернемо початк стан, не буемо нічог робити
// }

const moviesReducer: Reducer<MovieState, Action> = (state, action) => {
  return initialState;
  // для початку просто повернемо початк стан, не буемо нічог робити
};

export default moviesReducer;
