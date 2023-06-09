import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FilmReviewsByID } from "services/FetchMovies";

export const Reviews = () => {
    const [reviewsInfo, setreviewsInfo] = useState([])
    const { movieId } = useParams()
    
    useEffect(() => {
        try {
            FilmReviewsByID(movieId)
        .then(responce => setreviewsInfo(responce.results))
        } catch (error) {
         console.log(error)   
        }
    }, [movieId])
    
    return (
   <>
            {!reviewsInfo.length ?
                (<p>We dont have any reviews for this movie</p>)
                : (
         <ul>
                    {reviewsInfo.map(({id, author, content}) => {
                    return  <li key={id}>
                        <p>Author: {author} </p>  
                        <p> {content} </p>
                        </li>   
                    })}
                </ul>  
                )
                }        
    </>
         )
}

export default Reviews