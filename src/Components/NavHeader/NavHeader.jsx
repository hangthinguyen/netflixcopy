import InfoMedia from '../InfoMedia/InfoMedia';
import NavBar from '../NavBar/NavBar';
import { useEffect, useState } from 'react';
import tmdbApi from '../../api/tmdbApi';
import requests from '../../api/requests';
import './NavHeader.css';

export default function NavHeader({isSearchBoxShown, onClick}) {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const requestData = await tmdbApi.get(requests.fetchNetflixOriginals)
            setMovie(
                requestData.data.results[
                    Math.floor(Math.random() * requestData.data.results.length - 1)
                ]
            );
        }
        fetchData();
    },[]);

    return (
        <div
            className='background-img'
            style={{
                backgroundImage: "url(" + `http://image.tmdb.org/t/p/w1280/${movie.backdrop_path}` + ")"
            }}
        >
            <NavBar isSearchBoxShown={isSearchBoxShown} onClick={onClick}/>
            <InfoMedia
                movie_name={movie.name}
                movie_overview={movie.overview}
            />
            <div className="gradient-box" />
        </div>
    )
}