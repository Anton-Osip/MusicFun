import { useTracks } from '../bll/useTracks.ts'
import { TrackItem } from './TrackItem.tsx'

type Props = {
	trackId: string | null
	onSelectedTrackId: (id: string | null) => void
}

export const TracksList = ({ onSelectedTrackId, trackId }: Props) => {
	const { tracks, refresh } = useTracks()

	const handleReset = () => {
		onSelectedTrackId(null)
	}
	const handleClick = (trackId: string | null) => {
		onSelectedTrackId(trackId)
	}

	const handleRefreshClick = () => {
		refresh()
	}

	if (tracks === null) {
		return (
			<div>
				<span>⏱️Loading...</span>
			</div>
		)
	}

	if (tracks.length === 0) {
		return (
			<div>
				<span>😕No track</span>
			</div>
		)
	}

	return (
		<div>
			<button onClick={handleReset}>RESET</button>
			<button onClick={handleRefreshClick}>REFReSH</button>
			<hr />
			<ul>
				{tracks.map(track => (
					<TrackItem
						key={track.id}
						isSelected={trackId === track.id}
						track={track}
						onSelect={handleClick}
					/>
				))}
			</ul>
		</div>
	)
}
