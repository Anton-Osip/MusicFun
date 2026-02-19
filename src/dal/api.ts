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

export const getTracks = async (): Promise<GetTrackListItemOutput> => {
	const res = await fetch(
		'https://musicfun.it-incubator.app/api/1.0/playlists/tracks',
		{
			headers: {
				'api-key': '6658d6dc-bb62-4b5e-9850-168b231c09b5',
			},
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
			headers: {
				'api-key': '6658d6dc-bb62-4b5e-9850-168b231c09b5',
			},
		},
	)
	return await res.json()
}
