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
        'playlist-modify-public',
        'playlist-modify-private',
        ] ;

    console.log(scopes);
    return(
        <div style={{textAlign:"center"}}>
            <h1> Getting Started </h1>
            <p>This page will being the landing page where user will be prompt to login into spotify, leading to the login page</p>
            <a href= {`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${redirect_uri}&response_type=${RESPONSE_TYPE}&scopes=${scopes.join("20%")}&show_dialog=true`}>
                 <button>Login into ur spotify yay</button>
             </a>        
            </div>
    );
}

export default Landing;