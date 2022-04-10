import React from 'react';
import { useState } from 'react';
import './App.css';

import PlayButton from './PlayButton';

function Card(props) {
	return (
		<div className="grid">
			{props.albums.map((album, i) => (
				<div className="card" key={i}>
					<img src={album.images[0].url} />
					<div className="card-overlay">
						<div className="text-box">
							<p>{album.name}</p>
							<p>{album.artists[0].name}</p>
              <PlayButton index={i}/>
						</div>
					</div>
				</div>
			))}
		</div>
	);
}

export default Card;
