let category = [
    {
        id: 0,
        title: 'เพลย์ลิสต์แนะนำสำหรับคุณ',
        genre: 'programming-local-strategic-playlists',
        description: null
    },
    {
        id: 1,
        title: 'Charts',
        genre: null,
        description: null
    },
    {
        id: 2,
        title: 'Focus',
        genre: 'focus-home-shelf',
        description: 'Music to help you concentrate.'
    },
    {
        id: 3,
        title: 'Mood',
        genre: 'mood-home-wrapper',
        description: 'Playlists to match your mood.'
    },
    {
        id: 4,
        title: 'Popular new releases',
        genre: 'NMF-PopularNewReleases-page',
        description: null,
    },
    {
        id: 5,
        title: 'ให้เสียงเพลงอยู่เป็นเพื่อนคุณ',
        genre: 'dense-ginger-featured-playlists-no-friday',
        description: null
    },
    {
        id: 6,
        title: 'Soundtrack your home',
        genre: 'at-home-playlists',
        description: null
    },
]

export function getCategory(){
    return category;
}

export function getCategoryName(string){
    let cat = category.find((check) => check.genre == string)
    return cat.title
}