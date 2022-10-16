// import { useEffect, useState } from "react";
// import { API_KEY } from "./config";

import Header from "./components/Header";
import Main from "./pages/Main";

function App() {
  // const [weather, setWeather] = useState([]);
  // const [city, setCity] = useState("Mogilev");
  // const [days, setDays] = useState("5");

  // useEffect(() => {
  //   fetch(
  //     `https://pro.openweathermap.org/data/2.5/forecast/climate?q=${city}&cnt=${days}&APPID=${API_KEY}&units=metric`
  //   )
  //     .then((res) => res.json())
  //     .then((data) => setWeather(data.list));
  // }, [city]);

  return (
    <>
      <Header />
      <Main />
    </>
  );
}

export default App;
