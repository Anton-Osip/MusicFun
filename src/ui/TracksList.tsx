import {useEffect, useState} from "react";
import {TrackItem} from "./TrackItem.tsx";
import {getTracks, type TrackListItemOutput} from "../dal/api.ts";


type Props = {
    trackId: string | null
    onSelectedTrackId: (id: string | null) => void
}

export const TracksList = ({onSelectedTrackId, trackId}: Props) => {
    const [tracks, setTracks] = useState<TrackListItemOutput[] | null>(null)

    useEffect(() => {
        getTracks().then(data => setTracks(data.data || null))
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
    const handleClick = (trackId: string | null) => {
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
