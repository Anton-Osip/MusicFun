const tracks = [
    {title: 'samurai-way-soundtrack', url: 'https://musicfun.it-incubator.app/api/samurai-way-soundtrack.mp3'},
    {
        title: 'samurai-way-soundtrack-instrumental',
        url: 'https://musicfun.it-incubator.app/api/samurai-way-soundtrack-instrumental.mp3'
    }
]


const rootEl = document.getElementById('root')

const titleElement = document.createElement('h1')
titleElement.append('Music Fun')
rootEl.append(titleElement)

const tracksEl = document.createElement('ul')
rootEl.append(tracksEl)

tracks.forEach(track => {
    const trackEl = document.createElement('li')
    tracksEl.append(trackEl)

    const trackTitleEl = document.createElement('h3')
    trackTitleEl.append(track.title)
    trackEl.append(trackTitleEl)

    const trackPlayerEl = document.createElement('audio')
    trackPlayerEl.controls = true
    trackPlayerEl.src = track.url
    trackEl.append(trackPlayerEl)
})
