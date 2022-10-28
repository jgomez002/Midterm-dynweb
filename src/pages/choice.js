import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import AllPlaylistCard from "../components/AllPlaylistCard";

const redirect_uri = 'http://localhost:3000/selected';
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

    <div className="choice-page-wrapper">
    <div className="choice-page-content">
    <h1 className="choice-page-h1"> Select a Playlist!! </h1>
    <button onClick={playlistData}>Load Playlists</button>
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
    </div>
    );
};

export default Choice;