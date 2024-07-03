import React from 'react'
// import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
const Header = () => {

    return (
        <div className=''>
            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary navbar1">
                <div className='container'>
                    
                    <Navbar.Brand href="#home">
                        <img
                            src="./logo192.png"
                            width="70"
                            height="70"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                    <Button className='btn rounded-pill border-0 px-4 d-md-block d-lg-none' style={{backgroundColor:"#F6821F",position:'relative',left: '19%'}}>Login</Button>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />         
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="m-auto navitems" >
                            <Nav.Link href="#features">Home</Nav.Link>
                            <Nav.Link href="#pricing">About Us</Nav.Link>
                            <Nav.Link href="#pricing">Our Services</Nav.Link>
                            <Nav.Link href="#pricing">Bharat SAT</Nav.Link>
                            <Nav.Link href="#pricing">Contact US</Nav.Link>
                            <Nav.Link href="#pricing">Bharat Sat Scholarship</Nav.Link>
                            <Nav.Link href="#pricing">Join as a Coordinator</Nav.Link>

                        </Nav>
                        <Button className='btn rounded-pill border-0 px-4 d-none d-lg-block' style={{backgroundColor:"#F6821F"}}>Login</Button>
                    </Navbar.Collapse>
                    
                </div>
            </Navbar>
        </div>
    );
}

export default Header
