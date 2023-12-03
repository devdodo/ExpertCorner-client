import Head from "next/head";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ChangePasswordForm from "../components/changePasswordForm";
import PopupWidget from "../components/popupWidget";

const ChangePassword = () => {
  return (
    <>
      <Head>
        <title>Expert Corner - Change Password</title>
        <meta
          name="description"
          content="Find the best service providers in the Industry"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Navbar />
      <ChangePasswordForm />
      <Footer />
      <PopupWidget />
    </>
  );
}

export default ChangePassword;