import React from 'react'
import { PaperAirplaneIcon } from '@heroicons/react/24/solid'
import ClipLoader from "react-spinners/ClipLoader";

function MessageFromUser(props) {
       
    const sendQuery = async () => {
        try {
            
            const requestBody = {
                question: props.inputValue,
                user: 'user1',
                key: 'key1',
                history: props.chatHistory,
                
            }
            props.setChatHistory([...props.chatHistory, { type: 'user', message: props.inputValue }]);
            const response = await fetch(
                'http://localhost/query_from_user/',
                {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(requestBody),
                }
              ) 
            const data = await response.json();
            const data_response = data.result;
            const words = data_response.split(' ');
            let index = 0;

            props.setCurrentBotMessage('');
        
            const intervalId = setInterval(() => {
                if (index >= words.length) {
                clearInterval(intervalId);
        
                props.setChatHistory((prevChatHistory) => [
                    ...prevChatHistory,
                    { type: 'bot', message: data_response },
                ]);
                props.setCurrentBotMessage('');
                } else {
                props.setCurrentBotMessage(
                    (prevMessage) => prevMessage + (prevMessage ? ' ' : '') + words[index]
                );
                index += 1;
                }
            }, 50);
            props.setLoading(false);
        } catch (error) {
            throw  new Error('Error en la solicitud');
        }}

    const handleMessageSubmit = async () => {
        if (props.inputValue.trim() !== '' ) {
            props.setLoading(true);
            await props.setMessagesUser([...props.messagesUser, props.inputValue]);
            await props.setInputValue('');
            await sendQuery();
        }
    }


  return (

    <div className='w-full h-1/6 flex border border-stone-700 rounded mt-4  md:text-[22px] p-4' >
        <input 
            value={props.inputValue}
            onChange={(event) => props.setInputValue(event.target.value)}
            type='text'
            placeholder='¿Cómo puedo inscribirme un curso?'
            className='w-full h-full focus:outline-none  ' />
            
            
        <button onClick={handleMessageSubmit} > 
        {
            props.loading ? <ClipLoader loading={props.loading} size={40}/>
                     : <PaperAirplaneIcon className='w-6' /> 
        }
        </button>
    </div>

    )
}

export default MessageFromUser
