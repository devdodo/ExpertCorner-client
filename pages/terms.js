import Head from "next/head";
import Hero from "../components/heroTerms";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";
import { benefitOne } from "../components/data";
import TermsSection from "../components/termsSection";
import Footer from "../components/footer";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";

const Terms = () => {
  return (
    <>
      <Head>
        <title>Expert Corner - Find professionals that deliver</title>
        <meta
          name="description"
          content="Find the best service providers in the Industry"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Navbar />
      <Hero />
      <TermsSection data={benefitOne} />
      <SectionTitle title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>
      <Faq />
      <Footer />
      <PopupWidget />
    </>
  );
};

export default Terms;
