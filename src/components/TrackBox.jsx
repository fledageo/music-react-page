import "./css/style.css"
import { MdPlaylistAddCircle } from "react-icons/md";
import { RiCloseLargeLine } from "react-icons/ri";
import { CgMoveDown } from "react-icons/cg";

function TrackBox({song,toPlaylist,artist,playlist,removePlaylist,swapSongs}){
    if(playlist){
        return <>
            <div className="track-box">
                <div className="track-info">
                    <div>
                        <span className="track-info-song-text">{song.title}</span>
                        <span className="track-info-dur-text">{song.dur}</span>
                    </div>
                    <span className="track-info-artist-name">{artist}</span>
                </div>
                <div className="track-actions">
                    <button className="remove-playlist" onClick={() => removePlaylist(song)}><RiCloseLargeLine/></button>
                    <button className="moveDown-playlist" onClick={() => swapSongs(song.id)}><CgMoveDown />
                    </button>
                </div>
            </div>
        </>
    }else{
        return <>
            <div className="track-box">
                <div className="track-info">
                    <span>{song.title}</span>
                    <span className="track-info-dur-text">{song.dur}</span>
                </div>
                <div className="track-actions">
                    <button className="add-playlist" onClick={() => toPlaylist(artist,song)}><MdPlaylistAddCircle /></button>
                </div>
            </div>
        </>
    }
}
export default TrackBox