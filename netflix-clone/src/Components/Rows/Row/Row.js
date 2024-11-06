import React, { useState, useEffect } from 'react';
import "./row.css";
import axios from "../../../utils/axios";
import movieTrailer from 'movie-trailer'; // Assuming you have this library or similar for fetching trailers
import Youtube from 'react-youtube';

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);  // Make sure this is plural
  const [trailerUrl, setTrailerUrl] = useState("");

  const base_url = "https://image.tmdb.org/t/p/original"; // Base URL for movie images

  useEffect(() => {
    (async () => {
      try {
        console.log(fetchUrl);
        const request = await axios.get(fetchUrl);
        console.log(request);
        setMovies(request.data.results);  // Corrected to setMovies
      } catch (error) {
        console.log("error", error);
      }
    })();
  }, [fetchUrl]);  // Make sure the effect depends on fetchUrl if it's dynamic
  
  const handleClick = (movie) => {
    if (trailerUrl)
      setTrailerUrl("");  // Reset trailer
    else
      movieTrailer(movie?.title || movie?.name || movie?.original_name)
        .then((url) => {
          console.log(url);
          const urlParams = new URLSearchParams(new URL(url).search);
          console.log(urlParams);
          console.log(urlParams.get('v'));
          setTrailerUrl(urlParams.get('v'));  // Set trailer URL
        });
  };

  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="row__posters">
        {movies?.map((movie, index) => (
          <img
            key={index}
            onClick={() => handleClick(movie)} // On click, handle trailer fetch
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
            alt={movie.name}
          />
        ))}
      </div>

      {/* Trailer display (if trailerUrl is set, display iframe) */}
      {trailerUrl && (
        <div style={{ padding: '40px' }}>
          <iframe
            width="100%"
            height="390"
            src={`https://www.youtube.com/embed/${trailerUrl}?autoplay=1`}
            title="Movie trailer"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default Row;
