import './App.css';
import {useState} from "react";
import axios from "axios";


function App() {
	const api = "https://api.weatherapi.com/v1/current.json";
	const key = `ce32436cbfda49d989a171617252210`

	const [city,setCity] = useState("");
	const [loading,setLoading]  = useState(false);
	const [data,setData] = useState({
		current: {
			temp_c: null,
			humidity: null,
			wind_kph: null,
			condition: {
				text: null
			}
		}
	});

	const handleSearch = async () => {
		try{
			setLoading(true);
			const response = await axios.get(`${api}?Key=${key}&q=${city}`);
			const data = response.data;
			console.log(data);
			setData(data);
		}catch(e){
			alert('Failed to fetch weather data');
		}finally{
			setLoading(false);
		}
	}

	return (
		<div className="App">
			<div className='city-input'>
				<input 
					type="text"
					placeholder='Enter name of city' 
					onChange={(e) => setCity(e.target.value)}
					value={city}
				/>	

				<button onClick={handleSearch}>Search</button>
			</div>			

			
				{loading ? (<div className="results">Loading data...</div>) : (
					<div className='results'>
						<div id="tempreature">
							<h3>Tempreature</h3>
							<p>{ !data.current.temp_c ? ('-') : (`${data.current.temp_c}°C`)}</p>
						</div>

						<div id="humidity">
							<h3>Humidity</h3>
							<p>{ !data.current.humidity ? ('-') : (`${data.current.humidity}%`)}</p>
						</div>

						<div id="condition">
							<h3>Condition</h3>
							<p>{ !data.current.condition.text ? ('-') : (`${data.current.condition.text}`)}</p>
						</div>

						<div id="wind-speed">
							<h3>Wind Speed</h3>
							<p>{ !data.current.wind_kph ? ('-') : (`${data.current.wind_kph} kph`)}</p>
						</div>
					</div>
				)}
		</div>
  	);
}

export default App;
