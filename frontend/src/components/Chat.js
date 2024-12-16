import React, { useState } from 'react';
import axios from 'axios';

function Chat() {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const sendMessage = async () => {
    try {
      const res = await axios.post(
        'http://localhost:8000/api/chat/message/',
        { message },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );
      setResponse(res.data.response);
    } catch (error) {
      console.error('Error al enviar el mensaje:', error);
    }
  };

  return (
    <div>
      <textarea
        placeholder="Escribe tu mensaje"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Enviar</button>
      <div>
        <h3>Respuesta:</h3>
        <p>{response}</p>
      </div>
    </div>
  );
}

export default Chat;
