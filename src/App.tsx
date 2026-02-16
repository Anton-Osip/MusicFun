import './App.css'
import { useTrackSelection } from './bll/useTrackSelection.ts'
import { Footer } from './ui/Footer.tsx'
import { Header } from './ui/Header.tsx'
import { PageTitle } from './ui/PageTitle.tsx'
import { SidebarMenu } from './ui/SidebarMenu.tsx'
import { TrackDetails } from './ui/TrackDetails.tsx'
import { TracksList } from './ui/TracksList.tsx'

function App() {
	const { trackId, setTrackId } = useTrackSelection()

	const onSelectedTrackId = (trackId: string | null) => {
		setTrackId(trackId)
	}

	return (
		<>
			<Header />
			<SidebarMenu />
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
