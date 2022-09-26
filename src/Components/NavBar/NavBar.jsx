import { useState } from 'react';
import LeftNavBar from '../LeftNavBar/LeftNavBar';
import RightNavBar from '../RightNavBar/RightNavBar';
import './NavBar.css';

export default function NavBar() {
    const [navbarBackgroundColor, setColor] = useState('');

    const handleBackgroundColor = (e) => {

    };

    handleBackgroundColor();

    return (
        <div
            className='navbar'
            style={{
                backgroundColor: navbarBackgroundColor,
            }}
        >
            <LeftNavBar />
            <RightNavBar />
        </div>
    )
}