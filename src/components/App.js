import React, { useState, useEffect } from 'react';
import TrickList from './TrickList';
import NavBar from './NavBar';
import './App.css';
import sfsData from '../data/skateboard_tricks.json';
import SearchBar from './SearchBar';

const App = () => {
	const [trickList, setTrickList] = useState(sfsData.tricks);
	const [filteredTrickList, setFilteredTrickList] = useState(trickList);

	useEffect(() => {
		//console.log(filteredTrickList);
	}, []);

	const onTermSubmit = (term) => {
		setFilteredTrickList(
			trickList.filter((trick) => {
				return trick.trick_name.indexOf(term) !== -1;
			})
		);
	};

	return (
		<div className='container'>
			<NavBar />
			<SearchBar onFormSubmit={onTermSubmit} />
			<div className='card-container' align='center'>
				<TrickList trickList={filteredTrickList} />
			</div>
		</div>
	);
};

export default App;
