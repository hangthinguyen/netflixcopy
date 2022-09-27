import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './SearchBox.css';

export default function SearchBox() {
    return (
        <form
            action="submit"
        >
            <FontAwesomeIcon icon={faMagnifyingGlass} className='search-btn-icon'/>
            <input type="text" />
        </form>
    )
}