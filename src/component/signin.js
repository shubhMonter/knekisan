import React, { Component } from "react"
import TextFieldGroup from "./common/TextFieldGroup";
import {logUser} from "../redux/actions/authAction"
import {connect} from 'react-redux'
import classNames from "classnames"
import PropTypes from "prop-types"
import { withTranslation } from 'react-i18next';
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
			if(nextProps.errors.auth===false){
				console.log(nextProps.errors.auth);
				this.setState({errors:"Wrong Password or Username!!"})
			}else{
				this.setState({ errors: nextProps.errors.error });
			}
		  
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
		this.setState({errors:""});
	  }
	
	render(){
		const {errors}=this.state;
		const { t } = this.props;
		
		return (
			
			<div className={classNames("login-show",{"show-log-panel":this.props.logreg==0})}>
				{errors && <div className="alert alert-danger" style={{display:"block",fontSize:"15px"}}>{errors}</div>}
				 <form onSubmit={this.onSubmit}>
                <TextFieldGroup
                  placeholder={t("username")}
                  name="username"
                  type="text"
                  value={this.state.username}
                  onChange={this.onChange}
				//  error={errors.email}
					required={true}
                />

                <TextFieldGroup
                  placeholder={t("password")}
                  name="password"
                  type="password"
                  value={this.state.password}
                  onChange={this.onChange}
				 // error={errors.password}
				 required={true}
                />
                <button type="submit" className="button" >{t("login")}</button>
              </form>
            
				<a href="">{t("forgetpassword")}</a>
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

export default connect(mapStateToProps, {logUser})(withTranslation("auth")(SignIn));