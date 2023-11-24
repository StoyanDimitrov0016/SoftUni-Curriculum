function reading(input){
let pages = Number(input[0]);
let pagesReadPerHour = Number(input[1]);
let days = Number(input[2]);
let readingPerDay = pages/pagesReadPerHour/days;
console.log(readingPerDay);
}
reading(["432","15","4"]);