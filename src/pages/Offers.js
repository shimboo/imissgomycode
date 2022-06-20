import React from 'react'
import RoomCard from './RoomCard'
const Offers = ({ roomList }) => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            flexWrap: 'wrap',
        }}>
            {
                roomList.map(el =>
                    <RoomCard room={el} />)
            }

        </div>
    )
}

export default Offers
