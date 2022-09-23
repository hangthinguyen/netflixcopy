import { useState } from 'react';
import tmdbApi from '../../api/tmdbApi';
import Item from '../Item/Item';
import requests from '../../api/requests';
import './ItemsList.css';

export function ItemsList({title, fetchURL}) {
    const [items, setItems] = useState([]);

    // function fetchAndPrepareMovies() {
    //     return Promise.all([tmdbApi.get(requests.fetchConfig), tmdbApi.get(fetchURL)])
    //         .then((responses) => {
    //             const moviesResponse = responses[1].data;
    //             const configResponse = responses[0].data;

    //             const movies = moviesResponse.results;
    //             const imgConfig = configResponse.images;

    //             const itemResults = [];

    //             movies.forEach((movie) => {
    //                 itemResults.push({
    //                     id: movie.id,
    //                     Img: `${imgConfig.base_url}${imgConfig.poster_sizes[3]}${movie.poster_path}`,
    //                 })
    //             })

    //             setItems(itemResults)
    //         })
    // }

    async function fetchAndPrepareMovies() {
        const configResponse = await tmdbApi.get(requests.fetchConfig)
        const moviesResponse = await tmdbApi.get(fetchURL)

        const movies = moviesResponse.data.results;
        const imgConfig = configResponse.data.images;

        const itemResults = [];

        movies.forEach((movie) => {
            itemResults.push({
                id: movie.id,
                Img: `${imgConfig.base_url}${imgConfig.poster_sizes[1]}${movie.poster_path}`,
            })
        })
        console.log(imgConfig)
        setItems(itemResults)
    }

    fetchAndPrepareMovies();

    const ListItems = items.map((item) => <Item id={item.id} key={item.id} Img={item.Img}/>)

    return(
        <div className='list-container'>
            <h3 className='title'>{title}</h3>
            <div className='list-items'>
                {ListItems}
            </div>
        </div>
    )
}