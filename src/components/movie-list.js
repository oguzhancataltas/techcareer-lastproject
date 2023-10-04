import { useEffect, useState } from "react";
import MovieCard from "./movie-card";

const List = () => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    fetch("https://www.omdbapi.com/?s=Batman&apikey=e9951948&")
      .then((res) => res.json())
      .then((data) => {
        setMovieList(data.Search);
      });
  }, []);

  return (
    <div className="movieList">
      <div className="container">
        <div className="row my-5">
          {movieList.length > 0 &&
            movieList.map((item) => {
              return (
                <MovieCard
                  key={item.imdbID}
                  url={item.Poster}
                  title={item.Title}
                  imdbID={item.imdbID}
                />
              )
            })}
        </div>
      </div>
    </div>
  );
}
export default List;