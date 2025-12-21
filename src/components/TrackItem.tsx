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

type Props = {
    isSelected: boolean
    onSelect: (trackId: string) => void
    track: TrackListItemOutput
};

export const TrackItem = ({track, isSelected, onSelect}: Props) => {
    return (
        <li style = {{border: isSelected ? '1px solid orange' : 'none'}}>
            <div onClick = {() => {
                onSelect(track.id)
            }}>{track.attributes.title}</div>
            <audio controls src = {track.attributes.attachments[0].url}></audio>
        </li>)
}
