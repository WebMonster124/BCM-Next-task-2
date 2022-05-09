import React from 'react';
import {
    Container, 
    Navbar, 
    Nav, 
    Button,
    Dropdown
} from 'react-bootstrap'

import Settings_img from '../../../images/settings.png';
import Notification from '../../../images/notification.png';
import Avatar from '../../../images/Profile.png';
import Stroke from '../../../images/Stroke.png';

import './Header.scss';

const Header = () => (
    <div className="header">        
        <Navbar bg="white" expand="lg" >
            <Container>
                <Navbar.Brand href="/">
                    <Button className='logo'>BCM <span>next</span></Button>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
                <Nav className="d-flex align-items-center">
                    <Nav.Link href="#home">
                        <img src={Settings_img} alt="settings"/>
                    </Nav.Link>
                    <Nav.Link href="#link" className='notification'>
                        <img src={Notification} alt="settings" className='notification'/>
                    </Nav.Link>                   
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            <div className='profile d-flex align-items-center'>
                                <img src={Avatar} alt="avatar"/>
                                <div className='content'>
                                    <div className='name'>AMara Kyle</div>
                                    <div className='role'>BCM manager</div>
                                </div>
                                <div className='stroke'>
                                    <img src={Stroke} alt="stroke" />
                                </div>                        
                            </div>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>                  
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
);

export { Header };