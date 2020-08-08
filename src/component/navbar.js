import React,{useState} from 'react';
import { Navbar, Nav, Form, FormControl, Button, InputGroup } from 'react-bootstrap'
import { FaThumbsUp } from 'react-icons/fa';
import { logoutUser } from "../redux/actions/authAction"
import { connect } from "react-redux"
import {ProductList} from "./productlist"
import classNames from "classnames"
import { useTranslation } from "react-i18next";
import LanguageSelector from "./languageselector"

export const NavBar = (props) => {
  const { t } = useTranslation("home");
  const [search,setSearch]=useState("")
  let authLink = (
    <Nav className="mr-sm-2">
      <Nav.Link href="/">
       {t("product")}
        </Nav.Link>
      <Nav.Link href="/dashboard">
        <i className="fa fa fa-user-circle main" style={{fontSize:"x-large"}}></i> 
       
        </Nav.Link>
      <Nav.Link onClick={() => {props.logoutUser();}}>
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
  return (<>
    <Navbar bg="white" expand="lg" sticky="top" >
      <div className="container">
        <Navbar.Brand href="/"><img src="logo.jpeg" style={{width:"70px"}}/></Navbar.Brand>
       
        <Form inline >
          <div className="input-group ">

            <input type="search" placeholder={t("search")} value={search} onChange={(e)=>setSearch(e.target.value)} aria-describedby="button-addon7" className="form-control" />
            <div className="input-group-prepend">
              <button id="button-addon7" type="submit" className="btn btn-success"><i class="fa fa-search"></i></button>
            </div>
        </div>

        </Form>
        {search && <div className="search list"></div>}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >

          {props.auth.isAuthenticated ? authLink : guestLink}


          <LanguageSelector />
        </Navbar.Collapse>

       
      </div>



    </Navbar>
    {<div className={classNames("search-list",{"search-show":search})}>
     { search && <ProductList products={props.products.filter(p=>p.description.includes(`${search}`))} />}
      </div>}
    </>)
}
const mapStateToProps = state => ({
  auth: state.auth,
  products:state.products.products
});
export default connect(mapStateToProps, { logoutUser })(NavBar)