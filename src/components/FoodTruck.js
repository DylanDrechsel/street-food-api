import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const FoodTruck = () => {
    const [foodTruck, setFoodTruck] = useState([])

    useEffect(() => {
        fetch('https://data.sfgov.org/resource/6a9r-agq8.json')
					.then((data) => {
						return data.json();
					})
					.then((data) => {

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
					})
					.catch((err) => {
						console.log(err);
					});
    }, [])

    let list = foodTruck.map((truck, index) => {
					return (
						<div key={truck.objectid}>
							
							<Link to={'/foodtruck/' + truck.applicant} onClick={() => {
								const location = [truck.latitude, truck.longitude];
								console.log(location)

								setFoodTruck(location)
								
							}}>
								<h2>{truck.applicant}</h2>
							</Link>

							<p>{truck.fooditems}</p>
							<a href={truck.schedule}>Schedule</a>

						</div>
					);} 
                )
    
    return (
        <div className="foodtruck">
			{/* <h1>Please select the food truck you want to visit</h1> */}
            {list}
        </div>
    );
};

export default FoodTruck;