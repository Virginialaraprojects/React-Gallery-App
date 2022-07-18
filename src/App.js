import React, { Component } from 'react';
import axios from 'axios';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'
//App components
import SearchForm from './Components/SearchForm';
import Nav from './Components/Nav';
import PhotoList from './Components/PhotoList';
import NotFound from './Components/NotFound';

import './App.css';
import apiKey from '../src/config';


export default class App extends Component {
  constructor(){
    super();
    this.state ={
      photo:[],
      sunset:[],
      butterfly:[],
      paradise:[],
      query:'',
      loading: true
    }
  }

// to have photos display before the search
componentDidMount(){
  this.performSearch();
  this.performSearch('sunset');
  this.performSearch('butterfly');
  this.performSearch('paradise');
  
}

//function to search data on app
performSearch=(query = 'flowers') =>{
  axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&extras=url_c&per_page=24&format=json&nojsoncallback=1`)
  .then((response) => {
    if ( query === 'sunset'){
      this.setState({sunset:response.data.photos.photo});
    }else if ( query === 'butterfly'){
      this.setState({butterfly:response.data.photos.photo});
    }else if ( query === 'paradise'){
      this.setState({paradise:response.data.photos.photo});
    } else {
      this.setState({query:query});
      this.setState({photo:response.data.photos.photo});
    }
    this.setState({
      loading:false
    });
    
  })
  .catch(error => {
    console.log('Error fetching and parsing data', error);
  });
}



render() {
  console.log(this.state.photos)
  return (
  
    <BrowserRouter>
      <div className="container">
        <SearchForm 
          onSearch = {this.performSearch}/>
        <Nav 
        onClick={this.performSearch}/>
        
        <Switch>
          <Route exact path="/" render ={()=> <PhotoList data={this.state.photo} topic={'Flowers'} />} />
          <Route exact path="/sunset" render ={()=> <PhotoList data={this.state.sunset} loading={this.state.loading}topic={'Sunset'}/>} />
          <Route exact path="/butterfly" render ={()=> <PhotoList data={this.state.butterfly} topic={'Butterfly'} />} />
          <Route exact path="/paradise" render ={()=> <PhotoList data={this.state.paradise} topic={'Paradise'} />} />
          <Route path="/:query" render ={()=>(<div className="photo-container"> <PhotoList data={this.state.photo} topic={this.state.query} /> </div> )} />
          <Route component={ NotFound } />
        </Switch>
      </div>
    </BrowserRouter>
  );
 }
};

