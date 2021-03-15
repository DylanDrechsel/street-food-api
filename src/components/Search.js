import React, { useState, useEffect } from 'react';

const Search = ({ foodTruck, inputValue, setInputValue, foodTruckOnChange }) => {
	// const [inputValue, setInputValue] = useState({})
	// console.log(foodTruck)
	// console.log(inputValue)
	// console.log(foodTruckOnChange)

    return (
			<div>
				<input className="search" /* style={{ width: '1000%'}} */ type='text' placeholder='Search for foodtruck!' value={setInputValue} onChange={foodTruckOnChange} />
			</div>
		);
};

export default Search;