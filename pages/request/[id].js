import Head from "next/head";
import RequestView from "../../components/dashboard/request/view"
import isAuthenticated from "../../authentication/authenticate"

const SignIn = () => {
    const user = isAuthenticated();

    return (
        <>
        <Head>
            <title>Expert Corner - Client Dashboard</title>
            <link rel="icon" href="/favicon.png" />
        </Head>
        <RequestView user={user} index={1} />
        </>
    );
}

export default SignIn;