import { useNavigate } from 'react-router-dom'
import leftArrow from '../resource/left-arrow.png';
import rightArrow from '../resource/right-arrow.png';
import { navbarCollapse } from '../function/function.js';
import { NavLink, useLocation, useSearchParams } from 'react-router-dom';

function UpperNav() {
    let navigate = useNavigate();
    let location = useLocation();
    var isSearchActive = location.pathname == '/search' ? true : false;
    let [searchParams, setSearchParams] = useSearchParams();

    return (
        <nav className="navbar navbar-expand-lg semi-black upper">
            <div className="container-fluid">
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
                        {isSearchActive? 
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
                        </li> : '' }
                        
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
            </div>
        </nav>
    );
}
export default UpperNav;