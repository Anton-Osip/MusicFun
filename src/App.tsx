import './App.css'
import {TracksList} from "./components/TracksList.tsx";
import {TrackDetails} from "./components/TrackDetails.tsx";
import {Header} from "./components/Header.tsx";
import {SidebarMenu} from "./components/SidebarMenu.tsx";
import {PageTitle} from "./components/PageTitle.tsx";
import {Footer} from "./components/Footer.tsx";


function App() {

    return (
        <>
            <Header/>
            <SidebarMenu/>
            <PageTitle/>
            <div style = {{display: 'flex'}}>
                <TracksList/>
                <TrackDetails/>
            </div>
            <Footer/>
        </>
    )
}

export default App

