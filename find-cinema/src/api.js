// Base URL
const base_url = "https://api.rawg.io/api/";

// Getting current date
const getCurrentMonth = () => {
    const month = new Date().getMonth() + 1;
    if(month < 10){
        return `0${month}`
    }else{
        return month
    };
};

// Getting current day
const getCurrentDay = () => {
    const day = new Date().getDate();
    if(day < 10){
        return `0${day}`
    }else{
        return day
    };
}; 

const currentYear = new Date().getFullYear();
// Current day/month/year
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}` 
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`

// Popular games
// gets popular games from last year to current date
const popular_games = `games?key=55511e81752f448bab0f14f7530659dd&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcoming_games = `games?key=55511e81752f448bab0f14f7530659dd&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const newGames = `games?key=55511e81752f448bab0f14f7530659dd&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const popularGamesURL = () => `${base_url}${popular_games}`;
export const upcomingGamesURL = () => `${base_url}${upcoming_games}` ;
export const newGamesURL = () => `${base_url}${newGames}` ;
// Game details/ gives detail on specific game
// Dont know what game ID is yet but when we do it will be put into the call
export const gameDetailsURL = (game_id) => `${base_url}games/${game_id}`;
// Game Screenshot
// export const gameScreenshotURL = (game_id) => `${base_url}games/${game_id}/screenshots`;
