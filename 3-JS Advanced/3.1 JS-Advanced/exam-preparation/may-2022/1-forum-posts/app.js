window.addEventListener("load", solve);

function solve() {
    const containers = {
        create: document.querySelector('#newPost'),
        review: document.querySelector('#review-list'),
        upload: document.querySelector('#published-list')
    }

    const inputs = {
        title: document.querySelector('#post-title'),
        category: document.querySelector('#post-category'),
        content: document.querySelector('#post-content'),
    }

    const publishButton = document.querySelector('#publish-btn');
    const clearButton = document.querySelector('#clear-btn');

    //add event listeners to the buttons
    clearButton.addEventListener('click', (e) => { containers.upload.innerHTML = '' })
    publishButton.addEventListener('click', publish);

    function publish(e) {
        //prevent the original behavior of the button in form
        e.preventDefault();

        //check if every input field is filled
        if (inputs.title.value == '' || inputs.category.value == '' || inputs.content.value == '') {
            return;
        }

        const title = inputs.title.value;
        const category = inputs.category.value;
        const content = inputs.content.value;

        // create ul element and add 'rpost' as its class
        // -create factory function for elements
        const liElement = document.createElement('li');
        liElement.classList.add('rpost');

        // -create article and required inner elements
        const articleElement = document.createElement('article');

        articleElement.appendChild(createDOMElement('h4', title));
        articleElement.appendChild(createDOMElement('p', `Category: ${category}`));
        articleElement.appendChild(createDOMElement('p', `Content: ${content}`));

        // --create buttons
        const editButton = createDOMElement('button', 'Edit', 'action-btn', 'edit');
        const approveButton = createDOMElement('button', 'Approve', 'action-btn', 'approve');

        //--add event listeners to the buttons
        editButton.addEventListener('click', (e) => {
            liElement.remove();
            inputs.title.value = title;
            inputs.category.value = category;
            inputs.content.value = content;
        });

        approveButton.addEventListener('click', (e) => {
            containers.upload.appendChild(liElement);
            editButton.remove();
            approveButton.remove();
        });

        //apply children element to li
        liElement.appendChild(articleElement);
        liElement.appendChild(editButton);
        liElement.appendChild(approveButton);

        // append li element to review container 
        containers.review.appendChild(liElement);

        // clear the inputs from create container
        inputs.title.value = '';
        inputs.category.value = '';
        inputs.content.value = '';
    }

    // factory function for creating dom elements
    function createDOMElement(type, content, ...classNames) {
        const element = document.createElement(type);
        element.textContent = content;

        if (classNames.length > 0) {
            element.classList.add(...classNames);
        }

        return element;
    }
}

