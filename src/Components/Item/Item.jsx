import { useCallback, useState } from 'react';
import MovieCardOnHobver from '../MovieCardOnHover/MovieCardOnHover';
import './Item.css';

export default function Item({Img, id}) {
    const [isHover, setHover] = useState(false);

    const handleOnHover = useCallback(() => {
        console.log('hello')
        setHover(true);
    }, [])

    const handleUnHover = useCallback(() => {
        console.log('bye')
        setHover(false);
    }, [])

    return (
        <div onMouseLeave={handleUnHover} onMouseEnter={handleOnHover}>
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


    //     <div
    //     className='card'
    //     onMouseEnter={handleOnHover}
    //     onMouseLeave={handleUnHover}
    //     style={{
    //         visibility: !isHover ? 'visible' : 'hidden'
    //     }}
    // >
    //     <img src={Img} alt="sliding-img" className='card-img' id={id}/>
    // </div>
    )
}