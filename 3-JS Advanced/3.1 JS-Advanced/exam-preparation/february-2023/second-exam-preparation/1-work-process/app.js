function solve() {
    const inputs = {
        firstName: document.querySelector('#fname'),
        lastName: document.querySelector('#lname'),
        email: document.querySelector('#email'),
        dateOfBirth: document.querySelector('#birth'),
        position: document.querySelector('#position'),
        salary: document.querySelector('#salary'),
    }

    let totalSalaries = 0;
    const salarySumSpan = document.querySelector('#sum');


    const tbody = document.querySelector('#tbody');
    const hireButton = document.querySelector('#add-worker');

    hireButton.addEventListener('click', (e) => {
        //preventing the default behavior of the button in form
        e.preventDefault();

        //check it everything is non empty string
        if (inputs.firstName.value == '' ||
            inputs.lastName.value == '' ||
            inputs.email.value == '' ||
            inputs.dateOfBirth.value == '' ||
            inputs.position.value == '' ||
            inputs.salary.value == '') {
            return;
        }

        //Get the values form input fields
        const firstName = inputs.firstName.value;
        const lastName = inputs.lastName.value;
        const email = inputs.email.value;
        const dateOfBirth = inputs.dateOfBirth.value;
        const position = inputs.position.value;
        const salary = inputs.salary.value;

        //Create tr element
        const tr = document.createElement('tr');
        //--Append inner elements to tr
        tr.appendChild(createDOMElements('td', firstName));
        tr.appendChild(createDOMElements('td', lastName));
        tr.appendChild(createDOMElements('td', email));
        tr.appendChild(createDOMElements('td', dateOfBirth));
        tr.appendChild(createDOMElements('td', position));
        tr.appendChild(createDOMElements('td', salary));

        //----Create Fired and Edit buttons
        const firedButton = createDOMElements('button', 'Fired', 'fired');
        const editButton = createDOMElements('button', 'Edit', 'edit');

        //----Add event listeners to the newly created buttons
        firedButton.addEventListener('click', (e) => {
            //Update salary
            totalSalaries -= salary;
            salarySumSpan.textContent = totalSalaries.toFixed(2);

            tr.remove();
        })

        editButton.addEventListener('click', (e) => {
            tr.remove();

            //Update salary
            totalSalaries -= salary;
            salarySumSpan.textContent = totalSalaries.toFixed(2);

            //Set input fields to the information from the worker to edit 
            inputs.firstName.value = firstName;
            inputs.lastName.value = lastName;
            inputs.email.value = email;
            inputs.dateOfBirth.value = dateOfBirth;
            inputs.position.value = position;
            inputs.salary.value = salary;
        })

        //----Crete td element, append to it the newly created buttons 
        const td = document.createElement('td');
        td.appendChild(firedButton);
        td.appendChild(editButton);

        //--Append td element to tr element
        tr.appendChild(td);

        //-Append tr element to tbody element
        tbody.appendChild(tr);

        //Update required salaries 
        totalSalaries += Number(salary);
        salarySumSpan.textContent = totalSalaries.toFixed(2);

        //Clear input
        inputs.firstName.value = '';
        inputs.lastName.value = '';
        inputs.email.value = '';
        inputs.dateOfBirth.value = '';
        inputs.position.value = '';
        inputs.salary.value = '';
    })

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