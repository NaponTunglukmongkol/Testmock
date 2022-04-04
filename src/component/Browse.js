import { NavLink } from "react-router-dom";
import BrowseCard from '../component/BrowseCard';
import { getBrowse } from '../data/browse.js';

function Browse() {
  let browses = getBrowse();

  return (
    <div className='browse-padding'>
      <div className="browse-pc">
        <h4>Browse all</h4>
        <div className='d-flex browse-area'>
          {browses.map((browse) => (
            <NavLink
              to={`/genre/programming-local-strategic-playlists`}>
              <BrowseCard
                title={browse.title}
                image={browse.image}
                bg={browse.bg} />
            </NavLink>
          ))}
        </div>
      </div>
      <div className="browse-mobile">
        <h5>Search Spotify</h5>
        <p>Find your favorite songs, artists, albums, podcasts and playlists.</p>
      </div>
    </div>
  );
}

export default Browse;