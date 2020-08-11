import React, { useState } from 'react';

const SearchBar = ({ onFormSubmit }) => {
	const [term, setTerm] = useState('');

	const onSubmit = (event) => {
		event.preventDefault();

		onFormSubmit(term);
	};

	return (
		<div className='search-bar ui segment'>
			<form onSubmit={onSubmit} className='ui form-inline'>
				<label>Search</label>
				<div className='field'>
					<input
						type='text'
						value={term}
						onChange={(event) => setTerm(event.target.value)}
					/>
				</div>
				<button
					type='button'
					className='btn btn-primary'
					style={{ margin: '0 0 0 20px' }}
					onClick={onSubmit}
				>
					Submit
				</button>
			</form>
		</div>
	);
};

export default SearchBar;
