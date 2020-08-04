import React from 'react'

export const SignIn = (props) => {
	return (

		<div className="login-show">
			<h2>LOGIN</h2>
			<input type="text" placeholder="Email" />
			<input type="password" placeholder="Password" />
			<div className="text-center mt-5">
				<button className="button" href="">Login</button>
			</div>
			<a href="">Forgot password?</a>
		</div>

	)
}

export default SignIn