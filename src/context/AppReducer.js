//criar um "store" que armazena todos nossos estados, e o reducer aqui
//cria descrições de como o estado é transferido para o próximo estado.
//basicamente indica ao "store" o que fazer com os dados quando algo acontece.
export default (state, action) => {
    switch (action.type) {
        case "ADD_MOVIE_TO_WATCHLIST":
            return {
                ...state,
                watchlist: [action.payload, ...state.watchlist]
                //adiciona o filme p/ o array de filmes para assistir
            }
        default:
            return state;
    }
}