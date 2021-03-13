import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

const Navigation = () => {
	return (
		<Navbar
			className='Nav'
			style={{ maxHeight: '3vh' /*  background: '#FF715B' */ }}
			collapseOnSelect
			variant='light'
			expand='md'>
			<Navbar.Brand
				style={{ color: 'white' /* , fontweight: 'bold'  */ }}
				as={Link}
				to='/'>
				<b>FoodTrucks</b>
			</Navbar.Brand>
			<Navbar.Toggle aria-controls='basic-navbar-nav' />
			<Navbar.Collapse id='basic-navbar-nav'>
				<Nav>
					<Nav.Link style={{ color: 'white' }} as={Link} to='/about'>
						<b>About</b>
					</Nav.Link>
					<Nav.Link style={{ color: 'white' }} as={Link} to='/contact'>
						<b>Contact</b>
					</Nav.Link>
					<Nav.Link style={{ color: 'white' }} as={Link} to='/search'>
						<b>Search</b>
					</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default Navigation;
