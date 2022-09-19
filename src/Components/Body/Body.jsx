import MainContent from '../MainContent/MainContent';
import NavHeader from '../NavHeader/NavHeader';
import './Body.css';

export default function Body() {
    return (
        <div className='body'>
            <NavHeader />
            <MainContent />
        </div>
    )
}