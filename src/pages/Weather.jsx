import React from "react";
import styles from "./Weather.module.css";

const Weather = () => {
  const userInfo = localStorage.getItem("user");
  const user = JSON.parse(userInfo);

  const userGenres = localStorage.getItem("userGenre");
  const genres = JSON.parse(userGenres);

  const date = new Date();

  console.log(genres);
  return (
    <div className={styles.pageContainer}>
      <div className={styles.leftDiv}>
        <div className={styles.userInfo}>
          <div className={styles.displayPic}></div>
          <div className={styles.personalDetails}>
            <p>{user.name}</p>
            <p>{user.email}</p>
            <h2>{user.username}</h2>
          </div>
          <div className={styles.genreChips}>
            {genres.map((item) => (
              <div key={item.id} className={styles.genreChip}>
                <span>{item.title}</span>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.notes}></div>
        <div className={styles.weatherInfo}></div>
        <div className={styles.watchDetails}></div>
      </div>
      <div className={styles.rightDiv}>Right div</div>
    </div>
  );
};

export default Weather;
