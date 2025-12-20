import './App.css'
import {TracksList} from "./components/TracksList.tsx";
import {TrackDetails} from "./components/TrackDetails.tsx";
import {Header} from "./components/Header.tsx";
import {SidebarMenu} from "./components/SidebarMenu.tsx";
import {PageTitle} from "./components/PageTitle.tsx";
import {Footer} from "./components/Footer.tsx";
import {useState} from "react";


function App() {
    const [trackId, setTrackId] = useState(null)

    const onSelectedTrackId = (trackId) => {
        setTrackId(trackId)
    }

    return (
        <>
            <Header/>
            <SidebarMenu/>
            <PageTitle/>
            <div style = {{display: 'flex'}}>
                <TracksList onSelectedTrackId = {onSelectedTrackId} trackId = {trackId}/>
                <TrackDetails trackId = {trackId}/>
            </div>
            <Footer/>
        </>
    )
}

export default App

