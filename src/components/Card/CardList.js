import React, {Component} from 'react';
import Card from './Card';

const CardList=({books,setcurrentBook})=>{

	return(
		<div>
			{
				books.map((book,i)=>{
					return <Card key={i}  //why???
								 val={i}
								 id={books[i].id}
								 img={books[i].volumeInfo.imageLinks.smallThumbnail}
								 title={books[i].volumeInfo.title}
								 author={books[i].volumeInfo.authors}
								 published={books[i].volumeInfo.publishedDate}
								 books={books}
								 setCurrentBook={setcurrentBook}/>
				})
			}
		</div>
	);
}
export default CardList;