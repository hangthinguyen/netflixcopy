import LeftNavBar from '../LeftNavBar/LeftNavBar';
import RightNavBar from '../RightNavBar/RightNavBar';
import './NavBar.css';

export default function NavBar() {
    return (
        <div className='navbar'>
            <LeftNavBar />
            <RightNavBar />
        </div>
    )
}