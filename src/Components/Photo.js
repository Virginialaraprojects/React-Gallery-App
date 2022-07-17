import React from 'react';

const Photo =(props) =>(
          <li>
            <img src={props.url} height = '250px' width = '250px' alt= "" />
          </li>
    );

export default Photo;