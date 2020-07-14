import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */

let result = fifaData.filter(function(fifa) {
    // console.log(fifa["Year"]);
    return fifa["Year"] == 2014  && fifa["Stage"] == "Final"});
console.log(result);
console.log(result[0]["Home Team Name"]);
console.log(result[0]["Away Team Name"]);
console.log(result[0]["Home Team Goals"]);
console.log(result[0]["Away Team Goals"]);
if (result[0]["Home Team Goals"] > result[0]["Away Team Goals"]){
    console.log("Home team won");
}

else if (result[0]["Home Team Goals"] == result[0]["Away Team Goals"]){
    console.log("Tie");
}

else {
    console.log("Away team won");
}

/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {

    return result = data.filter(function(fifa) {

        return fifa["Stage"] == "Final"});

};

console.log(getFinals(fifaData));


/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(finals) {

    let years = [];
    let match;
    for (match of finals(fifaData)){
        years.push( match["Year"]);
    }

    return years;

};

console.log(getYears(getFinals));


/* Task 5: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function determineWinner(match){
if (match["Home Team Goals"] > match["Away Team Goals"]){
    return match["Home Team Name"];
}
else {
    return match["Away Team Name"];
}
}


function getWinners() {
    let winners = [];
    let match;
    for (match of getFinals(fifaData)){
        winners.push(determineWinner(match));
    }
    return winners;
};

console.log(getWinners());

getWinners();

/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(winnersFunction, yearsFunction) {

    let years = yearsFunction(getFinals);
    let winners = winnersFunction();
    let winnersByYear = [];

    for(let i = 0; i < winners.length; i++)
    {
        winnersByYear.push("In "+ years[i] + ", " + winners[i] + " won the world cup!");
    }

    return winnersByYear;
    
};

getWinnersByYear(getWinners, getYears);

/* Task 7: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {

    let homeTeamSum = 0;
    let awayTeamSum = 0;

    for(let match of data){
        homeTeamSum += match["Home Team Goals"];
        awayTeamSum += match["Away Team Goals"];
    }

    return "Average Home Team Goals: " + homeTeamSum/data.length + " Average Away Team Goals: " + awayTeamSum/data.length;
};

console.log (getAverageGoals(fifaData));


/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(data, teamInitials) {

    let worldCupWins = 0;

    let teamMatches = data.filter(function(match) {
    return match["Home Team Initials"] == teamInitials || match["Away Team Initials"] == teamInitials;
    })

    for(let match of teamMatches){
       if(match["Stadium"].includes("World Cup"))
       {
           if(match["Home Team Initials"] == teamInitials)
           {
                if(homeTeamWins(match)){
                    worldCupWins++;
                }
           }
           else{
               if(!homeTeamWins(match)){
                   worldCupWins++;
               }
           }
       } 
    }

    return worldCupWins;

};

function homeTeamWins(match){
    return match["Home Team Goals"] > match["Away Team Goals"];
}

console.log(getCountryWins(fifaData, "GER"));

// getCountryWins();


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(data) {

    

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */



// let result = fifaData.filter(function(fifa) {
//     console.log(fifa["Year"]);
//     return fifa["Year"] == 2014  && fifa["Stage"] == "Final"});
// console.log(result);
// console.log(result[0]["Home Team Initials"]);
// console.log(result[0]["Away Team Initials"]);
// console.log(result[0]["Home Team Goals"]);
// console.log(result[0]["Away Team Goals"]);

// function getFinals(data) {

//     return result = fifaData.filter(function(fifa) {

//         return fifa["Stage"] == "Final"});

// };

// console.log(getFinals(fifaData));