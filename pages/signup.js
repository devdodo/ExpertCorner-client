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
          content="Nextly is a free landing page template built with next.js & Tailwind CSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <SignUp />
      <Footer />
      <PopupWidget />
    </>
  );
}

export default SignUpPage;