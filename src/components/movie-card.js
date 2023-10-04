import React from "react";
import './index.css';

const MovieCard = ({ url, title, imdbID }) => {
  return (
    <div className="photo col-xxl-3 col-lg-4 col-md-6 col-12 mb-2">
      <div className="card">
        <img src={url} className="card-img-top" alt={`imdbId :${imdbID}`} />
        <div className="card-body">
          <p className="card-text">{title}</p>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;