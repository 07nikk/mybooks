import React from 'react';

const Card =({img,title,author,published})=>{

	// console.log("called before if "+books.length);

	{
		return(

			<div className="dib ma3 pa2 ba w-18 h-20 flex-wrap">
				<img src={img} alt ="img"/>
				<div className="f6 lh-copy">
					<h2>{title}</h2>
					<h3>{author}</h3>
					<p>{published}</p>
				</div>
			</div>

			

			

		);
	}
}

export default Card;