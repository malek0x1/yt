import axios from "axios";
import React, { useState } from 'react'
import { FaDownload, FaPaste } from 'react-icons/fa'
import './Main.css'
const Main = () => {
  const [url, setURL] = useState()



  const DownloadFunc = (idProp) => {
    if (idProp.indexOf('=') != -1) {
      var id = idProp.split("=")[1]
    }
    else {
      var id = idProp.split("/")[1]
    }
    const options = {
      method: 'GET',
      url: 'https://ytstream-download-youtube-videos.p.rapidapi.com/dl',
      params: { id: id },
      headers: {
        'X-RapidAPI-Key': '187ef9bb71msh9ee049303dd8fc6p148533jsn5628b40634e8',
        'X-RapidAPI-Host': 'ytstream-download-youtube-videos.p.rapidapi.com'
      }
    };
    axios.request(options).then(function (response) {
      console.log(response.data.formats)
      var lastUrl = response.data.formats[response.data.formats.length - 1].url
      var link = document.createElement('a');
      link.href = lastUrl;
      link.setAttribute('download', 'recording.mp4');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }).catch(function (error) {
      console.error(error);
    });
  }

  return (
    <div className='Main container'>
      <h1>YouTube Video Downloader</h1>

      <div className="inputWrapper">
        <input onChange={(e) => setURL(e.target.value)} type="text" placeholder='Paste your video link here' />
        <div className="main-btns">
          <button id="paste"><FaPaste size={20} /></button>
          <button><FaDownload onClick={() => DownloadFunc(url)} size={18} /></button>
        </div>
      </div>
    </div>
  )
}

export default Main