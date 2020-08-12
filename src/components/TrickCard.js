import React from 'react';

const TrickCard = ({ trickName, trickDesc, trickType, trickDiff, bttn }) => {
	return (
		<div className='col-sm-6'>
			<div
				className='card mb-3'
				style={{ maxWidth: '25rem', textAlign: 'center' }}
			>
				<div className='card-body'>
					<h5 class='card-title card-header'>{trickName}</h5>
				</div>
				<div className='card-body'>
					<p class='card-text'>{trickDesc}</p>
				</div>
				<div className='card-body'>
					<div class='container'>
						<div class='row'>
							<div class='col-lg' style={{ textAlign: 'left' }}>
								<p class='card-text d-inline'>
									Trick Difficulty: <strong>{trickDiff}</strong>
									<br />
									Trick Type: <strong>{trickType}</strong>
								</p>
							</div>
							<div class='col-sm' style={{ textAlign: 'right' }}>
								<button type='button' className='btn btn-primary d-inline'>
									{bttn}
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TrickCard;
