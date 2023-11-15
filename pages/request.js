import Head from "next/head";
import Request from "../components/dashboard/request"
import isAuthenticated from "../authentication/authenticate"

const SignIn = () => {
    const user = isAuthenticated();

    return (
        <>
        <Head>
            <title>Expert Corner - Client Dashboard</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Request user={user} index={1} />
        </>
    );
}

export default SignIn;