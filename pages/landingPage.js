import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo } from "../components/data";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import ChooseUs from "../components/chooseUs";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";

const LandingPage = () => {
  return (
    <>
      <Head>
        <title>Expert Corner - Find professionals that deliver</title>
        <meta
          name="description"
          content="Find the best service providers in the Industry"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Hero />
      <Benefits data={benefitOne} />
      {/* <SectionTitle
        title="Why Choose Us">
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      </SectionTitle> */}
      {/* <ChooseUs /> */}
      <SectionTitle
        title="Testimonials">
      </SectionTitle>
      <Testimonials />
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>
      <Faq />
      <Footer />
      <PopupWidget />
    </>
  );
}

export default LandingPage;