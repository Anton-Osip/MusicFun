import { useEffect, useState } from 'react'
import { getTracks, type TrackListItemOutput } from '../dal/api'

export const useTracks = () => {
	const [tracks, setTracks] = useState<TrackListItemOutput[] | null>(null)

	useEffect(() => {
		getTracks().then(data => setTracks(data.data || null))
	}, [])

	const refresh = () => {
		setTracks(null)
		getTracks().then(data => setTracks(data.data || null))
	}

	return { tracks, refresh }
}
