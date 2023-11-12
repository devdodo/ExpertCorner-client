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

import {
  Route, Link, Switch 
} from "react-router-dom";

import LandingPage from './landingPage';
import SingIn from './signIn';

const Home = () => {
  return (
    <>
      <div>
        <LandingPage />
      </div>
    </>
  );
}

export default Home;