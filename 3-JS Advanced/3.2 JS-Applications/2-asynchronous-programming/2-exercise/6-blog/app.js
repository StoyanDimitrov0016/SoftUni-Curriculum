function attachEvents() {
    const optionMenuSection = document.querySelector('#posts');

    const loadButton = document.querySelector('#btnLoadPosts');
    const viewButton = document.querySelector('#btnViewPost');

    const titleElement = document.querySelector('#post-title');
    const titleDescriptionElement = document.querySelector('#post-body');
    const commentsElement = document.querySelector('#post-comments');

    loadButton.addEventListener('click', load);
    viewButton.addEventListener('click', setComments);

    async function load() {
        const url = 'http://localhost:3030/jsonstore/blog/posts';

        const response = await fetch(url);
        if (response.ok == false) {
            throw new Error(response.status);
        }

        const data = await response.json();

        optionMenuSection.innerHTML = '';

        for (const entry in data) {
            const optionElement = document.createElement('option');
            optionElement.value = data[entry].id;
            optionElement.textContent = data[entry].title;

            optionMenuSection.appendChild(optionElement);
        }
    }

    async function setComments() {
        const url = 'http://localhost:3030/jsonstore/blog/comments';
        const selectedId = optionMenuSection.value;

        const response = await fetch(url);
        if (response.ok == false) {
            throw new Error(response.status);
        }

        const data = await response.json();

        commentsElement.innerHTML = '';

        for (const entry in data) {
            if (data[entry].postId == selectedId) {
                const li = document.createElement('li');
                li.textContent = data[entry].text;
                li.id = data[entry].postId;

                commentsElement.appendChild(li);

                await setTitleAndDescription(selectedId);
            }
        }
    }

    async function setTitleAndDescription(id) {
        const url = `http://localhost:3030/jsonstore/blog/posts/${id}`;
        const response = await fetch(url);

        if (response.ok == false) {
            throw new Error();
        }

        const data = await response.json();
        titleElement.innerHTML = '';
        titleDescriptionElement.innerHTML = '';

        titleElement.textContent = data.title;
        titleDescriptionElement.textContent = data.body;
    }
}

attachEvents();