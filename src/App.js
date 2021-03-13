import React from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import FoodTruck from './components/FoodTruck'
import Maps from './components/Maps'
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
				{/* <FoodTruck /> */}

				<Route path='/' exact component={FoodTruck} />

				<Route path='/about' component={About} />

				<Route path='/contact' component={About} />

				<Route path='/search' component={About} />

				{/* <Route path='/:objectid' component={FoodTruck} /> */}

				{/* <Route path='/food-truck' component={FoodTruck} /> */}

				{/* <Route path='/test/:applicant' render={() => 
          
          <div id='map'>

            <FoodTruck />
            <Maps />
            <Test />

          </div>

        } /> */}
			</main>
		</div>
	);
}

export default App;
