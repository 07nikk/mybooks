import React from 'react';
import Card from './Card';

const CardList=({books})=>{
	//const cardArray = books.map()
 // console.log(books[0]);

	return(
		<div>
			{
				books.map((book,i)=>{
					return <Card key={i}
								 img={books[i].volumeInfo.imageLinks.smallThumbnail}
								 title={books[i].volumeInfo.title}
								 author={books[i].volumeInfo.authors}
								 published={books[i].volumeInfo.publishedDate}/>
				})
			}
		</div>
	);
}
export default CardList;