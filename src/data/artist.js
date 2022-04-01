let artists = [
    {
        id: 0,
        name: 'BOWWOW'
    },
    {
        id: 1,
        name: 'WOWNIG'
    },
    {
        id: 2,
        name: 'SUPPEytt'
    },
    {
        id: 3,
        name: 'NUMBER 39'
    },
    {
        id: 4,
        name: 'THE UNIFIED'
    }
]

export function getArtists() {
    return artists;
}

export function getArtist(id) {
    let artist = artists.find((check) => check.id == id);
    return artist;
}