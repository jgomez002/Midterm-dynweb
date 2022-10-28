import React from 'react';

function AllPlaylistCard({name, images, id,link,tracks}) {
    return (
        <div className='choice-page-items'>
             <a href={link}>
                <h2>{name}</h2>
            </a>
            <br></br>
            <img src={images}></img>
            <p> Total Tracks: {tracks}</p>
        </div>
    )
}

export default AllPlaylistCard;

 