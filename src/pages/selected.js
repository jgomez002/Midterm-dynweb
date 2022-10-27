import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import AllPlaylistCard from "../components/AllPlaylistCard";

function SelectedPlaylist(){
    const CLIENT_ID = '298d0d5dd2424b72b29aedbbebb95aad';
    const secret = "df351df4018b45308c3923d93eda41f1";
    const [token, setToken] = useState("");
    const [data, setData] = useState({});
    const [playlist_id, setPlaylist_ID] = useState("")
    // const [playlist_id, setPlaylist_ID] = useState('');
    // const [searchParams] = useSearchParams();
      
    
      useEffect(() => {
        // const playlistToQuery = searchParams.get('playlist_id') || playlist_id; setPlaylist_ID(playlistToQuery);
        const urlParams = new URLSearchParams(window.location.hash.replace("#","?","&"));   
        const playlist_id = setPlaylist_ID(urlParams.get('playlist_id'));

        if (urlParams.get('access_token')) {
          setToken(urlParams.get('access_token'));
        }
    console.log(playlist_id)
      }, []);
    
      const selectedPlaylistData = () => {
        axios
          .get(`https://api.spotify.com/v1/playlists/${playlist_id}`, {
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
    

      
    return(
        <div style={{textAlign:"center"}}>
            <h1> Getting Started </h1>
            <p>This page will displayed selcted playlist and prompted user to utilzea button that wil change image of playlist
            </p>
            <button onClick={selectedPlaylistData}>Get Playlists</button>
            <AllPlaylistCard
            href={data.href}
            name={data.name}
            images ={data.images && data.images[0].url}
        />
        </div>
    );
}

export default SelectedPlaylist;

// return (
//     <>
//       <button onClick={playlistData}>Get Playlists</button>
//       {data?.items ? data.items.map((item) => <p>{item.name}</p>) : null}
//       {data?.items ? data.items.map((item) =>  <img src={item.images[0].url}></img>):null}
//     </>
//   );
// };

// {data?.items ? data.items.map((item) =>  <img src={item.images[0].url}></img>):null}

// artist={data.items.track.artist.name}
// tracks={data.items.track.artist.name}