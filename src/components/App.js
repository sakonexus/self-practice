import React, { useState, useEffect } from 'react';
import TrickList from './TrickList';
import NavBar from './NavBar';
import './App.css';
import sfsApiCall from '../apis/sfs';
import sfsData from '../data/skateboard_tricks.json';
import SearchBar from './SearchBar';

const App = () => {
	const [trickList, setTrickList] = useState(sfsData);
	const [filteredTrickList, setFilteredTrickList] = useState([]);

	useEffect(() => {
		//console.log(filteredTrickList);
	}, []);

	const onTermSubmit = (term) => {
		setFilteredTrickList(
			trickList.tricks.filter((trick_name) => trick_name === term)
		);

		console.log(filteredTrickList);

		// for (let i = 0; i < trickList.tricks.length; i++) {
		// 	if (trickList.tricks[i].trick_name === term) {
		// 		//filteredTrickList.push(trickList.tricks[i]);
		// 		console.log(i);
		// 	} else {
		// 		return console.log('Empty Search');
		// 	}
		// }

		// console.log(filteredTrickList);

		// setTrickList(filteredTrickList);
	};

	return (
		<div className='container'>
			<NavBar />
			<SearchBar onFormSubmit={onTermSubmit} />
			<div className='card-container' align='center'>
				<TrickList trickList={trickList} />
			</div>
		</div>
	);
};

export default App;
