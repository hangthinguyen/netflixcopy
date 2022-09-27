import { useCallback, useState } from 'react';
import MainContent from '../MainContent/MainContent';
import NavHeader from '../NavHeader/NavHeader';
import './Body.css';

export default function Body() {
    const [isSearchBoxShown, setSearchBoxShown] = useState(false);

    const handleShownOnClick = useCallback(() => {
        setSearchBoxShown(!isSearchBoxShown)
        console.log('hello')
    }, [isSearchBoxShown])

    // const handleUnShownOnClick = useCallback(() => {
    //     setSearchBoxShown(false)
    // })
    return (
        <div className='body'>
            <NavHeader isSearchBoxShown={isSearchBoxShown} onClick={handleShownOnClick}/>
            <MainContent />
        </div>
    )
}