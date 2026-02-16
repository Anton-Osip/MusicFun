import { useEffect, useState } from 'react'
import { getTrack, type GetTrackDetailsOutputData } from '../dal/api'

export const useTrackDetails = (trackId: string | null) => {
	const [trackDetails, setTrackDetails] =
		useState<GetTrackDetailsOutputData | null>(null)
	useEffect(() => {
		if (!trackId) {
			setTrackDetails(null)
			return
		}
		getTrack(trackId).then(data => setTrackDetails(data.data || null))
	}, [trackId])

	return { trackDetails }
}
