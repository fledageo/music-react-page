import "./css/style.css"

const Artist = ({artist,actionSongsBlock}) => {
    return <>
        <div className="artist-block" style={{backgroundImage:`url(${artist.img})`}}>
            <div className="name-btn-wrapper">
                <span className="artist-name">{artist.artist}</span>
                <button className="artist-show" onClick={() => actionSongsBlock(artist.id)}>Show</button>
            </div>
        </div>
    </>
}
export default Artist