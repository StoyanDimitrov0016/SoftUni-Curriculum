function evenPositionElFromArr(numbers) {
    const evenPositionEls = numbers.filter((x, i) => i % 2 == 0);
    console.log(evenPositionEls.join(' '));
}
evenPositionElFromArr(['20', '30', '40', '50', '60']);