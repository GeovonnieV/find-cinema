const initState = {
    popular: [],
    newGames: [],
    upcoming: [], 
    searched: []
}

const gamesReducer = (state, action) => {
    switch (action.type) {
        case "FETCH_GAMES":
            return { ...state }
        default:
            return { ...state }

    }
}

export default gamesReducer;