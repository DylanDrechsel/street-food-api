import React from 'react';

const Search = ({ setInputValue, foodTruckOnChange }) => {
    return (
			<div>
				<input className="search" type='text' placeholder='Search for foodtruck!' value={setInputValue} onChange={foodTruckOnChange} />
			</div>
		);
};

export default Search;