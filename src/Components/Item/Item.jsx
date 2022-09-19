import './Item.css';

export default function Item({Img, Movie}) {

    return (
        <div className='card'>
            <img src={Img} alt="sliding-img" className='card-img' />
        </div>
    )
}