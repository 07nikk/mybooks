import React,{Component} from 'react';
import {useState} from 'react';
import {
	BrowserRouter,
	Routes,
	Route,
	Link
} from 'react-router-dom';
import Cart from '../Cart/Cart';
import Desc from '../Cart/Desc';


const Card=({val,img,title,author,published,books,setCurrentBook})=>{
	/*constructor()
	{	super()
		this.state = {
			cart:""
		}
	}*/

	// update=(books,value)=>{
	// 	currentBook = books[val];
	// }

		//const {val,img,title,author,published,books} = this.props;
	// const [cart,setMyCart] = useState([]);	
	{/*<<<<change url on click and route>>>>*/}

		return(
					<div className="dib ma3 pa2 ba w-18 h-20 flex-wrap pointer">
						<img src={img} alt ="img"/>
						<div className="f6 lh-copy">
								<h3>{title}</h3>
								<h3>{author}</h3>
								<p>{published}</p>
								<button onClick={()=>{
									alert("Bought"+JSON.stringify(books[val].volumeInfo.title));
									// console.log(books[val]);
								}
									
								}>BUY</button>

								{/*<BrowserRouter>
									<ul>
										<li><Link to={"/"}>Desc</Link></li>
										<li><Link to={"cart"}>Cart</Link></li>
									</ul>
									
									<Routes>
										<Route path="/" element={<Desc/>}/>
										<Route path="cart" element={<Cart/>}/>
									</Routes>
								</BrowserRouter>*/}
						</div>
					</div>
		);
}

export default Card;