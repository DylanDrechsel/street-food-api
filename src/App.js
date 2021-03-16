import React from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import About from './components/About'
import FoodTruck from './components/FoodTruck'
import CarouselContainer from './components/CarouselContainer'
import Navigation from './components/Navigation';


function App() {
  return (
		<div className='App'>
			<link
				href='https://api.mapbox.com/mapbox-gl-js/v2.1.1/mapbox-gl.css'
				rel='stylesheet'
			/>

			<Navigation />
			<CarouselContainer />

			<main>
				<Route path='/' exact component={FoodTruck} />

				<Route path='/street-food-api' exact component={FoodTruck} />

				<Route path='/about' component={About} />

				<Route path='/contact' component={About} />
			</main>
		</div>
	);
}

export default App;
