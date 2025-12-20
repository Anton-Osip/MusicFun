import {useEffect, useState} from "react";

export const TrackDetails = ({trackId}) => {
    const [selectedTrack, setSelectedTrack] = useState(null)
    useEffect(() => {
        if (!trackId) {
            setSelectedTrack(null)
            return
        }
        fetch(`https://musicfun.it-incubator.app/api/1.0/playlists/tracks/${trackId}`,
            {
                headers: {
                    'api-key': '6658d6dc-bb62-4b5e-9850-168b231c09b5'
                }
            }
        )
            .then(res => res.json())
            .then(data => setSelectedTrack(data.data))

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
