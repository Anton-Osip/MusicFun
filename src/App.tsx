import './App.css'
import {TracksList} from "./ui/TracksList.tsx";
import {TrackDetails} from "./ui/TrackDetails.tsx";
import {Header} from "./ui/Header.tsx";
import {SidebarMenu} from "./ui/SidebarMenu.tsx";
import {PageTitle} from "./ui/PageTitle.tsx";
import {Footer} from "./ui/Footer.tsx";
import {useState} from "react";


function App() {
    const [trackId, setTrackId] = useState<string | null>(null)

    const onSelectedTrackId = (trackId: string | null) => {
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

