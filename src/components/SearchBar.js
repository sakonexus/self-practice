import React, { useState } from 'react';

const SearchBar = ({ onFormSubmit }) => {
	const [term, setTerm] = useState('');

	const onSubmit = (event) => {
		event.preventDefault();

		onFormSubmit(term);
	};

	return (
		<div className='container'>
			<form onSubmit={onSubmit}>
				<div className='form-group row'>
					<label htmlFor='staticEmail' className='col-sm-1 col-form-label'>
						Search
					</label>
					<div className='col-sm-8'>
						<input
							type='text'
							className='form-control-plaintext'
							placeholder='Search for Tricks'
							onChange={(event) => setTerm(event.target.value)}
							value={term}
						/>
					</div>
					<div className='col-sm-2'>
						<button
							style={{ display: 'inline-block', margin: '0 0 0 20px' }}
							type='button'
							className='btn btn-primary btn-lg btn-block'
							onClick={onSubmit}
						>
							Submit
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default SearchBar;
