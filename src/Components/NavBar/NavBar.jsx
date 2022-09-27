import { useState, useEffect } from 'react';
import LeftNavBar from '../LeftNavBar/LeftNavBar';
import RightNavBar from '../RightNavBar/RightNavBar';
import './NavBar.css';

export default function NavBar({isSearchBoxShown, onClick}) {
    const [navbarBackgroundColor, setNavBarBackgroundColor] = useState('white');

    const handleOnScroll = () => {
        if (window.scrollY > 50) {
            setNavBarBackgroundColor('black')
        }
        else {
            setNavBarBackgroundColor('')
        }
    }

    useEffect(()=> {
        window.addEventListener('scroll', handleOnScroll);

        return () => window.removeEventListener('scroll', handleOnScroll)
    }, [])


    return (
        <div
            className='navbar'
            style={{
                backgroundColor: navbarBackgroundColor,
            }}
        >
            <LeftNavBar />
            <RightNavBar isSearchBoxShown={isSearchBoxShown} onClick={onClick}/>
        </div>
    )
}