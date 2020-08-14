import React, { useState, useEffect } from 'react';
import TrickList from './TrickList';
import NavBar from './NavBar';
import './App.css';
import sfsData from '../data/skateboard_tricks.json';
import SearchBar from './SearchBar';
import Route from './Route';
import About from './About';

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
			<Route path='/tricks'>
				<SearchBar onFormSubmit={onTermSubmit} />
				<div className='container'>
					<div className='row'>
						<TrickList trickList={filteredTrickList} />
					</div>
				</div>
			</Route>
			<Route path='/about'>
				<About />
			</Route>
		</div>
	);
};

export default App;
