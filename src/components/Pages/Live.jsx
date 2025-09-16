import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom';



function Live() {

    const messageRef = useRef(null);
    const socketRef = useRef(null);


    useEffect(()=> {
        socketRef.current = new WebSocket("ws://localhost:4000");

        socketRef.onopen = ()=> {
            console.log("Connected.");
        }
        socketRef.onmessage = (msg) => {
            const data = JSON.parse(msg.data);
            console.log(`"received message: ${data}"`);
        }

        return ()=> {
            socketRef.close();
        }
    })

    const navigate = useNavigate();

    const handleSubmit = (e)=> {

    e.preventDefault();
    const msg = messageRef.current.value;
    if (socketRef.current && socketRef.current.readyState === WebSocket.OPEN) {
      // send message in your server format
      socketRef.current.send(JSON.stringify({ type: "message", msg }));
    }
    navigate('/sign-up/submit', { state: { message: 'Form submitted successfully!' } });
}
  return (
    <div >
        <form style={{paddingTop: '5rem'}} onSubmit={handleSubmit}>
            <label name="livemsg">Message: </label>
            <textarea ref={messageRef} id='livemsg'></textarea>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Live