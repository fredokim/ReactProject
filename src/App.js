import React , {useState ,useEffect} from 'react';
import './App.css'
import axios from 'axios';
import Movie from './components/Movie';


export default function App() {

  const [isLoading, setLoding] = useState(true);
  const [movies, setMovies] = useState([]);

  async function loadMovie() {
    // 마운트 될때 moives 받는 것을 다 될때 까지 기다려라 ...
    const {data:{data:{movies}}} = await  axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    setLoding(false);
    setMovies([...movies])

  }
  useEffect(() => {
   loadMovie();
  }, []);

    return (
      <section className="container">
      {isLoading ? <div className="loader">
      <span className="loader__text">Loading...</span>
      </div> : 
      <div className="movies">
      {movies.map(movie => 
        <Movie key={movie.id} id={movie.id} year={movie.year} title={movie.title} summary={movie.summary} poster={movie.medium_cover_image}
        genres={movie.genres}/>
      )}
      </div>
    }
      </section>
      );
}


