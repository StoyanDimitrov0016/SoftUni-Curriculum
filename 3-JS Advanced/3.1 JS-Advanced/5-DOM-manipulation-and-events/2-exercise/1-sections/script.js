function create(words) {
   const container = document.querySelector('#content');

   words.forEach(w => {
      let div = document.createElement('div');
      let p = document.createElement('p');

      p.textContent = w;
      p.style.display = 'none';

      div.appendChild(p);

      div.addEventListener('click', (e) => {
         let p = e.target.querySelector('p');
         p.style.display = '';
      })

      container.appendChild(div);
   });
}
// better version of the problem:
 
/* function create(words) {
   const container = document.querySelector('#content');
 
   words.forEach((word) => {
     const div = document.createElement('div');
     const p = document.createElement('p');
 
     p.textContent = word;
     p.classList.add('hidden');
 
     div.appendChild(p);
     container.appendChild(div);
   });
 
   container.addEventListener('click', (event) => {
     const p = event.target.querySelector('p');

     if (p && p.classList.contains('hidden')) {
       p.classList.remove('hidden');
     }
   });
 } */
 