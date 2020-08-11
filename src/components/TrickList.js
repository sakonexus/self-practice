import React from 'react';
import TrickCard from './TrickCard';

const TrickList = ({ trickList }) => {
	const renderedTrickList = trickList.map(
		({ trick_name, trick_difficulty }) => {
			return (
				<TrickCard
					trickName={trick_name}
					trickDesc={trick_difficulty}
					bttn='Learn More'
				/>
			);
		}
	);

	return renderedTrickList;
};

export default TrickList;
