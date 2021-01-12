import React, {useState, useEffect} from 'react';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import Message from './Message';
import db from './firebase'
import firebase from 'firebase'
import FlipMove from 'react-flip-move'
import SendIcon from '@material-ui/icons/Send'
import { IconButton } from '@material-ui/core';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');

  // useState = real-time variable in React
  // useEffect = run code on a condition in React

  useEffect(() => {
    // runs once when the compocomponent loads
    db.collection('messages').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => ({id: doc.id, message: doc.data()})))
    })
  }, [])

  useEffect(() => {
    // const username = prompt('Please enter your username.')
    setUsername(prompt('Please enter your username.'));
  }, []) // condition

  const sendMessage = (event) => {
    event.preventDefault(); // To prevent refresh on ENTER
    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTime
    })

    setInput('');
  }
  return (
    <div className="App">
      <h1>Hello Clever Programmers!</h1>

              {/* all messages themselve */}
      <FlipMove>
      {
        messages.map(({ id, message }) => (
          <Message key={id} username={username} message={message}/>
        ))
      }
      </FlipMove>

      {/* input field */}
      <form className="app__form">
        <FormControl className="app__formcontrol">
          <InputLabel>Enter a message...</InputLabel>
          <Input className="app__input" placeholder='Enter a message'  value={input} onChange={event => setInput(event.target.value)}/>
                        {/* button */}
          <IconButton className="app__iconButton" disabled={!input} type="submit" variant="contained" color="primary"  onClick={sendMessage}>
            <SendIcon />
          </IconButton>
          <Button>Send Message</Button>
        </FormControl>
      </form>

    </div>
  )
}

export default App;