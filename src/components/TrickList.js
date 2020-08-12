import React from 'react';
import TrickCard from './TrickCard';

const TrickList = ({ trickList }) => {
	const renderedTrickList = trickList.map(
		({
			trick_name,
			trick_description,
			trick_difficulty,
			trick_type,
			trick_id,
		}) => {
			let difficulty = '';
			let name = '';

			switch (trick_difficulty) {
				case (trick_difficulty = 'n'):
					difficulty = 'noob';
					break;
				case (trick_difficulty = 'i'):
					difficulty = 'intermediate';
					break;
				case (trick_difficulty = 'p'):
					difficulty = 'pro';
					break;
				default:
					difficulty = '';
			}

			function titleCase(str) {
				return str
					.toLowerCase()
					.split(' ')
					.map(function (word) {
						return word.charAt(0).toUpperCase() + word.slice(1);
					})
					.join(' ');
			}

			if (trick_type.includes('grind') && !trick_name.includes('slide')) {
				name = trick_name + ' grind';
			} else {
				name = trick_name;
			}

			return (
				<TrickCard
					trickName={titleCase(name)}
					trickDesc={trick_description}
					trickType={trick_type.join(' ')}
					trickDiff={difficulty}
					key={trick_id}
					bttn='Learn More'
				/>
			);
		}
	);

	return renderedTrickList;
};

export default TrickList;
