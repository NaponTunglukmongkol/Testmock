import '../css/font.css';
import '../css/playlist.css';
import '../css/artist.css';
import Music from '../resource/pictures/music.jpg';
import Song from '../component/Song.js';
import { getSongByArtist } from '../data/songs.js';
import { NavLink, useParams } from 'react-router-dom';
import { getArtist } from '../data/artist.js';

function Playlist() {
  let param = useParams();
  let artist = getArtist(parseInt(param.artistId));
  let songs = getSongByArtist(artist.name);
  console.log(songs);

  return (
    <div className="grey display fullscreen content">
    {/* <img className='artist-image' src={Music} /> */}
      <div className='grey-gradient fullscreen test'>
        {/* Header */}
        <div className='header d-flex'>
          <div className='artist-info'>
            <p className='type'>ARTIST</p>
            <h1 className='playlist-title'>{artist.name}</h1>
            <div className='playlist-description-2 d-flex'>
              <p className='artist-highlight'>
                200,000 monthly listeners
              </p>
            </div>
          </div>
        </div>
        {/* End of Header */}
        {/* Button box */}
        <div className='button-box-place d-flex'>
          <div className='play-button'>
            <svg role="img" height="28" width="28" viewBox="0 0 24 24" class="Svg-sc-1bi12j5-0 jgfuCe">
              <path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path>
            </svg>
          </div>
          <button className='btn follow'>FOLLOW</button>
          <svg role="img" height="32" width="32" viewBox="0 0 24 24" class="Svg-sc-1bi12j5-0 jgfuCe dot">
            <path d="M4.5 13.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm15 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm-7.5 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
          </svg>
        </div>
        {/* End of Button box */}
        {/* Table */}
        <div className='song-table'>
          <div className='first-table-row d-flex'>
            <div className='first-table-num'>#</div>
            <div className='first-table-title'><p>TITLE</p></div>
            <div className='first-table-album'><p>ALBUM</p></div>
            <div className='first-table-date'><p>DATE ADDED</p></div>
            <div className='first-table-time'>
              <p>
                <svg role="img" height="16" width="16" viewBox="0 0 16 16" class="Svg-sc-1bi12j5-0 jgfuCe">
                  <path d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8z"></path><path d="M8 3.25a.75.75 0 01.75.75v3.25H11a.75.75 0 010 1.5H7.25V4A.75.75 0 018 3.25z"></path>
                </svg>
              </p>
            </div>
          </div>
          <div className='content-table'>
            {songs.map((song) =>(
              <Song
              id={song.id}
              title={song.title}
              artist={song.artist}
              album={song.album}
              date={song.date}
              duration={song.duration} />
            ))}
          </div>
        </div>
        {/* End of Table */}
      </div>
    </div>
  );
}

export default Playlist;
