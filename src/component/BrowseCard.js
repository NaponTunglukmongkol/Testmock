import '../css/browse.css'
import Music from '../resource/pictures/music.jpg';

function BrowseCard(props) {
    return (
        <div className='browse-card' style={{backgroundColor: props.bg}}>
            <h4>{props.title}</h4>
            <img src={props.image == null? Music : props.image} />
        </div>
    )
}

export default BrowseCard;