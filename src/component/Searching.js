import { NavLink, useSearchParams } from "react-router-dom";
import Music from "../resource/pictures/music.jpg";
import Song from "../component/Song.js";
import SearchMobile from "./SearchMobile.js";
import { getSongs } from "../data/songs.js";
import { getArtists } from "../data/artist.js";

function Searching() {
  // let browses = getBrowse();
  let songs = getSongs();
  let artists = getArtists();
  let [searchParams, setSearchParams] = useSearchParams();

  return (
    <div className='search-padding'>
      <div className="search-pc row">
        <div className="top-result col-3">
          <h4>Top Result</h4>
          <div className="top-result-box">
            {artists
              .filter((artist) => {
                let filter = searchParams.get("filter");
                if (!filter) return true;
                let name = artist.name.toLowerCase();
                return name.startsWith(filter.toLowerCase());
              }).length == 0 ?
              <h4 className="noresult-artist">No Result</h4> :
              artists
                .filter((artist) => {
                  let filter = searchParams.get("filter");
                  if (!filter) return true;
                  let name = artist.name.toLowerCase();
                  return name.startsWith(filter.toLowerCase());
                }).map((artist) => (
                  <div>
                    <div className="cropped-image">
                      <img src={Music} />
                    </div>
                    <h4>{artist.name}</h4>
                    <div className="artist-tag">
                      <p>ARTIST</p>
                    </div>
                    <div className='search-playbutton'>
                      <div className='search-playicon'>
                        <svg role="img" height="24" width="24" viewBox="0 0 24 24" class="Svg-sc-1bi12j5-0 hDgDGI">
                          <path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                ))
            }
          </div>
        </div>
        <div className="song-result col-8">
          <h4>Songs</h4>
          <div className="song-result-box">
            {songs
              .filter((song) => {
                let filter = searchParams.get("filter");
                if (!filter) return true;
                let title = song.title.toLowerCase();
                return title.startsWith(filter.toLowerCase());
              }).length == 0 ?
              <h4 className="noresult">No Result</h4> : songs
                .filter((song) => {
                  let filter = searchParams.get("filter");
                  if (!filter) return true;
                  let title = song.title.toLowerCase();
                  return title.startsWith(filter.toLowerCase());
                })
                .map((song) => (
                  <Song
                    id={song.id}
                    title={song.title}
                    artist={song.artist}
                    duration={song.duration} />
                ))}
          </div>
        </div>
      </div>
      <div className="search-mobile">
        <p>Artist</p>
        {artists
          .filter((artist) => {
            let filter = searchParams.get("filter");
            if (!filter) return true;
            let name = artist.name.toLowerCase();
            return name.startsWith(filter.toLowerCase());
          }).length == 0 ?
          <h4 className="noresult-artist">No Result</h4> :
          artists
            .filter((artist) => {
              let filter = searchParams.get("filter");
              if (!filter) return true;
              let name = artist.name.toLowerCase();
              return name.startsWith(filter.toLowerCase());
            }).map((artist) => (
              <SearchMobile
                image={artist.image}
                name={artist.name}
                type='artist' />
            ))}
        <p>Songs</p>
        {songs
          .filter((song) => {
            let filter = searchParams.get("filter");
            if (!filter) return true;
            let title = song.title.toLowerCase();
            return title.startsWith(filter.toLowerCase());
          }).length == 0 ?
          <h4 className="noresult">No Result</h4> : songs
            .filter((song) => {
              let filter = searchParams.get("filter");
              if (!filter) return true;
              let title = song.title.toLowerCase();
              return title.startsWith(filter.toLowerCase());
            })
            .map((song) => (
              <SearchMobile
                name={song.title}
                artist={song.artist}
                image={song.image}
                type='song' />
            ))}
      </div>
    </div>
  );
}

export default Searching;