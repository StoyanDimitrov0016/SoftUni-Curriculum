async function solution() {
    const main = document.querySelector('#main');
    const url = 'http://localhost:3030/jsonstore/advanced/articles/list';

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Response error');
        }

        const data = await response.json();

        for (const entry of data) {
            const title = entry.title;
            const id = entry._id;

            const content = await getAdditionalInfo(id);
            main.innerHTML += createInnerHTML(title, id, content);
        }
    } catch (error) {
        console.log(error);
    }

    main.addEventListener('click', toggle);

    function createInnerHTML(title, id, content) {
        const string = `
            <div class="accordion">
                <div class="head">
                    <span>${title}</span>
                    <button class="button" id="${id}">More</button>
                </div>
                <div class="extra">
                    <p>${content}</p>
                </div>
            </div>`;

        return string;
    }

    async function getAdditionalInfo(id) {
        const additionalURL = `http://localhost:3030/jsonstore/advanced/articles/details/${id}`;

        try {
            const response = await fetch(additionalURL);
            if (!response.ok) {
                throw new Error('Response error');
            }

            const data = await response.json();
            return data.content;
        } catch (error) {
            console.log(error);
            return '';
        }
    }

    function toggle(event) {
        if (event.target.tagName != 'BUTTON') {
            return;
        }

        const clickedButton = event.target;
        const parent = clickedButton.parentElement.parentElement;
        const hiddenDiv = parent.querySelector('.extra');

        if (clickedButton.textContent == 'More') {
            clickedButton.textContent = 'Less';
            hiddenDiv.style.display = 'inline';
        } else if (clickedButton.textContent == 'Less') {
            clickedButton.textContent = 'More';
            hiddenDiv.style.display = 'none';
        }
    }
}
