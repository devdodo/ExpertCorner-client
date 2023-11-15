import Head from "next/head";
import Dashboard from "../components/dashboard/home"
import isAuthenticated from "../authentication/authenticate"

const SignIn = () => {
const user = isAuthenticated();

  return (
    <>
      <Head>
        <title>Expert Corner - Client Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Dashboard user={user} index={0} />
    </>
  );
}

export default SignIn;