function encodeAndDecodeMessages() {
    const inputTextElement = document.querySelectorAll('#main div textarea')[0];
    const receivedTextElement = document.querySelectorAll('#main div textarea')[1];
    const encodeButton = document.querySelectorAll('#main div button')[0];
    const decodeButton = document.querySelectorAll('#main div button')[1];

    encodeButton.addEventListener('click', () => {
        let encodedText = inputTextElement.value
            .split('')
            .map(l => l = String.fromCharCode(l.charCodeAt() + 1));
        receivedTextElement.value = encodedText.join('');
        inputTextElement.value = '';
    });

    decodeButton.addEventListener('click', () => {
        let decodedText = receivedTextElement.value
            .split('')
            .map(l => l = String.fromCharCode(l.charCodeAt() - 1));
            receivedTextElement.value = decodedText.join('');
    });
}