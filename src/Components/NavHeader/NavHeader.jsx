import InfoMedia from '../InfoMedia/InfoMedia';
import NavBar from '../NavBar/NavBar';
import './NavHeader.css';

export default function NavHeader() {
    return (
        <div className='background-img'>
            <NavBar />
            <InfoMedia />
        </div>
    )
}