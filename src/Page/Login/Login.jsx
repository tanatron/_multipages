import Form from 'react-bootstrap/Form';
import { useRef  } from 'react'
import './Login.css';
import { verityUser } from '../../data/user';
function Login({ setToken , setRole }) {

    const userRef = useRef()
    const passRef = useRef()
    return (
        <div className="Login-container">
            <Form.Label htmlFor="username">Username</Form.Label>
            <Form.Control
                type="text"
                id="username"
                placeholder='Username'
                style={{textAlign: 'center'}}
                ref={userRef}
            />
             <Form.Label htmlFor="password">Password</Form.Label>
            <Form.Control
                type="password"
                id="password"
                // aria-describedby="passwordHelpBlock"
                placeholder='Password'
                style={{textAlign: 'center'}}
                ref={passRef}
            />

            <button  className='btn btn-success mt-3'
            onClick={() => {
                const user =  userRef.current.value.trim()
                const password = passRef.current.value.trim()
                const userInfo  = verityUser(user , password)
                
                if(userInfo === null){
                    alert('User not found')
                    userRef.current.value = ''
                    passRef.current.value = ''
                    userRef.current.focus()
                } else {
                    setToken(userInfo.token)
                    setRole(userInfo.role)
                }
            }}
            >Login</button>
        </div>
    );
}

export default Login;