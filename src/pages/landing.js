import React from "react";
import { useNavigate } from "react-router-dom";


function Landing(){
    const CLIENT_ID = '298d0d5dd2424b72b29aedbbebb95aad';
    const redirect_uri = 'http://localhost:3000/selection';
    const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';
    const RESPONSE_TYPE = 'token';

    // const changePage = useNavigate(); 
    // const routeChange = () =>{ 
    //   let path = a herf={`${AUTH_ENDPOINT}?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=${RESPONSE_TYPE}`}; 
    //   changePage(path);
    // 
    console.log(CLIENT_ID);
    return(
        <div style={{textAlign:"center"}}>
            <h1> Getting Started </h1>
            <p>This page will being the landing page where user will be prompt to login into spotify, leading to the login page</p>
            <a href= {`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${redirect_uri}&response_type=${RESPONSE_TYPE}`}>
                 <button>Login into ur spotify yay</button>
             </a>        
            </div>
    );
}

export default Landing;