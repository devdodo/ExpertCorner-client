import Image from "next/image";
import React from "react";
import Container from "./container";
import benefitOneImg from "../public/img/about-1.jpg";

const TermsSection = (props) => {
  const { data } = props;
  return (
    <>
      <Container className="flex flex-wrap mb-10 lg:gap-10 lg:flex-nowrap ">
        <div
          className={`flex items-center justify-center w-full lg:w-1/2 ${
            props.imgPos === "right" ? "lg:order-1" : ""
          }`}
        >
          <div>
            <Image
              src={benefitOneImg}
              width="521"
              height="auto"
              alt="Benefits"
              className={"object-cover"}
              placeholder="blur"
            />
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
                About this policy
              </h3>

              <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
                This policy provides information on how Experts Corner collects
                and processes your personal data when you visit our website or
                mobile applications. It sets out what we do with your personal
                data and how we keep it secure and explains the rights that you
                have in relation to your personal data.
              </p>
              <h3 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
                Our Mission
              </h3>
              <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
                Our mission is to simplify the process of connecting businesses
                with proficient service providers. We understand the importance
                of a well-established network between service providers
                (vendors) and clients seeking specific services (clients).
                Experts Corner is committed to facilitating these connections,
                fostering a harmonious environment conducive to efficient and
                successful business interactions.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default TermsSection;
