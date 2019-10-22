import React from 'react';
import { Form } from 'react-bootstrap';
import './Register.css'

export default function Register() {
    return (

        <Form className="register-form">
            <h1>
                <span className="font-weight-bold">TicTacToe</span>.com
            </h1>
            <h2 className="text-center">
                Sign up
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
            <Form.Group controlId="formGroupPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Confirm Password" required />
            </Form.Group>
            <button type="submit" className="btn btn-dark btn-block">Sign up</button>
        </Form >

    )
};
