function editElement(element, elementToSwitch, replacer) {
    const text = element.textContent;
    const pattern = new RegExp(elementToSwitch, "g");
    const result = text.replace(pattern, replacer);
    element.textContent = result;
}