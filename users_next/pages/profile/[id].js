import Head from 'next/head';

export default function Profile(props) {
    const {user} = props;

    const view_user = (
        <div className='profile_box'>
            <h2>User {user.id}</h2>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Street: {user.address.street}</p>
            <p>City: {user.address.city}</p>
        </div>
    )

    return (
        <div>
            <Head>5
                <title>Profile</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <h2 className='title'>User</h2>
            <div className='profile_content'>
                {view_user}
            </div>
        </div>
    )
}

export async function getServerSideProps({ query }) {
    const {id} = query;
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const user = await res.json();
    return {props: {user}}
}
