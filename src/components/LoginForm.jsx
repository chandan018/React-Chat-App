import { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit =async(e)=>{
        e.preventDefault()
        const authObject = {'Project-ID': "1dd62ab4-13a7-4ee8-a46d-502a51c0a526", 'User-Name': username, 'User-Secret': password}
        // username | password => chatengine -> give message

        try {
            // works out -> logged in
            await axios.get('https://api.chatengine.io/chats', { headers: authObject})
            localStorage.setItem('username',username);
            localStorage.setItem('password',password);

            window.location.reload();
        } catch (error) {
            // error -> try with new username...
            
        }

    }

    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Chat Application </h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required />
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
                    <div align="center" >
                        <button type="submit" className="button">
                            <span>Start Chatting</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginForm