import { useParams,useLocation,Link,Outlet } from "react-router-dom";
import { useState, useEffect,useRef, Suspense } from "react";
import { FilmDetailsById } from "services/FetchMovies";

export const MovieDetails = () => {
    const [movieInfo, setMovieInfo] = useState({});
  const { movieId } = useParams();
  const location = useLocation();
  const goBackHref = useRef(location.state?.from || '/');

  useEffect(() => {
    try {
      FilmDetailsById(movieId)
        .then(response => {
        setMovieInfo(response);
      });
    } catch (error) {
      console.log(error);
    }
  }, [movieId]);

  const { poster_path, title, release_date, vote_average, overview, genres } =
        movieInfo;
    

    return (
    <>
      {movieInfo !== {} && (
        <>
            <img
              src={ `https://image.tmdb.org/t/p/w500/${poster_path}`}
              alt={title}
              width="300"
            />

            <div>
              <h1>
                {title}
                {release_date && (
                  <span
                    
                  >
                    {release_date.slice(0,4)}
                  </span>
                )}
              </h1>

              <p>User score: {Math.round(vote_average * 10) + '%'}</p>

              <p>
                <b>Overview </b> {overview}
              </p>

              <p>
                <b>Genres </b>{' '}
                {genres && genres.length && genres.map(genre => genre.name).join(', ')}
              </p>
            </div>

          <div>
            <h2 style={{ textAlign: 'center' }}>Additional information</h2>
            <ul>
              <li>
                <Link to="cast">Cast</Link>
              </li>

              <li>
                <Link to="reviews">Review</Link>
              </li>
            </ul>

            <Suspense fallback={<div>Loading...</div>}>
              <Outlet />
            </Suspense>
          </div>
        </>
      )}

      <Link to={goBackHref.current}>Go back</Link>
    </>
  );  
}