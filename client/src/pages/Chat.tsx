import React, {useContext, useState}from 'react';
import {Socket} from 'socket.io-client';
import {SocketContext } from '../Socket.wrapper';
import {NavBar} from '../components/NavBar';

export function Chat(props:{roomId?:string}){
  const socket: Socket = useContext(SocketContext);
  const [messages, setMessages] = useState([] as string[]);
  const [roomId, setRoomId] = useState(props.roomId);
  socket.on('joined', (id:string)=>{
    setRoomId(id);
  })
  socket.on('message',(message:string)=>{
    const copy = messages;
    copy.push(message);
    setMessages(copy);
  });
  socket.on('messageLog', (messages:string[])=>{
    setMessages(messages);
  })
const handleInput = (message:string) =>{
  socket.emit('message', message);
}
  return   <>
    <Navbar/>
  <div id='chat-history'>
    <p>you're in room {roomId}</p>
    {messages.map((message:string)=>{
    return <p>{message}</p>
    })}
    {messages.length === 0 && <p>there are no messages to display</p>}
  </div>
<div id="chat-input">
  <form action={handleInput}>
    <label>
      Write some message
      <input type="text" name="newMessage" id="newMessage"/>
    </label>
  <input type="submit" value="Send"/>
  </form>
  </div>  
  </>  
}