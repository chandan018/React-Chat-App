import { ChatEngine } from 'react-chat-engine'
import LoginForm from './components/LoginForm'
import ChatFeed from './components/ChatFeed'

import './App.css'

const App = () =>{
    if(!localStorage.getItem('username')) return <LoginForm />
    
    return(
        <ChatEngine 
            height="100vh"
            projectID="1dd62ab4-13a7-4ee8-a46d-502a51c0a526"
            userName="javascriptmastery"
            userSecret="123123"
            renderChatFeed={(chatAppProps) =><ChatFeed {...chatAppProps}/>}
        />
    )
}

export default App;