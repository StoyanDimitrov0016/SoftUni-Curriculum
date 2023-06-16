window.addEventListener("load", solve);

function solve() {
    //get input
    const inputs = {
        description: document.querySelector('#description'),
        name: document.querySelector('#client-name'),
        phone: document.querySelector('#client-phone'),
        type: document.querySelector('#type-product')
    };
    const initializingSection = document.querySelector('#right');
    const receivedSection = document.querySelector('#received-orders');
    const completedSection = document.querySelector('#completed-orders');


    const clearButton = document.querySelector('.clear-btn');
    const submitButton = document.querySelector('button[type="submit"]');

    //add event listener to clear button - clear every div from complete section
    clearButton.addEventListener('click', (e) => {
        e.preventDefault();

        const divs = [...completedSection.querySelectorAll('div')];

        for (const divElement of divs) {
            divElement.remove();
        }
    });

    //add event listener to the submit button
    submitButton.addEventListener('click', (e) => {
        e.preventDefault();

        //check if every input field is not an empty string
        if (inputs.description.value === '' ||
            inputs.name.value === '' ||
            inputs.phone.value === '') {
            return;
        }

        //creating div element with required inner elements
        const div = createDOMElements('div', null, 'container');
        div.appendChild(createDOMElements('h2', `Product type for repair: ${inputs.type.value}`));
        div.appendChild(createDOMElements('h3', `Client information: ${inputs.name.value}, ${inputs.phone.value}`));
        div.appendChild(createDOMElements('h4', `Description of the problem: ${inputs.description.value}`));

        const startButton = createDOMElements('button', 'Start repair', 'start-btn');
        const finishButton = createDOMElements('button', 'Finish repair', 'finish-btn');
        finishButton.disabled = true;

        //append event listeners to the newly created buttons which will be inside the div 
        startButton.addEventListener('click', (e) => {
            startButton.disabled = true;
            finishButton.disabled = false;
        });

        finishButton.addEventListener('click', (e) => {
            startButton.remove();
            finishButton.remove();
            completedSection.appendChild(div);
        });

        div.appendChild(startButton);
        div.appendChild(finishButton);

        //append the whole div with its inner elements to the received section
        receivedSection.appendChild(div);

        //cleat the input fields for future request
        inputs.description.value = '';
        inputs.name.value = '';
        inputs.phone.value = '';

        //factory function for creating DOM elements
        function createDOMElements(type, content, className) {
            const element = document.createElement(type);
            element.textContent = content;

            if (className) {
                element.classList.add(className);
            }

            return element;
        }
    });
}
