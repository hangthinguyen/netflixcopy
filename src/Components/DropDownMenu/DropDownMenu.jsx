import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './DropDownMenu.css';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';

export default function DropDownMenu({isDownDropMenuShown}) {
    const [dropDownContents] = useState([
        {
            id: 1,
            name: 'Home',
            link: 'https://www.netflix.com/browse',
        },
        {
            id: 2,
            name: 'TV Shows',
            link: 'https://www.netflix.com/browse/genre/83'
        },
        {
            id: 3,
            name: 'Movies',
            link: 'https://www.netflix.com/browse/genre/34399'
        },
        {
            id: 4,
            name: 'New & Popular',
            link: 'https://www.netflix.com/latest'
        },
        {
            id: 5,
            name: 'My List',
            link: 'https://www.netflix.com/browse/my-list'
        },
        {
            id: 6,
            name: 'Browse by Languages',
            link: 'https://www.netflix.com/browse/original-audio'
        },
    ])
    return (
        <div
            className='drop-down-menu'
            style={{
                visibility: !isDownDropMenuShown ? 'visible' : 'hidden',
                transition: 'all 150ms ease-in 0s'
            }}
        >
            <FontAwesomeIcon icon={faCaretUp} className='arrow-up-icon'/>
            <div className='drop-down-menu-container'>
                <div className='drop-down-menu-contents'>
                    {dropDownContents.map((dropDownContent) => <a href={dropDownContent.link} className='drop-down-menu-item' id={dropDownContent.id} key={dropDownContent.id}>{dropDownContent.name}</a>)}
                </div>
            </div>
        </div>
    )
}