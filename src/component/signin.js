import React, { Component } from "react"
import TextFieldGroup from "./common/TextFieldGroup";
import {logUser} from "../redux/actions/authAction"
import {connect} from 'react-redux'
import PropTypes from "prop-types"

class SignIn extends Component {
	constructor(props) {
        super(props);
		this.state = {
			username:"",
			password:"",
			errors:""
		}
	}
	componentDidMount() {
		if (this.props.auth.isAuthenticated) {
		  this.props.history.push('/dashboard');
		}
	  }
	
	  componentWillReceiveProps(nextProps) {
		if (nextProps.auth.isAuthenticated) {
		  this.props.history.push('/dashboard');
		}
	
		if (nextProps.errors) {
		  this.setState({ errors: nextProps.errors.errors });
		}
	  }

	  onSubmit = e => {
		e.preventDefault();
	
		const userData = {
		 userName: this.state.username,
		  password: this.state.password
		};
	
		this.props.logUser(userData);
	  }
	
	  onChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	  }
	
	render(){
		const {errors}=this.state;
		return (
			
			<div className="login-show">
				{errors && <div className="alert alert-danger" style={{display:"block",fontSize:"15px"}}>{errors}</div>}
				 <form onSubmit={this.onSubmit}>
                <TextFieldGroup
                  placeholder="Username"
                  name="username"
                  type="text"
                  value={this.state.username}
                  onChange={this.onChange}
                //  error={errors.email}
                />

                <TextFieldGroup
                  placeholder="Password"
                  name="password"
                  type="password"
                  value={this.state.password}
                  onChange={this.onChange}
                 // error={errors.password}
                />
                <input type="submit" className="button" />
              </form>
            
				<a href="">Forgot password?</a>
			</div>
	
		)
	}
	
}
SignIn.propTypes = {
    logUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
  };
const mapStateToProps =(state) => ({
    auth: state.auth,
    errors: state.errors
  });

export default connect(mapStateToProps, {logUser})(SignIn);