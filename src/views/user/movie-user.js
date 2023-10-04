import React, { useEffect, useState } from "react";
import MovieUserCard from "../../components/movie-card-users";
import { ref, set } from "firebase/database";
import { database } from "../../firebase";

const MovieUser = () => {
  const [movieList, setMovieList] = useState([]);
  const [data, setData] = useState({ id: "", title: "", url: "" });

  useEffect(() => {
    fetch("https://www.omdbapi.com/?s=Batman&apikey=e9951948&")
      .then((res) => res.json())
      .then((data) => {
        setMovieList(data.Search);
        console.log(movieList);
      });
  }, [movieList]);

  const setDatabase = (item) => {
    setData({
      id: item.imdbID,
      title: item.Title,
      url: item.Poster,
    });
  };
  useEffect(() => {
    if (data.id) {
      const watchMovie = ref(database, "db/watch/" + data.id);
      set(watchMovie, data);
    }
  }, [data]);

  return (
    <div className="movieList">
      <div className="container">
        <div className="row my-5">
          {movieList.length > 0 &&
            movieList.map((item) => {
              return (
                <MovieUserCard
                  key={item.imdbID}
                  url={item.Poster}
                  title={item.Title}
                  imdbID={item.imdbID}
                  textStr={'İzlediklerime Ekle'}
                  bgStr={'green'}
                  addDB={() => setDatabase(item)}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default MovieUser;
