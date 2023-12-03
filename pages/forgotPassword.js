import Head from "next/head";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ForgotPasswordForm from "../components/forgotPasswordForm";
import PopupWidget from "../components/popupWidget";

const ForgotPassword = () => {
  return (
    <>
      <Head>
        <title>Expert Corner - Forgot Password</title>
        <meta
          name="description"
          content="Find the best service providers in the Industry"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Navbar />
      <ForgotPasswordForm />
      <Footer />
      <PopupWidget />
    </>
  );
}

export default ForgotPassword;