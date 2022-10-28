import React, { useEffect, useState } from "react";
import axios from "axios";
import AllPlaylistCard from "../components/AllPlaylistCard";
import CappyImage from "../components/CappyImage";

function SelectedPlaylist(){
    const [token, setToken] = useState("");
    const [data, setData] = useState({});
    const [capData, setcapData] = useState({});
    const [playlist_id, setPlaylist_ID] = useState("");
      
    
      useEffect(() => {
        const urlParams = new URLSearchParams(window.location.hash.replace("#","?","&"));   
        const playlist_id = setPlaylist_ID(urlParams.get('playlist_id'));

        if (urlParams.get('access_token')) {
          setToken(urlParams.get('access_token'));
        }
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
      
     const cappyData =() =>{
        axios
          .get(`https://api.capy.lol/v1/capybaras?take=500`, {
            headers: {
                authority: 'api.capy.lol',
                content_type: 'image/jpeg',
              },
          })
          .then((response) => {
            setcapData(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
        }
   
    return(
        <div className= "selected-page-wrapper"style={{backgroundColor: `rgba(250, 235, 215)`}}>
          <div >
            <h1>What Kind of Capybara is Your Playlist?</h1>
            <p>Click ""Get Playlist then "Get a Cappy"</p>
            <button onClick={selectedPlaylistData}>Get Playlists</button>
            <AllPlaylistCard
            href={data.href}
            name={data.name}
            images ={data.images && data.images[0].url}
            tracks = {data.tracks && data.tracks.total}
        />
          <button onClick={cappyData}>Get a Cappy</button>  
         
          <CappyImage
            link={capData.data && capData.data[data.tracks && (data.tracks.total)-1].url}
            trackNo = {data.tracks && data.tracks.total}
          />
      </div>
        </div>
    );
}

export default SelectedPlaylist;

