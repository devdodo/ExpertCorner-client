import Head from "next/head";
import Dashboard from "../components/dashboard/request"

const SignIn = () => {
  return (
    <>
      <Head>
        <title>Expert Corner - Client Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Dashboard />
    </>
  );
}

export default SignIn;