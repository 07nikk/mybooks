import React,{Component} from 'react';
import Searchbox from './components/SearchBox/Searchbox';
import CardList from './components/Card/CardList';
import Card from './components/Card/Card';
import Navigation from './components/Navigation/Navigation';
import SignIn from './components/SignIn/Signin';
import Register from './components/Register/Register'
import 'tachyons';

class App extends Component{
  constructor()
  {
    super();
    this.state = {
      books:[],
      searchfield:'',
      route:'signin',
      isSignedIn:false,
      loaded : false,
      
    }
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount()
  {
    let url = `https://www.googleapis.com/books/v1/volumes?q=novel`;
    
    fetch(url)
    .then(response=>response.json())
    .then(data=>this.setState({books:data.items}));
    this.setState({loaded:true});
  }

  onSearch=(e)=>{

    this.setState({searchfield:e.target.value}); 
  }

  onSubmit=(e)=>{

    let url = `https://www.googleapis.com/books/v1/volumes?q=${this.state.searchfield}`;
    
    fetch(url)
    .then(response=>response.json())
    .then(data=>{

                  this.setState({books:data.items});
                });
  }

  onRouteChange=(route)=>
  {
    this.setState({route:route});
    if(route==='home')
    {
      this.setState({isSignedIn:true});
    }
    else if(!(route==='home'))
    {
      this.setState({isSignedIn:false});
    }
  }

  render(){
    if(!this.state.books.length)
    {
      return null;
    }
    if(!this.state.loaded)
    {
      return(
        <div>
          loading...
        </div>
        );
    }

    return(
          <div>
           <Navigation route={this.state.route} isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange}/>
           { this.state.route==="home"
             ? <div>
                <Searchbox onSearch ={this.onSearch} onSubmit={this.onSubmit} load={this.state.loaded}/>
                <CardList books ={this.state.books}/>
              </div> 
             : (
              this.state.route ==='signin'
              ? <SignIn onRouteChange={this.onRouteChange}/>
              : <Register onRouteChange={this.onRouteChange}/>

              )
            }
            </div>
          );
        }
}

export default App;
