import React from 'react'
import { Carousel } from 'react-bootstrap';
import Photo1 from '../photos/five.jpg'
import Photo2 from '../photos/four.jpg'
import Photo3 from '../photos/one.jpg'

const Explore = () => {
    return (

        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Photo1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Relax on our beach</h3>
                        <p>Our beach is one of the best and purest beaches in the world.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Photo2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Beautiful nature and amazing forests</h3>
                        <p>The resort has a view of the forest.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Photo3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Have an experience you can't forget</h3>
                        <p>Our resort is one of the most beautiful and amazing places.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Explore
