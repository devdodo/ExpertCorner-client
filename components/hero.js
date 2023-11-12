import Image from "next/image";
import Container from "./container";
import heroImg from "../public/img/hero.png";

const Hero = () => {
  return (
    <div className="bg-gray-800">
      <Container className="flex flex-wrap">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-white lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              Find a Service Provider Close to You.
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              Get excellent service when you get a worker from our platform, we promise to provide exceptional service. Why not give us a try.
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <input className="appearance-none block w- w-9/12   bg-white text-gray-700 border rounded py-4 px-8 leading-tight focus:outline-none focus:bg-white" type="text" placeholder="Search for a service provider..." />
              <button
                className="px-8 py-4 text-lg font-medium text-center text-white bg-indigo-600 rounded-md ">
                Go
              </button>
            </div>
            <div className="bages mt-2">
              <span className="inline-block whitespace-nowrap rounded-full mr-2 border border-1 border-neutral-50 px-[0.65em] py-[0.45em] text-center align-baseline text-1em font-bold leading-none text-white">
                Light
              </span>
              <span className="inline-block whitespace-nowrap rounded-full mr-2 border border-1 border-neutral-50 px-[0.65em] py-[0.45em] text-center align-baseline text-1em font-bold leading-none text-white">
                Barber
              </span>
              <span className="inline-block whitespace-nowrap rounded-full mr-2 border border-1 border-neutral-50 px-[0.65em] py-[0.45em] text-center align-baseline text-1em font-bold leading-none text-white">
                Engineer
              </span>
              <span className="inline-block whitespace-nowrap rounded-full mr-2 border border-1 border-neutral-50 px-[0.65em] py-[0.45em] text-center align-baseline text-1em font-bold leading-none text-white">
                Software Developer
              </span>
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
}

export default Hero;