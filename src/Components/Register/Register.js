import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import useAuth from '../../Hook/useAuth';
const Register = () => {
    const [name, setName] = useState('');
    const { signInUsingGoogle } = useAuth();
    const [email, setEmail] = useState('');
    const auth = getAuth();
    const [password, SetPassword] = useState('');
    const [error, setError] = useState('');
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/login';
    const redirect_googleSignIn = location.state?.from || '/';
    const handleGoogleLogIn = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_googleSignIn);
            })
    }

    const handleNameChangr = e => {
        setName(e.target.value);
    }
    const handleEmailChangr = e => {
        setEmail(e.target.value);
    }
    const handlePasswordChangr = e => {
        SetPassword(e.target.value);
    }
    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => { })
    }
    const handleRegistration = e => {
        e.preventDefault();
        console.log(email, password);
        const auth = getAuth();
        if (password.length < 6) {
            setError('Password Must Be At List 6 Characters Long')
            return
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                setUserName();
                history.push(redirect_url);
            })
            .catch(error => {
                setError(error.message);
            })

    }
    return (
        <div>
            <Container className="register">
                <h3>Please Registered</h3>
                <Form onSubmit={handleRegistration} className="m-3 text-start">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control onBlur={handleNameChangr} type="text" placeholder="Enter Your Name" required autoComplete="off" />
                        <Form.Text className="text-muted">

                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onBlur={handleEmailChangr} type="email" placeholder="Enter email" required />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onBlur={handlePasswordChangr} type="password" placeholder="Password" required />
                        <div className="mb-3 text-danger">{error}</div>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Register
                    </Button>
                </Form>
            </Container>
            <button className="google" onClick={handleGoogleLogIn}>Google SignIn</button>
            <Link to="/login"><button className="reg reg-btn">Already Registerd</button></Link>
        </div>
    );
};

export default Register;