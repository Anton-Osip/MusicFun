import {useEffect, useState} from "react";
import {TrackItem} from "./TrackItem.tsx";

export const TracksList = ({changeSelectedTrackId, selectedTrackId}) => {
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
            <TrackItem
                key = {track.id}
                selectedTrackId={selectedTrackId}
                track = {track}
                changeSelectedTrackId = {changeSelectedTrackId}
            />
        ))}
    </ul>
}
