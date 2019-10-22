import React from 'react';
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';
import Game from './Game';
import GameContainer from '../containers/GameContainer';
import Login from './Login';
import Register from './Register';

export default function App() {
    return (
        <BrowserRouter>

            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link as={Link}
                            to="/features">Features</Nav.Link>
                        <Nav.Link href="#pricing">About me</Nav.Link>

                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} to="/login">Log in</Nav.Link>
                        <Nav.Link eventKey={2} as={Link} to="/register">
                            Sign up</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            <div>
                <Switch>
                    <Route exact path='/' component={GameContainer} />
                    <Route path='/login' component={Login} />
                    <Route path='/register' component={Register} />
                    <Route render={() => {
                        return <p>Not found</p>
                    }} />
                </Switch>
            </div>
        </BrowserRouter>
    )
}

