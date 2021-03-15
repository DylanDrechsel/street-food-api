import React, { useState, useEffect } from 'react';

const Search = ({ setInputValue, foodTruckOnChange }) => {
    return (
			<div>
				<input className="search" type='text' placeholder='Search for foodtruck!' value={setInputValue} onChange={foodTruckOnChange} />
			</div>
		);
};

export default Search;