export const TrackItem = ({track, isSelected, onSelect}) => {

    return (
        <li style = {{border: isSelected ? '1px solid orange' : 'none'}}>
            <div onClick = {() => {
                onSelect(track.id)
            }}>{track.attributes.title}</div>
            <audio controls src = {track.attributes.attachments[0].url}></audio>
        </li>)
}
