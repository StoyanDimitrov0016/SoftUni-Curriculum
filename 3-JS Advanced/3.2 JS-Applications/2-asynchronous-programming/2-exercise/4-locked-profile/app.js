function lockedProfile() {
    const main = document.querySelector('#main');
    const url = 'http://localhost:3030/jsonstore/advanced/profiles';

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch profiles.');
            }

            return response.json();
        })
        .then(data => {
            let counter = 0;

            for (const profileId in data) {
                counter++;
                const profile = data[profileId];

                main.innerHTML += createProfile(counter, profile.username, profile.email, profile.age);
            }

            main.addEventListener('click', toggleFunctionality);
        })
        .catch(error => {
            console.log(error);
        });

    function createProfile(counter, username, email, age) {
        const string = `
        <div class="profile">
            <img src="./iconProfile2.png" class="userIcon" />
            <label>Lock</label>
            <input type="radio" name="user${counter}Locked" value="lock" checked>
            <label>Unlock</label>
            <input type="radio" name="user${counter}Locked" value="unlock"><br>
            <hr>
            <label>Username</label>
            <input type="text" name="user${counter}Username" value="${username}" disabled readonly />
            <div id="user${counter}HiddenFields" style="display: none;">
                <hr>
                <label>Email:</label>
                <input type="email" name="user${counter}Email" value="${email}" disabled readonly />
                <label>Age:</label>
                <input type="email" name="user${counter}Age" value="${age}" disabled readonly />
            </div>
            <button class="show-more-btn">Show more</button>
            <button class="show-less-btn" style="display: none;">Hide it</button>
        </div>`;

        return string;
    }

    function toggleFunctionality(even) {
        if (even.target.tagName !== 'BUTTON') {
            return;
        }

        const clickedButton = even.target;
        const parent = clickedButton.parentElement;
        const lockLabel = parent.querySelector('input[value="lock"]');
        const isProfileLocked = lockLabel.checked;

        if (isProfileLocked) {
            return;
        }

        const hiddenDiv = parent.querySelector('div');

        if (clickedButton.className == 'show-more-btn') {
            hiddenDiv.style.display = 'block';
            clickedButton.style.display = 'none';

            const lessButton = parent.querySelector('.show-less-btn');
            lessButton.style.display = 'block';
        } else if (clickedButton.className == 'show-less-btn') {
            hiddenDiv.style.display = 'none';
            clickedButton.style.display = 'none';

            const moreButton = parent.querySelector('.show-more-btn');
            moreButton.style.display = 'block';
        }
    }
}
