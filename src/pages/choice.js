import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import AllPlaylistCard from "../components/AllPlaylistCard";
const CLIENT_ID = '298d0d5dd2424b72b29aedbbebb95aad';
const redirect_uri = 'http://localhost:3000/selected';
const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';
const RESPONSE_TYPE = 'token';
const scopes = [
    'user-read-currently-playing',
    'playlist-read-private',
    'playlist-read-collaborative',
    'playlist-read-collaborative',
    ] ;

function Choice(){ 
  const [token, setToken] = useState("");
  const [data, setData] = useState({});

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.hash.replace("#","?"));    
    if (urlParams.get('access_token')) {
      setToken(urlParams.get('access_token'));
    }
  }, []);

  const playlistData = () => {
    axios
      .get("https://api.spotify.com/v1/me/playlists", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (

    <div style={{textAlign:"center"}}>
    <h1> Select a Playlist!! </h1>
    <button onClick={playlistData}>Get Playlists</button>
        {data.items ? data.items.map((item) => (
        <AllPlaylistCard
            href={item.href}
            name={item.name}
            id={item.id}
            link = {`${redirect_uri}#access_token=${token}&response_type=${RESPONSE_TYPE}&scopes=${scopes.join("20%")}&show_dialog=true&playlist_id=${item.id}`}
            images ={item.images[0].url}
        />
        )):null}
    </div>
    );
};

export default Choice;
    // <>
    //   <button onClick={playlistData}>Get Playlists</button>
    //   {data?.items ? data.items.map((item) => <p>{item.name}</p>) : null}
    //   {data?.items ? data.items.map((item) =>  <img src={item.images[0].url}></img>):null}
    // </>





// import { useEffect, useState } from "react";
// import { useParams } from "react-router";
// import { useSearchParams } from "react-router-dom";
// import axios from 'axios'; 



// function Choice(){
//     const CLIENT_ID = '298d0d5dd2424b72b29aedbbebb95aad';
//     const secret = "df351df4018b45308c3923d93eda41f1";
//     const [listening, setListening] = useState({});
//     const [token, setToken] = useState("");

//     useEffect(() =>{
//         const URL = ('current URL', window.location.href);
//         const urlParams = new URLSearchParams(window.location.hash.replace("#","?"));
//         const token = urlParams.get('access_token');
//         const tokenType = urlParams.get('token_type');
//         const expiration = urlParams.get('expires_in');

//         const displayData = async (e) => {
//             const {data} = await axios.get("https://api.spotify.com/v1/me/player/currently-playing", {
//                 headers: {
//                     Authorization: `Bearer ${token}`
//                 },
//                 params: {
//                     type: "all"
//                 }
//             })
    
//             setListening(data.all)
//         }
//         // axios({
//         // method: 'GET',
//         // url: "https://api.spotify.com/v1/me/player/currently-playing",
//         // params: {
//         //   grant_type: 'client_credentials'
//         // },
//         //     headers: {
//         //         'Accept':'application/json',
//         //         'Content-Type': 'application/x-www-form-urlencoded',
//         //         'Authorization':  `Bearer ${token}`
//         //     }

         
   
// // })
// console.log('current URL', window.location.href);     
// console.log(token);    
// console.log(tokenType);
// console.log(expiration);
// console.log(displayData);

// // .then((response) => {
// //     console.log(response.data);
//   });
    
  
    
      

//     // } );

//     return(
//         <div style={{textAlign:"center"}}>
//             <h1> Getting Started </h1>
//             <p>Authorization Sucessful!!! This page will prompt user go through their personal playlist lib and select one for website/project prompt</p>
//             <br></br>
//             <p>URL Token: {token}</p>
//             {/* <p>URL Token Type is: {tokenType}</p>
//             <p>Token Expires in: {expiration}</p> */}
          
//         </div>
//     );
// }

// export default Choice;