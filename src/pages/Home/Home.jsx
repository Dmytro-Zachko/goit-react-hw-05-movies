import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom" 
import { TrendingsFilms } from "services/FetchMovies"

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
        <div>Monte Win</div>
            <h1>Trendings Today</h1>
            <ul>
            {trendingMovie.map(({ id, original_title }) => {
                return <li key={id}>
                    <Link  to={`movies/${id}`} state={{ from: location }}>
                        {original_title}
            </Link>
        </li>
            })}
            </ul>
        </>
    )
}