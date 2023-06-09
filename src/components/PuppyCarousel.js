import React from 'react';
// import puppy1 from '../assets/puppies/Puppy1.png';
import puppy2 from '../assets/puppies/Puppy2.png';
import puppy3 from '../assets/puppies/Puppy3.png';
import puppy4 from '../assets/puppies/Puppy4.png';
// import puppy5 from '../assets/puppies/Puppy5.png';
import Carousel from 'react-bootstrap/Carousel';

const PuppyCarousel = () => {
  return (
    <Carousel style={{ width: '400px', height: '300px', margin: '0 auto' }}>
      {/* <Carousel.Item>
        <div className="d-flex justify-content-center align-items-center h-100">
          <img
            className="d-block w-100"
            src={puppy1}
            alt="Golden Retriever Puppy"
            style={{ objectFit: 'contain', height: '100%' }}
          />
        </div>
      </Carousel.Item> */}
      <Carousel.Item>
        <div className="d-flex justify-content-center align-items-center h-100">
          <img
            className="d-block w-100"
            src={puppy2}
            alt="Puppy2"
            style={{ objectFit: 'contain', height: '100%' }}
          />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="d-flex justify-content-center align-items-center h-100">
          <img
            className="d-block w-100"
            src={puppy3}
            alt="Puppy3"
            style={{ objectFit: 'contain', height: '100%' }}
          />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="d-flex justify-content-center align-items-center h-100">
          <img
            className="d-block w-100"
            src={puppy4}
            alt="Puppy4"
            style={{ objectFit: 'contain', height: '100%' }}
          />
        </div>
      </Carousel.Item>
      {/* <Carousel.Item>
        <div className="d-flex justify-content-center align-items-center h-100">
          <img
            className="d-block w-100"
            src={puppy5}
            alt="Puppy5"
            style={{ objectFit: 'contain', height: '100%' }}
          />
        </div>
      </Carousel.Item> */}
    </Carousel>
  );
};

export default PuppyCarousel;