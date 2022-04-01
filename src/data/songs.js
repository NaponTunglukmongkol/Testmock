let songs = [
    {
        id: 1,
        image: null,
        title: 'Supreme song',
        artist: 'BOWWOW',
        album: 'Yes You Can',
        date: '15 minutes ago',
        duration: '3:15'
    },
    {
        id: 2,
        image: null,
        title: 'Supreming song',
        artist: 'BOWWOW',
        album: 'Yes You Can',
        date: '15 minutes ago',
        duration: '3:12'
    },
    {
        id: 3,
        image: null,
        title: 'Unlikely a song',
        artist: 'WOWNIG',
        album: 'Unfortunate',
        date: '30 minutes ago',
        duration: '2:54'
    },
    {
        id: 4,
        image: null,
        title: 'Never sing',
        artist: 'WOWNIG',
        album: 'Unfortunate',
        date: '45 minutes ago',
        duration: '3:21'
    },
    {
        id: 5,
        image: null,
        title: "No More Hope",
        artist: 'SUPPEytt',
        album: 'ALTHOUGHT',
        date: '3 hours ago',
        duration: '2:41'
    },
    {
        id: 6,
        image: null,
        title: 'OH YES',
        artist: 'BOWWOW',
        album: 'ART OF SONG',
        date: '17 minutes ago',
        duration: '3:02'
    },
    {
        id: 7,
        image: null,
        title: 'YAYAYAY GAGAGA',
        artist: 'NUMBER 39',
        album: 'DRAW!',
        date: '24 minutes ago',
        duration: '3:04'
    },
    {
        id: 8,
        image: null,
        title: 'DODODO MAG',
        artist: 'NUMBER 39',
        album: 'DRAW!',
        date: '15 minutes ago',
        duration: '3:05'
    },
    {
        id: 9,
        image: null,
        title: 'THE GOLDEN LORD',
        artist: 'NUMBER 39',
        album: 'DRAW!',
        date: '15 minutes ago',
        duration: '3:09'
    },
    {
        id: 10,
        image: null,
        title: 'ONE OF US',
        artist: 'THE UNIFIED',
        album: 'TURNING',
        date: '7 hours ago',
        duration: '3:11'
    },
    {
        id: 11,
        image: null,
        title: 'JOIN US',
        artist: 'THE UNIFIED',
        album: 'TURNING',
        date: '7 hours ago',
        duration: '3:15'
    },
    {
        id: 12,
        image: null,
        title: "DON'T RESIST",
        artist: 'THE UNIFIED',
        album: 'TURNING',
        date: '15 minutes ago',
        duration: '3:15'
    },
]

export function getSongs(){
    return songs;
}

export function getSongByArtist(artist){
    let song = songs.filter((song) => song.artist == artist);
    return song;
}