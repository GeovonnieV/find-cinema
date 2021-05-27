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
const popular_games = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;

export const popularGamesURL = () => `${base_url}${popular_games}`;
 
