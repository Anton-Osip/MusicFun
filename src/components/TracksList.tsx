import {useEffect, useState} from "react";

export const TracksList = () => {
    const [tracks, setTracks] = useState([])
    const [selectedTrackId, setSelectedTrackId] = useState(null)

    useEffect(() => {
        fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks',
            {
                headers: {
                    'api-key': '6658d6dc-bb62-4b5e-9850-168b231c09b5'
                }
            }
        )
            .then(res => res.json())
            .then(data => setTracks(data.data))
    }, [])

    if (tracks === null) {
        return <div>
            <span>Loading...</span>
        </div>
    }

    if (tracks.length === 0) {
        return <div>
            <span>No track</span>
        </div>
    }
    return <ul>
        {tracks.map((track) => (
            <li key = {track.id}
                style = {{border: selectedTrackId === track.id ? '1px solid orange' : 'none'}}
            >
                <div onClick = {() => {
                    setSelectedTrackId(track.id)
                    // setSelectedTrack(track)
                }}>{track.attributes.title}</div>
                <audio controls src = {track.attributes.attachments[0].url}></audio>
            </li>
        ))}
    </ul>
}
