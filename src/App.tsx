import './App.css'
import {TracksList} from "./components/TracksList.tsx";
import {TrackDetails} from "./components/TrackDetails.tsx";
import {Header} from "./components/Header.tsx";
import {SidebarMenu} from "./components/SidebarMenu.tsx";
import {PageTitle} from "./components/PageTitle.tsx";
import {Footer} from "./components/Footer.tsx";
import {useState} from "react";


function App() {
    const [selectedTrackId, setSelectedTrackId] = useState(null)

    const changeSelectedTrackId = (trackId) => {
        setSelectedTrackId(trackId)
    }

    return (
        <>
            <Header/>
            <SidebarMenu/>
            <PageTitle/>
            <div style = {{display: 'flex'}}>
                <TracksList changeSelectedTrackId={changeSelectedTrackId} selectedTrackId={selectedTrackId}/>
                <TrackDetails selectedTrackId={selectedTrackId}/>
            </div>
            <Footer/>
        </>
    )
}

export default App

