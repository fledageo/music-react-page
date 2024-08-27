import "./css/style.css"
import TrackBox from "./TrackBox"
import { RiCloseLargeLine } from "react-icons/ri";


function MusicList({artistInfo,toPlaylist,actionSongsBlock}){
    return <>
    <div className="musicList-container">
        <div className="songs-list-wrapper">
            <div className="artist-info" style={{backgroundImage:`url(${artistInfo.img})`}}>
                <button className="musicList-close" onClick={actionSongsBlock}><RiCloseLargeLine /></button>
                <span className="artist-info-name">{artistInfo.artist}</span>
            </div>
            <div className="artist-songs">
                {
                    artistInfo.songs.map(elm => <TrackBox artist={artistInfo.artist} key={elm.id} song={elm} toPlaylist={toPlaylist}/>)
                }
            </div>
        </div>
    </div>
    </>
}
export default MusicList