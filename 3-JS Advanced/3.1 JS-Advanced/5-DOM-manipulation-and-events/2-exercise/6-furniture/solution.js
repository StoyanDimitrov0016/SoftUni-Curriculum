function solve() {
  const inputElement = document.querySelectorAll('textarea')[0];
  const outputElement = document.querySelectorAll('textarea')[1];

  const generateButton = document.querySelectorAll('button')[0];
  const buyButton = document.querySelectorAll('button')[1];

  const tBodyElement = document.querySelector('tbody');

  generateButton.addEventListener('click', appendingItems);
  // img, name, price, points
  function appendingItems() {
    const addedItems = JSON.parse(inputElement.value);
    addedItems.forEach(item => {
      const itemInformation = Array.from(Object.entries(item));

      const imgKVP = itemInformation[1];
      const nameKVP = itemInformation[0];
      const priceKVP = itemInformation[2];
      const pointsKVP = itemInformation[3];

      const trElement = document.createElement('tr');

      for (let i = 0; i < itemInformation.length; i++) {
        const tdElement = document.createElement('td');

        //appending img element
        if (i === 0) {
          const imgElement = document.createElement('img');
          imgElement.setAttribute('src', imgKVP[1]);
          tdElement.appendChild(imgElement);
        } else if (i === 1) {

          //appending p element with item name text content
          const pElement = document.createElement('p');
          pElement.textContent = nameKVP[1];
          tdElement.appendChild(pElement);
        } else if (i === 2) {

          //appending p element with item price text content
          const pElement = document.createElement('p');
          pElement.textContent = priceKVP[1];
          tdElement.appendChild(pElement);
        } else if (i === 3) {

          //appending p element with item decoration points text content
          const pElement = document.createElement('p');
          pElement.textContent = pointsKVP[1];
          tdElement.appendChild(pElement);
          trElement.appendChild(tdElement);

          const tdCheckbox = document.createElement('td');
          //appending input element 
          const checkbox = document.createElement('input');
          checkbox.setAttribute('type', 'checkbox');
          tdCheckbox.appendChild(checkbox);

          trElement.appendChild(tdCheckbox);
          break;
        }
        trElement.appendChild(tdElement);
      }
      tBodyElement.appendChild(trElement);
    });
  }

  buyButton.addEventListener('click', purchaseFinishing);

  function purchaseFinishing() {
    const purchasedFurniture = [];
    let totalPrice = 0;
    const decorationPoints = [];
    const markedRows = [];

    //sorting all the marked rows
    const rowElements = Array.from(document.querySelectorAll('tbody tr'));
    rowElements.forEach(row => {
      const inputElement = row.querySelector('input');
      if (inputElement.checked) {
        const itemNameElement = row.querySelectorAll('td p')[0];
        purchasedFurniture.push(itemNameElement.textContent);

        const itemPriceElement = row.querySelectorAll('td p')[1];
        totalPrice += Number(itemPriceElement.textContent)

        const decorationPointsElement = row.querySelectorAll('td p')[2];
        decorationPoints.push(Number(decorationPointsElement.textContent));
      }
    });
    const averageDecorationPoints = decorationPoints.reduce((a, b) => a + b, 0) / decorationPoints.length;

    outputElement.value += `Bought furniture: ${purchasedFurniture.join(', ')}\n`;
    outputElement.value += `Total price: ${totalPrice.toFixed(2)}\n`;
    outputElement.value += `Average decoration factor: ${averageDecorationPoints}`;
  }
}