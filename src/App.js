import React, { Component } from 'react';
import axios from 'axios';
import {
  BrowserRouter,
  Route
} from 'react-router-dom'
//App components
import SearchForm from './Components/SearchForm';
import Nav from './Components/Nav';
import PhotoList from './Components/PhotoList';
//import NotFound from './Components/NotFound';

import './App.css';
import apiKey from '../src/config';


export default class App extends Component {

  constructor(){
    super();
    this.state ={
      photos:[],
      loading: true
    }
  }

// to have photos display before the search
componentDidMount(){
  this.performSearch();
}

//function to search data on app
performSearch=(query = 'sunsets') =>{
  axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
  .then(response => {
    this.setState({
      photos:response.data.data,
      loading:false
    });
  })
  .catch(error => {
    console.log('Error fetching and parsing data', error);
  });
}

render(){
  return (
    <BrowserRouter>
      <div className="container">
        <SearchForm 
          onSearch = {this.performSearch}/>
        <Nav />
        {
          (this.state.loading)
          ?<p> Loading...</p>
          :<PhotoList data = {this.state.photos}/>
        }
        <Route exact path="/" render ={()=> <PhotoList />} />
        <Route path="/searchform" render ={()=> <SearchForm />} />
      </div>
    </BrowserRouter>
  );
 }
}

