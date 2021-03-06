import { useState } from 'react';
import './App.css';
import AddMovie from './Components/AddMovie';
import MovieList from './Components/MovieList';
import NavBar from './Components/NavBar';
import {Data} from './Data'

function App() {
const [movies, setMovies] = useState(Data)
const [search, setSearch] = useState("")
const [rating, setRating] = useState(0)

const searchMovie=(e)=>{
  setSearch(e.target.value)
}

const add=(newMovie)=>{
  setMovies([...movies,newMovie])
}

const rateMovie=(a)=>{
  setRating(a)
}
  return (
    <div className="App">
      <NavBar  searchMovie={searchMovie} nejma={rateMovie} />
     <MovieList movies={movies} search={search} rating={rating} />
     <AddMovie add={add} />
    </div>
  );
}

export default App;
