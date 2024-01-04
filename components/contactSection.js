import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Container from "./container";
import supabase from "../services/supabase";
import { useRouter } from "next/router";
import Loader from "../utilities/loader";
import { FaFacebook, FaPhoneAlt, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactSection = (props) => {
  const { data } = props;
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loginError, setLoginError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = () => {};

  return (
    <>
      <Container className="flex flex-wrap mb-10 lg:gap-10 lg:flex-nowrap ">
        <div
          className={`w-full lg:w-1/2  border border-gray rounded p-8 ${
            props.imgPos === "right" ? "lg:order-1" : ""
          }`}
        >
          <div>
            <form className="space-y-6 w-full" onSubmit={handleSubmit}>
              <div>
                <div className="mt-4 mb-4">
                  <label
                    htmlFor="fullname"
                    className="block text-md font-medium leading-6 text-gray-700 dark:text-white mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    name="fullname"
                    type="text"
                    className="w-full rounded appearance-none bg-white text-gray-700 border py-4 px-4 leading-tight focus:outline-none focus:bg-white"
                    placeholder="Enter your fullname..."
                    onChange={(e) => setFullName(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <div className="mt-4 mb-4">
                  <label
                    htmlFor="email"
                    className="block text-md font-medium leading-6 text-gray-700 dark:text-white mb-2"
                  >
                    Email address
                  </label>
                  <input
                    name="email"
                    type="email"
                    className="w-full rounded appearance-none bg-white text-gray-700 border py-4 px-4 leading-tight focus:outline-none focus:bg-white"
                    placeholder="Enter email Address..."
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div className="mt-4 mb-4">
                <label
                  htmlFor="message"
                  className="block text-md font-medium leading-6 text-gray-700 dark:text-white mb-2"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  type="message"
                  className="w-full rounded appearance-none bg-white text-gray-700 border py-4 px-4 leading-tight focus:outline-none focus:bg-white"
                  placeholder="Enter message..."
                  onChange={(e) => setPassword(e.target.value)}
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 py-4 px-4 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  {loading ? <Loader /> : "Message Us"}
                </button>
              </div>
            </form>
          </div>
        </div>

        <div
          className={`flex flex-wrap items-center w-full lg:w-1/2 ${
            data.imgPos === "right" ? "lg:justify-end" : ""
          }`}
        >
          <div>
            <div className="flex flex-col w-full mt-4">
              <h3 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
                Contact Us
              </h3>

              <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
                Experts Corner customer support team is always ready to answer
                your questions and provide all the necessary assistance. Chat
                With Us and feel free to email your questions, suggestions, and
                comments to support. We are available Monday to Friday (8am to
                6pm) call us CHAT WITH US You can also reach us on (+234 9020
                180 184, +234 8106 847 908) from Monday to Friday (8am to 6pm)
                Please use the FAQ page for questions.
              </p>
            </div>
            <div className="flex flex-col w-full mt-4">
              <h3 className="max-w-2xl my-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
                Contact Channels
              </h3>
              <div className="flex max-w-2xl text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300 mb-3">
                <div className="w-20">
                  <FaPhoneAlt />
                </div>
                <div className="">
                  <Link href="phone:+2349020180184">+234 9020 180 184</Link>
                </div>
              </div>
              <div className="flex max-w-2xl text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300 mb-3">
                <div className="w-20">
                  <FaPhoneAlt />
                </div>
                <div className="">
                  <Link href="phone:+2348106847908">+234 8106 847 908</Link>
                </div>
              </div>
              <div className="flex max-w-2xl text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300 mb-3">
                <div className="w-20">
                  <FaWhatsapp />
                </div>
                <div className="">
                  <Link href="https://wa.me/2348106847908">Expert Corner</Link>
                </div>
              </div>
              <div className="flex max-w-2xl text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
                <div className="w-20">
                  <FaEnvelope />
                </div>
                <div className="">
                  <Link href="mailto:partners@expertscorner.com">
                    partners@expertscorner.com
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ContactSection;
