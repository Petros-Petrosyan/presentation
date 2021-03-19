const template = `<div class='box' onclick="goToProfile(_userId_)">
                    <h2>User N_id_</h2>
                    <p>Name: _name_</p>
                    <p>Email: _email_</p>
                  </div>`;


const goToProfile = (id) => {
    window.location.href = `profile/profile.html?id=${id}`;
}

const createUser = (user) => {
    const {name, email, id} = user;
    const content = template
        .replace('_id_', id)
        .replace('_userId_', id)
        .replace('_name_', name)
        .replace('_email_', email);
    document.querySelector('.content').insertAdjacentHTML('beforeend',  content);
}

const getUsers = () => {
    return fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json());
}

getUsers().then((users) => {
    users.forEach(user => {
        createUser(user); 
    });
});
