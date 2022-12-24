import { Container, MovieList, Movie } from './style';
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from "swiper";
import { Link } from 'react-router-dom';
import DarkMode from './dark-mode';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// Projeto feito por • Gabriel Leno • https://github.com/GxbrielLeno
export const Home = () => {
    // Populares

    const URLImg = 'https://image.tmdb.org/t/p/w500'
    const [movies, setMovies] = useState([])
    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key={api-key}&language=pt-BR&page=1')
            .then(response => response.json())
            .then(data => setMovies(data.results))
    }, []);

    const popularGlobal = (movie => {
        return (
            <Movie>
                <Link to={`/details/${movie.id}`}><img src={`${URLImg}${movie.poster_path}`} alt={movie.title} /></Link>
                <span>{movie.title}</span>
            </Movie>
        )
    })

    const filmespopular = movies.slice(0, 5).map(popularGlobal);
    const filmespopularP2 = movies.slice(5, 10).map(popularGlobal);
    const filmespopularP3 = movies.slice(10, 15).map(popularGlobal);
    const filmespopularP4 = movies.slice(15, 20).map(popularGlobal);

    const filmespopularMobile = movies.slice(0, 1).map(popularGlobal);
    const filmespopularMobileP2 = movies.slice(1, 2).map(popularGlobal);
    const filmespopularMobileP3 = movies.slice(3, 4).map(popularGlobal);
    const filmespopularMobileP4 = movies.slice(4, 5).map(popularGlobal);
    const filmespopularMobileP5 = movies.slice(5, 6).map(popularGlobal);
    const filmespopularMobileP6 = movies.slice(6, 7).map(popularGlobal);


    // Melhores avanliaçoes
    const [moviesnow, setmoviesnow] = useState([])
    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/76600/recommendations?api_key={api-key}&language=en-US&page=1')
            .then(response => response.json())
            .then(data => setmoviesnow(data.results))
    }, [])

    const PlayNow = (moviesnow => {
        return (
            <Movie>
                <Link to={`/details/${moviesnow.id}`}><img src={`${URLImg}${moviesnow.poster_path}`} alt="{moviesnow.title}" /></Link>
                <span>{moviesnow.title}</span>
            </Movie>

        )
    })
    const play_now = moviesnow.slice(0, 5).map(PlayNow);
    const play_nowP2 = moviesnow.slice(5, 10).map(PlayNow);
    const play_nowP3 = moviesnow.slice(10, 15).map(PlayNow);
    const play_nowP4 = moviesnow.slice(15, 20).map(PlayNow);

    const play_nowMobile = moviesnow.slice(0, 1).map(popularGlobal);
    const play_nowMobileP2 = moviesnow.slice(1, 2).map(popularGlobal);
    const play_nowMobileP3 = moviesnow.slice(3, 4).map(popularGlobal);
    const play_nowMobileP4 = moviesnow.slice(4, 5).map(popularGlobal);
    const play_nowMobileP5 = moviesnow.slice(5, 6).map(popularGlobal);
    const play_nowMobileP6 = moviesnow.slice(6, 7).map(popularGlobal);

    // Melhores Lançamentos 2022

    const [newMovies, setnewMovies] = useState([])
    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/top_rated?api_key={api-key}&language=pt-BR&page=1')
            .then(response => response.json())
            .then(data => setnewMovies(data.results))
    }, [])

    const TopRatedGlobal = (newMovies => {
        return (
            <Movie>
                <Link to={`/details/${newMovies.id}`}><img src={`${URLImg}${newMovies.poster_path}`} alt="{newMovies.title}" /></Link>
                <span>{newMovies.title}</span>
            </Movie>

        )
    })
    const top_rated = newMovies.slice(0, 5).map(TopRatedGlobal);
    const top_ratedP2 = newMovies.slice(5, 10).map(TopRatedGlobal);
    const top_ratedP3 = newMovies.slice(10, 15).map(TopRatedGlobal);
    const top_ratedP4 = newMovies.slice(15, 20).map(TopRatedGlobal);

    const top_ratedMobile = newMovies.slice(0, 1).map(popularGlobal);
    const top_ratedMobileP2 = newMovies.slice(1, 2).map(popularGlobal);
    const top_ratedMobileP3 = newMovies.slice(3, 4).map(popularGlobal);
    const top_ratedMobileP4 = newMovies.slice(4, 5).map(popularGlobal);
    const top_ratedMobileP5 = newMovies.slice(5, 6).map(popularGlobal);
    const top_ratedMobileP6 = newMovies.slice(6, 7).map(popularGlobal);

    return (
        <Container>
            <DarkMode />
            <h1 id='title'>Space Movies</h1>
            <h3>Populares</h3>
            <Swiper
                pagination={{
                    type: "progressbar",
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide className='MovieListDesktop'><MovieList>{filmespopular}</MovieList></SwiperSlide>
                <SwiperSlide className='MovieListDesktop'><MovieList>{filmespopularP2}</MovieList></SwiperSlide>
                <SwiperSlide className='MovieListDesktop'><MovieList>{filmespopularP3}</MovieList></SwiperSlide>
                <SwiperSlide className='MovieListDesktop'><MovieList>{filmespopularP4}</MovieList></SwiperSlide>

                <SwiperSlide className='MovieListMobile'><MovieList>{filmespopularMobile}</MovieList></SwiperSlide>
                <SwiperSlide className='MovieListMobile'><MovieList>{filmespopularMobileP2}</MovieList></SwiperSlide>
                <SwiperSlide className='MovieListMobile'><MovieList>{filmespopularMobileP3}</MovieList></SwiperSlide>
                <SwiperSlide className='MovieListMobile'><MovieList>{filmespopularMobileP4}</MovieList></SwiperSlide>
                <SwiperSlide className='MovieListMobile'><MovieList>{filmespopularMobileP5}</MovieList></SwiperSlide>
                <SwiperSlide className='MovieListMobile'><MovieList>{filmespopularMobileP6}</MovieList></SwiperSlide>
            </Swiper>
            <h3>Melhores avaliações</h3>
            <Swiper
                pagination={{
                    type: "progressbar",
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide className='MovieListDesktop'><MovieList>{top_rated}</MovieList></SwiperSlide>
                <SwiperSlide className='MovieListDesktop'><MovieList>{top_ratedP2}</MovieList></SwiperSlide>
                <SwiperSlide className='MovieListDesktop'><MovieList>{top_ratedP3}</MovieList></SwiperSlide>
                <SwiperSlide className='MovieListDesktop'><MovieList>{top_ratedP4}</MovieList></SwiperSlide>

                <SwiperSlide className='MovieListMobile'><MovieList>{top_ratedMobile}</MovieList></SwiperSlide>
                <SwiperSlide className='MovieListMobile'><MovieList>{top_ratedMobileP2}</MovieList></SwiperSlide>
                <SwiperSlide className='MovieListMobile'><MovieList>{top_ratedMobileP3}</MovieList></SwiperSlide>
                <SwiperSlide className='MovieListMobile'><MovieList>{top_ratedMobileP4}</MovieList></SwiperSlide>
                <SwiperSlide className='MovieListMobile'><MovieList>{top_ratedMobileP5}</MovieList></SwiperSlide>
                <SwiperSlide className='MovieListMobile'><MovieList>{top_ratedMobileP6}</MovieList></SwiperSlide>
            </Swiper>



            <h3>Melhores Lançamentos 2022</h3>
            <Swiper
                pagination={{
                    type: "progressbar",
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide className='MovieListDesktop'><MovieList>{play_now}</MovieList></SwiperSlide>
                <SwiperSlide className='MovieListDesktop'><MovieList>{play_nowP2}</MovieList></SwiperSlide>
                <SwiperSlide className='MovieListDesktop'><MovieList>{play_nowP3}</MovieList></SwiperSlide>
                <SwiperSlide className='MovieListDesktop'><MovieList>{play_nowP4}</MovieList></SwiperSlide>

                <SwiperSlide className='MovieListMobile'><MovieList>{play_nowMobile}</MovieList></SwiperSlide>
                <SwiperSlide className='MovieListMobile'><MovieList>{play_nowMobileP2}</MovieList></SwiperSlide>
                <SwiperSlide className='MovieListMobile'><MovieList>{play_nowMobileP3}</MovieList></SwiperSlide>
                <SwiperSlide className='MovieListMobile'><MovieList>{play_nowMobileP4}</MovieList></SwiperSlide>
                <SwiperSlide className='MovieListMobile'><MovieList>{play_nowMobileP5}</MovieList></SwiperSlide>
                <SwiperSlide className='MovieListMobile'><MovieList>{play_nowMobileP6}</MovieList></SwiperSlide>
            </Swiper>
            <div className='Footer'>
                <div className='footer-box'>
                    <span>Space Movies é um projeto feito por mim • <b>Gabriel Leno</b></span>
                    <p>Este projeto não tem nenhum tipo de fim lucrativo</p>
                    <p>acesse meu github e venha me conhecer!</p>
                    <a href="https://github.com/GxbrielLeno" class="myButton">GitHub</a>
                </div>

            </div>
        </Container>
    )
}

export default Home