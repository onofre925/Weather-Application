export const geoApiOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a470befc3cmsh036d8e5a4631c35p1ddb2djsnb44e6dd9acbf',
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};

fetch('https://wft-geo-db.p.rapidapi.com/v1/geo/cities', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));