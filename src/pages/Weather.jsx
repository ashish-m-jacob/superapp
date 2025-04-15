import { React, useEffect, useState } from "react";
import styles from "./Weather.module.css";

const Weather = () => {
  const [weatherData, setWeatherData] = useState({});
  const [weatherArray, setWeatherArray] = useState([]);
  const [loading, setLoading] = useState(true);
  const [dates, setDates] = useState({
    day: "",
    month: "",
    year: "",
  });

  const [time, setTime] = useState({
    hours: "",
    minutes: "",
  });

  const [ampm, setAmpm] = useState("AM");

  const [times, setTimes] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    async function fetchData() {
      await fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=Bangalore&appid=5da213236dff1af3152dfcfae5086ec7&units=metric"
      )
        .then((res) => res.json())
        .then((data) => {
          setWeatherData(data);
          setWeatherArray(data.weather);
          setLoading(false);
        });
    }

    fetchData();
  }, []);

  if (loading) {
    console.log("Loading...");
  }

  console.log(weatherData);

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

  function beginTimer() {}

  setInterval(getDate, 1000);

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
        <div className={styles.notes}>
          <div className={styles.notesTitle}>
            <h2>All Notes</h2>
          </div>
          <div
            className={styles.notesContent}
            contentEditable={true}
            placeholder="Write your notes here..."
          >
            <p>Type your notes here...</p>
          </div>
        </div>
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
          <div className={styles.weatherCond}>
            {weatherData && (
              <img
                src={`https://openweathermap.org/img/wn/${weatherArray[0]?.icon}@2x.png`}
                className={styles.weatherIconImage}
              />
            )}
          </div>

          {weatherData && (
            <div className={styles.temperature}>
              <h1>{weatherData.main?.temp}°C</h1>
            </div>
          )}

          {weatherData && (
            <div className={styles.windSpeed}>
              <img
                src="src\assets\windIcon.png"
                className={styles.speedIcon}
              ></img>
              <div className={styles.windSpeedData}>
                <p>{weatherData.wind?.speed} km/hr</p>
                <p>Wind</p>
              </div>
            </div>
          )}

          <div className={styles.weatherDescription}>
            {weatherData && <p>{weatherArray[0]?.description}</p>}
          </div>

          {weatherData && (
            <div className={styles.pressure}>
              <img
                src="src\assets\pressureIcon.png"
                className={styles.pressureIcon}
              ></img>
              <div className={styles.pressureData}>
                <p>{weatherData.main?.pressure} mbar</p>
                <p>Pressure</p>
              </div>
            </div>
          )}

          {weatherData && (
            <div className={styles.windHumidity}>
              <img
                src="src\assets\humidityIcon.png"
                className={styles.humidityIcon}
              ></img>
              <div className={styles.humidityData}>
                <p>{weatherData.main?.humidity}% </p>
                <p>Humidity</p>
              </div>
            </div>
          )}
        </div>
        <div className={styles.watchDetails}>
          <div className={styles.timer}>
            <div className={styles.timerBorder}>
              <h2>
                {times.hours}:{times.minutes}:{times.seconds}
              </h2>
            </div>
          </div>
          <div className={styles.adjustTimer}>
            <div className={styles.timerTitles}>
              <div className={styles.title}>
                <p>Hours</p>
              </div>
              <div className={styles.title}>
                <p>Minutes</p>
              </div>
              <div className={styles.title}>
                <p>Seconds</p>
              </div>
            </div>
            <div className={styles.upArrows}>
              <div className={styles.arrow}>
                <img src="src\assets\upArrow.png" className={styles.upArrow} />
              </div>
              <div className={styles.arrow}>
                <img src="src\assets\upArrow.png" className={styles.upArrow} />
              </div>
              <div className={styles.arrow}>
                <img src="src\assets\upArrow.png" className={styles.upArrow} />
              </div>
            </div>
            <div className={styles.numbers}>
              <div className={styles.num}>
                <p>{times.hours}</p>
              </div>
              <div className={styles.num}>
                <p>:</p>
              </div>
              <div className={styles.num}>
                <p>{times.minutes}</p>
              </div>
              <div className={styles.num}>
                <p>:</p>
              </div>
              <div className={styles.num}>
                <p>{times.seconds}</p>
              </div>
            </div>
            <div className={styles.downArrows}>
              <div className={styles.dArrow}>
                <img
                  src="src\assets\downArrow.png"
                  className={styles.downArrow}
                />
              </div>
              <div className={styles.dArrow}>
                <img
                  src="src\assets\downArrow.png"
                  className={styles.downArrow}
                />
              </div>
              <div className={styles.dArrow}>
                <img
                  src="src\assets\downArrow.png"
                  className={styles.downArrow}
                />
              </div>
            </div>
            <div className={styles.startButton}>
              <button type="button" onClick={beginTimer}>
                Start
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.rightDiv}>
        <div className={styles.imageContainer}>
          <div className={styles.cardTitle}>
            <h3>Want to climb Mount Everest?</h3>
          </div>
        </div>
        <div className={styles.textContainer}>
          <p className={styles.cardText}>
            In the years since human beings first reached the summit of Mount
            Everest in 1953, climbing the world’s highest mountain has changed
            dramatically. Today, hundreds of mountaineers manage the feat each
            year thanks to improvements in knowledge, technology, and the
            significant infrastructure provided by commercially guided
            expeditions that provide a veritable highway up the mountain for
            those willing to accept both the......
          </p>
        </div>
      </div>
    </div>
  );
};

export default Weather;
