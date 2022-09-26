import { faCirclePlay, faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import { faChevronCircleDown, faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './MovieCardOnHover.css';

export default function MovieCardOnHobver({Img}) {
    return (
        <div className='movie-card-hover'>
            <div>
                <img src={Img} alt="movie-poster" className='movie-poster-hover' />
                <div className='bottom-features-movie-card'>
                    <div className='icon-container'>
                        <div className='left-side-icons'>
                            <FontAwesomeIcon icon={faCirclePlay} className='icons'/>
                            <FontAwesomeIcon icon={faCirclePlus} className='icons'/>
                            <div>
                                <FontAwesomeIcon icon={faThumbsUp} className='icons'/>
                            </div>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faChevronCircleDown} className='icons'/>
                        </div>
                    </div>
                    <div className='movie-info'>
                        <h3 className='new-movie'>
                            New
                        </h3>
                        <div>
                            TV - MA
                        </div>
                        <span>10 Episodes</span>
                        <div>
                            HD
                        </div>
                    </div>
                    <div className='movie-genra'>
                        <span>Ominous</span>
                        <div className='devider'/>
                        <span>
                            Psychological
                        </span>
                        <div className='devider'/>
                        <span>Horrow</span>
                    </div>
                </div>
            </div>
        </div>
    )
}