function solve() {
  let inputElement = document.getElementById("input");
  let textArray = [...inputElement.value.matchAll(/.+?\./g)];

  let resultDiv = document.getElementById("output");

  while (textArray.length > 0) {
    let text = textArray.splice(0, 3);
    
    let p = document.createElement("p");
    p.textContent = text.join("");
    resultDiv.appendChild(p);
  }
}
