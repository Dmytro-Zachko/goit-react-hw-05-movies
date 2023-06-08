import { Route, Routes } from "react-router-dom";
import { Home } from "pages/Home/Home";
import { MovieDetails } from "pages/MovieDetails/MovieDetails";
import { Layout } from "./Layout";



export const App = () => {
  return (<div>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home />}></Route>
        
        <Route path="/movies" element={<div>Movies</div>}></Route>
        
       <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<div>Cast</div>} />
            <Route path="reviews" element={<div>Revo</div> }/>
          </Route>
      </Route>
    </Routes>
    </div>)
  
};
