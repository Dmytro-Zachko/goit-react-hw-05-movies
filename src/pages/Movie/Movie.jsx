import { SearchForm } from "components/SearchForm/SearchForm"
import { useState, useEffect } from "react" 
import { useLocation, useSearchParams, Link } from "react-router-dom"
import { FilmByName } from "services/FetchMovies"
import memImage from '../../components/Cast/troll-advice_43866985_orig_.jpg'
import { MovieList,MovieTitle,MovieGalleryItem } from "../Home/Home.styled"

 const Movie = () => {
    const [searchMovies, setSearchMovies] = useState([])
    const [searchName, setSearchName] = useSearchParams();
    const name = searchName.get("name") ?? '';
    const location = useLocation()

    const handleFormSubmit = inputValue => {
    setSearchName(inputValue !== '' ? { name: inputValue } : {});
  };

    useEffect(() => {
    if (name) {
      try {
        FilmByName(name).then(response => {
          setSearchMovies([...response.results]);
        });
      } catch (error) {
        console.log(error);
      }
    }
  }, [name]);
    
    return (<>
        <SearchForm onSubmit={handleFormSubmit} />
        {searchMovies.length === 0 && name !== '' && (<h1>
            Films with name {name} was not found
        </h1>)}
        <MovieList>
        {searchMovies.map(({id, original_title,poster_path}) => {return <MovieGalleryItem key={id}>
                    <Link  to={`${id}`} state={{ from: location }}>
                <img src={!poster_path
                        ? memImage
                    : `https://image.tmdb.org/t/p/w500/${poster_path}`} alt={original_title} width={300} />
                     <MovieTitle> {original_title} </MovieTitle>
            </Link>
        </MovieGalleryItem>})}
        </MovieList>

    
    </>)
}

export default Movie