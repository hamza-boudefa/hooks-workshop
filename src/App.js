import { useState } from 'react';
import './App.css';
import MovieList from './Components/MovieList';
import NavBar from './Components/NavBar';
import {Data} from './Data'

function App() {
const [movies, setMovies] = useState(Data)
const [search, setSearch] = useState("")


const searchMovie=(e)=>{
  setSearch(e.target.value)
}

  return (
    <div className="App">
      <NavBar  searchMovie={searchMovie} />
     <MovieList movies={movies} search={search} />
    </div>
  );
}

export default App;
