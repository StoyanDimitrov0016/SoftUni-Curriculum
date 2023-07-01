function loadRepos() {
    const loadButton = document.querySelector('button');
    const resultDiv = document.querySelector('#res');

    loadButton.addEventListener('click', function() {
        const url = 'https://api.github.com/users/testnakov/repos';
        const httpRequest = new XMLHttpRequest();

        httpRequest.addEventListener('readystatechange', function() {
            if (httpRequest.readyState == 4 && httpRequest.status == 200) {
                resultDiv.textContent = httpRequest.responseText;
            }
        });

        httpRequest.open("GET", url);
        httpRequest.send();
    });
}
