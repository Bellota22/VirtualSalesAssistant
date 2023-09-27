import React, { useEffect, useState } from 'react'
import MessageFromUser from './MessageFromUser'
import DisplayAnswer from './DisplayAnswer';

function Chat() {
    const [inputValue, setInputValue] = React.useState('');
    const [messagesUser, setMessagesUser] = React.useState([]);
    const [loading, setLoading] = useState(false);

    const [currentBotMessage, setCurrentBotMessage] = useState('');
    const [chatHistory, setChatHistory] = useState([]);

   

    const firstRequest = async () => {
      const response = await fetch(
        'http://localhost/first/',
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      ) 
      const data = await response.json();
      console.log(data);
    }
   
    useEffect(() => {
      firstRequest();
  }, [])


  return (
    <div className='p-4 w-full h-full border border-solid flex justify-center items-center flex-col' >
        
        <DisplayAnswer
            messagesUser={messagesUser}
            setMessagesUser={setMessagesUser}
            chatHistory={chatHistory}    
            setChatHistory={setChatHistory}
            currentBotMessage={currentBotMessage}
        />

        <MessageFromUser
            inputValue={inputValue}
            setInputValue={setInputValue}
            messagesUser={messagesUser}
            setMessagesUser={setMessagesUser}
            chatHistory={chatHistory}
            setChatHistory={setChatHistory}
            currentBotMessage={currentBotMessage}
            setCurrentBotMessage={setCurrentBotMessage}
            loading={loading}
            setLoading={setLoading}
            
        />

    </div>
  )
}

export default Chat