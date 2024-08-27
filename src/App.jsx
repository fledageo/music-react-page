import { useState } from 'react'
import './App.css'

import Playlist from "./components/Playlist"
import ArtistsBlock from "./components/ArtistsBlock"
import MusicList from "./components/MusicList"

import rihanna from "./components/img/rihanna.jpeg"
import adele from "./components/img/adele.jpeg"
import duaLipa from "./components/img/duaLipa.jpeg"


function App() {
  const [artists,setArtists] = useState([
    {id:0,artist:"Rihanna",songs:[{id:0,title:"Diamonds",dur:"3:00"},{id:1,title:"Man Down",dur:"3:40"},{id:2,title:"Umbrella",dur:"2:45"}],img:rihanna},
    {id:1,artist:"Adele",songs:[{id:3,title:"Sky Fall",dur:"3:20"},{id:4,title:"Hello",dur:"4:00"},{id:5,title:"I Drink Wine",dur:"2:50"}],img:adele},
    {id:2,artist:"Dua Lipa",songs:[{id:6,title:"New Rules",dur:"3:00"},{id:7,title:"Houdini",dur:"3:30"},{id:8,title:"One Kiss",dur:"3:20"}],img:duaLipa},
  ]);
  const [show,setShow] = useState({isShowed:false,artistId:null})
  const [playlist,setPlaylist] = useState([])
  const actionSongsBlock = (id) => {
    setShow({isShowed:(!show.isShowed),artistId:id})
  } 
  const toPlaylist = (artist,song) => {
    setPlaylist(prevState => {
        if(!prevState.find(elm => elm.song.id === song.id)){
           return prevState.push({artist:artist,song:song})
        }
        return [...prevState]
    });
  }
  const removePlaylist = (song) => {
    setPlaylist(prevState => {
        return prevState.filter(elm => elm.song.id !== song.id)
    });
  }
  const swapSongs = (id) => {
    let temp = [...playlist];
    let songIndex = temp.findIndex(elm => elm.song.id == id);
    if(temp[songIndex+1]){
      [temp[songIndex],temp[songIndex+1]] = [temp[songIndex+1],temp[songIndex]]
    }
    
    setPlaylist(temp);
  }
  return (
    <>
    <div className='container'>
      <Playlist playlist={playlist} removePlaylist={removePlaylist} swapSongs={swapSongs}/>
      <ArtistsBlock artists={artists} actionSongsBlock={actionSongsBlock}/>
      {
        show.isShowed && <MusicList artistInfo={artists.find(elm => elm.id == show.artistId)}  
                          toPlaylist = {toPlaylist} 
                          actionSongsBlock={actionSongsBlock}/>
      }
    </div>
    </>
  )
}

export default App
