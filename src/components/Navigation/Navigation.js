import React from 'react';

const Navigation=({onRouteChange,isSignedIn,route})=>{
		if(isSignedIn)
		{
				return(	
					<div>
						<nav className="ba">
							<button onClick={()=>onRouteChange('signin')}>Signout</button>
						</nav>
					</div>

				);
		}else
		{
			return(

				<div>
						<nav className="ba">
							<button onClick={()=>onRouteChange('signin')}>SIGNIN</button>
							<button onClick={()=>onRouteChange('register')}>Register</button>
						</nav>
					</div>
			);
		}
}
export default Navigation;