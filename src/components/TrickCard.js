import React from 'react';

const TrickCard = ({
	trickName,
	trickDesc,
	trickType,
	trickDiff,
	trickId,
	bttn,
}) => {
	return (
		<React.Fragment key={trickId}>
			<div className='col-sm-6'>
				<div
					className='card mb-3'
					style={{ maxWidth: '25rem', textAlign: 'center' }}
				>
					<div className='card-body'>
						<h5 className='card-title card-header'>{trickName}</h5>
					</div>
					<div className='card-body'>
						<p className='card-text'>{trickDesc}</p>
					</div>
					<div className='card-body'>
						<div className='container'>
							<div className='row'>
								<div className='col-lg' style={{ textAlign: 'left' }}>
									<p className='card-text d-inline'>
										Trick Difficulty: <strong>{trickDiff}</strong>
										<br />
										Trick Type: <strong>{trickType}</strong>
									</p>
								</div>
								<div className='col-sm' style={{ textAlign: 'right' }}>
									<button type='button' className='btn btn-primary d-inline'>
										{bttn}
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default TrickCard;
