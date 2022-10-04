import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp, faCircleInfo, faPencil } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import profilePic1 from '../../assets/profilepic1.png';
import profilePic2 from '../../assets/profilepic2.png';
import profilePic3 from '../../assets/profilepic3.png';
import './ProfileMenu.css';
import Profile from '../Profile/Profile';
import AccountInfo from '../AccountInfo/AccountInfo';

export default function ProfileMenu() {
    const [profiles] = useState([
        {
            id: 1,
            pImage: profilePic1,
            pName: 'Lan',
            pLink: 'https://www.netflix.com/browse'
        },
        {
            id: 2,
            pImage: profilePic2,
            pName: 'Ma',
            pLink: 'https://www.netflix.com/browse'
        },
        {
            id:3,
            pImage: profilePic3,
            pName: 'Ba',
            pLink: 'https://www.netflix.com/browse'
        },
    ]);

    const [fonts] = useState([
        {
            id: 4,
            pFont: <FontAwesomeIcon icon={faPencil} />,
            pFontName: 'Manage Profiles',
            pFontLink: 'https://www.netflix.com/profiles/manage'
        },
        {
            id: 5,
            pFont: <FontAwesomeIcon icon={faUser} />,
            pFontName: 'Account',
            pFontLink: 'https://www.netflix.com/browse'
        },
        {
            id: 6,
            pFont: <FontAwesomeIcon icon={faCircleInfo} />,
            pFontName: 'Help Center',
            pFontLink: 'https://help.netflix.com/en/'
        },
    ]);

    return (
        <div>
            <FontAwesomeIcon icon={faCaretUp} className='account-caret-up-icon'/>

            <div className='account-drop-down-container'>
                <div className='accounts-selection-container'>
                    {profiles.map((profile) => <Profile id={profile.id} key={profile.id} pImage={profile.pImage} pLink={profile.pLink} pName={profile.pName} pFont={profile.pFont}/>)}
                </div>

                <div className='accounts-info-container'>
                    {fonts.map((font) => <AccountInfo pFontName={font.pFontName} pFont={font.pFont} id={font.id} key={font.id} pFontLink={font.pFontLink}/>)}
                </div>
                <div className='sign-out-btn'>
                    Sign Out
                </div>
            </div>
        </div>
    )
}