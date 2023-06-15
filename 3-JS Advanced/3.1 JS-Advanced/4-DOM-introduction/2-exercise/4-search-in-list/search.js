function search() {
   let townsElements = Array.from(document.querySelectorAll('#towns li'));
   let searchText = document.querySelector('#searchText').value;
   let matches = 0;

   townsElements.forEach(town => {
      if (town.textContent.includes(searchText)) {
         matches++;

         town.style.fontWeight = 'bold';
         town.style.textDecoration = 'underline';

      } else {
         town.style.fontWeight = 'normal';
         town.style.textDecoration = 'none';
      }
   });
   let resultElement = document.querySelector('#result');
   resultElement.textContent = `${matches} matches found`;
}
