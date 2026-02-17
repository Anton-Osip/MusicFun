import { useTrackDetails } from '../../bll/useTrackDetails'

type Props = {
	trackId: string | null
}

export const TrackDetails = ({ trackId }: Props) => {
	const { trackDetails } = useTrackDetails(trackId)

	return (
		<>
			<div>
				<h2>Details</h2>
				{!trackDetails && !trackId && 'track is not selected'}
				{!trackDetails && trackId && 'Loading...'}
				{trackDetails && trackId && trackDetails.id !== trackId && 'Loading...'}
				{trackDetails && (
					<div>
						<h3>{trackDetails.attributes.title}</h3>
						<h4>lyrics</h4>
						<p>{trackDetails.attributes.lyrics ?? 'no lyrics'}</p>
					</div>
				)}
			</div>
		</>
	)
}
