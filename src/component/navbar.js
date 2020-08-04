import React from 'react';
import { Navbar, Nav, Form, FormControl, Button, InputGroup } from 'react-bootstrap'
import { FaThumbsUp } from 'react-icons/fa';
import { logoutUser } from "../redux/actions/authAction"
import { connect } from "react-redux"
export const NavBar = (props) => {
  console.log({ props })
  let authLink = (
    <Nav className="mr-sm-2">
      <Nav.Link href="/dashboard">
        <i className="fa fa fa-user-circle main" style={{fontSize:"x-large"}}></i> 
        </Nav.Link>
      <Nav.Link onClick={() => props.logoutUser()}>
        <i className="fa fa-sign-out main" style={{fontSize:"x-large"}}></i> 
        </Nav.Link>
    </Nav>
  );
  let guestLink = (
  <Nav className="mr-sm-2">
    <Nav.Link href="/auth">
      <i className="fa fa-user-circle main" style={{fontSize:"x-large"}}></i> 
      </Nav.Link>
  </Nav>
  )
  return (
    <Navbar bg="white" expand="lg" sticky="top" >
      <div className="container">
        <Navbar.Brand href="/"><img src="logo.jpeg" style={{width:"70px"}}/></Navbar.Brand>

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

          {props.auth.isAuthenticated ? authLink : guestLink}



        </Navbar.Collapse>


      </div>



    </Navbar>)
}
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(mapStateToProps, { logoutUser })(NavBar)