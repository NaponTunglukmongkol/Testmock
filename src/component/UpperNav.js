import { useNavigate } from 'react-router-dom'
import leftArrow from '../resource/left-arrow.png';
import rightArrow from '../resource/right-arrow.png';
import { navbarCollapse } from '../function/function.js';

function UpperNav() {
    let navigate = useNavigate();

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
                                <img className="arrow-icon" src={leftArrow}/>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a onClick={() => navigate(+1)} className="nav-link arrow-button black">
                                <img className="arrow-icon" src={rightArrow}/>
                            </a>
                        </li>
                    </ul>
                    <ul className="navbar-nav right-nav ml-auto mb-2 mb-xl-0">
                        <button className='btn semi-black'>SIGN UP</button>
                        <button className='btn btn-light'>LOG IN</button>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
export default UpperNav;