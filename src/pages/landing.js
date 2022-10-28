import React from "react";

function Landing(){
    const CLIENT_ID = '298d0d5dd2424b72b29aedbbebb95aad';
    const redirect_uri = 'http://localhost:3000/selection';
    const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';
    const RESPONSE_TYPE = 'token';
    const scopes = [
        'user-read-currently-playing',
        'playlist-read-private',
        'playlist-read-collaborative',
        'playlist-read-collaborative',
        'ugc-image-upload',
        'playlist-read-public',
        'playlist-modify-public',
        'playlist-modify-private',
        ] ;

    return(
        <div className= "landing-page--wrapper">
        <div>
            <h1 className="landing-page-text"> Log into Your Spotify </h1>
            <a href= {`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${redirect_uri}&response_type=${RESPONSE_TYPE}&scopes=${scopes.join("20%")}&show_dialog=true`}>
                 <button className="landing-page-loginButton">Click to Login</button>
             </a>        
            </div>
            </div>
    );
}

export default Landing;