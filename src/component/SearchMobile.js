import Music from '../resource/pictures/music.jpg';

function SearchMobile(props) {
    return (
        <div className='d-flex'>
            {props.type == 'artist' ?
                <img className='image-phone-search-artist' src={props.image ? props.image : Music} /> :
                <img className='image-phone-search' src={props.image ? props.image : Music} />}
            <div>
                <p className='search-mobile-name'>{props.name}</p>
                <div className='d-flex'>
                    <p className='search-mobile-undername'>{props.type}</p>
                    {props.artist?<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-dot search-mobile-undername" viewBox="0 0 16 16">
                        <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                    </svg>
                    : ''}
                    <p className='search-mobile-artist'>{props.artist}</p> 
                </div>
            </div>
        </div>
    )
}

export default SearchMobile;