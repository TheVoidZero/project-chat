import React, { useState, useEffect, useRef } from 'react'
import '../Style/styles.css'
import { AiFillQqCircle, AiFillSetting, AiOutlineClose, AiOutlineLine, AiOutlineCaretRight } from "react-icons/ai";


const Home = () => {
  const [nameRoomSelect, setNameRoomSelect] = useState("")
  const [chatOpen, setChatOpen] = useState(false)
  const [typeChat, setTypeChat] = useState(false)
  const [selectedButtonIndex, setSelectedButtonIndex] = useState(null);
  const chat = [
    { id: 1, nameChat: 'Alan', message: "Hola como estas" },
    { id: 2, nameChat: 'Lellouch', message: 'Bien y tu que tal' }, ]
  const [chatMessage, setChatMessage] = useState(chat);
  const [message, setMessage] = useState("");
  const roomsPublics = [
    { id: 1, nameChat: 'comida' },
    { id: 2, nameChat: 'dinero' },
    { id: 3, nameChat: 'gatos' },
  ]
  const [newMessageChat,setNewMessageChat] = useState('')
  const chatContainerRef = useRef(null);
  const inputRef = useRef(null);
  const chatPrivate = [
    { id: 1, nameChat: 'Alan' },
    { id: 2, nameChat: 'Lellouch' },
    { id: 3, nameChat: 'Quentin' },
  ]

  const closeChat = e => {
    setChatOpen(false)
    setNewMessageChat("")
  }
  const handleButtonClick = (index) => {
    setChatOpen(true)
    setSelectedButtonIndex(index);
  };
  const sendMessage = (e) => {
    setChatMessage([...chatMessage, message])
    setNewMessageChat('')
  }
  const saveMessage = (message) => {
    setNewMessageChat(message)
    const newMessage = { id: 1, nameChat: 'Alan', message: message }
    setMessage(newMessage)
  }
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chatMessage,chatOpen]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [chatOpen]);
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      sendMessage(event);
    }
  };
  return (
    <div className='home'>
      <div className='content-chats'>
        <div className='chat'>
          <div className='type-chat'>
            <button className={!typeChat ? 'button-chat-select' : 'button-chat'} onClick={e => { setTypeChat(false); setSelectedButtonIndex('') }}>Historial de chats</button>
            <button className={typeChat ? 'button-chat-select' : 'button-chat'} onClick={e => { setTypeChat(true); setSelectedButtonIndex('') }}>Chats Publico</button>
          </div>
          {!typeChat ? (
            <div className='table-chat'>
              {chatPrivate.map((item, index) => (
                <button
                  className={selectedButtonIndex === index ? 'button-chat-select' : 'button-chat'}
                  key={index}
                  onClick={() => { handleButtonClick(index); setNameRoomSelect(item.nameChat) }}
                >
                  {item.nameChat}
                </button>
              ))}
            </div>) : (
            <div className='table-chat'>
              {roomsPublics.map((item, index) => (
                <button
                  className={selectedButtonIndex === index ? 'button-chat-select' : 'button-chat'}
                  key={index}
                  onClick={() => { handleButtonClick(index); setNameRoomSelect(item.nameChat) }}
                >
                  {item.nameChat}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
     {chatOpen ? (<div className='chat-open'>
        <div className='options-chat'>
          <label>{nameRoomSelect}</label>
          <div className=' '>
            <button className='button-close' onClick={e=>closeChat(e)}>
              <AiOutlineClose className='icons' /></button>
          </div>
        </div>
        <div className="chat-container" ref={chatContainerRef}>
          {chatMessage.map((chatMessage, index) => (
            <div key={index} className={`chat-message ${chatMessage.id === 1 ? 'chat-message-alan' : 'chat-message-lellouch'}`}>
              <div className="chat-bubble">
                <div className="chat-text">{chatMessage.message}</div>
              </div>
            </div>
          ))}
        </div>
        <div className='content-input'>
          <input ref={inputRef} placeholder='escribe algo' onChange={e => saveMessage(e.target.value)} value={newMessageChat} onKeyPress={handleKeyPress}/>
          <button className='button-close' onClick={e => sendMessage(e)}>
            <AiOutlineCaretRight style={{}}/>
          </button>
        </div>
      </div>): (<div className='chat-container'></div>)}
    </div >
  )
}

export default Home
