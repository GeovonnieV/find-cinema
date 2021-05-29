const initState = {
    popular: [],
    newGames: [],
    upcoming: [], 
    searched: []
}

// reducers take in state and an action
const gamesReducer = (state, action) => {
    switch (action.type) {
        // if the action type from gamesAction.js is FetchGames set the popular state to popular in the payload in gamesAction.js
        case "FETCH_GAMES":
            return { ...state, 
                popular: action.payload.popular,
                upcoming: action.payload.upcoming,
                newGames: action.payload.newGames
            };
        default:
            return { ...state }

    }
}

export default gamesReducer;