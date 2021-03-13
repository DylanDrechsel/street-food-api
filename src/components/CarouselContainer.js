import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import data from '/mnt/c/Users/Drech/Documents/SEI/projects/street-food-api/src/data.json';

const CarouselContainer = () => {
	return (
		<Carousel fade style={{ minHeight: '10vh' }}>
			{data.map((item) => {
				return (
					<Carousel.Item key={item.id} style={{ maxHeight: '20vh' }}>
						<img
							className='d-block w-100'
							style={{
								height: '20vh',
								width: '100%',
								objectFit: 'cover',
								overflow: 'hidden',
							}}
							src={item.webImage.url}
							// alt={item.title}
						/>
						<Carousel.Caption>
							{/* <p>{item.longTitle}</p> */}
						</Carousel.Caption>
					</Carousel.Item>
				);
			})}
		</Carousel>
	);
};

export default CarouselContainer;
