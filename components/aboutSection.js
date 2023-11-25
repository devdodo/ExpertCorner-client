import Image from "next/image";
import React from "react";
import Container from "./container";
import benefitOneImg from "../public/img/about-1.jpg";

const AboutSection = (props) => {
  const { data } = props;
  return (
    <>
      <Container className="flex flex-wrap mb-10 lg:gap-10 lg:flex-nowrap ">
        <div
          className={`flex items-center justify-center w-full lg:w-1/2 ${
            props.imgPos === "right" ? "lg:order-1" : ""
          }`}>
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
          }`}>
          <div>
            <div className="flex flex-col w-full mt-4">
              <h3 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
                About Us
              </h3>

              <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
                Welcome to Experts Corner, a premier online platform designed to foster seamless connections in the world of professional services. At Experts Corner, we recognize the significance of effortless access to expert service providers across diverse fields. 
                Our platform serves as a dynamic nexus, enabling users to effortlessly search for professionals and establish vital business connections with a single click.
              </p>
              <h3 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
                Our Mission
              </h3>
              <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
                Our mission is to simplify the process of connecting businesses with proficient service providers. We understand the importance of a well-established network between service providers (vendors) and clients seeking specific services (clients). Experts Corner is committed to facilitating these connections, fostering a harmonious environment conducive to efficient and successful business interactions.
              </p>
            </div>
          </div>
        </div>
      </Container>
      
    </>
  );
};


export default AboutSection;
