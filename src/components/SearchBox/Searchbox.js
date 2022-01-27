import React from 'react';

const Searchbox=({onSearch,onSubmit})=>{
	return(
		<div>

			<input id="search" type="text" placeholder="Search" onChange={onSearch}/>
			<button type="button" onClick={onSubmit}>Submit</button>
	
		</div>
		);
}

export default Searchbox;