import { faBell, faCaretDown, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useCallback } from 'react';
import { useState } from 'react';
import classNames from 'classnames';
import ProfileMenu from '../ProfileMenu/ProfileMenu';
import SearchBox from '../SearchBox/SearchBox';
import './RightNavBar.css';

export default function RightNavBar({isSearchBoxShown, onClick}) {
    const [isCaretIconUp, setCaretIconUpOrDown] = useState(false);
    const [rotated, setRotated] = useState(false);

    const handleCaretIconUpDown = useCallback((e) => {
        e.preventDefault();
        setCaretIconUpOrDown(!isCaretIconUp)
    }, [isCaretIconUp]);

    const handleRotate = useCallback(() => {
        setRotated(!rotated);
    }, [rotated]);

    return (
        <div
            className='right-nav-bar'
        >
            <div className='search-box-container'>
                <SearchBox onClick={onClick} open={isSearchBoxShown}/>
                {!isSearchBoxShown ? <FontAwesomeIcon icon={faMagnifyingGlass} className='search-btn-icon' onClick={onClick}/> : null}
            </div>

            <a href='https://dvd.netflix.com/Plans?preselect=1u&dsrc=STRWEB_NAV' className='dvd-link'>DVD</a>

            <FontAwesomeIcon icon={faBell} className='notification-icon'/>

            <div
                onClick={handleCaretIconUpDown}
            >
                <img
                    src="https://occ-0-3933-3934.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpApHc2eWV-7sQ0gh5yytQT_kb1AgOpSR3OvWsIXzQOfGgUdoVxuBTFaBoqkHfdgEiEt4zOXMWoizI3C4eKgvYb5jfZAWo.png?r=a8d"
                    alt=""
                    className='profile-pic'
                    onClick={handleCaretIconUpDown}
                />

                <FontAwesomeIcon icon={faCaretDown}  onMouseDown={handleRotate}
                className={classNames('caret-down-icon', {rotated: rotated})}/>

            </div>
            {/* <img
                src="https://occ-0-3933-3934.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpApHc2eWV-7sQ0gh5yytQT_kb1AgOpSR3OvWsIXzQOfGgUdoVxuBTFaBoqkHfdgEiEt4zOXMWoizI3C4eKgvYb5jfZAWo.png?r=a8d"
                alt=""
                className='profile-pic'
                onClick={handleCaretIconUpDown}
            />

            <FontAwesomeIcon icon={faCaretDown} className={classNames('caret-down-icon', {rotated: rotated})} onClick={handleCaretIconUpDown} onMouseDown={handleRotate}/> */}

            <ProfileMenu isCaretIconUp={isCaretIconUp}/>
        </div>
    )
}