import React from 'react';
import { Form } from 'react-bootstrap';
import './Login.css'

export default function Login() {
    return (

        <Form className="login-form">
            <h1>
                <span className="font-weight-bold">TicTacToe</span>.com
            </h1>
            <h2 className="text-center">
                Welcome
            </h2>
            <br />
            <Form.Group controlId="formGroupUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control placeholder="Username" required />
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" required />
            </Form.Group>
            <button type="submit" className="btn btn-dark btn-block">Log in</button>
        </Form >

    )
};
