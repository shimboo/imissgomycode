import React from 'react'
import "./Room.css"
import { Link } from "react-router-dom"
const RoomCard = ({ room }) => {
    return (
        <div>
            <div className="card">
                <div className="card_left">
                    <img className='CIcss' src={room.image} alt="poster" />
                </div>
                <div className="card_right">
                    <h1 className='CHcss'>{room.name}</h1>
                    <div className="card_rightdetails">
                        <ul>
                            <li>{room.description}</li>
                        </ul>
                    </div>
                </div>
                <button className='ion' >
                    <Link id='des' to={`/${room.id}`} >Description</Link >
                </button>
            </div>

        </div >
    )
}

export default RoomCard
