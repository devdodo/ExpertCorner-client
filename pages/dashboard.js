import Head from "next/head";
import Dashboard from "../components/dashboard/home"
import { useSelector } from "react-redux";
import { selectUser } from "../utilities/slices/userSlice";

const SignIn = () => {
  const user = useSelector(selectUser);
  const checkAuth = user.isAuthenticated;
  return (
    <>
      <Head>
        <title>Expert Corner - Client Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {checkAuth ?
        <Dashboard index={0} />
       :
       ""}
    </>
  );
}

export default SignIn;