import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Container, Form, Logo, FormInput, LoginButton } from './styles';

const Login: React.FC = () => {

    const history = useHistory()

    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    })

    const handleLogin = () => {

        if (loginData.email && loginData.password) {
            localStorage.setItem('signed', 'true')
            history.push('/')
        }
    }

    const handleChange = (event: any) => {
        const value = event.target.value
        setLoginData({
            ...loginData, [event.target.name]: value
        })

    }

    return <Container>
        <Form>
            <Logo src="https://i.imgur.com/7WULlyC.png" />
            <FormInput 
                name="email" 
                type="text" 
                placeholder="Dgite sua emaaial" 
                onChange={handleChange} 
                value={loginData.email}
            />
            <FormInput 
                name="password" 
                type="password" 
                placeholder="Digite seu senha" 
                onChange={handleChange} 
                value={loginData.password}
            />
            <LoginButton onClick={handleLogin}>Login</LoginButton>
        </Form>
    </Container>;
}

export default Login;