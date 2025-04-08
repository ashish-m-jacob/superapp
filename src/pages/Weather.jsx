import React from "react";
import styles from "./Weather.module.css";

const Weather = () => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.leftDiv}>
        <div className={styles.userInfo}></div>
        <div className={styles.notes}></div>
        <div className={styles.weatherInfo}></div>
        <div className={styles.watchDetails}></div>
      </div>
      <div className={styles.rightDiv}>Right div</div>
    </div>
  );
};

export default Weather;
