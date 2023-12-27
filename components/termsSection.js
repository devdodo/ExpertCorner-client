import Image from "next/image";
import React from "react";
import Container from "./container";
import benefitOneImg from "../public/img/about-1.jpg";

const TermsSection = (props) => {
  const { data } = props;
  return (
    <>
      <Container className="flex flex-wrap mb-10 lg:gap-10 lg:flex-nowrap ">
        <div className="">
          <div>
            <div className="flex flex-col w-full mt-4">
              <h3 className="mt-3 text-xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-2xl dark:text-white">
                1. What is Expert Corner?
              </h3>

              <p className="py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
                Expert Corner functions as an advanced professional networking
                platform, strategically designed to facilitate and enhance the
                effortless collaboration between esteemed service providers
                (Vendors) and discerning clients (Service Consumers). Through
                our innovative interface, we meticulously curate and bridge the
                gap between these two pivotal entities, creating a dynamic
                ecosystem that cultivates optimal and streamlined business
                opopportunities. Our platform transcends traditional business
                connections by offering a comprehensive and user-friendly
                environment where vendors can showcase their expertise,
                services, and capabilities. Simultaneously, service consumers
                gain access to a diverse pool of qualified professionals,
                ensuring that their specific needs are met with precision and
                excellence. By fostering these connections, Expert Corner
                becomes a catalyst for synergy, where the unique strengths of
                service providers align seamlessly with the requirements of
                clients. This synergy not only expedites the business process
                but also cultivates an environment conducive to innovation,
                growth, and mutual success. In essence, Expert Corner stands as
                a cornerstone for forging meaningful and fruitful
                collaborations, transforming the landscape of professional
                connections into a dynamic arena of possibilities for both
                vendors and service consumers. Our commitment is to empower
                businesses by providing a platform that not only connects but
                also propels them toward unprecedented efficiency and prosperity
                in today's dynamic and competitive marketplace.
              </p>
              <h3 className="mt-3 text-xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-2xl dark:text-white">
                2. What service can I find on Expert Corner?
              </h3>
              <p className="py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
                There are pool of services available on Expert Corner varying
                from construction engineering, software engineering, website
                developing, Mechanical engineering, electrical engineering,
                fashion designing, tilling, videography, master of ceremony etc.
                It depends on the specific services you are searching for.
              </p>
              <h3 className="mt-3 text-xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-2xl dark:text-white">
                3. How do I find an expert or vendor here ?
              </h3>
              <p className="py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
                Navigating Expert Corner to find an expert or vendor is a
                straightforward process. Simply utilize the search box to input
                your desired service, review the results, and choose the expert
                that aligns with your requirements. Following your selection,
                proceed to request the service. Stay online for a few minutes to
                receive a prompt response from the vendor. Once the connection
                is established, you can seamlessly commence your business
                activities.
              </p>
              <h3 className="mt-3 text-xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-2xl dark:text-white">
                4. Can this platform be trusted?
              </h3>
              <p className="py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
                Undoubtedly, the unwavering trustworthiness of Expert Corner is
                firmly rooted in the extensive variety of highly reputable
                service providers (vendors) that populate the platform. These
                professionals bring a wealth of expertise and credibility to the
                table, encompassing diverse industries and fields. Their
                presence not only reflects the platform's commitment to
                inclusivity but also underscores the meticulous selection
                process that ensures only the most trustworthy and capable
                experts become part of the Expert Corner community. Expert
                Corner fosters an environment where ethical conduct,
                transparency, and reliability are paramount.
              </p>
              <h3 className="mt-3 text-xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-2xl dark:text-white">
                5. As a service consumer, is my private data secured ?
              </h3>
              <p className="py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
                Certainly, your private data is meticulously safeguarded, with a
                steadfast commitment to prioritizing security in all our
                initiatives. The security of user and vendor data is of utmost
                importance to us, ensuring comprehensive protection at all
                times.
              </p>
              <h3 className="mt-3 text-xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-2xl dark:text-white">
                6. As an (Expert) or as a (Client), who and where can I file my
                complaints to
              </h3>
              <p className="py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
                If you encounter any challenges or situations requiring urgent
                attention, please reach out to our customer care line at
                (-------) via call or WhatsApp, or send us an email at
                (@expertcorner.com). Rest assured, you can expect a prompt
                response.
              </p>
              <h3 className="mt-3 text-xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-2xl dark:text-white">
                7. What is monetary return policy?
              </h3>
              <p className="py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
                At Experts Corner, we are dedicated to ensuring our clients have
                a positive experience. Should a client find themselves
                dissatisfied with a service provided by an expert, our
                commitment to transparency is reflected in our monetary refund
                policy.
                <br></br>
                <br></br>
                <span className="font-bold text-gray-700">
                  # This is just a draft, my lawyer is still working on a better
                  one #{" "}
                </span>
                <br></br>
                <br></br>
                <span className="font-bold text-gray-700">
                  Eligibility for Refund:
                </span>
                Refunds will be considered for transactions meeting the
                following criteria: The service provided did not match with the
                client’s desire. The expert did not deliver the agreed-upon
                service. The client decided to cancel the project/services paid
                for.
                <br></br>
                <br></br>
                <span className="font-bold text-gray-700">
                  Ineligible for Refund:
                </span>
                Refund requests will not be entertained if: The project has been
                executed and completed. The client attempts to discredit or
                frustrate the project based on personal issues with a vendor
                during project execution to obtain a refund. The project has
                begun or has reached an average or near-completion stage.
                Initiating a Refund Request: Clients must submit a refund
                request within seven [7] days of service delivery. Please note
                that this applies to services not requiring immediate
                consumption. Before initiating a refund request, the client must
                have filed complaints about the service provider, providing
                tangible information expressing dissatisfaction. Our response
                team must have engaged with the complaint, offering insightful
                evidence to validate its authenticity, and must agree to proceed
                with the refund. Refund requests can be submitted through our
                platform, providing details of the issue and supporting
                evidence.
                <br></br>
                <br></br>
                <span className="font-bold text-gray-700">Review Process:</span>
                Our team will meticulously review each refund request,
                considering circumstances and provided documentation. Experts
                may be contacted for additional information to ensure a fair and
                thorough evaluation.
                <br></br>
                <br></br>
                <span className="font-bold text-gray-700">
                  Refund Approval:
                </span>
                If the refund request is approved, the client will receive a
                monetary refund within seven [7] business days. The refund will
                be processed through the original payment method used for the
                transaction.
                <br></br>
                <br></br>
                <span className="font-bold text-gray-700">Exceptions:</span>
                Refunds will not be issued for services that were delivered as
                described and agreed upon. Clients are encouraged to communicate
                concerns with our team before initiating a refund request.
                <br></br>
                <br></br>
                <span className="font-bold text-gray-700">
                  Contact and Support:
                </span>
                Clients can reach out to our customer support team at
                [support@expertcorner.com] for assistance with refund-related
                inquiries.
                <br></br>
                <br></br>
                <span className="font-bold text-gray-700">Policy Updates:</span>
                This refund policy is subject to periodic reviews and updates.
                Users will be notified of any changes through our platform. By
                engaging with Experts Corner, users acknowledge and agree to
                adhere to this Monetary Refund Policy. We strive to maintain a
                fair and trustworthy platform, ensuring the satisfaction of both
                clients and experts.
              </p>
              <h3 className="mt-3 text-xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-2xl dark:text-white">
                8. Does every service providers (Experts) on Expert Corner are
                working for Expert Corner?
              </h3>
              <p className="py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
                Certainly not. No service provider is employed by or affiliated
                with Expert Corner. Each service provider operates independently
                as a professional in their chosen field. Expert Corner does not
                enlist them as employees to deliver services to clients. Rather,
                Expert Corner serves as a connecting platform for both service
                providers (Vendors) and service consumers (clients).
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default TermsSection;
