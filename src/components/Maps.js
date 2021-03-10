import React, { useState, useEffect } from 'react';
import ReactMapGL, {Marker} from "react-map-gl"

const Maps = ({ location }) => {
    const [viewport, setViewport] = useState({
			latitude: 37.73944545286909,
			longitude: -122.39301498669842,
			width: '100vw',
			height: '100vh',
			zoom: 10,
		});

		console.log(location)
		console.log(viewport)

	
	useEffect(() => {
		if (location[0] !== undefined || 0) {
			setViewport({
				latitude: parseFloat(location[0]),
				longitude: parseFloat(location[1]),
				width: '100vw',
				height: '100vh',
				zoom: 18,
			});
	}
	}, [location])

	console.log(viewport);



    return (
			<div className='Map' id='map'>
				<ReactMapGL

					{...viewport}

					mapboxApiAccessToken='pk.eyJ1IjoiZHlsYW5kcmVjaHNlbCIsImEiOiJja20zbXU4MXAxajhiMm9xbXVrMW01dGNrIn0.Ql2dpSmE-S6Q0FgbY0iqjg'

					mapStyle='mapbox://styles/dylandrechsel/ckm3pch0w220218qt4l0ud8yb'

					onViewportChange={(viewport) => {
						setViewport(viewport);

					}}>



                    </ReactMapGL>

				{/* <h1>Hello from maps</h1> */}
			</div>
		);
};

export default Maps;