"use client"
import { useState, useCallback } from "react";
import Image from "next/image";
import { ContactCard, Navbar, Button } from "./Components";
import { Mail, Instagram, Twitter } from "lucide-react";

interface testimonial {
  desc: string;
  testifierName: string;
  role: string;
}


const Page = () => {
  const [formData, setformData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    moreInfo: "",
    timeline: "",
    referral: "",
    newsLetterMail: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    // send to backend or show a message
  };

  const handleLinkClick = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const href = e.currentTarget.getAttribute("href");
    if (!href || !href.startsWith("#")) return;

    const targetId = href.split("#")[1];
    const element = document.getElementById(targetId);

    if (element) {
      e.preventDefault();
      element.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", `#${targetId}`);
    }
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };



  const testimonials: testimonial[] = [
    {
      desc: "I didn’t know what to expect but what they delivered was way beyond my expectations. They implemented all my feedback, responded promptly, and understood what I wanted perfectly (even more than I thought I did).",
      testifierName: "Bayonle",
      role: "Graduate Trainee Applicant",
    },
    {
      desc: "Ceedr handled my CV writing professionally and efficiently. The final document was clean, well-structured, and easy to use for applications. Turnaround time was great, and communication was smooth throughout. Solid service all round.",
      testifierName: "Eniola",
      role: "MSc Student",
    },
    {
      desc: "This changed how I present myself professionally The process felt collaborative, and the end result genuinely raised the quality of my applications.I’m glad I trusted them with this.",
      testifierName: "David",
      role: "Startup founder",
    },
  ];

  return (
    <section
      className={`md:w-full items-center flex flex-col`}
    >
      <section className="font-playfair text-xs h-full flex flex-col w-full justify-between items-center text-center  bg-[url(/greenGradient.png)] md:bg-[url(/rectangle-1.png)] bg-cover bg-no-repeat">
        <Navbar onNavItemClick={handleLinkClick} />
        <div className="p-0 mt-12 md:p-3  flex md:mt-20 md:mb-10 mb-10 flex-col md:space-y-7 space-y-5 items-center">
          <h3 className="text-[28px] text-center mb-10 leading-9 font-semibold md:leading-16 md:text-5xl text-ceedr-500">
            It is not just what you have done, <br className="hidden md:block" /> it is how you
            <span className="inline-block align-middle mx-1">
              <Image
                src="/Letter.png"
                height={15}
                width={30}
                alt="letter image"
              />
            </span>{" "}
            write it.
          </h3>
          <p className="md:text-[18px] w-9/10 md:w-3/5 text-[14px] text-black leading-7 font-poppins font-normal">
            At Ceedr, we do not just write documents, we shape your career
            narrative. From standout CVs to academic finesse and business
            proposals that seal deals, Ceedr helps you write your way up.
          </p>
          <p className="md:text-[18px] w-9/10 md:w-3/5 text-[14px] text-black leading-5 font-poppins font-normal">
            For students. For professionals. For go-getters.
          </p>
          <p className="md:text-[18px] text-[14px] text-black leading-5 font-poppins md:w-full font-normal">Get writing that works.</p>

        </div>

        <div className="md:flex-row md:justify-center w-3/5 md:w-1/2 md:mb-10 md:space-x-5 flex flex-col md:space-y-0 space-y-4">
          <Button
            text="Chat With Us on WhatsApp"
            href="https://wa.link/otpw1g"
            className="w-full md:w-auto"
            icon={<Image src="/Digital_Glyph_White.svg" alt="WhatsApp" width={24} height={24} className="object-contain" />}
          />

          <Button
            text="Request a Service"
            href="#request-form"
            variant="secondary"
            onClick={handleLinkClick}
            className="w-full md:w-auto"
          />
        </div>


        <div className="relative mt-10 md:mt-0 w-full h-[300px] md:w-4/5 md:h-[500px] md:-mb-[300px]  ml-auto mr-auto">
          <Image
            src="/BlueShirt.png"
            alt="Guy in blue shirt"
            priority
            fill
            className="block md:hidden "
          />
          <Image
            src="/Group5Desktop.png"
            alt="Guy in blue shirt"
            fill
            className="hidden md:block object-contain"
            priority
          />
        </div>
      </section>

      <div className="w-9/10 flex flex-col space-y-4 items-center justify-center">
        <section id="services" className="services flex flex-col md:items-center items-start mt md:mt-96">
          <div className="w-5/7 md:w-[78%] font-poppins my-2.5 flex text-[10px] text-ceedrGray-100 items-center space-x-3">
            <h1 className="text-ceedrGray-100 font-normal text-[10px] md:text-[18px]">SERVICES</h1>
            <hr className="w-4/5 md:w-1/5 border-t border-ceedrGray-100" />
          </div>
          <h1 className="mb-7 md:mb-12 md:w-[78%] md:text-4xl font-playfair font-semibold text-2xl">
            From Projects to Pitches,<br /> We have Got Your Back
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            <div className="bg-ceedr-500 relative text-white space-y-8 text-xs min-h-[500px] px-6 pt-6 flex flex-col">
              <div className="flex space-x-3 font-playfair items-end">
                <div className="bg-ceedr-200 text-ceedr-500 flex items-center justify-center font-semibold text-2xl md:text-[30px]">
                  <span className="py-2 px-3">  01</span>
                </div>
                <h1 className="font-semibold text-[18px] md:text-[24px]">Academic Writing</h1>
              </div>

              <p className="font-poppins font-normal text-[14px] md:text-[18px] leading-5 md:leading-7">
                Whether you are stuck on your project topic or need a full
                final-year research guide, Ceedr delivers clarity, structure,
                and polish.
              </p>
              <ul className="list-disc pl-5 font-poppins font-normal text-[14px] md:text-[18px] leading-5 md:leading-7">
                <li>Full academic projects (UG & PG) </li>
                <li>Research topic selection & guidance</li>
                <li>SPSS & data analysis</li>
                <li>Editing, proofreading & structuring </li>
                <li>Statement of Purpose (SOP) writing</li>
                <li>Personal statements & scholarship letters</li>
              </ul>
              <div className="absolute bottom-0 right-4 opacity-50 md:opacity-100">
                <Image
                  src="/vectorLemon.png"
                  width="100"
                  height="100"
                  alt="lemonCeedr"
                  className="md:w-[130px] md:h-[50px]"
                />
              </div>
            </div>

            <div className="bg-ceedr-200 min-h-[500px] relative text-ceedr-500 text-xs px-6 pt-6 flex flex-col space-y-5 md:space-y-11">
              <div className="flex space-x-3 font-playfair items-end">
                <div className="text-ceedr-200 md:text-[30px] bg-ceedr-500 flex items-center justify-center font-semibold text-2xl">
                  <span className="py-2 px-3">  02</span>
                </div>
                <h1 className="font-semibold md:text-[24px] text-[18px]">Career Writing</h1>
              </div>

              <p className="font-poppins my-4 font-normal md:my-0 text-[14px] md:text-[18px] leading-5 md:leading-7">
                Get noticed by recruiters with writing that positions you, not
                just describes you.
              </p>
              <ul className="list-disc pl-5 font-poppins mt-2 md:mt-6 font-normal text-[14px] md:text-[18px] leading-5 md:leading-7">
                <li>ATS-compliant CVs</li>
                <li>Cover letters that connect</li>
                <li>LinkedIn optimization & profile revamps</li>
              </ul>
              <div className="absolute bottom-0 right-4 opacity-50 md:opacity-100">
                <Image
                  src="/Vectorceedr.png"
                  width="100"
                  height="100"
                  alt="greenCeedr"
                  className="md:w-[130px] md:h-[80px]"
                />
              </div>
            </div>

            <div className="bg-ceedrBrown-100 relative text-white text-xs min-h-[500px] px-6 pt-6 flex flex-col">
              <div className="flex space-x-3 font-playfair items-end">
                <div className="bg-white text-ceedrBrown-100 flex items-center justify-center font-semibold text-2xl md:text-[30px]">
                  <span className="py-2 px-3">03</span>
                </div>
                <h1 className="font-semibold md:text-[24px] text-[18px]">Business and Professional Writing</h1>
              </div>
              <p className="font-poppins font-normal mt-8 md:mt-10 md:mb-8 mb-6 text-[14px] md:text-[18px] leading-5 md:leading-7">
                Ideas do not fund themselves. We help you pitch them right.
              </p>
              <ul className="list-disc pl-5 font-poppins mb-6 font-normal text-[14px] md:text-[18px] leading-5 md:leading-7">
                <li>Business proposals & concept notes</li>
                <li>Pitch decks (designed & written)</li>
                <li>Company profiles</li>
                <li>Executive bios</li>
                <li>Email copy & brand messaging</li>
              </ul>
              <div className="absolute bottom-0 right-4 opacity-50 md:opacity-100">
                <Image
                  src="/ vectorceedrwhite.png"
                  width="100"
                  height="100"
                  alt="whiteCeedr"
                  className="md:w-[130px] md:h-[100px] whiteCeedr"
                />
              </div>
            </div>
          </div>

          <section className="bg-ceedrGray-200 mt-20 md:w-full pb-4 px-5 pt-6 flex flex-col space-y-8 md:flex-row md:p-0 md:py-8 md:px-10 lg:justify-between lg:space-x-9 lg:space-y-0 md:items-center overflow-hidden">
            <div className=" md:w-[45%] flex flex-col">
              <h1 className="text-ceedr-500 text-2xl md:text-4xl font-semibold font-playfair text-left">
                Not Just Words, Results That Speak
              </h1>
              <ul className="font-poppins mt-8 mb-10 font-normal text-[14px] md:text-[18px] leading-5 space-y-4 md:space-y-6">
                {[
                  "Human-first writing! No templates, no fluff.",
                  "Fast delivery, with a real revision process.",
                  "Over 300 clients across Nigeria.",
                  "WhatsApp-based support. Get quick automated answers, and talk to real people, anytime.",
                  "Student-friendly but pro-level quality",
                ].map((text, i) => (
                  <li key={i} className="flex items-center gap-2 md:gap-4">
                    <div className="w-6 h-6 md:w-8 md:h-8 relative">
                      <Image
                        src="/Check.png"
                        alt="check"
                        fill
                        priority
                        className="object-contain"
                      />
                    </div>

                    <span className="w-9/10">{text}</span>
                  </li>
                ))}
              </ul>
              <h3 className="font-playfair font-semibold md:text-[20px] text-[16px] text-ceedr-500 text-left">
                We are not just service providers. We are your writing
                partners.
              </h3>
            </div>

            <div className="relative h-72 w-full md:h-[450px] md:w-1/2">
              <Image
                src="/blackFingerTyping.png"
                alt="TYPING"
                fill
                className="object-cover md:hidden"
              />
              <Image
                src="/blackfinger-typing-desktop.png"
                alt="blackfinger-typing-desktop"
                fill
                className="object-cover hidden md:block"
              />
            </div>
          </section>
        </section>

        <section id="testimonials" className="testimonies md:w-[78%] md:py-10">
          <div className="w-5/7 flex text-ceedrGray-100 items-center mt-3 mb-2 space-x-3">
            <h1 className="text-xs md:text-[18px] font-poppins">TESTIMONIES</h1>
            <hr className="w-[55%] md:w-[37%] border-t border-ceedrGray-100 "></hr>
          </div>

          <h1 className="font-playfair md:text-4xl font-semibold text-2xl md:text-[36px] text-left">
            Receipts? We have Got Plenty.
            <br /> Do not Just Take Our Word for It.
          </h1>

          <div className="flex flex-col space-y-5 lg:flex-row lg:space-x-10 ">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-4 py-8 mt-8 lg:flex-1 text-xs flex flex-col justify-between h-auto md:h-[400px] shadow-xl bg-white"
              >
                <div className="">
                  <div className="text-ceedrYellow-100 mb-5">
                    <span className="text-[15px] h-3.5 w-3.5">&#9733;</span>
                    <span className="text-[15px] h-3.5 w-3.5">&#9733;</span>
                    <span className="text-[15px] h-3.5 w-3.5">&#9733;</span>
                    <span className="text-[15px] h-3.5 w-3.5">&#9733;</span>
                    <span className="text-[15px] h-3.5 w-3.5">&#9733;</span>
                  </div>
                  <p className="mb-8 font-normal font-poppins text-sm italic">
                    &ldquo;{testimonial.desc}&rdquo;
                  </p>
                </div>

                <div className="flex items-center space-x-3 mt-auto">
                  <Image
                    src="/Testimony.png"
                    alt={`Testimony ${index + 1}`}
                    width={48}
                    height={48}
                    className="rounded-full object-cover shrink-0"
                  />
                  <div className="font-poppins font-normal text-sm leading-tight">
                    <h4 className="font-bold text-ceedr-500">{testimonial.testifierName}</h4>
                    <p className="text-ceedrGray-100 text-xs mt-1">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}


          </div>
        </section>

        <section className="process mt-5">
          <div className="flex md:w-[78%] md:mx-auto text-ceedrGray-100 items-center my-3 space-x-4">
            <h1 className="text-[10px] md:font-normal font-poppins md:text-[18px]">OUR PROCESS</h1>
            <hr className="w-[55%] md:w-[25%] border-t border-ceedrGray-100" />
          </div>

          <div className="w-full">
            <div className="md:w-[78%] md:mx-auto grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 items-end justify-between mb-6">
              <h1 className="order-1 md:col-span-1 md:text-4xl font-playfair md:text-left text-2xl font-semibold text-ceedr-500 max-w-[300px] md:max-w-md">
                The Ceedr Process: <br /> Simple. Smart. Seamless
              </h1>

              <div className="order-3 md:order-2 md:col-span-1 w-full flex flex-col md:items-end">
                <Button
                  text="Work With Us"
                  href="#request-form"
                  onClick={handleLinkClick}
                  className="w-3/5 md:py-5 md:text-xl font-playfair"
                />
              </div>
            </div>

            <div className="bg-ceedrGray-200 p-9 md:p-20 relative pt-10 flex flex-col md:flex-row space-y-4 md:space-y-0 md:justify-center mb-4">
              <div className="md:w-[78%] md:mx-auto flex flex-col md:flex-row md:space-x-8 lg:space-x-15">
                <div className="text-xs md:text-sm flex flex-col md:w-1/3 space-y-6">
                  <div className="md:flex items-center md:space-x-4">
                    <div className="w-fit p-2 md:p-4 text-ceedr-200 text-2xl md:text-[30px] font-semibold font-playfair bg-ceedr-500">
                      <span className="">01</span>
                    </div>
                    <div className="hidden md:block border-t-2 md:border-t-3 md:w-3/4 border-dashed border-ceedrGray-100"></div>
                  </div>
                  <p className="font-normal text-[14px] md:text-[18px] font-poppins text-black">
                    Tap WhatsApp or fill the request form to tell us what you
                    need.
                  </p>
                </div>

                <div className="h-20 border-l-3 md:hidden border-dashed border-ceedrGray-100"></div>

                <div className="text-xs md:text-sm flex flex-col md:w-1/3 space-y-6">
                  <div className="md:flex items-center md:space-x-4">
                    <div className="w-fit p-2 md:p-4 text-ceedr-200 text-2xl md:text-[30px] font-semibold font-playfair bg-ceedr-500">
                      <span className="">02</span>
                    </div>
                    <div className="hidden md:block border-t-2 md:border-t-3 md:w-3/4 border-dashed border-ceedrGray-100"></div>
                  </div>
                  <p className="font-normal text-[14px] md:text-[18px] font-poppins text-black">
                    Let us Talk Goals <br /> Job? School? Pitch? Project?
                    We will guide you on the best way to tell your story.
                  </p>
                </div>

                <div className="h-20 border-l-3 md:hidden border-dashed border-ceedrGray-100"></div>

                <div className="text-xs md:text-sm flex flex-col md:w-1/3 space-y-6">
                  <div className="md:flex items-center md:space-x-4">
                    <div className="w-fit p-2 md:p-4 text-ceedr-200 text-2xl md:text-[30px] font-semibold font-playfair bg-ceedr-500">
                      <span className="">03</span>
                    </div>
                  </div>
                  <p className="font-normal text-[14px] md:text-[18px] font-poppins text-black">
                    Approve & Proceed <br />
                    We share the plan, pricing, and timeline. You sign off, we get to work.
                  </p>
                </div>
              </div>

              <Image
                src="/backGroundVector.png"
                width={100}
                height={25}
                className="absolute hidden md:block right-4 top-0 md:w-[138px] md:h-[140px]"
                priority
                alt="backgoundceedr"
              />
            </div>
          </div>
        </section>

        <section className="mt-16 w-full md:w-[90%] lg:w-[81%] mx-auto flex flex-col md:flex-row md:justify-between md:space-y-0 space-y-10 items-center">
          <div className="md:order-2 p-2 md:w-1/2 lg:w-[52%] md:space-y-8 flex flex-col items-center md:items-start space-y-5">
            <h1 className="font-playfair text-ceedr-500 w-full font-semibold text-[22px] md:text-4xl lg:text-5xl text-center md:text-left">
              Let us Turn Your Goals Into Compelling Narratives
            </h1>
            <p className="text-center text-sm md:text-left md:text-lg lg:text-xl font-normal">
              Whether it is your first job or your next big deal, Ceedr has
              the words that open doors.
            </p>
            <div className="lg:flex-row lg:space-x-4 flex flex-col items-center w-full md:w-full lg:space-y-0 space-y-4">
              <Button
                text="Start on WhatsApp"
                href="https://wa.link/otpw1g"
                className="w-full md:py-5 md:text-xl font-playfair"
                icon={<Image src="/Digital_Glyph_White.svg" alt="WhatsApp" width={24} height={24} className="object-contain" />}
              />

              <Button
                text="Fill Request Form"
                onClick={() => {
                  const element = document.getElementById('request-form');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                variant="secondary"
                className="w-full md:py-5 md:text-xl font-playfair"
              />
            </div>
          </div>


          <div className="w-full relative h-[300px] md:h-[450px] md:order-1 md:w-[45%]">
            <Image
              src="/bookPen.png"
              fill
              alt="Book and Pen"
              className="object-cover md:hidden h-auto"
            />
            <Image
              src="/Rectangle 18.png"
              fill
              alt="Book and Pen"
              className="md:w-full hidden w-full md:block h-auto"
            />
          </div>
        </section>
      </div>

      <div id="request-form" className="grid md:mb-28 my-3 md:mt-25 grid-cols-1 items-center gap-4 lg:grid-cols-2 lg:grid-rows-[auto,auto,auto] w-full md:w-[90%] lg:w-[81%] mx-auto">
        <div className="flex w-9/10 md:w-full mx-auto flex-col mb-7 order-1 lg:row-start-1 lg:col-start-1">
          <div className="w-5/7 flex justify-center md:justify-start mt-6 md:mt-0 text-ceedrGray-100 items-center space-x-4">
            <h1 className="font-poppins font-normal md:text-[18px] text-[10px] whitespace-nowrap">REQUEST FORM</h1>
            <hr className="w-3/5 border-t border-ceedrGray-100 " />
          </div>
          <h1 className="text-[22px] md:text-[36px] mt-3 mb-5 font-semibold font-playfair text-ceedr-500">
            Need Our Services? Let us Get Started
          </h1>
          <p className="text-[14px] font-poppins font-normal md:text-[18px]">
            Need Our Services? Let us Get Started
            <br />
            Fill out this quick form so we can understand what you need.
          </p>
        </div>

        <section className="requestForm order-2 lg:row-start-1 lg:row-span-3 lg:col-start-2 h-full">
          <form
            onSubmit={handleSubmit}
            className="bg-ceedr-500 py-10 px-7 md:px-10 text-sm md:text-base flex flex-col space-y-4 md:space-y-6"
          >
            <div className="flex flex-col">
              <label
                htmlFor="name"
                className="text-white md:font-playfair font-poppins font-semibold text-sm md:text-lg mb-2"
              >
                Full Name:
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                placeholder="Enter full name"
                onChange={(e) =>
                  setformData({ ...formData, name: e.target.value })
                }
                className="p-3 md:p-4 text-sm md:text-lg md:font-playfair focus:outline-ceedrGray-100 bg-white w-full"
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="mail"
                className="text-white md:font-playfair font-poppins font-semibold text-sm md:text-lg mb-2"
              >
                Email Address:
              </label>
              <input
                type="text"
                id="mail"
                placeholder="Enter Email Address"
                className="p-3 md:p-4 text-sm md:text-lg md:font-playfair focus:outline-ceedrGray-100 bg-white w-full"
                value={formData.email}
                onChange={(e) =>
                  setformData({ ...formData, email: e.target.value })
                }
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="phoneNum"
                className="text-white md:font-playfair font-poppins font-semibold text-sm md:text-lg mb-2"
              >
                WhatsApp Number:
              </label>
              <input
                type="text"
                id="phoneNum"
                placeholder="Enter Phone Number"
                className="p-3 md:p-4 text-sm md:text-lg md:font-playfair focus:outline-ceedrGray-100 bg-white w-full"
                value={formData.phone}
                onChange={(e) =>
                  setformData({ ...formData, phone: e.target.value })
                }
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="serviceSel"
                className="text-white md:font-playfair font-poppins font-semibold text-sm md:text-lg mb-2"
              >
                What service do you need?
              </label>
              <select
                id="serviceSel"
                value={formData.service}
                onChange={(e) =>
                  setformData({ ...formData, service: e.target.value })
                }
                className="block md:font-playfair font-normal text-[#939393] w-full border border-gray-300 font-poppins bg-white py-3 md:py-4 px-3 shadow-sm focus:border-black focus:outline-none focus:ring-black text-sm md:text-lg"
              >
                <option value="">Select Preferred Service</option>
                <option value="CV/Resume">CV/Resume</option>
                <option value="Cover Letter">Cover Letter</option>
                <option value="LinkedIn Profile Optimization">
                  LinkedIn Profile Optimization
                </option>
                <option value="Final Year Project Writing">
                  Final Year Project Writing
                </option>
                <option value="Business Pitch Writing">
                  Business Pitch Writing
                </option>
                <option value="Statement Of Purpose(SOP)">
                  Statement Of Purpose(SOP)
                </option>
                <option value="Editing/Proofreading">
                  Editing/Proofreading
                </option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label
                className="text-white md:font-playfair font-poppins font-semibold text-sm md:text-lg mb-2"
                htmlFor="textArea"
              >
                Tell us a Bit More Optional
              </label>
              <textarea
                id="textArea"
                placeholder="Tell Us More"
                className="p-3 md:p-4 w-full text-sm md:text-lg md:font-playfair bg-white focus:outline-ceedrGray-100 h-24 md:h-32"
                value={formData.moreInfo}
                onChange={(e) =>
                  setformData({ ...formData, moreInfo: e.target.value })
                }
              ></textarea>
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="timeline"
                className="text-white md:font-playfair font-poppins font-semibold text-sm md:text-lg mb-2"
              >
                Preferred Delivery Timeline
              </label>
              <select
                value={formData.timeline}
                onChange={(e) =>
                  setformData({ ...formData, timeline: e.target.value })
                }
                className="block md:font-playfair w-full text-[#939393] font-normal border border-gray-300 font-poppins bg-white py-3 md:py-4 px-3 shadow-sm focus:border-black focus:outline-none focus:ring-black text-sm md:text-lg"
              >
                <option value="">Choose a timeline</option>
                <option value="Urgent:1-2 days">Urgent:1-2 days</option>
                <option value="Normal Timeline">Normal Timeline</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label className="text-white md:font-playfair font-poppins font-semibold text-sm md:text-lg mb-2">
                How Did You Hear About Ceedr?
              </label>
              <select
                className="block md:font-playfair w-full text-[#939393] font-normal border border-gray-300 bg-white py-3 md:py-4 px-3 shadow-sm focus:border-black focus:outline-none focus:ring-black text-sm md:text-lg"
                onChange={(e) =>
                  setformData({ ...formData, referral: e.target.value })
                }
              >
                <option value="Social Media">Social Media</option>
                <option value="Referral">Referral</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <Button
              text="Submit Form"
              variant="secondary"
              type="submit"
              className="mt-4 md:mt-8 font-playfair md:py-5 md:text-xl"
            />
          </form>
        </section>

        <div
          id="contact"
          className="order-3 md:w-full w-9/10 mx-auto lg:row-start-2 lg:col-start-1 h-full  flex flex-col mt-10 md:mt-20"
        >
          <div className="w-5/7 flex mb-2 text-ceedrGray-100 items-center space-x-4">
            <h1 className="text-[11px] font-poppins md:text-[18px] font-normal">CONTACT</h1>
            <hr className="w-3/5 border-t border-ceedrGray-100" />
          </div>
          <h1 className="text-ceedr-500 md:text-[36px] mb-4 font-semibold text-[22px] font-playfair">
            Got Questions? We have Got Pens
          </h1>
          <p className="text-[14px]  md:text-[18px] font-normal font-poppins">
            Have questions? Prefer to speak first? We are just a ping
            away.
          </p>
        </div>

        <div className="flex w-9/10 mx-auto md:mx-0 flex-col space-y-4 mb-10 md:mb-0 md:w-3/5 order-4 lg:row-start-3 lg:col-start-1">
          <ContactCard
            icon={<Mail size={24} />}
            smText="Email"
            address="contact@ceedr.com.ng"
          />
          <ContactCard
            icon={<Image src="/Digital_Glyph_White.svg" alt="WhatsApp" width={24} height={24} className="object-contain" />}
            smText="WhatsApp"
            address="wa.link/ceedr"
            href="https://wa.link/otpw1g"
          />
          <ContactCard
            icon={<Instagram size={24} />}
            smText="Instagram"
            address="@ceedr.ng"
            href="https://www.instagram.com/ceedrconsults?igsh=anZlcHEyZzhkaXAw"
          />
          <ContactCard
            icon={<Twitter size={24} />}
            smText="Twitter"
            address="@ceedr.ng"
            href="https://x.com/CeedrConsults"
          />
        </div>
      </div>

      <footer className="bg-ceedr-500 py-15 px-5 flex space-y-7 md:space-y-5 w-full flex-col items-center text-center text-xs text-white">
        <Image
          src="/Frame 49.svg"
          height={100}
          width={100}
          alt="ceedrLogo"
          className="border-white object-contain"
        />
        <h1 className="font-semibold font-playfair md:mb-9 text-[22px] md:text-3xl">
          We are not just service providers. <br /> We are your writing
          partners.
        </h1>
        <form
          onSubmit={handleSubmit}
          className="w-full mb-12 flex flex-col space-y-4 md:space-y-0 md:space-x-4 md:flex-row md:w-3/4 lg:w-1/2"
        >
          <input
            type="text"
            value={formData.newsLetterMail}
            onChange={(e) =>
              setformData({ ...formData, newsLetterMail: e.target.value })
            }
            className="bg-white text-ceedrGray-100 p-3 w-full md:w-3/5"
            placeholder="Enter your email"
          />
          <Button
            text="Subscribe to our newsletter"
            variant="secondary"
            type="submit"
            className="w-full md:w-auto font-playfair h-full p-3 md:px-5"
          />
        </form>
        <nav className="md:flex md:space-x-40 md:text-[18px] md:font-medium">
          <ul className="flex space-x-9 font-semibold text-[16px] font-playfair items-center justify-center md:space-x-6">
            <li>
              <a href="#services" className="hover:underline">
                Services
              </a>
            </li>
            <li>
              <a href="#testimonials" className="hover:underline">
                Testimonials
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>

          <button onClick={scrollToTop} className="hidden hover:underline font-playfair md:block">
            Back to Top
          </button>
        </nav>
      </footer>
    </section>
  );
};

export default Page;
