import Head from "next/head";
import Profile from "../components/dashboard/profile"
import isAuthenticated from "../authentication/authenticate"

const UserProfile = () => {
    const user = isAuthenticated();

    return (
        <>
        <Head>
            <title>Expert Corner - Client Dashboard</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Profile user={user} index={2} />
        </>
    );
}

export default UserProfile;