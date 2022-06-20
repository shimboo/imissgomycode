import React from 'react'
import Photo1 from "../photos/food.jpg"
import Photo2 from "../photos/room.jpg"
import Photo3 from "../photos/six.jpg"
const AboutUs = () => {
    return (
        <div className='pic'>
            <div className='ho'>
                <img className='fo' src={Photo1} alt='food' />
                <img className='fo' src={Photo2} alt='room' />
                <img className='fo' src={Photo3} alt='terrace' />
            </div>

            <div className='para'>
                <p><h1>About our hotel</h1>
                    Occupying chalets on wood stilts built over the<br />
                    Celebes Sea, this laid-back resort with a dive centre<br />
                    sits on the edge of the sandbar of Kapalai.<br /></p>

                <p>The cosy chalets have simple wood furnishings and<br />
                    private balconies, as well as tea and coffeemaking <br />
                    facilities.</p>
                <p>
                    A breakfast buffet is served in a rustic open-air <br />
                    restaurant. There's also a furnished sundeck.<br />
                    The on-site dive centre offers trips, gear and courses.</p>

                <p>Check-in time: 14:00<br />
                    Check-out time: 12:00</p>
            </div>
        </div >
    )
}

export default AboutUs
