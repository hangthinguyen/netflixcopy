import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './DropDownMenu.css';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';

export default function DropDownMenu({isDownDropMenuShown}) {
    const [dropDownContents] = useState([
        {
            name: 'Home',
            link: 'https://www.netflix.com/browse',
        },
        {
            name: 'TV Shows',
            link: 'https://www.netflix.com/browse/genre/83'
        },
        {
            name: 'Movies',
            link: 'https://www.netflix.com/browse/genre/34399'
        },
        {
            name: 'New & Popular',
            link: 'https://www.netflix.com/latest'
        },
        {
            name: 'My List',
            link: 'https://www.netflix.com/browse/my-list'
        },
        {
            name: 'Browse by Languages',
            link: 'https://www.netflix.com/browse/original-audio'
        },
    ])
    return (
        <div
            style={{
                visibility: !isDownDropMenuShown ? 'visible' : 'hidden',
                transition: 'all 150ms ease-in 0s'
            }}
        >
            <FontAwesomeIcon icon={faCaretUp} className='arrow-up-icon'/>
            <div className='drop-down-menu-container'>
                <div className='drop-down-menu-contents'>
                    {dropDownContents.map((dropDownContent) => <a href={dropDownContent.link} className='drop-down-menu-item'>{dropDownContent.name}</a>)}
                </div>
            </div>
        </div>
    )
}