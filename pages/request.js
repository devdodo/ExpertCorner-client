import Head from "next/head";
import Request from "../components/dashboard/request"
import { useSelector } from "react-redux";
import { selectUser } from "../utilities/slices/userSlice";

const UserRequest = () => {
    const user = useSelector(selectUser);
    const checkAuth = user.isAuthenticated;

    return (
        <>
        <Head>
            <title>Expert Corner - Client Dashboard</title>
            <link rel="icon" href="/favicon.png" />
        </Head>
        {checkAuth ?
        <Request user={user} index={1} />
       :
       ""}
        </>
    );
}

export default UserRequest;