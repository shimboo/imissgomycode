import React, { useState } from 'react'
import { useParams, useHistory } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RoomData } from '../RoomData';
import { Link } from "react-router-dom"
const RoomDec = (props) => {
    const [roomlist, useRoomList] = useState(RoomData);
    console.log('ggggg', RoomData)
    console.log("props", props)
    const { roomId } = useParams();
    console.log(roomId)

    const chosenMovie = roomlist.find(movie => {


        return movie.id == roomId
    });

    const history = useHistory();
    const handleHistory = () => history.push('/');
    return (
        <div className="detail-cont">

            <div className='bigcard'>
                <h2>{chosenMovie && chosenMovie.title}</h2>
                <p className='raf'><span style={{ fontWeight: "700", fontSize: "1.5em" }}> {chosenMovie.name} </span> <br /> {chosenMovie && chosenMovie.description}</p>
                <img className='serer' src={chosenMovie.image} />
            </div>
            <div className='xxx'>
                <button className='reb' onClick={() => handleHistory()}>Go Back Home</button>
                <button className='sed'>
                    <Link id='nn' to='/BookNow'>BookNow</Link>
                </button>
            </div>
        </div>
    )
}

export default RoomDec