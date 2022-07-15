import React from 'react';
import Photo from './Photo';
import NotFound from './NotFound';

const PhotoList = props=>{
    const results=props.data;
    let photos;
    if( results.length>0){
        let photos= results.map((photo)=>url={photo.images.fixed_height.url} key={photo.id})
    }else{
        photos=<NotFound />
    }

    return(
        <div class="photo-container">
        <h2>Results</h2>
        <ul>{photos}</ul>
        </div>
    );
}

export default PhotoList;
