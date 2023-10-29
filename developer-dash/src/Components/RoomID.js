import React, { useState } from 'react';
import { v4 as uuidV4 } from 'uuid';


export default function RoomID() {

    const [roomId, setRoomId] = useState('');
    const [username, setUsername] = useState('');
    const createNewRoom = (e) => {
        e.preventDefault();
        const id = uuidV4();
        setRoomId(id);
    };
  return (
    <div className='home-page-wrapper'>
        <div className='form-wrapper '>
            <img src='/Developer-Dash.png' className='home-page-logo'/>
            <h1 className='app-name'>Developer-Dash</h1>
            <h4 className='label'>Enter Room Details</h4>
            <div className='input-group'>
                <input type='text' className='input-box' value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Name'/>
                <input type='text' className='input-box' value={roomId} placeholder='Room ID' onChange={(e) => setRoomId(e.target.value)}/>
            </div>
            <button className='btn join-button'>Join Now</button>
            <br/>
            <span className='create-info'>If you don't have an invite then create &nbsp; 
            <a onClick={createNewRoom} href='#'className='create-new-room' >new room</a>
            </span>
        </div>
        <footer>
            <h4>
        Built with 💖 by <a href='#'>Algo Pirates</a>
            </h4>
        </footer>
    </div>
  );
}
