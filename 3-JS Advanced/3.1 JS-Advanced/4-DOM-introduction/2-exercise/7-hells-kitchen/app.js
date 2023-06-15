function solve() {
  document.querySelector('#btnSend').addEventListener('click', onClick);

  function onClick() {
    const initialData = JSON.parse(document.querySelector('textarea').value);
    const bestRestaurantSection = document.querySelector('#bestRestaurant p');
    const bestWorkersSection = document.querySelector('#workers p');

    const restaurants = {};

    for (const restaurant of initialData) {
      let [name, workersStr] = restaurant.split(' - ');
      const workers = workersStr.split(', ').map(worker => worker.split(' '));

      if (!restaurants.hasOwnProperty(name)) {
        restaurants[name] = {};
      }

      for (let workerInfo of workers) {
        let worker = workerInfo[0];
        let salary = +workerInfo[1];

        restaurants[name][worker] = salary;
      }
    }
    console.log(restaurants);
    
    const sortedArr = Object.entries(restaurants)
      .sort((first, second) => {
        const firstArr = Object.values(first[1]);
        const secondArr = Object.values(second[1]);

        const firstAverage = firstArr.reduce((a, b) => a + b, 0) / firstArr.length;
        const secondAverage = secondArr.reduce((a, b) => a + b, 0) / secondArr.length;

        return secondAverage - firstAverage;
      });

    //Taking the first element of the sorted Arr(best restaurant) and sorting all workers
    const bestSorted = sortedArr[0];
    const bestSalaries = Object.entries(bestSorted[1])
      .sort((a, b) => b[1] - a[1]);

    let averageSalary = 0;
    let workersOutput = '';

    for (const salary of bestSalaries) {
      workersOutput += `Name: ${salary[0]} With Salary: ${salary[1]} `;
      averageSalary += salary[1] / bestSalaries.length;
    }

    bestRestaurantSection.textContent = `Name: ${bestSorted[0]} Average Salary: ${averageSalary.toFixed(2)} Best Salary: ${bestSalaries[0][1].toFixed(2)}`;
    bestWorkersSection.textContent = workersOutput.trimEnd();
  }
}