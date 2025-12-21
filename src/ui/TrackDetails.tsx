import {useEffect, useState} from "react";
import {getTrack, type GetTrackDetailsOutputData} from "../dal/api.ts";

type Props = {
    trackId: string | null
}

export const TrackDetails = ({trackId}: Props) => {
    const [selectedTrack, setSelectedTrack] = useState<GetTrackDetailsOutputData | null>(null)
    useEffect(() => {
        if (!trackId) {
            setSelectedTrack(null)
            return
        }
        getTrack(trackId).then(data => setSelectedTrack(data.data || null))

    }, [trackId])


    return (
        <>
            <div>
                <h2>Details</h2>
                {!selectedTrack && !trackId && 'track is not selected'}
                {!selectedTrack && trackId && 'Loading...'}
                {selectedTrack && trackId && selectedTrack.id !== trackId && 'Loading...'}
                {selectedTrack && <div>
                    <h3>{selectedTrack.attributes.title}</h3>
                    <h4>lyrics</h4>
                    <p>{selectedTrack.attributes.lyrics ?? 'no lyrics'}</p>
                </div>}
            </div>
        </>
    )
}
