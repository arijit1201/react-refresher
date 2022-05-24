import React, { useEffect, useState } from 'react';
import "./App.css"
import SearchIcon from "./search.svg"
import Movie from "./Movie"
const api_key = process.env.REACT_APP_OMDB_API_KEY;
const API_URL = `http://www.omdbapi.com?apikey=${api_key}`

const App = () => {
    const [movies, setMovies] = useState([])
    const [searchTerm, setSearchTerm] = useState("")
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&S=${title}`)
        const data = await response.json();
        //console.log(data.Search)
        setMovies(data.Search)
    }

    useEffect(() => {
        searchMovies('Your Name')
    }, [])
    return (
        <div className="app">

            <h1>MovieSearch</h1>

            <div className="search">

                <input
                    placeholder='search movies'
                    value={searchTerm}
                    onChange={(event) => { setSearchTerm(event.target.value) }}
                />

                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={() => { searchMovies(searchTerm) }} />

            </div>
            {
                movies?.length > 0 ? (
                    <div className="container">

                        {movies.map((movie) => { return <Movie movie={movie} /> })}

                    </div>) : (
                    <div className="empty">
                        <h2>No Movies Found</h2>
                    </div>
                )
            }

        </div>
    )
}

export default App;