import { React, useEffect, useState } from "react";
import styles from "./Weather.module.css";

const apiKey = "5da213236dff1af3152dfcfae5086ec7";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Bangalore&appid=${apiKey}&units=metric`;

const Weather = () => {
  const [weatherData, setWeatherData] = useState([]);

  const [requiredWeatherData, setRequiredWeatherData] = useState({
    condition: "",
    conditionIcon: "",
    temperature: "",
    mbarPressure: "",
    mbarPressureIcon: "",
    windSpeed: "",
    windSpeedIcon: "",
    humidity: "",
    humidityIcon: "",
  });

  const [dates, setDates] = useState({
    day: "",
    month: "",
    year: "",
  });

  const [time, setTime] = useState({
    hours: "",
    minutes: "",
  });

  //weather api call
  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setWeatherData(data.weather))
      .catch((error) => console.error("Error fetching weather data:", error));
  }, []);

  console.log(weatherData);

  console.log(requiredWeatherData);

  const [ampm, setAmpm] = useState("AM");

  const userInfo = localStorage.getItem("user");
  const user = JSON.parse(userInfo);

  const userGenres = localStorage.getItem("userGenre");
  const genres = JSON.parse(userGenres);

  function getDate() {
    const date = new Date();

    setDates({
      day: date.getDate(),
      month: date.getMonth() + 1,
      year: date.getFullYear(),
    });

    setTime({
      hours: date.getHours(),
      minutes: date.getMinutes(),
    });

    date.getHours() >= 12 ? setAmpm("PM") : setAmpm("AM");
  }

  setInterval(getDate, 1000);

  console.log(dates);

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
        <div className={styles.weatherInfo}>
          <div className={styles.timeDate}>
            <span>
              {dates.month}-{dates.day}-{dates.year}
            </span>
            <span>
              {time.hours > 12 ? time.hours - 12 : time.hours}:
              {time.minutes < 10 ? `0${time.minutes}` : time.minutes}
              {ampm}
            </span>
          </div>
          <div className={styles.weatherCond}></div>
          <div className={styles.temperature}></div>
          <div className={styles.windHumidity}></div>
        </div>
        <div className={styles.watchDetails}></div>
      </div>
      <div className={styles.rightDiv}>Right div</div>
    </div>
  );
};

export default Weather;
