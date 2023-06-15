function juiceBottler(juiceInfo) {
  // Object to store the accumulated quantities of each juice
  const juiceQuantities = {};

  // Object to track the juices that have reached 1000 or more quantity
  const bottledJuices = {};

  // Process each entry in the juiceInfo array
  for (const entry of juiceInfo) {
    let [juice, quantity] = entry.split(' => ');
    quantity = Number(quantity);

    // If the juice is encountered for the first time, initialize its quantity
    if (!juiceQuantities[juice]) {
      juiceQuantities[juice] = 0;
    }

    // Accumulate the quantity of the current juice
    juiceQuantities[juice] += quantity;

    // Check if the current juice has reached the bottle threshold (1000 or more)
    if (juiceQuantities[juice] >= 1000 && !bottledJuices[juice]) {
      bottledJuices[juice] = 0;
    }
  }

  // Iterate over the juiceQuantities to determine the number of bottles for each juice
  for (const juice in juiceQuantities) {
    const bottles = Math.floor(juiceQuantities[juice] / 1000);

    // If there are bottles for the current juice, update the count in the bottledJuices object
    if (bottles > 0) {
      bottledJuices[juice] += bottles;
    }
  }

  // Print the output with the juice name and the number of bottles
  for (const juice in bottledJuices) {
    console.log(`${juice} => ${bottledJuices[juice]}`);
  }
}

  
juiceBottler(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549']);

juiceBottler(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789']);
