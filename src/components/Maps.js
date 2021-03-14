import React, { useState, useEffect } from 'react';
import ReactMapGL, {Marker, Popup} from "react-map-gl"
import TruckPin from '/mnt/c/Users/Drech/Documents/SEI/projects/street-food-api/src/components/TruckPin.js';

const Maps = ({ location, foodTruck, information }) => {
    // const [showPopup, togglePopup] = useState(true);
	const [viewport, setViewport] = useState({
			latitude: 37.73944545286909,
			longitude: -122.39301498669842,
			width: '73.3vw',
			height: '75vh',
			zoom: 11
		});

		// console.log(parseFloat(information.longitude));
		// console.log(location)
		// console.log(viewport)

		// console.log(foodTruck);
		// console.log(foodTruck.latitude);
		// console.log(information)

	useEffect(() => {
		if (location[0] !== undefined || 0) {
			setViewport({
				latitude: parseFloat(location[0]),
				longitude: parseFloat(location[1]),
				width: '73.3vw',
				height: '75vh',
				zoom: 18
			});
	}
	}, [location])

	// console.log(viewport);


		let markers = foodTruck.map((truck) => {
			if (truck.latitude !== location[0]) {
				return (
					<Marker
						className='smallMarker'
						key={truck.objectid}
						longitude={parseFloat(truck.longitude)}
						latitude={parseFloat(truck.latitude)}>
						{/* <div style={{ color: 'red' }}>TRUCK</div> */}
						{/* <TruckPin size={14}></TruckPin> */}
					</Marker>
				);
			}
		});
	

	// console.log(list)


    return (
			<div className='mapDiv'>
				<ReactMapGL className='map'
					{...viewport}
					mapboxApiAccessToken='pk.eyJ1IjoiZHlsYW5kcmVjaHNlbCIsImEiOiJja20zbXU4MXAxajhiMm9xbXVrMW01dGNrIn0.Ql2dpSmE-S6Q0FgbY0iqjg'
					mapStyle='mapbox://styles/dylandrechsel/ckm3pch0w220218qt4l0ud8yb'
					onViewportChange={(viewport) => {
						setViewport(viewport);
					}}>
					<Marker
						className='marker'
						longitude={parseFloat(information.longitude)}
						latitude={parseFloat(information.latitude)}>
						{/* <div className='pin' style={{ color: 'black' }}>
							TRUCK
						</div> */}
						{/* <TruckPin size={20}></TruckPin> */}
					</Marker>

					{markers}
				</ReactMapGL>
			</div>
		);
};

export default Maps;