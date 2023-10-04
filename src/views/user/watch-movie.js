import React, { useEffect, useState } from "react";
import { ref, get, remove } from "firebase/database";
import { database } from "../../firebase";
import MovieUserCard from "../../components/movie-card-users";

const WatchMovies = () => {
  const [watchedMovies, setWatchedMovies] = useState([]);

  useEffect(() => {
    const watchedMoviesRef = ref(database, "db/watch");
    get(watchedMoviesRef).then((snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const movieList = Object.values(data);
        setWatchedMovies(movieList);
      }
    });
  }, []);

  const handleDelete = (movieId) => {
    const movieRef = ref(database, `db/watch/${movieId}`);
    remove(movieRef)
      .then(() => {
        console.log("Film başarıyla silindi");
        setWatchedMovies((prevMovies) => prevMovies.filter((movie) => movie.id !== movieId));
      })
      .catch((error) => {
        console.error("Silme işlemi başarısız oldu", error);
      });
  };

  return (
    <div className="movieList">
      <div className="container">
        <div className="row my-5">
          {watchedMovies.length > 0 ? watchedMovies.map((movie) => (
            <MovieUserCard
              key={movie.id}
              title={movie.title}
              url={movie.url}
              textStr={'İzlediklerimden Kaldır'} 
              bgStr={'red'}
              addDB={() => handleDelete(movie.id)} 
            />
          )) : <h2 style={{textAlign:'center'}}>Hiç Film Eklenmedi!</h2>
          }
        </div>
      </div>
    </div>
  );
};

export default WatchMovies;
