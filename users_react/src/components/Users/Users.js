import React, {useState, useEffect} from 'react';
import './Users.css';

const Users = (props) => {
    const [users, setUsers] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then((res) => {
                setUsers(res);
        });
    }, []);

    const goToProfile = (id) => {
        props.history.push(`/profile/${id}`)
    }

    let view_users = null;
    if (users) {
        view_users = users.map((user) => {
            return (
              <div className='box' onClick={() => goToProfile(user.id)} key={user.id}>
                  <h2>User {user.id}</h2>
                  <p>Name: {user.name}</p>
                  <p>Email: {user.email}</p>
              </div>
            )
        })
    }
    return (
        <>
            <h2 className='title'>Users</h2>
            <div className='content'>
                {view_users}
            </div>
        </>
    )
}

export { Users }
