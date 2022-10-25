import { useEffect } from "react";
import { useParams } from "react-router";
import axios from 'axios'; 

function Choice(){
    
    const URL = ('current URL', window.location.href);
    let urlParams = new URLSearchParams(window.location.hash.replace("#","?"));
    let token = urlParams.get('access_token');
    let tokenType = urlParams.get('token_type');
    let expiration = urlParams.get('expires_in');
    useEffect(() =>{
        axios
       .get(URL)
       console.log('current URL', window.location.href);     
       console.log(token);    
       console.log(tokenType);
       console.log(expiration);
    } );

    return(
        <div style={{textAlign:"center"}}>
            <h1> Getting Started </h1>
            <p>Authorization Sucessful!!! This page will prompt user go through their personal playlist lib and select one for website/project prompt</p>
            <p>URL Token: {token}</p>
            <p>URL Token Type is: {tokenType}</p>
            <p>Token Expires in: {expiration}</p>
        </div>
    );
}

export default Choice;