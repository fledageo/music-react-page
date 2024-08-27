import "./css/style.css"
import Artist from "./Artist"

const ArtistsBlock = ({artists,actionSongsBlock}) => {
    return <>
        <div className="artists-wrapper">
            <span className="artists-text">Artists</span>
            <div className="artists-blocks-wrapper">
                {
                    artists.map(artist => <Artist key={artist.id} artist={artist} actionSongsBlock={actionSongsBlock}/>)
                }
            </div>
        </div>
    </>
}
export default ArtistsBlock