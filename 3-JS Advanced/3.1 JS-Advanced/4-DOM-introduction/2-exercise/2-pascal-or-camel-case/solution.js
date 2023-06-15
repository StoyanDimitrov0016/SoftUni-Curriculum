function solve() {
  debugger
  const inputtedText = document.getElementById('text').value;
  const namingConvention = document.getElementById('naming-convention').value;

  const onlyLowerCaseWords = inputtedText.split(' ')
    .map(word => word.toLowerCase())

  let result = [];
  if (namingConvention === 'Camel Case') {
    result.push(onlyLowerCaseWords[0]);

    for (let i = 1; i < onlyLowerCaseWords.length; i++) {
      let word = onlyLowerCaseWords[i];

      const firstChar = word[0].toUpperCase();
      const otherChars = word.slice(1);
      const correctWord = `${firstChar}${otherChars}`;

      result.push(correctWord);
    }
  } else if (namingConvention === 'Pascal Case') {
    for (let i = 0; i < onlyLowerCaseWords.length; i++) {
      let word = onlyLowerCaseWords[i];

      const firstChar = word[0].toUpperCase();
      const otherChars = word.slice(1);
      const correctWord = `${firstChar}${otherChars}`;

      result.push(correctWord);
    }
  } else {
    result = ['Error!'];
  }

  document.getElementById('result').textContent = result.join('');
}