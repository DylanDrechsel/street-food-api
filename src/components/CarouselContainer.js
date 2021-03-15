import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import data from '../data.json';

const CarouselContainer = () => {
	return (
		<div className='mainCarousel'>
			<Carousel fade style={{ minHeight: '10vh' }}>
				{data.map((item) => {
					return (
						<Carousel.Item key={item.id} style={{ maxHeight: '30vh' }}>
							<img
								className='d-block w-100'
								style={{
									height: '23vh',
									width: '100%',
									objectFit: 'cover',
									overflow: 'hidden',
								}}
								src={item.webImage.url}
							/>
						</Carousel.Item>
					);
				})}
			</Carousel>
		</div>
	);
};

export default CarouselContainer;
