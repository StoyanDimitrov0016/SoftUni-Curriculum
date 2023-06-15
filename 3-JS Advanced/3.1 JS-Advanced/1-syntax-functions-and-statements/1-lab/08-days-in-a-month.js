function daysInAGivenMonth(month, year) {
    const givenDate = new Date(year, month - 1, 1);     //months start form index = 0

    const lastDayOfTheMonth = new Date(givenDate.getFullYear(), givenDate.getMonth() + 1, 0).getDate();

    console.log(lastDayOfTheMonth);
    
}
daysInAGivenMonth(1, 2012);


/*Setting the day argument to 0 in the Date constructor sets the date object to the 
    last day of the previous month. When you create a new Date object for the first day 
    of the next month, but set the day argument to 0, you get a date object for the last 
    day of the current month.
    This is because when you set the day argument to 0, JavaScript automatically 
    rolls back the date to the last day of the previous month.*/