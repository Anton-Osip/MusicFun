import {useEffect, useState} from "react";
import './App.css'


function App() {
    const [selectedTrackId, setSelectedTrackId] = useState<number | null>(null)
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

    const changeSelectedTrackId = (trackId: number | null) => {
        if (trackId === selectedTrackId) {
            setSelectedTrackId(null)
        } else {
            setSelectedTrackId(trackId)
        }

    }

    return (
        <>
            <h1>MusicFun player</h1>
            {tracks.length === null
                ? <span>Loading...</span>
                : tracks.length === 0
                    ? <span>No tracks</span>
                    : <ul>
                        {tracks.map((track) => (
                            <li key = {track.id}
                                style = {{border: selectedTrackId === track.id ? '1px solid orange' : 'none'}}>
                                <div onClick = {() => {
                                    changeSelectedTrackId(track.id)
                                }}>{track.attributes.title}</div>
                                <audio controls src = {track.attributes.attachments[0].url}></audio>
                            </li>
                        ))}
                    </ul>}

        </>
    )
}

export default App

