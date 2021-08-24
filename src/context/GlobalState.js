import React, { createContext, useReducer, useEffect } from 'react';
import AppReducer from './AppReducer';
//initial state (values)
const initialState = {
    watchlist: [],
    watched: [],
};

//create context
export const GlobalContext = createContext(initialState); //exportamos p/ usar em outras variáveis

//provider components : provider é p/ prover os estados para outros componentes/outras variáveis.
export const GlobalProvider = props => {
    //precisamos fazer ele funcionar como um provider
    const [state, dispatch] = useReducer(AppReducer, initialState);
    //actions: "o que fazer quando clicar o botão"
    const addMovieToWatchlist = movie => {
        dispatch({ type: "ADD_MOVIE_TO_WATCHLIST", payload: movie })
    }

    return (
        <GlobalContext.Provider value={{
            watchlist: state.watchlist,
            watched: state.watched,
            addMovieToWatchlist: addMovieToWatchlist,
        }}>
            {props.children}
        </GlobalContext.Provider>
    )
}
