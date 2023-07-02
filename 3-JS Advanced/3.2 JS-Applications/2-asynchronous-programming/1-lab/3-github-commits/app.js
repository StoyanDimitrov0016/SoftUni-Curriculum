function loadCommits() {
    const username = document.querySelector('#username').value;
    const repositoryName = document.querySelector('#repo').value;
    const ul = document.querySelector('#commits');

    const url = `https://api.github.com/repos/${username}/${repositoryName}/commits`;

    fetch(url)
        .then(response => {
            if (response.ok == false) {
                return Promise.reject(`${response.status} (${response.statusText})`);
            } else {
                return response.json();
            }
        })
        .then(data => {
            ul.innerHTML = '';

            for (const entry of data) {
                const li = document.createElement('li');

                li.textContent = `${entry.commit.author.name}: ${entry.commit.message}`;

                ul.appendChild(li);
            }
        })
        .catch(error => {
            ul.innerHTML = ''; 

            const li = document.createElement('li'); 
            li.textContent = `Error: ${error}`; 

            ul.appendChild(li);
        });
}
