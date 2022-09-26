import { faBell, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './RightNavBar.css';

export default function RightNavBar() {
    return (
        <div className='right-nav-bar'>
            <FontAwesomeIcon icon={faMagnifyingGlass} className='search-btn-icon'/>
            <h1 className='dvd-link'>DVD</h1>
            <FontAwesomeIcon icon={faBell} className='notification-icon'/>
            <img
                src="https://occ-0-3933-3934.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpApHc2eWV-7sQ0gh5yytQT_kb1AgOpSR3OvWsIXzQOfGgUdoVxuBTFaBoqkHfdgEiEt4zOXMWoizI3C4eKgvYb5jfZAWo.png?r=a8d"
                alt=""
                className='profile-pic'
            />
        </div>
    )
}