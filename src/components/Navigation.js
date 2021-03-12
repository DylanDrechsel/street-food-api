import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

const Navigation = () => {
	return (
		<Navbar collapseOnSelect variant='light' expand='md'>
			<Navbar.Brand style={{ color: 'white' }} as={Link} to='/'>
				FoodTrucks
			</Navbar.Brand>
			<Navbar.Toggle aria-controls='basic-navbar-nav' />
			<Navbar.Collapse id='basic-navbar-nav'>
				<Nav>
					<Nav.Link style={{ color: 'white' }} as={Link} to='/about'>
						About
					</Nav.Link>
					<Nav.Link style={{ color: 'white' }} as={Link} to='/contact'>
						Contact
					</Nav.Link>
					<Nav.Link style={{ color: 'white' }} as={Link} to='/search'>
						Search
					</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default Navigation;
