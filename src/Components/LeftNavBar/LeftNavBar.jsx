import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useCallback } from 'react';
import { useState } from 'react';
import DropDownMenu from '../DropDownMenu/DropDownMenu';
import MenuBar from '../MenuBar/MenuBar';
import './LeftNavBar.css';

export default function LeftNavBar() {
    const [isDownDropMenuShown, setDropDownMenuShown] = useState(true);

    const handleDropDownMenu = useCallback(() => {
        setDropDownMenuShown(!isDownDropMenuShown)
    }, [isDownDropMenuShown])
    return (
        <div className='left-bar-container'>
                <a href="https://www.netflix.com/browse" className='logo-container'>
                    <div>
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1597px-Netflix_2015_logo.svg.png?20190206123158"
                            alt="Netflix"
                            className='logo-img'
                        />
                    </div>
                </a>
                <div onClick={handleDropDownMenu} className='browse-menu-container'>
                    <span className='browser-menu'>Browse</span>
                    <FontAwesomeIcon icon={faCaretDown} className='browse-drop-down-arrow'/>
                </div>
                <MenuBar />
                <DropDownMenu isDownDropMenuShown={isDownDropMenuShown}/>
        </div>
    )
}