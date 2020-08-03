import React from 'react'

export const SignIn = (props) => {
	return (
		<div className="login-reg-panel">
			<div className="login-info-box">
				<h2>Have an account?</h2>
				<p>Lorem ipsum dolor sit amet</p>
				<label id="label-register" htmlFor="log-reg-show">Login</label>
				<input type="radio" name="active-log-panel" id="log-reg-show" checked="checked" />
			</div>

			<div className="register-info-box">
				<h2>Don't have an account?</h2>
				<p>Lorem ipsum dolor sit amet</p>
				<label id="label-login" htmlFor="log-login-show">Register</label>
				<input type="radio" name="active-log-panel" id="log-login-show" />
			</div>

			<div className="white-panel">
				<div className="login-show">
					<h2>LOGIN</h2>
					<input type="text" placeholder="Email" />
					<input type="password" placeholder="Password" />
					<div className="text-center mt-5">
						<button className="button" href="">Login</button>
					</div>
					<a href="">Forgot password?</a>
				</div>
				<div className="register-show">
					<div className="wizard">
						<div className="wizard-inner">
							<div className="connecting-line"></div>
							<ul className="nav nav-tabs" role="tablist">

								<li role="presentation" className="active">
									<a href="#step1" data-toggle="tab" aria-controls="step1" role="tab" title="Step 1">
										<span className="round-tab">
											<i className="glyphicon glyphicon-folder-open"></i>
										</span>
									</a>
								</li>

								<li role="presentation" className="disabled">
									<a href="#step2" data-toggle="tab" aria-controls="step2" role="tab" title="Step 2">
										<span className="round-tab">
											<i className="glyphicon glyphicon-pencil"></i>
										</span>
									</a>
								</li>
								<li role="presentation" className="disabled">
									<a href="#step3" data-toggle="tab" aria-controls="step3" role="tab" title="Step 3">
										<span className="round-tab">
											<i className="glyphicon glyphicon-picture"></i>
										</span>
									</a>
								</li>

								<li role="presentation" className="disabled">
									<a href="#complete" data-toggle="tab" aria-controls="complete" role="tab" title="Complete">
										<span className="round-tab">
											<i className="glyphicon glyphicon-ok"></i>
										</span>
									</a>
								</li>
							</ul>
						</div>

						<form role="form">
							<div className="tab-content">
								<div className="tab-pane active" role="tabpanel" id="step1">
									<div style={{height:"300px",overflowY:"auto"}}>
											
											<input type="text" placeholder="User Name " />
											<input type="password" placeholder="Password" />
											<input type="text" placeholder="Mobile Number" />
											<input type="text" placeholder="Address 1" />
											<input type="text" placeholder="Address 2" />
											<input type="text" placeholder="City" />
											<input type="text" placeholder="State" />
									</div>		
									<ul className="list-inline text-center">
										<li><button type="button" className="button next-step">Save and continue</button></li>
									</ul>
								</div>
								<div className="tab-pane" role="tabpanel" id="step2">
									<h3>Step 2</h3>
									<p>This is step 2</p>
									<ul className="list-inline pull-right">
										<li><button type="button" className="btn btn-default prev-step">Previous</button></li>
										<li><button type="button" className="btn btn-primary next-step">Save and continue</button></li>
									</ul>
								</div>
								<div className="tab-pane" role="tabpanel" id="step3">
									<h3>Step 3</h3>
									<p>This is step 3</p>
									<ul className="list-inline pull-right">
										<li><button type="button" className="btn btn-default prev-step">Previous</button></li>
										<li><button type="button" className="btn btn-default next-step">Skip</button></li>
										<li><button type="button" className="btn btn-primary btn-info-full next-step">Save and continue</button></li>
									</ul>
								</div>
								<div className="tab-pane" role="tabpanel" id="complete">
									<h3>Complete</h3>
									<p>You have successfully completed all steps.</p>
								</div>
								<div className="clearfix"></div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SignIn