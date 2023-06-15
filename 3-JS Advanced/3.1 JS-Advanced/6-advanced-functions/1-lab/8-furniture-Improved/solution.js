function solve() {
  const [inputElement, outputElement] = Array.from(document.querySelectorAll('textarea'));
  const [generateButton, buyButton] = Array.from(document.querySelectorAll('button'));
  const tbodyElement = document.querySelector('tbody');
  // outputElement.value = '';

  generateButton.addEventListener('click', generate);

  const items = [];

  function generate() {
    const data = Array.from(JSON.parse(inputElement.value));

    data.forEach(entry => {
      const row = document.createElement('tr');

      row.appendChild(createColumn('img', entry.img));
      row.appendChild(createColumn('p', entry.name));
      row.appendChild(createColumn('p', entry.price));
      row.appendChild(createColumn('p', entry.decFactor));
      const checkboxElement = createColumn('input');
      row.appendChild(checkboxElement);

      tbodyElement.appendChild(row);

      items.push({
        ...entry,
        isChecked: isChecked
      });

      function isChecked() {
        return checkboxElement.querySelector('input').checked;
      }
    });
  }

  buyButton.addEventListener('click', buy);

  function buy() {
    let purchasedFurniture = [];
    let totalSum = 0;
    let decorationPoints = 0;

    const bought = Array.from(items.filter(i => i.isChecked()));

    for (const item of bought) {
      purchasedFurniture.push(item.name);
      totalSum += Number(item.price);
      decorationPoints += Number(item.decFactor);
    }

    const averageDecPts = decorationPoints /= bought.length;

    outputElement.value = [`Bought furniture: ${purchasedFurniture.join(', ')}`,
    `Total price: ${totalSum.toFixed(2)}`,
    `Average decoration factor: ${averageDecPts}`].join('\n');
  }

  function createColumn(type, content) {
    const parent = document.createElement('td');
    const childElement = document.createElement(type);

    if (type === 'img') {
      childElement.src = content;
    } else if (type === 'p') {
      childElement.textContent = content;
    } else if (type === 'input') {
      childElement.type = 'checkbox';
    }

    parent.appendChild(childElement);
    return parent;
  }
}
