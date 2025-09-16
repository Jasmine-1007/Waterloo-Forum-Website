import React, { useEffect, useRef, useState } from 'react'



function Live() {

    const messageRef = useRef(null);
    const socketRef = useRef(null);

const [response, setResponse] = useState([]); // store server message


    useEffect(()=> {
        socketRef.current = new WebSocket("ws://localhost:4000");

        console.log("mounted.");

        socketRef.current.onopen = ()=> {
            console.log("Connected.");
        }
        socketRef.current.onmessage = (event) => {
            setResponse((prev)=> [...prev, event.data]);
            console.log("received message:", response);
        }

        return () => {
    socketRef.current.close();
  };


    });


    const handleSubmit = (e)=> {

    e.preventDefault();
    const msg = messageRef.current.value;
    if (socketRef.current && socketRef.current.readyState === WebSocket.OPEN) {
      // send message in your server format
      socketRef.current.send(JSON.stringify({ type: "message", msg }));
    }
    // navigate('/sign-up/submit', { state: { message: 'Form submitted successfully!' } });
}
  return (
    <div style={{paddingTop: '5rem'}} >
        <form  onSubmit={handleSubmit}>
            <label name="livemsg">Message: </label>
            <textarea ref={messageRef} id='livemsg'></textarea>
            <button type='submit'>Submit</button>

            <ul>{response.map((r, index)=> {
                return <li key={index}>{r}</li>
            })}</ul>
        </form>
    </div>
  )
}

export default Live