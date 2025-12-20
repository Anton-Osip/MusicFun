export const TrackItem = ({track, selectedTrackId, changeSelectedTrackId}) => {
    return (
        <li style = {{border: selectedTrackId === track.id ? '1px solid orange' : 'none'}}>
            <div onClick = {() => {
                changeSelectedTrackId(track.id)
            }}>{track.attributes.title}</div>
            <audio controls src = {track.attributes.attachments[0].url}></audio>
        </li>)
}
