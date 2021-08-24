import React, { useState } from 'react';
import { useParams } from 'react-router-dom'
import ResultCard from './ResultCard'
import '../App.css';

function Add() {
    const [query, setQuery] = useState("")
    const [results, setResults] = useState([])
    const { match } = useParams()

    const onChange = (e) => {
        e.preventDefault();

        setQuery(e.target.value); //query passa a ser igual ao que foi digitado

        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=false&query=${e.target.value}`)
            .then((response) => response.json())
            .then((data) => {
                if (!data.errors) {
                    setResults(data.results);
                    console.log(data.results);
                } else {
                    setResults([]);
                }
            })
    }
    return (
        <div className="add-page">
            <div className="container">
                <div className="add-content">
                    <div className="input-wrapper">
                        <input
                            type="text"
                            placeholder="Search for a movie"
                            value={query}
                            onChange={onChange}
                        />
                    </div>

                    {results.length > 0 && (
                        <ul className="results">
                            {results.map((movie) => (
                                <li key='movie.id'>
                                    <ResultCard movie={movie} />
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Add;
