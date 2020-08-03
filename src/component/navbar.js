import React from 'react';
import {Navbar,Nav,Form,FormControl,Button,InputGroup} from 'react-bootstrap'
import { FaThumbsUp } from 'react-icons/fa';
export const NavBar = (props) => {
    
    return(
    <Navbar bg="white" expand="lg" sticky="top" >
       <div className="container">
       <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    
    <Form inline >
    <InputGroup >
    <FormControl type="text" aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder="Search"  icon={FaThumbsUp}/> 
        
    </InputGroup>
        
      </Form>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav" >
    
    <Nav className="mr-sm-2">
        <Nav.Link href="/product">Product</Nav.Link>
        <Nav.Link href="/auth">Login</Nav.Link>
        <Nav.Link href="/auth">Register</Nav.Link>
      </Nav>

     

    </Navbar.Collapse>


       </div>
    
    
    
  </Navbar>)
}
export default NavBar