import './App.css';
import Search from './components/search/search';
import CurrentWeather from './components/current-weather/current-weather';
import { WEATHER_API_URL, WEATHER_API_KEY} from './api';



function App() {

  const handleOnSearchChange = (searchData) =>{
   const [lat, lon ] =  searchData.value.split(" ");


    const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`);
    const forecastFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`);

    Promise.all({currentWeatherFetch, forecastFetch})
      .then(async (response) => {
        const weatherReponse = await reponse[0].json();
        const forecastReponse = await reponse[1].json();

      })
    }

  }
  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      <CurrentWeather />
    </div>
  );
}

export default App;
