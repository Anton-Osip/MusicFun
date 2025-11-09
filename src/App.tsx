import {useEffect, useState} from "react";
import './App.css'


function App() {
    const [selectedTrack, setSelectedTrack] = useState(null)
    const [selectedTrackId, setSelectedTrackId] = useState(null)
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


    return (
        <>
            <h1>MusicFun player</h1>
            {tracks.length === null
                ? <span>Loading...</span>
                : tracks.length === 0
                    ? <span>No tracks</span>

                    : <div style = {{display: 'flex', gap: '10px', justifyContent: 'space-between'}}>

                        <div>
                            <button onClick = {() => {
                                setSelectedTrack(null)
                                setSelectedTrackId(null)
                            }}>reselect
                            </button>
                            <ul>
                                {tracks.map((track) => (
                                    <li key = {track.id}
                                        style = {{border: selectedTrackId === track.id ? '1px solid orange' : 'none'}}>
                                        <div onClick = {() => {
                                            setSelectedTrackId(track.id)
                                            fetch(`https://musicfun.it-incubator.app/api/1.0/playlists/tracks/${track.id}`,
                                                {
                                                    headers: {
                                                        'api-key': '6658d6dc-bb62-4b5e-9850-168b231c09b5'
                                                    }
                                                }
                                            )
                                                .then(res => res.json())
                                                .then(data => setSelectedTrack(data.data))
                                            setSelectedTrack(track)
                                        }}>{track.attributes.title}</div>
                                        <audio controls src = {track.attributes.attachments[0].url}></audio>
                                    </li>
                                ))}
                            </ul>
                        </div>
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
                    </div>}

        </>
    )
}

export default App

