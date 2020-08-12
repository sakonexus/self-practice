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
				<div class='form-group row'>
					<label for='staticEmail' class='col-sm-1 col-form-label'>
						Search
					</label>
					<div class='col-sm-8'>
						<input
							type='text'
							class='form-control-plaintext'
							placeholder='Search for Tricks'
							onChange={(event) => setTerm(event.target.value)}
							value={term}
						/>
					</div>
					<div class='col-sm-2'>
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
