import {useState, ReactNode, useEffect} from 'react';
import{ io, Socket} from 'socket.io-client';

export const SocketContext = React.useContext({} as Socket);

export function SocketWrapper(props:{children: ReactNode}){
    const [socket, setSocket] = useState(null as Socket);

  useEffect(() => {
    const newSocket = io(`http://${window.location.hostname}:3000`);
    setSocket(newSocket);
    return () => newSocket.close();
  }, [setSocket]);

  return { socket ? 
        <SocketContext.Provider value={socket}>
          {props.children}
        </SocketContext.Provider>
       :         <div>Not Connected</div>
      

}
  