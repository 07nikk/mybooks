import React,{Component} from 'react';
import Searchbox from './components/SearchBox/Searchbox';
import CardList from './components/Card/CardList';
import Card from './components/Card/Card';
import Navigation from './components/Navigation/Navigation';
import SignIn from './components/SignIn/Signin';
import Register from './components/Register/Register'
import Searches from './components/Searches/Searches'
import Cart from './components/Cart/Cart'
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
      currentBook:[],
      user:{
        id:'',
        name:'',
        email:'',
        entries:0,
        joined:''
      }
    }
    // this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount()
  {
    // fetch('http://localhost:3001')
    //   .then(response=>response.json())
    //   .then(console.log);

    let url = `https://www.googleapis.com/books/v1/volumes?q=novel`;
    
    fetch(url)
    .then(response=>response.json()
        // fetch('http://localhost:3000/searches',{
        //   method:'put',
        //   headers:{'content-type':'application/json'},
        //   body:JSON.stringify({
        //     id:this.state.user.id
        //   })
        // })
        )
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
    .then(data=>{this.setState({books:data.items})});

  }

  userCheck=(data)=>{
    console.log(data);
  }

  loadUser=(data)=>{
    this.setState({user:{
      id:data.id,
      name:data.name,
      email:data.email,
      entries:data.entries,
      joined:data.joined
    }});
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

  setCurrentBook=(currentBook)=>{
    this.setState({currentBook:currentBook});
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
           { this.state.route==='home'
             ? <div>
                <Searchbox onSearch ={this.onSearch} onSubmit={this.onSubmit} load={this.state.loaded}/>
                <Searches name={this.state.user.name} entries={this.state.user.entries}/>
                <CardList books ={this.state.books} setcurrentBook={this.state.currentBook}/>
                {/*<Cart currentBook={this.state.currentBook}/>*/}
              </div> 
             : (
              this.state.route ==='signin'
              ? <SignIn onRouteChange={this.onRouteChange} loadUser={this.loadUser}/>
              : <Register onRouteChange={this.onRouteChange} loadUser={this.loadUser}/>

              )
            }
            </div>
          );
        }
}

export default App;
