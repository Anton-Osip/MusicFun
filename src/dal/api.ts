export type GetTrackDetailsOutputData = {
	id: string
	attributes: {
		title: string
		lyrics: string | null
	}
}

type AttachmentDto = {
	url: string
}

type TrackListItemOutputAttributes = {
	title: string
	attachments: Array<AttachmentDto>
}

export type TrackListItemOutput = {
	id: string
	attributes: TrackListItemOutputAttributes
}

export type GetTrackDetailsOutput = { data: GetTrackDetailsOutputData }
export type GetTrackListItemOutput = { data: TrackListItemOutput[] }

const prepareHeaders = () => {
	const apiKey = import.meta.env.VITE_API_KEY
	if (!apiKey) return undefined

	return {
		'api-key': apiKey,
	}
}

export const getTracks = async (): Promise<GetTrackListItemOutput> => {
	const res = await fetch(
		'https://musicfun.it-incubator.app/api/1.0/playlists/tracks',
		{
			headers: prepareHeaders(),
		},
	)
	return await res.json()
}

export const getTrack = async (
	trackId: string,
): Promise<GetTrackDetailsOutput> => {
	const res = await fetch(
		`https://musicfun.it-incubator.app/api/1.0/playlists/tracks/${trackId}`,
		{
			headers: prepareHeaders(),
		},
	)
	return await res.json()
}
