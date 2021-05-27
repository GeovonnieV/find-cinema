import axios from "axios";
// imports the api call made in api.js
import {popularGamesURL} from "../api";

// Action Creator

export const loadGames = () => async (dispatch) => {
    // Fetch Axios
    const popularData = await axios.get(popularGamesURL());
    // dispatches to the reducer in gamesREducer.js
    dispatch({
        // makes the action type FETCH_GAMES
        type: "FETCH_GAMES",
        // updates the reducers popular to whatver we got back from the axios call
        payload: {
            popular: popularData.data.results,
        }
    })
}