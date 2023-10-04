import React from "react";
import "./index.css";

const MovieUserCard = ({ url, title, imdbID, textStr, bgStr, addDB }) => {
  return (
    <div className="photo card-hover col-xxl-3 col-lg-4 col-md-6 col-12 mb-2">
      <div className="card">
        <img src={url} className="card-img-top" alt={`imdbId :${imdbID}`} />
        <div className="card-body">
          <p className="card-text">{title}</p>
        </div>
        <button className='btn btn-lg rounded-0' style={{background: `${bgStr}`, color:'white'}} onClick={addDB}>{textStr}</button>
      </div>
    </div>
  );
};

export default MovieUserCard;
