function solve() {
    //select the sections
    const [addTaskSection, openSection, inProgressSection, finishedSection] = Array.from(
        document.querySelectorAll('section div:nth-of-type(2)')
    );

    //create object based on the input
    const input = {
        title: addTaskSection.querySelector('#task'),
        description: addTaskSection.querySelector('#description'),
        date: addTaskSection.querySelector('#date'),
    };
    
    //add event listener to the add button
    document.querySelector('#add').addEventListener('click', add);

    function add(e) {
        //check if on every field there is content 
        if (input.title.value && input.description.value && input.date.value) {
            e.preventDefault();

            const article = document.createElement('article');

            // append nested elements in article 
            article.appendChild(createDOMElement('h3', input.title.value));
            article.appendChild(createDOMElement('p', `Description: ${input.description.value}`));
            article.appendChild(createDOMElement('p', `Due Date: ${input.date.value}`));

            const div = document.createElement('div');
            div.className = 'flex';

            //create buttons
            const startButton = createDOMElement('button', 'Start', 'green');
            const deleteButton = createDOMElement('button', 'Delete', 'red');
            const finishButton = createDOMElement('button', 'Finish', 'orange');

            // Event listener for "Start" button
            startButton.addEventListener('click', () => {
                inProgressSection.appendChild(article);
                startButton.remove();
                div.appendChild(finishButton);
            });

            // Event listener for "Delete" button
            deleteButton.addEventListener('click', () => article.remove());

            // Event listener for "Finish" button
            finishButton.addEventListener('click', () => {
                finishedSection.appendChild(article);
                div.remove();
            });

            //append start and delete button to article and article to open section
            div.appendChild(startButton);
            div.appendChild(deleteButton);
            article.appendChild(div);
            openSection.appendChild(article);

            // clear input fields
            input.title.value = '';
            input.description.value = '';
            input.date.value = '';
        }
    }
    //factory function fot dom elements
    function createDOMElement(type, content, className) {
        const element = document.createElement(type);
        element.textContent = content;

        if (className) {
            element.className = className;
        }

        return element;
    }
}
