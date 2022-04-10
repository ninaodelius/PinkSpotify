import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';

import Card from './Card'

function App() {
	const auth =
		'Bearer BQAvCI_KigbmakhRweCwqOMhSgqN6pANFUr6ITSVvZ2PENpS12o_SXB0kARC3fkLhUZtjWrTD2n4NCeU-2axSKQuGJ2LPLj-MH4Rvxh6GnxUBXP_GASR5XIyuOaCSk2O5FT3haE5L7TV';

	const [albums, setAlbums] = useState([]);

	useEffect(async => {
		//getMockData()
		getData()
			//.then(response => response.json())
			.then(data =>
				data.albums.items.forEach(item => setAlbums(added => [...added, item]))
			)
			.catch(error => console.log(error));
	}, []);

	async function getData() {
		const response = await fetch(
			'https://api.spotify.com/v1/browse/new-releases',
			{
				method: 'GET',
				headers: {
					Authorization: auth
				},
				'Content-Type': 'application/json'
			}
		);
		const data = await response.json();
		return data;
	}

	async function getMockData() {
		const response = await fetch('./albums.json', {
			'Content-Type': 'application.json'
		});
		const data = await response.json();
		return data;
	}

	return (
		<main>
      <Card albums={albums} />
		</main>
	);
}

export default App;
