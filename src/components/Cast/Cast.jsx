import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FilmCreditsByID } from "services/FetchMovies";
import memImage from './troll-advice_43866985_orig_.jpg'

export const Cast = () => {
    const [castInfo, setcastInfo] = useState([])
    const { movieId } = useParams()
    
    useEffect(() => {
   try {
      FilmCreditsByID(movieId)
        .then(response => {
        setcastInfo(response.cast.slice(0,12));
      });
    } catch (error) {
      console.log(error);
    }
}, [movieId])

    return (
        <>
      {castInfo.length > 0
               ? (
         <ul>
                    {castInfo.map(({id, profile_path, original_name, character}) => {
                    return  <li key={id}>
                        <img src={!profile_path
                        ? memImage
                    : `https://image.tmdb.org/t/p/w500/${profile_path}`} alt={original_name} width={100} />
                     <p> {original_name} </p>
                      <p>Character:  {character} </p>  
                        </li>   
                    })}
                </ul>  
                ) : (<p>
                    There is no information about cast of this movie
                </p>)
                 
        }
    </>
    )
}

/* <ul>
                    {castInfo.map(({id, profile_path, original_name, character}) => {
                        <li key={id}>
                         <img src={ `https://image.tmdb.org/t/p/w500/${profile_path}`} alt={original_name} />
                     <p> {original_name} </p>
                      <p>Character:  {character} </p>  
                        </li>   
                    })}
                </ul>  */