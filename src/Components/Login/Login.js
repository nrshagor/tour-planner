import React, { useState } from 'react';
import { Alert, Container, Button, Form, Nav } from 'react-bootstrap';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../Hook/useAuth';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, SetPassword] = useState('');
    const [error, setError] = useState('');
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/home';
    const handleGoogleLogIn = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_url);
            })
    }

    const handleEmailChangr = e => {
        setEmail(e.target.value);
    }
    const handlePasswordChangr = e => {
        SetPassword(e.target.value);
    }
    const handleRegistration = e => {
        e.preventDefault();
        console.log(email, password);
        const auth = getAuth();
        if (password.length < 6) {
            setError('Password Must Be At List 6 Characters Long')
            return
        }
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                history.push(redirect_url);
            })
            .catch(error => {
                setError(error.message);
            })

    }
    return (
        <>
            <div>
                <Container className="LoginFrom">
                    <h3>Please Login</h3>
                    <Form onSubmit={handleRegistration} className="m-3 text-start">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control onBlur={handleEmailChangr} type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control onBlur={handlePasswordChangr} type="password" placeholder="Password" />
                            <div className="mb-3 text-danger">{error}</div>
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>

                    <Alert variant="danger" >

                        If you new registered user and see logout button click logout and login again Or <Nav.Link href="/home">Click here</Nav.Link>for see your Display Name
                    </Alert>
                </Container>
                <button className="google" onClick={handleGoogleLogIn}>Google Login</button>
                <Link to="/register"><button className="login login-btn">New User........?</button></Link>

            </div >
        </>
    );
};

export default Login;