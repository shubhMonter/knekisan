import React ,{Component} from 'react'
import SignIn from "../component/signin"
import SignUp from "../component/signup"
import classNames from "classnames"
import { withTranslation } from 'react-i18next';
 class Auth extends Component {
	 constructor(props){
		 super(props);
		 this.state={
			 logreg:0
		 }
	 }
    render(){
		const { t } = this.props;
         return(<div style={{height:"100vh"}}>
           <div className="login-reg-panel">
			<div className="login-info-box" style={{display:this.state.logreg ==0? "none":null}}>
	<h2>{t("account2")}</h2>
				{/* <p>Lorem ipsum dolor sit amet</p> */}
	<label id="label-register" htmlFor="log-reg-show" onClick={(e)=>this.setState({logreg:0})}>{t("login")}</label>
				{/* <input type="radio" name="active-log-panel" id="log-reg-show" checked="checked" /> */}
			</div>

			<div className="register-info-box" style={{display:this.state.logreg ==1? "none":null}}>
				<h2>{t("account2")}</h2>
				{/* <p>Lorem ipsum dolor sit amet</p> */}
				<label id="label-login" htmlFor="log-login-show"onClick={(e)=>this.setState({logreg:1})}>{t("register")}</label>
				{/* <input type="radio" name="active-log-panel" id="log-login-show" /> */}
			</div>

			<div className={classNames("white-panel",{"right-log":this.state.logreg==1})}>
            <SignIn logreg={this.state.logreg} history={this.props.history}/>
            <SignUp logreg={this.state.logreg} history={this.props.history}/>
			</div>
		</div>
         </div>)
     }
 }

 export default withTranslation("auth")(Auth)