import {useEffect, useState} from "react";
import {TrackItem} from "./TrackItem.tsx";

export const TracksList = ({onSelectedTrackId, trackId}) => {
    const [tracks, setTracks] = useState([])

    useEffect(() => {
        fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks',
            {
                headers: {
                    'api-key': '6658d6dc-bb62-4b5e-9850-168b231c09b5'
                }
            }
        )
            .then(res => res.json())
            .then(data => setTracks(data.data || null))
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
    const handleReset = () => {
        onSelectedTrackId(null)
    }
    const handleClick = (trackId) => {
        onSelectedTrackId(trackId)
    }

    return (
        <div>
            <button onClick = {handleReset}>
                RESET
            </button>
            <hr/>
            <ul>
                {tracks.map((track) => (
                        <TrackItem
                            key = {track.id}
                            isSelected = {trackId === track.id}
                            track = {track}
                            onSelect = {handleClick}
                        />
                    )
                )}
            </ul>
        </div>
    )
}
