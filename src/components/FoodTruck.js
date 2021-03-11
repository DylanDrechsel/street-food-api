import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Maps from './Maps'
// import ReactMapGL, { Marker } from 'react-map-gl';

const FoodTruck = () => {
    const [foodTruck, setFoodTruck] = useState([])
	const [location, setLocation] = useState([])
	const [information, setInformation] = useState({
		longitude: 0,
		latitude: 0
	})

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
							console.log(foodItem)

							setFoodTruck(foodItem);
					}})
					.catch((err) => {
						console.log(err);
					});
    }, [])

    let list = foodTruck.map((truck) => {
					return (
						<div key={truck.objectid}>
							<Link
								/* to={'/foodtruck/' + truck.applicant} */
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
							<a href={truck.schedule}>Schedule</a>
						</div>
					);} 
                )
				console.log(information)
    
    return (
			<div>
				<div className='foodtruck'>{list}</div>

				<Maps
					location={location}
					foodTruck={foodTruck} 
					information={information}
				/>
			</div>
		);
};

export default FoodTruck;