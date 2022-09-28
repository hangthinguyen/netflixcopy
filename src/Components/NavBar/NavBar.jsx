import { useState, useEffect, useCallback } from 'react';
import classNames from 'classnames';
import LeftNavBar from '../LeftNavBar/LeftNavBar';
import RightNavBar from '../RightNavBar/RightNavBar';
import './NavBar.css';

export default function NavBar({isSearchBoxShown, onClick}) {
    const [scrolled, setScrolled] = useState(false);

    const handleOnScroll = useCallback(() => {
        if (window.scrollY > 1) {
            setScrolled(true);
        }
        else {
            setScrolled(false);
        }
    }, [])

    useEffect(()=> {
        window.addEventListener('scroll', handleOnScroll);

        return () => window.removeEventListener('scroll', handleOnScroll)
    }, [handleOnScroll])


    return (
        <div
            className={classNames('navbar', { scrolled: scrolled})}
        >
            <LeftNavBar />
            <RightNavBar isSearchBoxShown={isSearchBoxShown} onClick={onClick}/>
        </div>
    )
}