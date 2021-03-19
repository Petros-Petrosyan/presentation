const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get('id');
const template = `<div class='box'>
                    <h2>User N_id_</h2>
                    <p>Name: _name_</p>
                    <p>Email: _email_</p>
                    <p>Street: _street_</p>
                    <p>City: _city_</p>
                  </div>`;

const createUser = (user) => {
    const {
        address: {street, city},
        name, 
        email,
        id,
    } = user;

    const content = template
        .replace('_id_', id)
        .replace('_name_', name)
        .replace('_email_', email)
        .replace('_street_', street)
        .replace('_city_', city);
    document.querySelector('.content').insertAdjacentHTML('beforeend',  content);
}

const getUsers = () => {
    return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`).then(response => response.json());
}

getUsers().then((user) => {
    createUser(user); 
});