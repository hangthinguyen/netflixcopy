import { useCallback, useState } from 'react';
import './Item.css';

export default function Item({Img, id}) {
    const [isHover, setHover] = useState(false);

    const handleOnHover = useCallback(() => {
        console.log('hello')
        setHover(true);
    }, [])

    // const handleUnHover = useCallback(() => {
    //     console.log('bye')
    //     setHover(false);
    // }, [])

    return (
        <div
            className='card'
            onMouseEnter={handleOnHover}
            // onMouseLeave={handleUnHover}
            style={{
                visibility: isHover ? 'hidden' : 'visible'
            }}
        >
            <img src={Img} alt="sliding-img" className='card-img' id={id}/>
        </div>
    )
}