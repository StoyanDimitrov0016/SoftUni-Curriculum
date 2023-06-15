function valueOfTheDayOfTheWeek(day) {
    const days = {
        'Monday': 1,
        'Tuesday': 2,
        'Wednesday': 3,
        'Thursday': 4,
        'Friday': 5,
        'Saturday': 6,
        'Sunday': 7
    };

    const valueOfTheDay = days[day];

    if (valueOfTheDay) {
        console.log(valueOfTheDay);
    } else {
        console.log('error');
    }
}
valueOfTheDayOfTheWeek('Monday');
valueOfTheDayOfTheWeek('Sunday');
valueOfTheDayOfTheWeek('Wednesday');
valueOfTheDayOfTheWeek('ASDFGHJKL');
valueOfTheDayOfTheWeek('Fr1day');// 1 as a "i"