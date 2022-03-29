let genre = [
    {
        id: 0,
        title: 'T-Pop Now',
        description: 'เพลงไทยป๊อปโดนใจ อัพเดตให้คุณฟังทุกสัปดาห์. ศิลปิน: ATLAS',
        genre: 'programming-local-strategic-playlists',
        image: null,
    },
    {
        id: 1,
        title: 'Hot Hits Thailand',
        description: 'ที่สุดเพลงฮิตในประเทศไทย รวมเพลงเด่นจากทั่วโลก. ศิลปิน: Tattoo Colour',
        genre: 'programming-local-strategic-playlists',
        image: null,
    },
    {
        id: 2,
        title: 'เพลงไทยยอดนิยม',
        description: 'เพลงไทยมาแรงที่เราอยากแนะนำให้คุณได้ฟัง. ศิลปิน: MILLI',
        genre: 'programming-local-strategic-playlists',
        image: null,
    },
    {
        id: 3,
        title: 'เป๊ะ ดัง ฟังเวอร์',
        description: 'เป๊ะปังจากทุกที่ เพลงดังจากทุกแนว ปังเวอร์ทั้งเพลย์ลิสต์. ศิลปิน: LUSS',
        genre: 'programming-local-strategic-playlists',
        image: null,
    },
    {
        id: 4,
        title: 'ฮิตติดกระแส',
        description: 'เพลงใหม่มาแรง เพลงฮิตล่าสุด และเพลงอิงกระแสตอนนี้. ศิลปิน: SARAN x Maimhon',
        genre: 'programming-local-strategic-playlists',
        image: null,
    },
    {
        id: 5,
        title: 'Hits & Viral',
        description: 'รวมเพลงสากลสุดฮิต และเพลงในกระแสตอนนี้. The latest hits and trending tracks right now. Cover: salem ilese, TOMORROW X TOGETHER, Alan Walker',
        genre: 'programming-local-strategic-playlists',
        image: null,
    },
    {
        id: 6,
        title: 'ลูกทุ่ง อินเทรนด์',
        description: 'เพลงลูกทุ่งที่กำลังอยู่ในกระแส และลูกทุ่งฮิตโดนใจ ในเพลย์ลิสต์เดียว. ศิลปิน: เนสกาแฟ ศรีนคร',
        genre: 'programming-local-strategic-playlists',
        image: null,
    },
    {
        id: 7,
        title: 'K-Pop ON!',
        description: "New look and feel, same old playlist you love. Let's turn on the movement! Cover: Red Velvet",
        genre: 'programming-local-strategic-playlists',
        image: null,
    },
    {
        id: 8,
        title: 'ฮิปฮอป ของมันต้องฟัง',
        description: 'รวมที่สุดของฮิปฮอปไทยไว้ที่นี่แล้ว เพราะของมันต้องฟัง!. ศิลปิน: IRONBOY x URBOYTJ',
        genre: 'programming-local-strategic-playlists',
        image: null,
    },
    {
        id: 9,
        title: "Today's Top Hits",
        description: 'Anitta is on top of the Hottest 50!',
        genre: 'programming-local-strategic-playlists',
        image: null,
    },
    {
        id: 10,
        title: 'เป็นท้อ',
        description: 'เป็นทุกสถานะ เป็นเพื่อน เป็นพี่ เป็นที่ปรึกษา แล้วก็เป็นท้อด้วย',
        genre: 'programming-local-strategic-playlists',
        image: null,
    },
    {
        id: 11,
        title: 'Top 50 - Thailand',
        description: 'Your daily update of the most played tracks right now - Thailand.',
        genre: null,
        image: null,
    },
    {
        id: 12,
        title: 'Top 50 - Global',
        description: 'Your daily update of the most played tracks right now - Global.',
        genre: null,
        image: null,
    },
    {
        id: 13,
        title: 'Random',
        description: 'Random',
        genre: 'focus-home-shelf',
        image: null,
    },
    {
        id: 14,
        title: 'Random',
        description: 'Random',
        genre: 'mood-home-wrapper',
        image: null,
    },
    {
        id: 15,
        title: 'Random',
        description: 'Random',
        genre: 'Popular new releases',
        image: null,
    },
    {
        id: 16,
        title: 'Random',
        description: 'Random',
        genre: 'dense-ginger-featured-playlists-no-friday',
        image: null,
    },
    {
        id: 17,
        title: 'Random',
        description: 'Random',
        genre: 'at-home-playlists',
        image: null,
    },
    {
        id: 18,
        title: 'Random',
        description: 'Random',
        genre: 'NMF-PopularNewReleases-page',
        image: null,
    },
]

export function getAllGenre(){
    return genre;
}

export function getGenre(string){
    let gen = genre.filter((checker) => (checker.genre == string));
    return gen;
}