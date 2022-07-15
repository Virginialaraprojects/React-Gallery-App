import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import apiKey from '../../Config';

class App extends Component {

// to have photos display before the search
componentDidMount(){
  this.performSearch();
}



//function to search data on app
performSearch=(query = 'sunsets') =>{
  axios.get('https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags={query}&per_page=24&format=json&nojsoncallback=1')
  .then(response => {
    this.setState({
      photos:response.data.data
      loading:false
    });

  })
  .catch(error => {
    console.log('Error fetching and parsing data', error);
  });
}

render(){
  return (
    <div className="container">
        <SearchForm onSearch = {this.performSearch}/>
        <Nav />
        <PhotoList data = {this.state.photos}/>
      </div>
  );
}
}

export default App;
