import Head from "next/head";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import SignUp from "../components/signUp";
import PopupWidget from "../components/popupWidget";

const SignUpPage = () => {
  return (
    <>
      <Head>
        <title>Expert Corner - Sign Up</title>
        <meta
          name="description"
          content="Find the best service providers in the Industry"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Navbar />
      <SignUp />
      <Footer />
      <PopupWidget />
    </>
  );
}

export default SignUpPage;