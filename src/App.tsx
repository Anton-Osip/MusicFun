import './App.css'
import { useTrackSelection } from './bll/useTrackSelection.ts'
import { Footer } from './ui/Footer/Footer.tsx'
import { Header } from './ui/Header/Header.tsx'
import { PageTitle } from './ui/PageTitle/PageTitle.tsx'
import { SidebarMenu } from './ui/SidebarMenu/SidebarMenu.tsx'
import { TrackDetails } from './ui/TrackDetails/TrackDetails.tsx'
import { TracksList } from './ui/TracksList/TracksList.tsx'

function App() {
	const { trackId, setTrackId } = useTrackSelection()

	const onSelectedTrackId = (trackId: string | null) => {
		setTrackId(trackId)
	}

	return (
		<>
			<SidebarMenu />
			<Header />
			<PageTitle />
			<div style={{ display: 'flex' }}>
				<TracksList onSelectedTrackId={onSelectedTrackId} trackId={trackId} />
				<TrackDetails trackId={trackId} />
			</div>
			<Footer />
		</>
	)
}

export default App
