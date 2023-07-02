function loadRepos() {
    const username = document.querySelector('#username').value;
    const ul = document.querySelector('#repos');

    const url = `https://api.github.com/users/${username}/repos`;

    fetch(url)
        .then(response => {
            if (response.ok == false) {
                return Promise.reject(`${response.status}:${response.statusText}`);
            } else {
                return response.json();
            }
        })
        .then(data => {
            //clearing the existing data in ul element
            ul.innerHTML = '';

            //appending all repositories to the ul element
            for (const entry of data) {
                const li = document.createElement('li');
                const a = document.createElement('a');

                a.href = entry.html_url;
                a.textContent = entry.full_name;

                li.appendChild(a);
                ul.appendChild(li);
            }
        })
        .catch(error => (ul.innerHTML = `<p>${error}</p>`));
}
