import { useNavigate } from 'react-router-dom'
import leftArrow from '../resource/left-arrow.png';
import rightArrow from '../resource/right-arrow.png';
import spotify from '../resource/SpotifyWithName.png';
import { navbarCollapse } from '../function/function.js';
import { NavLink, useLocation, useSearchParams } from 'react-router-dom';

function UpperNav() {
    let navigate = useNavigate();
    let location = useLocation();
    var isSearchActive = location.pathname == '/search' ? true : false;
    let [searchParams, setSearchParams] = useSearchParams();

    function deleteSearch(){
        var element = document.getElementById('search');
        element.value = null;
        setSearchParams('');
    }

    return (
        <nav className="navbar navbar-expand-lg semi-black upper">
            <div id='phone-navbar' className='phone-navbar'>
                <svg onClick={() => navbarCollapse('phone-navbar')} role="img" height="24" width="24" fill='white' viewBox="0 0 24 24" class="Svg-sc-1bi12j5-0 kVzeqZ">
                    <path d="M3.293 3.293a1 1 0 011.414 0L12 10.586l7.293-7.293a1 1 0 111.414 1.414L13.414 12l7.293 7.293a1 1 0 01-1.414 1.414L12 13.414l-7.293 7.293a1 1 0 01-1.414-1.414L10.586 12 3.293 4.707a1 1 0 010-1.414z"></path>
                </svg>
                <div className='phone-navbar-content'>
                    <NavLink
                        to={`/login`}>
                        <h4>Log in</h4>
                    </NavLink>
                    <NavLink
                        to={`/signup`}>
                        <h4>Sign up</h4>
                    </NavLink>
                    <h1>-</h1>
                    <div className='phone-link'>
                        <a href='https://www.spotify.com/sg-en/premium/'>Premium</a>
                    </div>
                    <div className='phone-link'>
                        <a href='https://support.spotify.com/sg-en/'>Help</a>
                    </div>
                    <div className='phone-link'>
                        <a href='https://www.spotify.com/sg-en/download/mac/?referrer=mwp'>Download</a>
                    </div>
                    <div className='phone-link'>
                        <a href='https://www.spotify.com/sg-en/legal/privacy-policy/'>Privacy</a>
                    </div>
                    <div className='phone-link'>
                        <a href='https://www.spotify.com/sg-en/legal/end-user-agreement/'>Terms</a>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <NavLink
                    to={`/`}>
                    <img className='spotify' src={spotify} />
                </NavLink>
                <button className="navbar-toggler" type="button" onClick={() => navbarCollapse('navbarSupportedContent')}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a onClick={() => navigate(-1)} className="nav-link arrow-button black">
                                <img className="arrow-icon" src={leftArrow} />
                            </a>
                        </li>
                        <li className="nav-item">
                            <a onClick={() => navigate(+1)} className="nav-link arrow-button black">
                                <img className="arrow-icon" src={rightArrow} />
                            </a>
                        </li>
                        {isSearchActive ?
                            <li className='nav-item'>
                                <div className='search-box'>
                                    <svg role="img" height="24" width="24" class="Svg-sc-1bi12j5-0 jgfuCe search-icon" viewBox="0 0 24 24"><
                                        path d="M10.533 1.279c-5.18 0-9.407 4.14-9.407 9.279s4.226 9.279 9.407 9.279c2.234 0 4.29-.77 5.907-2.058l4.353 4.353a1 1 0 101.414-1.414l-4.344-4.344a9.157 9.157 0 002.077-5.816c0-5.14-4.226-9.28-9.407-9.28zm-7.407 9.279c0-4.006 3.302-7.28 7.407-7.28s7.407 3.274 7.407 7.28-3.302 7.279-7.407 7.279-7.407-3.273-7.407-7.28z"></path>
                                    </svg>
                                    <input className='searching' placeholder='Artists, songs, or podcasts'
                                        value={searchParams.get("filter") || ""}
                                        onChange={(event) => {
                                            let filter = event.target.value;
                                            if (filter) {
                                                setSearchParams({ filter });
                                            } else {
                                                setSearchParams({});
                                            }
                                        }} />
                                </div>
                            </li> : ''}
                    </ul>
                    <ul className="navbar-nav right-nav ml-auto mb-2 mb-xl-0">
                        <NavLink
                            to={`/signup`}>
                            <button className='btn semi-black'>SIGN UP</button>
                        </NavLink>
                        <NavLink
                            to={`/login`}>
                            <button className='btn btn-light'>LOG IN</button>
                        </NavLink>
                    </ul>
                </div>
                <div className='ml-auto phone-upper'>
                    <NavLink to={`/search`}>
                        <svg role="img" height="16" width="16" fill='white' viewBox="0 0 16 16" class="Svg-sc-1bi12j5-0 kVzeqZ s">
                            <path d="M7 1.75a5.25 5.25 0 100 10.5 5.25 5.25 0 000-10.5zM.25 7a6.75 6.75 0 1112.096 4.12l3.184 3.185a.75.75 0 11-1.06 1.06L11.304 12.2A6.75 6.75 0 01.25 7z"></path>
                        </svg>
                    </NavLink>
                    <button className='btn btn-light s'>OPEN APP</button>
                    <svg onClick={() => navbarCollapse('phone-navbar')} role="img" height="24" width="24" fill='white' viewBox="0 0 24 24" class="Svg-sc-1bi12j5-0 kVzeqZ">
                        <path d="M21 6H3V4h18v2zm0 14H3v-2h18v2zm0-7H3v-2h18v2z"></path>
                    </svg>
                </div>
                {isSearchActive?
                <div className='search-bar row'>
                    <svg onClick={() => {navigate(-1)}} role="img" height="24" width="24" title="back-icon-android col-1" aria-labelledby="back-icon" viewBox="0 0 24 24" class="Svg-sc-1bi12j5-0 kVzeqZ col-1"><path d="M22.192 12a1 1 0 01-1 1H5.222l4.793 4.793A1 1 0 018.6 19.207L1.393 12l7.208-7.207a1 1 0 011.414 1.414L5.222 11h15.97a1 1 0 011 1z"></path></svg>
                    <input id='search' className='col-10' placeholder='Search'
                    value={searchParams.get("filter") || ""}
                    onChange={(event) => {
                        let filter = event.target.value;
                        if (filter) {
                            setSearchParams({ filter });
                        } else {
                            setSearchParams({});
                        }
                    }}></input>
                    <svg onClick={() => deleteSearch()} height="24" role="img" width="24" viewBox="0 0 24 24" aria-labelledby="x-icon" class="Icon-sc-fe2389-0 dkBEGS col-1"><title id="x-icon">Close</title><path d="M4.93,4.93,19.07,19.07m-14.14,0L19.07,4.93" fill="white" stroke="currentColor" stroke-miterlimit="10"></path></svg>
                </div> : ''}
            </div>
        </nav>
    );
}
export default UpperNav;