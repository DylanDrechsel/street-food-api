import React from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About';
import FoodTruck from './components/FoodTruck'
import Maps from './components/Maps'

function App() {
  return (
    <div className="App">

      <link
				href='https://api.mapbox.com/mapbox-gl-js/v2.1.1/mapbox-gl.css'
				rel='stylesheet'
			/>
      
      <nav>

        <Link to='/'><h1>Home</h1></Link>

        <Link to='/about'><h1>About</h1></Link>

        <Link to='/food-truck'><h1>Food Trucks</h1></Link>

      </nav>

      <sidebar>
      </sidebar>

      <main>

        {/* <FoodTruck /> */}

        <Route path='/' exact component={FoodTruck} />

        <Route path='/about' component={About} />

        {/* <Route path='/food-truck' component={FoodTruck} /> */}

        {/* <Route path='/foodtruck/:applicant' render={() => 
          
          <div id='map'>

            <FoodTruck />
            <Maps />

          </div>

        } /> */}
        
      </main>

    </div>
  );
}

export default App;
