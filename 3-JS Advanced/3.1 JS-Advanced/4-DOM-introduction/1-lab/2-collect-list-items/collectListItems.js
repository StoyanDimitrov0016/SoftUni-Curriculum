function extractText() {
    debugger
    const elements = document.getElementsByTagName("li");
    const extracted = [];
    for (const element of elements) {
        extracted.push(element.textContent);
    }
    let result = document.getElementById("result");
    result.value = extracted.join('\n');
}