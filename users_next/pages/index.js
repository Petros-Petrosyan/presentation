import Head from 'next/head';
import { useRouter } from 'next/router'

export default function Users(props) {
    const router = useRouter();
    const {users} = props;

    const goToProfile = (id) => {
        router.push(`/profile/${id}`)
    }

    const view_users = users.map((user) => {
        return (
            <div className='box' onClick={() => goToProfile(user.id)} key={user.id}>
                <h2>User {user.id}</h2>
                <p>Name: {user.name}</p>
                <p>Email: {user.email}</p>
            </div>
        )
    })

    return (
        <>
            <Head>
                <title>Users</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <h2 className='title'>Users</h2>
            <div className='content'>
                {view_users}
            </div>
        </>
    )
}

export async function getServerSideProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await res.json();
    return {props: {users}}
}
