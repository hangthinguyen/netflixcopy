import { faCircleExclamation, faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LogoN from '../../assets/netflix_series_logo.png'
import './InfoMedia.css';

export default function InfoMedia({movie_name, movie_overview}) {

    return (
        <div className='info-media-container'>
            <img
                src={LogoN}
                alt="logo"
                className='movie-name'
            />
            <h3>{movie_name}</h3>
            <p>{movie_overview}</p>
            <div className='media-container'>
                <button className='play-btn'>
                    <FontAwesomeIcon icon={faPlay} className='play-icon'/>
                    <span>Play</span>
                </button>
                <button className='more-info-btn'>
                    <FontAwesomeIcon icon={faCircleExclamation} className='more-icon'/>
                    <span>More Info</span>
                </button>
            </div>
        </div>
    )
}