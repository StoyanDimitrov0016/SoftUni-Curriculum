function previousDayCalc(year, month, day) {
    const currentDate = new Date(year, month - 1, day);
    const previousDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() - 1);

    console.log(previousDay.getFullYear() + "-" + (previousDay.getMonth() + 1) + "-" + previousDay.getDate());
}
previousDayCalc(2023, 3, 8);
previousDayCalc(2016, 10, 1);
