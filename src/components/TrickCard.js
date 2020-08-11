import React from 'react';

const TrickCard = ({ trickName, trickDesc, bttn }) => {
	return (
		<div
			className='card border-primary mb-3'
			style={{ maxWidth: '30rem', textAlign: 'center' }}
		>
			<div className='card-header'>Trick Card</div>
			<div className='card-body'>
				<h4 className='card-title'>{trickName}</h4>
				<p className='card-text'>{trickDesc}</p>
			</div>
			<div className='card-body'>
				<button type='button' className='btn btn-primary'>
					{bttn}
				</button>
			</div>
		</div>
	);
};

export default TrickCard;
