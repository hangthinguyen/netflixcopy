import InfoMedia from '../InfoMedia/InfoMedia';
import NavBar from '../NavBar/NavBar';
import { useEffect, useState } from 'react';
import tmdbApi from '../../api/tmdbApi';
import requests from '../../api/requests';
import './NavHeader.css';

export default function NavHeader() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const requestData = await tmdbApi.get(requests.fetchNetflixOriginals)
            console.log(requestData)
            setMovie(
                requestData.data.results[
                    Math.floor(Math.random() * requestData.data.results.length - 1)
                ]
            );
            console.log(requestData.data.results[
                Math.floor(Math.random() * requestData.data.results.length - 1)
            ])
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
            <NavBar />
            <InfoMedia
                movie_name={movie.name}
                movie_overview={movie.overview}
            />
            <div className="gradient-box" />
        </div>
    )
}