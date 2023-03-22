import { Container } from "reactstrap";
import { useRef } from "react";

class Response extends String {json = () => JSON.parse(this)}

const mockFetch = (url, body) => {
    const {email, password} = body;

    if(email !== 'admin@admin.com' && password !== 'password')
        return Promise.reject('Email atau password salah')
    
    return Promise.resolve(new Response(
        JSON.stringify({
            accessToken: 'anggap-ini-access-token',
        })
    ))
}

export default function Login() {
    const email = useRef()
    const password = useRef()

    const handleSubmit = (e) => {
        e.preventDefault()

        const data = {
            email: email.current.value,
            password: password.current.value
        }

        mockFetch('/anggap-ini-url-login', data)
            .then((response => response.json()))
            .then((data) => localStorage.setItem('token', data.accessToken))
    }   

    return(
        <Container className="p-4 d-flex align-item-center justify-item-center">
            <h1>Login</h1>

            <form onSubmit={handleSubmit}>
                <label>
                    Email

                    <input type="email" ref={email}/>
                </label>

                <label>
                    Password

                    <input type="password" ref={password}/>   
                </label>

                <input type="submit" value="Submit"/>
            </form>
        </Container>
        
    )
}