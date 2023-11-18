import Head from "next/head";
import Dashboard from "../components/dashboard/home"

const SignIn = () => {

  return (
    <>
      <Head>
        <title>Expert Corner - Client Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Dashboard index={0} />
    </>
  );
}

export default SignIn;