import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/Header.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import { Navbar, Nav, NavItem, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

class  Header extends React.Component{
        render(){
                return( 
                        <div className="header">
                                <Navbar className="header_navbar" bg="dark">
                                        <Navbar.Brand href="#home">
                                        <img
                                                src="../logo_small.png"
                                                width="50"
                                                height="50"
                                                className="d-inline-block align-center"
                                                alt="React Bootstrap logo"
                                        />
                                        
                                        </Navbar.Brand>
                                
                                        <Navbar.Brand href="#home" className="brandName">migratetocanada.info</Navbar.Brand>
                                        <Nav className="mr-auto links">
                                                <Nav.Link href="#home" className="nav_link">Home</Nav.Link>
                                                <Nav.Link href="#immigration" className="nav_link">Immigration</Nav.Link>

                                                <Nav.Link href="#study" className="nav_link">Study</Nav.Link>
                                                <Nav.Link href="#work" className="nav_link">Work</Nav.Link>
                                        </Nav>
                                </Navbar>
                                        
                                
                        </div>
                )
        }       
}

export default Header;