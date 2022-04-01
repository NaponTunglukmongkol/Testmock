import Music from '../resource/pictures/music.jpg';
import { NavLink } from 'react-router-dom';
import { getArtistId } from '../data/artist.js';

function Song(props) {

  function entering() {
    var play = document.getElementById('play' + props.id)
    play.classList.remove('hiding');
    var heart = document.getElementById('heart' + props.id)
    heart.classList.remove('hiding')
    var dot = document.getElementById('dot' + props.id)
    dot.classList.remove('hiding')
    var num = document.getElementById('num' + props.id)
    num.classList.add('hiding')
  }

  function leaving() {
    var play = document.getElementById('play' + props.id)
    play.classList.add('hiding');
    var heart = document.getElementById('heart' + props.id)
    heart.classList.add('hiding')
    var dot = document.getElementById('dot' + props.id)
    dot.classList.add('hiding')
    var num = document.getElementById('num' + props.id)
    num.classList.remove('hiding')
  }

  return (
    <div onMouseEnter={() => entering()} onMouseLeave={() => leaving()} className='table-row d-flex'>
      <div className='table-num'>
        <svg id={'play' + props.id} height="32" role="img" width="20" viewBox="0 0 24 24" class="UIBT7E6ZYMcSDl1KL62g hiding">
          <polygon points="21.57 12 5.98 3 5.98 21 21.57 12" fill="currentColor"></polygon>
        </svg>
        <p id={'num' + props.id}>{props.id}</p></div>
      <div className='table-title d-flex'>
        <img src={Music} />
        <div className='song-name'>
          <p className='song-title'>{props.title}</p>
          <NavLink
          className='song-artist'
          to={`/artist/${getArtistId(props.artist)}`}>
            {props.artist}
          </NavLink>
        </div>
      </div>
      <div className='table-album'><p>{props.album}</p></div>
      <div className='table-date'><p>{props.date}</p></div>
      <div className='table-time'>
        <svg id={'heart' + props.id} role="img" height="16" width="16" viewBox="0 0 16 16" class="Svg-sc-1bi12j5-0 jgfuCe liked-heart hiding">
          <path d="M1.69 2A4.582 4.582 0 018 2.023 4.583 4.583 0 0111.88.817h.002a4.618 4.618 0 013.782 3.65v.003a4.543 4.543 0 01-1.011 3.84L9.35 14.629a1.765 1.765 0 01-2.093.464 1.762 1.762 0 01-.605-.463L1.348 8.309A4.582 4.582 0 011.689 2zm3.158.252A3.082 3.082 0 002.49 7.337l.005.005L7.8 13.664a.264.264 0 00.311.069.262.262 0 00.09-.069l5.312-6.33a3.043 3.043 0 00.68-2.573 3.118 3.118 0 00-2.551-2.463 3.079 3.079 0 00-2.612.816l-.007.007a1.501 1.501 0 01-2.045 0l-.009-.008a3.082 3.082 0 00-2.121-.861z"></path>
        </svg>
        <svg id={'dot' + props.id} role="img" height="16" width="16" viewBox="0 0 24 24" class="Svg-sc-1bi12j5-0 jgfuCe dot-stuff hiding">
          <path d="M4.5 13.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm15 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm-7.5 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
        </svg>
        <p>{props.duration}</p>
      </div>
    </div>
  )
}

export default Song;