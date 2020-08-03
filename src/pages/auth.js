import React ,{Component} from 'react'
import SignIn from "../component/signin"


 class Auth extends Component {
     
    render(){
         return(<div style={{height:"80vh"}}>
            <SignIn />
         </div>)
     }
 }

 export default Auth