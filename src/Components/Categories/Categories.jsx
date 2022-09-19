import { useState } from 'react';
import { ItemsList } from '../ItemsList/ItemsList';
import requests from '../../api/requests';
import './Categories.css';

export default function Categories() {
    const [categories, setCategories] = useState([
        {   id: 1,
            title: 'Netflix Originals',
            fetchURL: requests.fetchNetflixOriginals,
        },
        {   id: 2,
            title: 'Trending Now',
            fetchURL: requests.fetchTrending,
        },
        {   id: 3,
            title: 'Top 10 TV Shows in the U.S. Today',
            fetchURL: requests.fetchTopRated,
        },
        {   id: 4,
            title: 'Action Movies',
            fetchURL: requests.fetchActionMovies,
        },
        {   id: 5,
            title: 'Comedy Movies',
            fetchURL: requests.fetchComedyMovies,
        },
        {   id: 6,
            title: 'Horror Movies',
            fetchURL: requests.fetchHorrorMovies,
        },
        {   id: 7,
            title: 'Romance Movies',
            fetchURL: requests.fetchRomanceMovies,
        },
        {   id: 8,
            title: 'Documentaries',
            fetchURL: requests.fetchDocumantaries,
        },
    ]);

    const listCategories = categories.map((category) => <ItemsList id={category.id} key={category.id} title={category.title} fetchURL={category.fetchURL}/>)
    return (
        <div className='list-of-items'>
            {listCategories}
        </div>
    )
}