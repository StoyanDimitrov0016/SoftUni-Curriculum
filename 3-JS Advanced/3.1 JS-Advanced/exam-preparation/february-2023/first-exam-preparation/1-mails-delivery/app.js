function solve() {

    // Extracting input data
    const inputs = {
        recipient: document.querySelector('#recipientName'),
        title: document.querySelector('#title'),
        message: document.querySelector('#message')
    }

    // Get initial buttons "Add" and "Reset"
    const addToListButton = document.querySelector('#add');
    const resetButton = document.querySelector('#reset');

    // Containers
    const listMailsContainer = document.querySelector('#list');
    const sendMailsContainer = document.querySelector('.sent-list');
    const deletedMailsContainer = document.querySelector('.delete-list');

    //Set event listeners to the initial buttons
    resetButton.addEventListener('click', clearInput);
    addToListButton.addEventListener('click', add);

    function add(event) {
        event.preventDefault();  // Prevent the default form submission behavior

        //Get values of the inputs object
        const recipient = inputs.recipient.value;
        const title = inputs.title.value;
        const message = inputs.message.value;

        // If any of the input fields is empty, return and do nothing
        if (recipient == '' || title == "" || message == '') {
            return;
        }

        // Create a new list item element and append to it the required HTML elements
        const li = document.createElement('li');

        li.appendChild(createDOMElements('h4', `Title: ${title}`));
        li.appendChild(createDOMElements('h4', `Recipient Name: ${recipient}`));
        li.appendChild(createDOMElements('span', message));

        const div = createDOMElements('div', null, null, null, 'list-action');

        const sendButton = createDOMElements('button', 'Send', null, 'submit', 'send');
        const deleteButton = createDOMElements('button', 'Delete', null, 'submit', 'delete');

        //--Add event listeners to the newly created buttons
        sendButton.addEventListener('click', send.bind(null, li, recipient, title));
        deleteButton.addEventListener('click', (event) => {
            li.remove();  // ----Remove the parent list item when deleteButton is clicked

            //----Create the required li element with its inner HTML elements and append it to delete mails container
            const liElement = document.createElement('li');
            liElement.appendChild(createDOMElements('span', `To: ${recipient}`));
            liElement.appendChild(createDOMElements('span', `Title: ${title}`));

            deletedMailsContainer.appendChild(liElement);
        });

        div.appendChild(sendButton);
        div.appendChild(deleteButton);
        li.appendChild(div);

        //Append the list item to the list mail container
        listMailsContainer.appendChild(li);

        //Clear the input fields
        clearInput(event);

    }

    function clearInput(event) {
        event.preventDefault();  // Prevent the default form submission behavior
        inputs.recipient.value = '';
        inputs.title.value = '';
        inputs.message.value = '';
    }

    function send(liElement, recipient, title) {
        liElement.remove();  // Remove the list item from the list mails container

        //Create the required li element with its inner HTML elements and append it to delete mails container
        const li = document.createElement('li');
        li.appendChild(createDOMElements('span', `To: ${recipient}`));
        li.appendChild(createDOMElements('span', `Title : ${title}`));

        const div = document.createElement('div');
        div.classList.add('btn');

        const deleteButton = createDOMElements('button', 'Delete', 'delete', 'submit');

        //--add event listener to the newly created button 
        deleteButton.addEventListener('click', (event) => {
            div.remove();  // Remove the parent div element when deleteButton is clicked
            deletedMailsContainer.appendChild(li);
        });

        div.appendChild(deleteButton);
        li.appendChild(div);

        // Append the li element to the sent mails container
        sendMailsContainer.appendChild(li);
    }

    function createDOMElements(type, content, className, typeAttribute, idAttribute) {
        const element = document.createElement(type);
        element.textContent = content;

        if (className) {
            element.classList.add(className);
        }

        if (typeAttribute) {
            element.setAttribute('type', typeAttribute);
        }

        if (idAttribute) {
            element.setAttribute('id', idAttribute);
        }

        return element;
    }
}

solve()