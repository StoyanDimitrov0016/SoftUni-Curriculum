window.addEventListener('load', solve);

function solve() {
    // get input
    const inputs = {
        model: document.querySelector('#car-model'),
        year: document.querySelector('#car-year'),
        partName: document.querySelector('#part-name'),
        partNumber: document.querySelector('#part-number'),
        condition: document.querySelector('#condition')
    };

    const infoList = document.querySelector('ul.info-list');
    const confirmList = document.querySelector('ul.confirm-list');
    const nextButton = document.querySelector('#next-btn');

    const image = document.querySelector('#complete-img');
    const completeText = document.querySelector('#complete-text');

    nextButton.addEventListener('click', (e) => {
        e.preventDefault();

        if (inputs.model.value.trim() == '' ||
            inputs.year.value.trim() == '' ||
            inputs.partName.value.trim() == '' ||
            inputs.partNumber.value.trim() == '' ||
            (Number(inputs.year.value.trim()) < 1980 ||
                Number(inputs.year.value.trim()) > 2023) ||
            inputs.condition.value.trim() == '') {
            return;
        }

        image.style.visibility = 'hidden';
        completeText.textContent = '';

        const model = inputs.model.value;
        const year = inputs.year.value;
        const partName = inputs.partName.value;
        const partNumber = Number(inputs.partNumber.value);
        const condition = inputs.condition.value;

        nextButton.disabled = true;

        const li = document.createElement('li');
        li.classList.add('part-content');

        li.innerHTML = `
            <article>
                <p>Car Model: ${model}</p>
                <p>Car Year: ${year}</p>
                <p>Part Name: ${partName}</p>
                <p>Part Number: ${partNumber}</p>
                <p>Condition: ${condition}</p>
            </article>
            <button class="edit-btn">Edit</button>
            <button class="continue-btn">Continue</button>`;

            infoList.appendChild(li);

        const editButton = li.querySelector('.edit-btn');
        const continueButton = li.querySelector('.continue-btn');

        editButton.addEventListener('click', () => {
            nextButton.disabled = false;
            li.remove();

            inputs.model.value = model;
            inputs.year.value = year;
            inputs.partName.value = partName;
            inputs.partNumber.value = partNumber;
        });

        continueButton.addEventListener('click', (e) => {
            li.remove();

            li.innerHTML = `
            <article>
                <p>Car Model: ${model}</p>
                <p>Car Year: ${year}</p>
                <p>Part Name: ${partName}</p>
                <p>Part Number: ${partNumber}</p>
                <p>Condition: ${condition}</p>
            </article>
            <button class="confirm-btn">Confirm</button>
            <button class="cancel-btn">Cancel</button>`;

            const confirmButton = li.querySelector('.confirm-btn');
            const cancelButton = li.querySelector('.cancel-btn');

            confirmButton.addEventListener('click', (e) => {
                li.remove();
                nextButton.disabled = false;

                image.style.visibility = 'visible';
                completeText.textContent = 'Part is Ordered!';
            })

            cancelButton.addEventListener('click', (e) => {
                li.remove();
                nextButton.disabled = false;

            })

            confirmList.appendChild(li);

            // Clear input fields
            inputs.model.value = '';
            inputs.year.value = '';
            inputs.partName.value = '';
            inputs.partNumber.value = '';
            inputs.condition.value = '';

        });
    });
}

