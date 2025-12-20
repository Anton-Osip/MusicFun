import {useEffect, useState} from "react";

export const TrackDetails = ({selectedTrackId}) => {
    const [selectedTrack, setSelectedTrack] = useState(null)
    useEffect(() => {
        if (!selectedTrackId) return
        fetch(`https://musicfun.it-incubator.app/api/1.0/playlists/tracks/${selectedTrackId}`,
            {
                headers: {
                    'api-key': '6658d6dc-bb62-4b5e-9850-168b231c09b5'
                }
            }
        )
            .then(res => res.json())
            .then(data => setSelectedTrack(data.data))

    }, [selectedTrackId])


    return (
        <>
            <div>
                <h2>Details</h2>
                {!selectedTrack && !selectedTrackId && 'track is not selected'}
                {!selectedTrack && selectedTrackId && 'Loading...'}
                {selectedTrack && selectedTrackId && selectedTrack.id !== selectedTrackId && 'Loading...'}
                {selectedTrack && <div>
                    <h3>{selectedTrack.attributes.title}</h3>
                    <h4>lyrics</h4>
                    <p>{selectedTrack.attributes.lyrics ?? 'no lyrics'}</p>
                </div>}
            </div>
        </>
    )
}
