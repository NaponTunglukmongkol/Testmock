import { NavLink, useLocation } from 'react-router-dom';
import Home from '../resource/Home.png';
import UnHome from '../resource/HomeNoFill.png';
import Heart from '../resource/heart.png';
import Book from '../resource/books.png';
import Plus from '../resource/plus.png';
import Search from '../resource/search.png';
import { navbarCollapse } from '../function/function.js';
import spotify from '../resource/SpotifyWithName.png';

function UpperNav() {
    const location = useLocation();
    var isHomeActive = location.pathname == '/'? true : false;
    var isSearchActive = location.pathname == '/search'? true : false;

    return (
        <nav className="black side">
            <div>
                <a href='#'>
                    <img className='spotify' src={spotify} />
                </a>
                <button className="navbar-toggler" type="button" onClick={() => navbarCollapse('sideNav')}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div>
                    <ul className='sidenav'>
                        <li>
                            <NavLink
                                to={`/`}
                                className="nav-link home d-flex">
                                    {isHomeActive? 
                                    <svg role="img" height="24" width="24" class="Svg-sc-1bi12j5-0 hDgDGI home-active-icon icon" viewBox="0 0 24 24"><path d="M13.5 1.515a3 3 0 00-3 0L3 5.845a2 2 0 00-1 1.732V21a1 1 0 001 1h6a1 1 0 001-1v-6h4v6a1 1 0 001 1h6a1 1 0 001-1V7.577a2 2 0 00-1-1.732l-7.5-4.33z"></path></svg> : 
                                    <svg role="img" height="24" width="24" class="Svg-sc-1bi12j5-0 hDgDGI home-icon icon" viewBox="0 0 24 24"><path d="M12.5 3.247a1 1 0 00-1 0L4 7.577V20h4.5v-6a1 1 0 011-1h5a1 1 0 011 1v6H20V7.577l-7.5-4.33zm-2-1.732a3 3 0 013 0l7.5 4.33a2 2 0 011 1.732V21a1 1 0 01-1 1h-6.5a1 1 0 01-1-1v-6h-3v6a1 1 0 01-1 1H3a1 1 0 01-1-1V7.577a2 2 0 011-1.732l7.5-4.33z"></path></svg>}
                                <p>Home</p>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to={`/search`}
                                className="nav-link search d-flex">
                                <img className='icon' src={Search} />
                                {isSearchActive? <div className='search-active' />: ''}
                                <p>Search</p>
                            </NavLink>
                        </li>
                        <li>
                            <a className="nav-link d-flex">
                            <svg role="img" height="24" width="24" class="Svg-sc-1bi12j5-0 hDgDGI collection-icon icon" viewBox="0 0 24 24"><path d="M14.5 2.134a1 1 0 011 0l6 3.464a1 1 0 01.5.866V21a1 1 0 01-1 1h-6a1 1 0 01-1-1V3a1 1 0 01.5-.866zM16 4.732V20h4V7.041l-4-2.309zM3 22a1 1 0 01-1-1V3a1 1 0 012 0v18a1 1 0 01-1 1zm6 0a1 1 0 01-1-1V3a1 1 0 012 0v18a1 1 0 01-1 1z"></path></svg>
                                <p>Your Library</p>
                            </a>
                        </li>
                    </ul>
                    <ul className='sidenav bottom-side'>
                        <li>
                            <a className="nav-link d-flex">
                                <div className='playlist'>
                                    <img className='icon' src={Plus} />
                                </div>
                                <p>Create Playlist</p>
                            </a>
                        </li>
                        <li>
                            <a className="nav-link d-flex">
                                <div className='playlist liked'>
                                    <img className='icon' src={Heart} />
                                </div>
                                <p>Liked Songs</p>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
export default UpperNav;