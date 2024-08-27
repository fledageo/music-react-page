import "./css/style.css"
import TrackBox from "./TrackBox"

const Playlist = ({playlist,removePlaylist,swapSongs}) => {
    return <>
        <div className="playlist-wrapper">
            <span className="playlist-text">Playlist</span>
            <div className="songs-wrapper">
                {
                    playlist && playlist.map(elm => <TrackBox key={elm.song.id} 
                                                    song={elm.song} 
                                                    artist={elm.artist}
                                                    swapSongs={swapSongs} 
                                                    playlist={true}
                                                    removePlaylist={removePlaylist}/>)
                }      
            </div>
        </div>
    </>
}
export default Playlist