import classNames from 'classnames';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './SearchBox.css';

export default function SearchBox({onClick, open}) {
    return (
        <form
            action="submit"
            className={classNames('search-box-pop-up-container', { open: open, closed: !open})}
        >
            <FontAwesomeIcon
                icon={faMagnifyingGlass} className='search-icon-in-search-box'
            />
            <input
                type="text"
                className={classNames('search-input', {open: open, closed: !open})}
                placeholder='Titles, people, genres'/>
        </form>
    )
}