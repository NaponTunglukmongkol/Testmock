import { useNavigate } from 'react-router-dom'
import Home from '../resource/Home.png';
import Heart from '../resource/heart.png';
import Book from '../resource/books.png';
import Plus from '../resource/plus.png';
import Search from '../resource/search.png';
import { navbarCollapse } from '../function/function.js';
import spotify from '../resource/SpotifyWithName.png';

function UpperNav() {
    let navigate = useNavigate();

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
                            <a className="nav-link active d-flex">
                                <img className='icon' src={Home} />
                                <p>Home</p>
                            </a>
                        </li>
                        <li>
                            <a className="nav-link d-flex">
                                <img className='icon' src={Search} />
                                <p>Search</p>
                            </a>
                        </li>
                        <li>
                            <a className="nav-link d-flex">
                                <img className='icon' src={Book} />
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