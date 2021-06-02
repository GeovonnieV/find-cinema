import axios from "axios";
// imports the apis made in api.js
import {popularGamesURL, upcomingGamesURL, newGamesURL} from "../api";

// Action Creator

export const loadGames = () => async (dispatch) => {
    // Fetch Axios
    // popularData etc, holds what we get back form the Axios call
    const popularData = await axios.get(popularGamesURL());
    const newGamesData = await axios.get(newGamesURL());
    const upcomingData = await axios.get(upcomingGamesURL());

    // dispatches to the reducer in gamesReducer.js
    dispatch({
        // makes the action type FETCH_GAMES
        type: "FETCH_GAMES",
        // updates the reducers popular to whatver we got back from the axios call
        payload: {
            popular: popularData.data.results,
            upcoming: upcomingData.data.results,
            newGames: newGamesData.data.results,
        }
    });

};