import React from 'react';

function AllPlaylistCard({name, images, id, href, link,tracks,artist}) {
    return (
        <div>
            <a href={href}>
            <p>{name}</p>
            <a href={link}>{id}</a>
            <img src={images}></img>
            <p>{tracks} <br></br> {artist}</p>
        </a>
        </div>
    )
}

export default AllPlaylistCard;

 