import '../css/font.css';
import '../css/album.css';
import Music from '../resource/pictures/music.jpg';
import Song from '../component/Song.js';
import { NavLink, useParams } from 'react-router-dom';
import { getPlaylist } from '../data/genre.js';
import { getSongByAlbum } from '../data/songs.js'

function Album() {
  let param = useParams();
  let album = param.albumname;
  let songs = getSongByAlbum(album);

  return (
    <div className="grey display fullscreen content">
      <div className='grey-gradient fullscreen test'>
        {/* Header */}
        <div className='album-header d-lg-flex'>
          <img className='album-playlist-image' src={Music} />
          <div className='album-info'>
            <p className='type'>ALBUM</p>
            <h1 className='album-playlist-title'>{album}</h1>
            <div className='album-playlist-description-2 d-flex justify-content-lg-start justify-content-center'>
              <p className='album-highlight'>
                Spotify
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-dot" viewBox="0 0 16 16">
                  <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                </svg>
                2022
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-dot" viewBox="0 0 16 16">
                  <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                </svg>
                {songs.length} songs,
              </p>
              <p className='album-small-gap'> 360 hr 20 min</p>
            </div>
          </div>
        </div>
        {/* End of Header */}
        {/* Button box */}
        <div className='button-box-place d-flex'>
          <div className='album-play-button'>
            <svg role="img" height="28" width="28" viewBox="0 0 24 24" class="Svg-sc-1bi12j5-0 jgfuCe">
              <path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path>
            </svg>
          </div>
          <svg role="img" height="32" width="32" viewBox="0 0 24 24" class="Svg-sc-1bi12j5-0 jgfuCe album-heart">
            <path d="M5.21 1.57a6.757 6.757 0 016.708 1.545.124.124 0 00.165 0 6.741 6.741 0 015.715-1.78l.004.001a6.802 6.802 0 015.571 5.376v.003a6.689 6.689 0 01-1.49 5.655l-7.954 9.48a2.518 2.518 0 01-3.857 0L2.12 12.37A6.683 6.683 0 01.627 6.714 6.757 6.757 0 015.21 1.57zm3.12 1.803a4.757 4.757 0 00-5.74 3.725l-.001.002a4.684 4.684 0 001.049 3.969l.009.01 7.958 9.485a.518.518 0 00.79 0l7.968-9.495a4.688 4.688 0 001.049-3.965 4.803 4.803 0 00-3.931-3.794 4.74 4.74 0 00-4.023 1.256l-.008.008a2.123 2.123 0 01-2.9 0l-.007-.007a4.757 4.757 0 00-2.214-1.194z"></path>
          </svg>
          <svg role="img" height="32" width="32" viewBox="0 0 24 24" class="Svg-sc-1bi12j5-0 jgfuCe dot">
            <path d="M4.5 13.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm15 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm-7.5 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
          </svg>
        </div>
        {/* End of Button box */}
        {/* Table */}
        <div className='song-table'>
          <div className='first-table-row d-lg-flex d-none'>
            <div className='first-table-num'>#</div>
            <div className='first-table-album-title'><p>TITLE</p></div>
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
              duration={song.duration} />
            ))}
          </div>
        </div>
        {/* End of Table */}
      </div>
    </div>
  );
}

export default Album;
