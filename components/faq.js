import React from "react";
import Container from "./container";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-indigo-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
};

const faqdata = [
  {
    question: "What is Expert Corner?",
    answer:
      "Expert Corner functions as an advanced professional networking platform, strategically designed to facilitate and enhance the effortless collaboration between esteemed service providers (Vendors) and discerning clients (Service Consumers). Through our innovative interface, we meticulously curate and bridge the gap between these two pivotal entities, creating a dynamic ecosystem that cultivates optimal and streamlined business opopportunities. Our platform transcends traditional business connections by offering a comprehensive and user-friendly environment where vendors can showcase their expertise, services, and capabilities. Simultaneously, service consumers gain access to a diverse pool of qualified professionals, ensuring that their specific needs are met with precision and excellence. By fostering these connections, Expert Corner becomes a catalyst for synergy, where the unique strengths of service providers align seamlessly with the requirements of clients. This synergy not only expedites the business process but also cultivates an environment conducive to innovation, growth, and mutual success. In essence, Expert Corner stands as a cornerstone for forging meaningful and fruitful collaborations, transforming the landscape of professional connections into a dynamic arena of possibilities for both vendors and service consumers. Our commitment is to empower businesses by providing a platform that not only connects but also propels them toward unprecedented efficiency and prosperity..",
  },
  {
    question: "What service can I find on Expert Corner?",
    answer:
      "There are pool of services available on Expert Corner varying from construction engineering, software engineering, website developing, Mechanical engineering electrical engineering, fashion designing, tilling, videography, master of ceremony etc. It depends on the specific services you are searching for.",
  },
  {
    question: "How do I find an expert or vendor here?",
    answer:
      "Navigating Expert Corner to find an expert or vendor is a straightforward process. Simply utilize the search box to input your desired service, review the results, and choose the expert that aligns with your requirements. Following your selection, proceed to request the service. Stay online for a few minutes to receive a prompt response from the vendor. Once the connection is established, you can seamlessly commence your business activities.",
  },
  {
    question: "Can this platform be trusted?",
    answer:
      "Undoubtedly, the unwavering trustworthiness of Expert Corner is firmly rooted in the extensive variety of highly reputable service providers (vendors) that populate the platform. These professionals bring a wealth of expertise and credibility to the table, encompassing diverse industries and fields. Their presence not only reflects the platform&#39;s commitment to inclusivity but also underscores the meticulous selection process that ensures only the most trustworthy and capable experts become part of the Expert Corner community. Expert Corner fosters an environment where ethical conduct, transparency, and reliability are paramount.",
  },
  {
    question: "As a service consumer, is my private data secured?",
    answer:
      "Certainly, your private data is meticulously safeguarded, with a steadfast commitment to prioritizing security in all our initiatives. The security of user and vendor data is of utmost importance to us, ensuring comprehensive protection at all times.",
  },
  {
    question:
      "As an (Expert) or as a (Client), who and where can I file my complaints to?",
    answer:
      "If you encounter any challenges or situations requiring urgent attention, please reach out to our customer care line at (+234 9020 180 184, +234 8106 847 908) via call or WhatsApp, or send us an email at (help@expertcorner.com). Rest assured, you can expect a prompt response.",
  },
  {
    question: "What is monetary return policy?",
    answer:
      "At Experts Corner, we are dedicated to ensuring our clients have a positive experience.Should a client find themselves dissatisfied with a service provided by an expert, our commitment to transparency is reflected in our monetary refund policy. \n# This is just a draft, my lawyer is still working on a better one \n#Eligibility for Refund: \nRefunds will be considered for transactions meeting the following criteria: \nThe service provided did not match with the client’s desire.The expert did not deliver the agreed-upon service. \nThe client decided to cancel the project services paid for.\n Ineligible for Refund: \n Refund requests will not be entertained if:\nThe project has been executed and completed.\nThe client attempts to discredit or frustrate the project based on personal issues with a vendor during project execution to obtain a refund.\nThe project has begun or has reached an average or near-completion stage.\nInitiating a Refund Request:\nClients must submit a refund request within seven [7] days of service delivery. Please note that this applies to services not requiring immediate consumption. Before initiating a refund request, the client must have filed complaints about the service provider, providing tangible information expressing dissatisfaction. Our response team must have engaged with the complaint, offering insightful evidence to validate its authenticity, and must agree to proceed with the refund.\n\nRefund requests can be submitted through our platform, providing details of the issue andsupporting evidence.\nReview Process:\nOur team will meticulously review each refund request, considering circumstances and provided documentation. Experts may be contacted for additional information to ensure a fair and thorough evaluation.\nRefund Approval:\nIf the refund request is approved, the client will receive a monetary refund within seven [7]business days. The refund will be processed through the original payment method used for the transaction.\nExceptions:\nRefunds will not be issued for services that were delivered as described and agreed upon.\nClients are encouraged to communicate concerns with our team before initiating a refundrequest.\nContact and Support:\nClients can reach out to our customer support team at [support@expertcorner.com] for assistance with refund-related inquiries.\nPolicy Updates:\nThis refund policy is subject to periodic reviews and updates.",
  },
  {
    question:
      "Does every service providers (Experts) on Expert Corner are working for Expert Corner?",
    answer:
      "Certainly not. No service provider is employed by or affiliated with Expert Corner. Each service provider operates independently as a professional in their chosen field. Expert Corner does not enlist them as employees to deliver services to clients. Rather, Expert Corner serves as a connecting platform for both service providers (Vendors) and service consumers (clients).",
  },
];

export default Faq;
