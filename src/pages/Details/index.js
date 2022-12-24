import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Container } from './style';
import { FaStar } from "react-icons/fa";
import './css.css'

function Details() {
    const { id } = useParams()
    const [movie, setMovie] = useState([])

    const imagePath = 'https://image.tmdb.org/t/p/w500/'

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key={api-key}&language=pt-BR`)
            .then(response => response.json())
            .then(data => {
                const { title, poster_path, backdrop_path, release_date, overview, popularity, runtime, vote_average } = data
                const movie = {
                    id,
                    title,
                    runtime: runtime,
                    vote_average: vote_average,
                    image: `${imagePath}${poster_path}`,
                    sinopse: overview,
                    releaseDate: release_date,
                    backgroud: `https://image.tmdb.org/t/p/w500${backdrop_path}`,
                    popular: popularity,
                }
                setMovie(movie)
                console.log(data)
            })
    }, [id])

    const movieStyle = {
        backgroundImage: `url(${movie.image})`,
        opacity: "(0.5)"
    };
    return (
        <div className='BGBody'>
            <Container className='container'>
                <div className='movieBG' style={movieStyle}>
                    <div className="movie">
                        <img className='imgdetails' src={movie.image} />
                        <div className="details">
                            <h1>{movie.title}</h1>
                            <span><FaStar /> {movie.vote_average}</span>
                            <span>{movie.sinopse}</span>
                            <span className='duration'>Duração:{movie.runtime} minutos</span>
                            <span className='release-date'>Data de lançamento: {movie.releaseDate}</span>
                            <div className='backbtn'><Link to="/"><button>Voltar</button></Link></div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Details;