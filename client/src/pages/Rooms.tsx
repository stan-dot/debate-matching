import {NavBar} from '../components/NavBar';
import {useState, useContext} from 'react';
import {SocketContext} from '../Socket.wrapper';
import {Socket} from 'socket.io-client';

export function Rooms(props:{}){
  const [rooms, setRooms] = useState([] as string[]);
  const socket: Socket = useContext(SocketContext);
  socke.emit('getAllRooms');
  const requestRoom = () =>{
    socket.emit('requestRoom');
  }
  const handleJoin = (room:string)  =>{
    socket.emit('joinRoom', room);
  }

  // todo handle getrooms
  // todo handle roomRejected
  socket.on('roomGranted', ()=>{
    // todo use Link from Router
    window.location.href="/chat";
  })
  
  return <>
    <NavBar/>
  <div id="roomList">
    {rooms.map((room:string )=>{
    return <div>
    <p>room number: {room}</p>
      <button onClick={()=>handleJoin(room)}>Join this room</button>
    </div>
    })}
    {rooms.length === 0 && <p>no rooms available</p>}
    <div id="requestRoomBox">
    <button onClick={()=>requestRoom()} />
    </div>
  </div>
  </>
}