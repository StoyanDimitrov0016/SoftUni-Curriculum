function vowelSum(input) {
    let inputText = input[0];
    let sumPoints = 0;
    for (let i = 0; i < inputText.length; i++) {
        let letter = inputText.charAt(i);//let letter = inputText[i] also work
        switch (letter) {
            case 'a':
                sumPoints += 1;
                break;
            case 'e':
                sumPoints += 2;
                break;
            case 'i':
                sumPoints += 3;
                break;
            case 'o':
                sumPoints += 4;
                break;
            case 'u':
                sumPoints += 5;
                break;
            default:
                sumPoints += 0;
                break;
        }
    }
    console.log(sumPoints);
}
vowelSum(["bamboo"]);