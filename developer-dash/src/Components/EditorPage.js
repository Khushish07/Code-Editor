import React, { useEffect, useRef, useState } from 'react'
import Client from './Client';
import Editor from './Editor';
import { initSocket } from '../socket';
import ACTIONS from '../Actions';
import toast from 'react-hot-toast';
import {
  useLocation,
  useNavigate,
  Navigate,
  useParams,
} from 'react-router-dom';



export default function EditorPage() {

  const socketRef = useRef(null);
  const location = useLocation();
  const { roomId } = useParams();
  const reactNavigator = useNavigate();

  useEffect(()=>{
      const init = async()=>{
          socketRef.current = await initSocket();

          socketRef.current.on('connect_error',(err)=> handleErrors(err));
          socketRef.current.on('connect_failed',(err)=> handleErrors(err));

          function handleErrors(e) {
            console.log('socket error', e);
            toast.error('Socket connection failed, try again later.');
            reactNavigator('/');
        }

          socketRef.current.emit(ACTIONS.JOIN,{
            roomId,
            username:location.state?.username,
          });

          socketRef.current.on(ACTIONS.JOINED, ({clients,username,socketId})=>{
                if(username !== location.state.username){
                  toast.success(`${username} joined the room`);
                  console.log(`${username} joined`);
                }
                setClients(clients);
          });

          //Listening for disconnected
          socketRef.current.on(ACTIONS.DISCONNECTED,({socketId,username})=>{
                toast.success(`${username} left the room`);
                setClients((prev)=>{
                    return prev.filter(client => client.socketId !== socketId);
                });
          });

      };
      init();
  },[]);

  const [clients,setClients] = useState([
    // {socketId : 1, username : "Krishna"},
    // {socketId : 2, username : "Khushi"},
    // {socketId : 3, username : "Akshat"},
    // {socketId : 5, username : "Divyanshi"}
  ]);

  // if(!location.state){
  //   <Navigate to={/}/>
  // }

  return (
    <div className='mainWrap'>
      <div className='aside'>
          <div className='asideInner'>
            <div className='logo'>
              <img className='logoImage' src='/Developer-Dash.png' alt='Logo'/>
            </div>

            <h3> Connected</h3>

      <div className='clientsList'>
          {
            clients.map(client => (
                <Client key={client.socketId} username={client.username}/>
            ))
          }
      </div>
          </div>
          <button className='btn copyBtn'>Copy RoomID</button>
          <button className='btn leaveBtn'>Leave Room</button>
      </div>
      

      <div className='editorWrap'>
        <Editor/>
      </div>
    </div>
  )
}
