import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom" 
import { TrendingsFilms } from "services/FetchMovies"
import memImage from '../../components/Cast/troll-advice_43866985_orig_.jpg'
import { MovieList,MovieTitle,MovieGalleryItem,Title } from "./Home.styled"

export const Home = () => {
    const [trendingMovie, setTrendingMovie] = useState([])
    const location = useLocation()

    useEffect(() => {
        try {
            TrendingsFilms()
            .then(responce => setTrendingMovie([...responce.results]))  
        } catch (error) {
          console.log(error)  
        }
    },[])

    return (
        <>
            <Title>Trendings Today</Title>
            <MovieList >
            {trendingMovie.map(({ id, original_title,poster_path }) => {
               return <MovieGalleryItem key={id}>
                    <Link  to={`movies/${id}`} state={{ from: location }}>
                <img src={!poster_path
                        ? memImage
                    : `https://image.tmdb.org/t/p/w500/${poster_path}`} alt={original_title} width={300} />
                     <MovieTitle> {original_title} </MovieTitle>
            </Link>
        </MovieGalleryItem>
            })}
            </MovieList >
        </>
    )
}