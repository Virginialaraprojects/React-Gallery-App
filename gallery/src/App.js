import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import apiKey from '../../Config';

class App extends Component {

  axios.get('https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=sunsets&per_page=24&format=json&nojsoncallback=1')
  .then(response => {
    this.setState({
      photos:response.data.data
      loading:false
    });

  })
  .catch(error => {
    console.log('Error fetching and parsing data', error);
  });


render(){
  return (
    <div className="container">
        <SearchForm/>
        <Nav />
      </div>
  );
}
}

export default App;
