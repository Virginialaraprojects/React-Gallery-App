import React from 'react';
import Photo from './Photo';
import PhotoList from './Photolist';

const NotFound= props =>(
    <li class="not-found">
        <h3>No Results Found</h3>
        <p>You search did not return any results. Please try again.</p>
  </li>
)
export default NotFound;