import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo } from "../components/data";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import SignInForm from "../components/signInForm";
import PopupWidget from "../components/popupWidget";

const SignIn = () => {
  return (
    <>
      <Head>
        <title>Expert Corner - SignIn</title>
        <meta
          name="description"
          content="Nextly is a free landing page template built with next.js & Tailwind CSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <SignInForm />
      <Footer />
      <PopupWidget />
    </>
  );
}

export default SignIn;