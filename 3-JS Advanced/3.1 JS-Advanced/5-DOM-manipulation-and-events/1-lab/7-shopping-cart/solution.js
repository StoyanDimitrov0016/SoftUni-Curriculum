function solve() {
   const rows = [...document.querySelectorAll('.product')];
   let textArea = document.querySelector('textarea');

   rows.forEach(r => r.addEventListener('click', (e) => {
      // console.log(e.target.parentElement.parentElement);
      if (e.target.tagName == 'BUTTON') {
         const productName = r.querySelector('.product-title').textContent;
         let productPrice = r.querySelector('.product-line-price').textContent;
         productPrice = Number(productPrice).toFixed(2);
         
         textArea.textContent += `Added ${productName} for ${productPrice} to the cart.\n`;
      }
   }));

   const checkoutButton = document.querySelector('.checkout');
   checkoutButton.addEventListener('click', (e) => {
      const nonRepeatingProducts = new Set();
      let totalSum = 0;
      const productsInfo = textArea.textContent;

      const pattern = /Added (?<product>\w+) for (?<price>\d+.\d\d) to the cart./gm;
      let match;

      while ((match = pattern.exec(productsInfo)) !== null) {
         const product = match.groups.product;
         let price = Number(match.groups.price);

         nonRepeatingProducts.add(product);
         totalSum += price;
      }
      const list = [...nonRepeatingProducts];
      textArea.textContent += `You bought ${list.join(', ')} for ${totalSum.toFixed(2)}.`;

      [...document.querySelectorAll('button')].forEach(b => b.disabled = true);
   });
}