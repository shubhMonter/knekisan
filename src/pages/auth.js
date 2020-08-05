import React ,{Component} from 'react'
import SignIn from "../component/signin"
import SignUp from "../component/signup"


 class Auth extends Component {
    render(){
         return(<div style={{height:"90vh"}}>
           <div className="login-reg-panel">
			<div className="login-info-box">
				<h2>Have an account?</h2>
				{/* <p>Lorem ipsum dolor sit amet</p> */}
				<label id="label-register" htmlFor="log-reg-show">Login</label>
				<input type="radio" name="active-log-panel" id="log-reg-show" checked="checked" />
			</div>

			<div className="register-info-box">
				<h2>Don't have an account?</h2>
				{/* <p>Lorem ipsum dolor sit amet</p> */}
				<label id="label-login" htmlFor="log-login-show">Register</label>
				<input type="radio" name="active-log-panel" id="log-login-show" />
			</div>

			<div className="white-panel">
            <SignIn history={this.props.history}/>
            <SignUp history={this.props.history}/>
			</div>
		</div>
         </div>)
     }
 }

 export default Auth