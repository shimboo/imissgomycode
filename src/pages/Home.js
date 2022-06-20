import React from 'react'
import { Carousel } from 'react-bootstrap';
import photo5 from '../photos/two.jpg';
import photo6 from '../photos/seven.jpg';
import photo7 from '../photos/one.jpg';

const Home = () => {
    return (
        <div className='vi'>
            <div className='wa'>
                <p >

                    Is born from our love. It is not simply a beach house, but a special place for us that we would love to share with our guests to offer a unique and unforgettable experience.

                </p>
            </div>
            <Carousel variant="dark">
                <Carousel.Item>
                    <img
                        className="w-100"
                        src={photo5}
                        alt="First slide"
                    />
                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="w-100"
                        src={photo6}
                        alt="Second slide"
                    />
                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="w-100"
                        src={photo7}
                        alt="Third slide"
                    />
                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </div>
    );
}

export default Home
