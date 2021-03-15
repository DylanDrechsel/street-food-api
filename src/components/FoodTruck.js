import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Maps from './Maps'
import {Container, Row, Col} from 'react-bootstrap';
// import ReactMapGL, { Marker } from 'react-map-gl';
import Search from './Search'

const FoodTruck = () => {
    const [foodTruck, setFoodTruck] = useState([])
	const [location, setLocation] = useState([])
	const [information, setInformation] = useState({
		longitude: 0,
		latitude: 0
	})
	const [inputValue, setInputValue] = useState({
		inputValue: ''
	})
	const [list, setList] = useState([])

    useEffect(() => {
        fetch('https://data.sfgov.org/resource/6a9r-agq8.json')
			.then((data) => {
				return data.json();
			})
			.then((data) => {

				if (foodTruck !== data) {
							
                // getting rid of all keys that dont have a longitude and latitude
					let locations = data.filter(
						(location) =>
							Number(location.latitude) !== 0 ||
							Number(location.longitude) !== 0
					);
					/* console.log(locations) */
							
					// getting rid of all keys that dont have a food description
					let foodItem = locations.filter(
						(food) => 
							(food.fooditems) !== undefined
					)
							// console.log(foodItem)
					setFoodTruck(foodItem);
			}})
			.catch((err) => {
				console.log(err);
			});
		}, [])

				
	useEffect(() => {
		const list = foodTruck.map((truck) => {
						return (
							<div key={truck.objectid}>
								<Link
									// to={'/' + truck.objectid}
									onClick={() => {
										setLocation([truck.latitude, truck.longitude]);
										const newInformation = {
											latitude: truck.latitude,
											longitude: truck.longitude,
										};
										setInformation(newInformation);
									}}>
									<h2>{truck.applicant}</h2>
								</Link>
								<p>{truck.fooditems}</p>
								{/* <a href={truck.schedule}>Schedule</a> */}
							</div>
						);} 
					)
				setList(list)
						
	}, [foodTruck]) // add foodTruck because list would render before fetch was completed

	useEffect(() => {
		console.log('Test from inputValue effect')
	}, [inputValue])


	// console.log(list)

	const foodTruckOnChange = (event) => {
		// console.log("hi from onChange", event.target.value)
		setInputValue({
			inputValue: event.target.value
		})
	}

				console.log(inputValue.inputValue)


    
    return (
			// <Container>
				<Row>
				
					<Col xs={3}>
						<div className="searchDiv"><Search foodTruck={foodTruck} inputValue={inputValue} foodTruckOnChange={foodTruckOnChange}/></div>
						<div className='scrollbar' className='foodtruck'>{list}</div>
					</Col>

					<Col xs={9}>
						<Maps
							location={location}
							foodTruck={foodTruck} 
							information={information}
						/>
					</Col>

				</Row>
			// </Container>
		);
};

export default FoodTruck;