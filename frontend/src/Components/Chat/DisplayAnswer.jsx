import React, { useEffect, useRef } from 'react'
import ReactMarkdown from 'react-markdown';
import remarkGfm  from 'remark-gfm'

function DisplayAnswer(props) {
    const chatBoxRef = useRef(null);
    
    useEffect(() => {
        if (chatBoxRef.current) {
            chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
        }
    }, [props.chatHistory]);

   return (
    <div
    ref={chatBoxRef}
    className="custom-scrollbar w-full h-full mx-auto p-4  rounded bg-white overflow-auto flex flex-col items-start md:text-[22px]  ">
      {props.chatHistory.map((entry, index) => (

          <div 
            key={index}
            className={`
              text-white Z
              inline-block 
              text-${entry.type === 'user' ? 'right  ml-auto bg-blue-600 ' : 'left bg-[#3E4042]'}
              p-2 m-2 rounded-lg 
              ${entry.message.length > 100 ? 'w-4/5' : ''}

            `}
          >

            {entry.type === 'bot' 
            ? 
                <div className="prose lg:prose-xl">
                   <ReactMarkdown 
                      children={entry.message} 
                      remarkPlugins={[remarkGfm]}
                      components={{ 
                        ul: ({ node, ...props }) => ( <ul style={{ display: "block", listStyleType: "disc", paddingInlineStart: "40px", }} {...props} /> ),
                        ol: ({ node, ...props }) => ( <ul style={{ display: "block", listStyleType: "decimal", paddingInlineStart: "40px", }} {...props} /> ),
                        a: ({node, ...props}) => <a {...props} style={{color: 'blue',}} />
                        }} />
                </div>

            : entry.message}
          </div>
        ))}
        {props.currentBotMessage 
        
        && (
        <div className={`text-left inline-block p-2 m-2 rounded-lg bg-gray-200 ${props.currentBotMessage.length > 100 ? 'w-4/5' : ''} `}>
          {props.currentBotMessage}
          
        </div>
      )}

    </div>
    )
}

export default DisplayAnswer;