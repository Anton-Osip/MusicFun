import './App.css'

const tracks = [
    {
        id: 1,
        title: "Musicfun soundtrack",
        url: "https://musicfun.it-incubator.app/api/samurai-way-soundtrack.mp3",
    },
    {
        id: 2,
        title: "Musicfun soundtrack instrumental",
        url: " https://musicfun.it-incubator.app/api/samurai-way-soundtrack-instrumental.mp3",
    },
    {
        id: 3,
        title: "Musicfun soundtrack instrumental",
        url: " https://musicfun.it-incubator.app/api/samurai-way-soundtrack-instrumental.mp3",
    },

]

function App() {
    const selectedTrackId = 1

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
                                <div>{track.title}</div>
                                <audio controls src = {track.url}></audio>
                            </li>
                        ))}
                    </ul>}

        </>
    )
}

export default App
