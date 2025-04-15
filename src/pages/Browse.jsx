import React from "react";

import styles from "./Browse.module.css";

import { useState } from "react";

import { useNavigate } from "react-router-dom";

const Browse = () => {
  const navigate = useNavigate();

  const API_URL = "https://www.omdbapi.com?apikey=457da619";

  const [movies, setMovies] = useState([]);

  const userGenres = localStorage.getItem("userGenre");
  const genres = JSON.parse(userGenres);

  const generateDigits = () => {
    let digits = "";

    for (let i = 0; i < 7; i++) {
      digits += Math.floor(Math.random() * 10);
    }

    console.log(digits);
    return digits;
  };

  for (let i = 0; i < 50; i++) {
    const searchMovie = async () => {
      const response = await fetch(`${API_URL}&i=tt${generateDigits()}`);

      const data = await response.json();

      if (data.Poster !== "N/A") {
        setMovies([...movies, JSON.stringify(data)]);
      }
      console.log(movies);
    };

    searchMovie();
  }

  return (
    <div className={styles.browseContainer}>
      <div className={styles.navbar}></div>
    </div>
  );
};

export default Browse;
