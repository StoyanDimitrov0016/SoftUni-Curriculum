function solve() {

   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let searchElement = document.getElementById('searchField');
      let searchText = searchElement.value;
      let rowElements = [...document.querySelectorAll('.container tbody tr')];

      rowElements.forEach(row => {
         let values = Array.from(row.children);
         row.className = values.some(td => td.textContent.includes(searchText)) ? 'select' : '';
      });

      searchElement.value = '';
   }
}
