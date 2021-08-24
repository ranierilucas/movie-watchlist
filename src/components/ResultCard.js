import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

function ResultCard({ movie }) {
    //pegar o action, descontruíndo
    const {
        addMovieToWatchlist, watchlist
    } = useContext(GlobalContext)

    let storedMovie = watchlist.find(obj => obj.id == movie.id);

    const watchlistDisabled = storedMovie ? true : false;

    return (
        <div className='result-card'>
            <div className='poster-wrapper'>
                {movie.poster_path ? (
                    <img
                        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                        alt={`${movie.title} Poster`}
                    />
                ) : (
                    <div className='filler-poster'></div>
                )}
            </div>
            <div className="info">
                <div className="header">
                    <h3 className="title">{movie.title}</h3>
                    <h4 className="release-date">
                        {movie.release_date ? movie.release_date.substring(0, 4) : '-'}
                    </h4>
                </div>

                <div className="controls">
                    <button className="btn"
                        disabled={watchlistDisabled}
                        onClick={() => addMovieToWatchlist(movie)}>Add to Watchlist</button>

                    {/* ideia: usar contextAPI para criar um estado global
                    e permitir acesso aos dados de watched e watchlist para 
                    todos componentes */}
                </div>
            </div>
        </div>
    );
}

export default ResultCard;
