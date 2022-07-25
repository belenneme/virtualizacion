import React from 'react';
import Logo from '../img/icono.png';
import '../css/navbar.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'

export default function BarraDeNavegacion() {
    return (
        <div>
            <Navbar expand="lg" className="bg-blanco">
                <Navbar.Brand className="p-0 m-0 d-none d-sm-block"><Link to="/"><img className="img-fluid logo" src={Logo} alt="logo" /></Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link className="text-style" href="/posts">Posts</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}





