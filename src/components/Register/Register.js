import React from 'react';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      name: ''
    }
  }

  onNameChange = (event) => {
    this.setState({name: event.target.value})
  }

  onEmailChange = (event) => {
    this.setState({email: event.target.value})
  }

  onPasswordChange = (event) => {
    this.setState({password: event.target.value})
  }

  onSubmitSignIn = () => {
    // console.log('registered');
    fetch('http://localhost:3001/register',{
    	method:'post',
    	headers:{'content-type':'application/json'},
    	body:JSON.stringify({
    		email:this.state.email,
    		name:this.state.name,
    		password:this.state.password
    	})
    })
    .then(response=>response.json())
    .then(data=>{
    	if(data)
    	{
    		console.log(data);
    		this.props.onRouteChange('home');
    		this.props.loadUser(data[0]);
    		// console.log(data[0].name);

    	}

    	// this.props.onRouteChange('home');

    	
    })
    // .then(user=>{
    // 	if(user){
    // 		//console.log(user)
    // 		this.props.onRouteChange('home');
    // 		console.log(user);
    // 		//this.props.loadUser(user);
    		
    // 	}
    // })
    .catch(err=>{console.log(err)});
  }

  render() {
    return (
      <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4 black-80">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0">Register</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="text"
                  name="name"
                  id="name"
                  onChange={this.onNameChange}
                />
              </div>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="email"
                  name="email-address"
                  id="email-address"
                  onChange={this.onEmailChange}
                />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                <input
                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="password"
                  name="password"
                  id="password"
                  onChange={this.onPasswordChange}
                />
              </div>
            </fieldset>
            <div className="">
              <input
                onClick={this.onSubmitSignIn}
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                value="Register"
              />
            </div>
          </div>
        </main>
      </article>
    );
  }
}

export default Register;








/*import React from 'react';

const Register=({onRouteChange})=>{
	return(
		<div>
			<h1>Register</h1>
			<article className="pa4 black-80">
			    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
			      <legend className="ph0 mh0 fw6 clip">Sign Up</legend>
			      <div className="mt3">
			        <label className="db fw4 lh-copy f6" htmlFor="text">Name</label>
			        <input className="pa2 input-reset ba bg-transparent w-100 measure" 
			        	type="text" name="name"  id="name"/>
			      </div>
			      <div className="mt3">
			        <label className="db fw4 lh-copy f6" htmlFor="email-address">Email address</label>
			        <input className="pa2 input-reset ba bg-transparent w-100 measure" 
			        	type="email" name="email-address"  id="email-address"/>
			      </div>
			      <div className="mt3">
			        <label className="db fw4 lh-copy f6" htmlFor="password">Password</label>
			        <input className="b pa2 input-reset ba bg-transparent" 
			        	type="password" name="password"  id="password"/>
			      </div>
			    </fieldset>
			    <div className="mt3">
			    <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6" 
			    	type="submit" value="Register" onClick={()=>onRouteChange('home')}/>
			    </div>
			</article>

		</div>
	);
}
export default Register;*/