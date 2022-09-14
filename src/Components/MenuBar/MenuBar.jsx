import './MenuBar.css';

export default function MenuBar() {
    return (
        <div className='menu-container'>
            <span className='home'>Home</span>
            <ul className='menu-components'>
                <li className='menu-item'>TV Shows</li>
                <li className='menu-item'>Movies</li>
                <li className='menu-item'>New & Popular</li>
                <li className='menu-item'>My List</li>
                <li className='menu-item'>Browsee by Languages</li>
            </ul>
        </div>
    )
}