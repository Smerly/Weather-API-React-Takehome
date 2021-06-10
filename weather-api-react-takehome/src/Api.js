import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Api() {
	const zip = '94501';
	const units = 'imperial';
	const apikey = 'a1faba83107bd1140d4538408420862f';
	const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apikey}&units=${units}`;
	const [weathere, setWeathere] = useState(null);

	let content = null;

	useEffect(() => {
		axios.get(path).then((response) => {
			setWeathere(response.data);
		});
	}, [path]);

	if (weathere) {
		const placeholder = `"${weathere.weather[0].description}" correlates with your mood of...`;
		return (
			<div>
				<h2> Current weather: {weathere.weather[0].description}</h2>
				<form>
					<input
						type="text"
						placeholder={placeholder}
						style={{ width: 300 }}
					></input>
				</form>
			</div>
		);
	} else {
		return <div>{content}</div>;
	}
}
export default Api;
