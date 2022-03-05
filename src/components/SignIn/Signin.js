import React,{Component} from 'react';

class SignIn extends Component{
	constructor()
	{
		super();
		this.state={
			signinEmail:"",
			signinPassword:""
		}
	}

	onEmailChange=(event)=>{
		this.setState({signinEmail:event.target.value});
	}

	onPasswordChange=(event)=>{
		this.setState({signinPassword:event.target.value});
	}

	onSubmitSignin=()=>{
		// console.log(this.state);
		fetch('http://localhost:3001/signin',{
			method:'post',
			headers:{'content-type':'application/json'},
			body:JSON.stringify({
				email:this.state.signinEmail,
				password:this.state.signinPassword
			})
		})
			.then(response=>response.json())
		  	.then(user=>{
		  		//console.log(user[0]);
				if(user[0].ID){
					this.props.loadUser(user[0])
					this.props.onRouteChange('home');
					// console.log("working");
				}
			});
	}

	render()
	{
		return(

			<div>
				<main className="pa4 black-80">
				  <div className="measure center">
				    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
				      <legend className="f4 fw6 ph0 mh0">Sign In</legend>
				      <div className="mt3">
				        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
				        <input onChange={this.onEmailChange}
				        	className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
					        type="email" name="email-address"  
					        id="email-address"/>
				      </div>
				      <div className="mv3">
				        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
				        <input onChange ={this.onPasswordChange}
				        	className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
				        	type="password" name="password"  
				        	id="password"/>
				      </div>
				      <label className="pa0 ma0 lh-copy f6 pointer"><input type="checkbox"/> Remember me</label>
				    </fieldset>
				    <div className="">
				      <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
				      type="submit" value="Sign in" onClick={()=>this.props.onRouteChange('home')} /*{this.onSubmitSignin}*/ />
				    </div>
				    <div className="lh-copy mt3">
				      <p href="#0" className="f6 link dim black db pointer" 
				      	onClick={()=>this.props.onRouteChange('register')}>Register</p>
				      <a href="#0" className="f6 link dim black db">Forgot your password?</a>
				    </div>
				  </div>
				</main>

			</div>
		);
	}

}

export default SignIn;