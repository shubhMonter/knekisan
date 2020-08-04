import React from 'react';
import {Navbar,Nav,Form,FormControl,Button,InputGroup} from 'react-bootstrap'
import { FaThumbsUp } from 'react-icons/fa';
export const NavBar = (props) => {
    
    return(
    <Navbar bg="white" expand="lg" sticky="top" >
       <div className="container">
       <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    
    <Form inline >
    <div className="input-group ">
           
            <input type="search" placeholder="What're you searching for?" aria-describedby="button-addon7" className="form-control" />
            <div className="input-group-prepend">
              <button id="button-addon7" type="submit" className="btn btn-success"><i class="fa fa-search"></i></button>
            </div>
          </div>
        
      </Form>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav" >
    
    <Nav className="mr-sm-2">
        <Nav.Link href="/auth">Login</Nav.Link>
        <Nav.Link href="/auth">Register</Nav.Link>
      </Nav>

     

    </Navbar.Collapse>


       </div>
    
    
    
  </Navbar>)
}
export default NavBar