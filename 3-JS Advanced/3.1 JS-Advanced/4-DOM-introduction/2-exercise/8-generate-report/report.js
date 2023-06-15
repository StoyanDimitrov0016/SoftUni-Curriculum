function generateReport() {
    const tableHeadings = Array.from(document.querySelectorAll('tr th'));
    const checkBoxes = Array.from(document.querySelectorAll('tr th input'));
    const infoTable = Array.from(document.querySelectorAll('tbody tr'));
    const output = document.querySelector('#output');

    const outputArr = [];

    for (let col = 0; col < tableHeadings.length; col++) {
        const columnName = checkBoxes[col].name;      

        //If column is checked iterate every row
        if (checkBoxes[col].checked) {

            for (let row = 0; row < infoTable.length; row++) {
                const cellObj = {};
                const currentRow = Array.from(infoTable[row].children);
                const currentCell = currentRow[col].innerText;

                //If the element is object take its properties
                if (typeof outputArr[row] === 'object') {
                    cellObj = outputArr[row];
                }

                cellObj[columnName] = currentCell;
                outputArr[row] = cellObj;
            }
        }
    }

    output.textContent = JSON.stringify(outputArr);
}