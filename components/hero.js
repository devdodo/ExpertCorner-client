import { useState, useEffect } from "react";
import Image from "next/image";
import Container from "./container";
import heroImg from "../public/img/hero.png";
import Link from "next/link";
import supabase from "../services/supabase";

const Hero = () => {
  const [services, setServices] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [inputText, setInputText] = useState("");

  const getServiceList = async () => {
    const { data, error } = await supabase.from("cabins").select("id, name");

    if (error) {
      return;
    }

    setServices(data);
  };

  const handleInputChange = (e) => {
    e.preventDefault();
    setInputText(e.target.value);
    let searchText = e.target.value;

    if (searchText !== "") {
      const newArray = services.filter(function (str) {
        return str.name.toLowerCase().includes(searchText.toLowerCase());
      });
      setFilteredList(newArray);
    } else {
      setFilteredList([]);
    }
  };

  useEffect(() => {
    getServiceList();
  }, []);

  return (
    <div className="bg-gray-800">
      <Container className="flex flex-wrap">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-white lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              Find a Service Provider Close to You.
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              Get excellent service when you get a worker from our platform, we
              promise to provide exceptional service. Why not give us a try.
            </p>

            <div className="flex sm:flex-row flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center">
              <input
                className="appearance-none w-full md:w-10/12 bg-white text-gray-700 border rounded py-4 px-8 leading-tight focus:outline-none focus:bg-white"
                type="text"
                placeholder="Search for a service provider..."
                value={inputText}
                onChange={handleInputChange}
              />
              {/* <button className="w-full md:w-2/12 px-8 py-4 text-lg font-medium text-center text-white bg-indigo-600 rounded-md ">
                Go
              </button> */}
            </div>
            <div
              className={`bg-white ${
                inputText === "" ? "hidden" : ""
              } w-full md:w-10/12 rounded py-4 px-8 mt-1`}
            >
              {services.length > 0
                ? filteredList.map((service) => (
                    <Link href="/signin" className="py-3 w-[100%]">
                      <div className="py-3 text-sm text-gray-500">
                        {service.name}
                      </div>
                    </Link>
                  ))
                : ""}
            </div>
            <div className="bages mt-4">
              <Link href="/signin">
                <span className="inline-block whitespace-nowrap rounded-full mr-2 border border-1 border-neutral-50 px-[0.65em] py-[0.45em] text-center align-baseline text-xs font-bold leading-none text-white">
                  Light
                </span>
              </Link>
              <Link href="/signin">
                <span className="inline-block whitespace-nowrap rounded-full mr-2 border border-1 border-neutral-50 px-[0.65em] py-[0.45em] text-center align-baseline text-xs font-bold leading-none text-white">
                  Barber
                </span>
              </Link>
              <Link href="/signin">
                <span className="inline-block whitespace-nowrap rounded-full mr-2 border border-1 border-neutral-50 px-[0.65em] py-[0.45em] text-center align-baseline text-xs font-bold leading-none text-white">
                  Engineer
                </span>
              </Link>
              <Link href="/signin">
                <span className="inline-block whitespace-nowrap rounded-full mr-2 border border-1 border-neutral-50 px-[0.65em] py-[0.45em] text-center align-baseline text-xs font-bold leading-none text-white">
                  Software Developer
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src={heroImg}
              width="616"
              height="617"
              className={"object-cover"}
              alt="Hero Illustration"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
