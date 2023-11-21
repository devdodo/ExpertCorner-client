import Head from "next/head";
import Profile from "../components/dashboard/profile"
import { useSelector } from "react-redux";
import { selectUser } from "../utilities/slices/userSlice";

const UserProfile = () => {
    const user = useSelector(selectUser);
    const checkAuth = user.isAuthenticated;

    return (
        <>
        <Head>
            <title>Expert Corner - Client Dashboard</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        {checkAuth ?
        <Profile index={2} />
       :
       ""}
        </>
    );
}

export default UserProfile;