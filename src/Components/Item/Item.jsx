import { useCallback, useState } from 'react';
import MovieCardOnHobver from '../MovieCardOnHover/MovieCardOnHover';
import './Item.css';

export default function Item({Img, id}) {
    const [isHover, setHover] = useState(false);

    const handleOnHover = useCallback(() => {
        setHover(true);
    }, [])

    const handleUnHover = useCallback(() => {
        setHover(false);
    }, [])

    return (
        <div onMouseLeave={handleUnHover} onMouseEnter={handleOnHover} className='movie-card-hover-container'>
            { isHover
                ?
                <MovieCardOnHobver
                    Img={Img}
                    id={id}
                    // onMouseLeave={handleUnHover}
                    style={{
                        display: isHover ? 'none' : 'block'
                    }}
                /> :
                <div
                    className='card'
                    // onMouseEnter={handleOnHover}
                >
                    <img src={Img} alt="sliding-img" className='card-img' id={id}/>
                </div>
            }
        </div>
    )
}