import Dropdown from '@restart/ui/esm/Dropdown';
import React from 'react';
import { Container, DropdownButton, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hook/useAuth';
import './Header.css'
const Header = () => {
    const { user, logout } = useAuth();
    console.log(user);
    return (
        <>
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand as={Link} to="/home" className="navtitel"><h1>Tour <span>Planner</span></h1></Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav" >
                            <Nav className="me-auto navlist">
                                <Nav.Link as={Link} className="navtext" to="/home">Home</Nav.Link>
                                <DropdownButton variant="dark" menuVariant="dark" id="nav-dropdown-dark-example" title="Services">
                                    <Nav.Link as={Link} className="navtext" to="/serivces">Services</Nav.Link>
                                    <Nav.Link as={Link} className="navtext" to="/addnewservice">Add New Services</Nav.Link>
                                    <Nav.Link as={Link} className="navtext" to="/alluserplan">All Plan</Nav.Link>
                                </DropdownButton>
                                <Nav.Link as={Link} className="navtext" to="/about">About</Nav.Link>
                                <Nav.Link as={Link} className="navtext" to="/blog">Blog</Nav.Link>

                                <Link to="/Onlymyplan"><button className="btn btn-warning">myplan</button></Link>

                                {user.email ? <button className="button button-color" onClick={logout}>Log Out</button> : <> <Nav.Link as={Link} className="navtext" to="/login">Login</Nav.Link>  <Nav.Link as={Link} className="navtext" to="/register">register</Nav.Link> </>}
                                <span> {user.displayName}</span>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

            </div>

        </>
    );
};

export default Header;