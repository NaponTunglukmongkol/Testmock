import '../css/font.css';
import '../css/search.css';
import Browse from '../component/Browse.js'
import Searching from '../component/Searching.js';
import { NavLink, useSearchParams } from 'react-router-dom';

function Search() {
  let [searchParams, setSearchParams] = useSearchParams();
  let filter = searchParams.get("filter");

  return (
    <div className="grey display fullscreen content">
      <div className='dark-grey fullscreen test'>
        {!filter? <Browse /> : <Searching />}
      </div>
    </div>
  );
}

export default Search;
