export async function getWeather() {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=Bangalore&appid=5da213236dff1af3152dfcfae5086ec7&units=metric`
  );
  const data = await res.json();
  return data;
}
