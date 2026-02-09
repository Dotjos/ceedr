"use client";
import { useState } from "react";
import Image from "next/image";
import { Button, ContactCard, Navbar } from "./Components";

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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const testimonials: testimonial[] = [
    {
      desc: "My Ceedr CV got me 3 interviews in 2 weeks. Didn't realize how off my old CV was until they rewrote it.",
      testifierName: "Dami",
      role: "Graduate Trainee Applicant",
    },
    {
      desc: "I used Ceedr for my MSc application, my SOP, CV and LinkedIn. Got into UCL and Warwick.",
      testifierName: "Temitope",
      role: "MSc Student",
    },
    {
      desc: "Ceedr helped us write a solid pitch deck. Our first funding round? Closed.",
      testifierName: "Rejoice A",
      role: "Startup founder",
    },
  ];

  return (
    <section
      className={`md:w-full items-center flex flex-col`}
    >
      <section className="font-playfair text-xs h-full flex flex-col w-full justify-between items-center text-center  bg-[url(/greenGradient.png)] md:bg-[url(/rectangle-1.png)] bg-cover bg-no-repeat">
        <Navbar />
        <div className="p-0 mt-12 md:p-3 w-9/10 md:w-3/5 flex md:mt-20 md:mb-10 mb-10 flex-col md:space-y-7 space-y-5 items-center">
          <h3 className="text-[28px] text-center mb-10 leading-9 font-semibold md:leading-16 md:text-5xl text-ceedr-500">
            It&apos;s not just what you&apos;ve done, <br className="hidden md:block" /> it&apos;s how you
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
          <p className="md:text-[18px] text-[14px] text-black leading-5 font-poppins md:w-full font-normal">
            At Ceedr, we don&apos;t just write documents, we shape your career
            narrative. From standout CVs to academic finesse and business
            proposals that seal deals, Ceedr helps you write your way up.
          </p>
          <p className="md:text-[18px] text-[14px] text-black leading-5 font-poppins md:w-full font-normal">
            For students. For professionals. For go-getters.
          </p>
          <p className="md:text-[18px] text-[14px] text-black leading-5 font-poppins md:w-full font-normal">Get writing that works.</p>

        </div>

        <div className="md:flex-row md:justify-center w-7/10 md:mb-10 md:space-x-5 flex flex-col md:space-y-0 space-y-4">
          <button className="text-[11px] md:text-[16px] md:py-2.5 py-2 md:px-10 px-5 bg-ceedr-500 font-semibold flex items-center justify-center space-x-2 text-white ">
            <div className="relative md:w-[24px] md:h-[24px] w-[16px] h-[16px]">
              <Image
                src="/whatsapp.png"
                alt="WhatsApp Icon"
                fill
                className="inline-block object-contain"
              />
            </div>
            <span className="font-semibold">Chat With Us on WhatsApp</span>
          </button>
          <button className="md:text-[16px] text-[11px] md:py-2.5 py-2 md:px-10 px-5 bg-ceedr-200 font-semibold flex items-center justify-center space-x-2 text-ceedr-500 ">
            Request a Service
          </button>
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
        <section id="services" className="services flex flex-col items-center mt md:mt-96">
          <div className="w-5/7 md:w-7/8 font-poppins my-2.5 flex text-[10px] text-ceedrGray-100 items-center space-x-3">
            <h1 className="text-ceedrGray-100 font-normal text-[10px]">SERVICES</h1>
            <hr className="w-4/5 md:w-1/5 border-t border-ceedrGray-100" />
          </div>
          <h1 className="mb-7 md:mb-12 md:w-7/8 font-playfair font-semibold text-2xl">
            From Projects to Pitches,<br /> We&apos;ve Got Your Back
          </h1>

          <section className="flex  flex-col md:flex-row md:space-x-5 space-y-5">
            <div className="bg-ceedr-500 relative text-white space-y-11 text-xs md:w-1/3 h-[416px] md:h-[500px] px-6 pt-6 flex flex-col">
              <div className="flex space-x-3 font-playfair items-end">
                <div className="bg-ceedr-200 text-ceedr-500 flex items-center justify-center font-semibold text-2xl md:text-[30px]">
                  <span className="py-2 px-3">  01</span>
                </div>
                <h1 className="font-semibold text-[18px] md:text-[24px]">Academic Writing</h1>
              </div>

              <p className="font-poppins font-normal text-[14px] md:text-[18px] leading-5 md:leading-7">
                Whether you&apos;re stuck on your project topic or need a full
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
              <div className=" absolute bottom-0 right-6 flex ">
                <Image
                  src="/vectorLemon.png"
                  width="130"
                  height="130"
                  alt="lemonCeedr"
                  className=""
                />
              </div>
            </div>

            <div className="bg-ceedr-200 md:h-[500px] relative text-ceedr-500 md:w-1/3 text-xs h-[400px] px-6 pt-6 flex flex-col space-y-5 md:space-y-11">
              <div className="flex space-x-3 font-playfair items-end">
                <div className="text-ceedr-200 md:text-[30px] bg-ceedr-500 flex items-center justify-center font-semibold text-2xl">
                  <span className="py-2 px-3">  02</span>
                </div>
                <h1 className="font-semibold md:text-[24px] text-[18px]">Career writing</h1>
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
              <div className="flex justify-end absolute bottom-0 right-5">
                <Image
                  src="/Vectorceedr.png"
                  width="130"
                  height="130"
                  alt="greenCeedr"
                  className=""
                />
              </div>
            </div>

            <div className="bg-ceedrBrown-100 relative text-white text-xs md:w-1/3 h-[400px] md:h-[500px] px-6 pt-6 flex flex-col">
              <div className="flex space-x-3 font-playfair items-end">
                <div className="bg-white text-ceedrBrown-100 flex items-center justify-center font-semibold text-2xl md:text-[30px]">
                  <span className="py-2 px-3">03</span>
                </div>
                <h1 className="font-semibold md:text-[24px] text-[18px]">Business and professional writing</h1>
              </div>
              <p className="font-poppins font-normal mt-8 md:mt-10 md:mb-8 mb-6 text-[14px] md:text-[18px] leading-5 md:leading-7">
                Ideas don&apos;t fund themselves. We help you pitch them right.
              </p>
              <ul className="list-disc pl-5 font-poppins font-normal text-[14px] md:text-[18px] leading-5 md:leading-7">
                <li>Business proposals & concept notes</li>
                <li>Pitch decks (designed & written)</li>
                <li>Company profiles</li>
                <li>Executive bios</li>
                <li>Email copy & brand messaging</li>
              </ul>
              <div className="absolute bottom-0 right-5">
                <Image
                  src="/ vectorceedrwhite.png"
                  width="130"
                  height="130"
                  alt="whiteCeedr"
                  className="whiteCeedr"
                />
              </div>
            </div>
          </section>

          <section className="bg-ceedrGray-200 mt-14 md:mt-10 md:w-full pb-4 px-5 pt-6 flex flex-col space-y-8 md:flex-row md:p-0 md:py-8 md:px-10 md:justify-between md:space-x-9 md:space-y-0 md:items-center overflow-hidden">
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
                We&apos;re not just service providers. We&apos;re your writing
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

        <section id="testimonials" className="testimonies md:p-10">
          <div className="w-5/7 flex text-ceedrGray-100 items-center mt-3 mb-2 space-x-3">
            <h1 className="text-xs md:text-[18px] font-poppins">TESTIMONIES</h1>
            <hr className="w-[55%] md:w-[37%] border-t border-ceedrGray-100 "></hr>
          </div>

          <h1 className="font-playfair font-semibold text-[22px] md:text-[36px] text-left">
            Receipts? We&apos;ve Got Plenty.
            <br /> Don&apos;t Just Take Our Word for It.
          </h1>

          <div className="flex flex-col space-y-5 md:flex-row md:space-x-10 ">

            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-3 py-8 mt-8 md:w-1/3 text-xs flex flex-col justify-between md:h-80 shadow-xl bg-white"
              >
                <div className="">
                  <div className="text-ceedrYellow-100 mb-5">
                    <span className="text-[15px] h-3.5 w-3.5">&#9733;</span>
                    <span className="text-[15px] h-3.5 w-3.5">&#9733;</span>
                    <span className="text-[15px] h-3.5 w-3.5">&#9733;</span>
                    <span className="text-[15px] h-3.5 w-3.5">&#9733;</span>
                    <span className="text-[15px] h-3.5 w-3.5">&#9733;</span>
                  </div>
                  <p className="mb-16 font-normal font-poppins text-sm">
                    &ldquo;{testimonial.desc}&rdquo;
                  </p>
                </div>

                <div className="flex items-center space-x-3">
                  <Image
                    src="/Testimony.png"
                    alt={`Testimony ${index + 1}`}
                    width={50}
                    height={50}
                    className="rounded-full object-cover"
                  />
                  <div className="font-poppins font-normal text-sm">
                    <h4 className="">{testimonial.testifierName},</h4>
                    <p className=" text-ceedrGray-100">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}


          </div>
        </section>

        <section className="process mt-5">
          <div className="flex text-ceedrGray-100 items-center my-3 space-x-4 md:pl-6">
            <h1 className="text-[10px] md:font-normal font-poppins md:text-[18px]">OUR PROCESS</h1>
            <hr className="w-[55%] md:w-[25%] border-t border-ceedrGray-100" />
          </div>

          <div className="grid grid-cols-1 gap-4 md:md:grid-cols-2  md:grid-rows-[auto_auto] md:gap-6 md:items-end md:justify-between">
            <h1 className="md:pl-10 order-1 md:order-1 md:col-span-1 md:text-4xl font-playfair md:text-left text-2xl font-semibold md:w-4/5  text-ceedr-500">
              The Ceedr Process: Simple. Smart. Seamless
            </h1>

            <div className="order-2 md:order-3 md:col-span-2 bg-ceedrGray-200 p-9 md:p-20 relative pt-10 flex flex-col md:space-x-15 md:flex-row space-y-4 mb-4">
              <div className="text-xs md:text-sm flex flex-col md:w-1/5 space-y-6">
                <div className="md:flex items-center md:space-x-4">
                  <div className="w-fit p-2 md:p-4 text-ceedr-200 text-2xl md:text-[30px] font-semibold font-playfair bg-ceedr-500">
                    <span className="">01</span>
                  </div>
                  <div className="hidden md:block border-t-2 md:border-t-3 md:w-3/4 border-dashed"></div>
                </div>
                <p className="font-normal text-[14px] md:text-[18px] font-poppins">
                  Tap WhatsApp or fill the request form to tell us what you
                  need.
                </p>
              </div>

              <div className="h-20 border-l-3 md:hidden border-dashed"></div>

              <div className="text-xs md:text-sm flex flex-col md:w-1/5 space-y-6">
                <div className="md:flex items-center md:space-x-4">
                  <div className="w-fit p-2 md:p-4 text-ceedr-200 text-2xl md:text-[30px] font-semibold font-playfair bg-ceedr-500">
                    <span className="">02</span>
                  </div>
                  <div className="hidden md:block border-t-2 md:border-t-3 md:w-3/4 border-dashed"></div>
                </div>
                <p className="font-normal text-[14px] md:text-[18px] font-poppins">
                  Let&apos;s Talk Goals <br /> Job? School? Pitch? Project?
                  We&apos;ll guide you on the best way to tell your story.
                </p>
              </div>

              <div className="h-20 border-l-3 md:hidden  border-dashed"></div>

              <div className="text-xs md:text-sm flex flex-col md:w-1/5 space-y-6">
                <div className="md:flex items-center md:space-x-4">
                  <div className="w-fit p-2 md:p-4 text-ceedr-200 text-2xl md:text-[30px] font-semibold font-playfair bg-ceedr-500">
                    <span className="">03</span>
                  </div>
                  <div className="hidden md:block border-t-2 md:border-t-3 md:w-3/4 border-dashed"></div>
                </div>
                <p className="font-normal text-[14px] md:text-[18px] font-poppins">
                  Approve & Proceed <br />
                  We share the plan, pricing, and timeline. You sign off, we get to work.
                </p>
              </div>

              <div className="h-20 border-l-3 md:hidden  border-dashed"></div>

              <div className="text-xs md:text-sm flex flex-col md:w-1/5 space-y-6">
                <div className="md:flex items-center md:space-x-4">
                  <div className="w-fit p-2 md:p-4 text-ceedr-200 text-2xl md:text-[30px] font-semibold font-playfair bg-ceedr-500">
                    <span className="">04</span>
                  </div>
                  <div className="hidden md:block border-t-2 md:border-t-3 md:w-3/4 border-dashed"></div>
                </div>
                <p className="font-normal text-[14px] md:text-[18px] font-poppins">
                  We Write. You Shine.
                  <br />
                  Receive polished content with support and revisions to match.
                </p>
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

            <div className="order-3 md:w-full md:flex md:flex-col md:pr-10 md:items-end md:order-2 md:col-span-1">
              <button className="bg-ceedr-500 py-3 md:py-5 px-20 md:text-xl text-center text-white flex space-x-3 items-center justify-center">
                <p className="font-playfair font-semibold md:text-[16px] text-[10px]">Work With Us</p>
              </button>
            </div>
          </div>
        </section>

        <section className="mt-16 md:w-9/10 flex flex-col md:ml-auto md:mr-auto md:flex-row md:justify-between md:space-y-0 space-y-10 md:justify-items-start items-center">
          <div className="md:order-2 p-2 md:w-[45%] md:space-y-10 flex flex-col items-center md:items-start space-y-5 ">
            <h1 className="font-playfair text-ceedr-500 w-full font-semibold text-[22px] md:text-[36px] md:font-semibold text-center md:text-3xl md:text-left">
              Let&apos;s Turn Your Goals Into Compelling Narratives
            </h1>
            <p className="text-center text-sm md:text-left md:text-[18px] font-normal md:w-3/5">
              Whether it&apos;s your first job or your next big deal, Ceedr has
              the words that open doors.
            </p>
            <div className="md:flex-row md:space-x-10 flex flex-col items-center w-3/5 md:w-full md:space-y-0 space-y-4">
              <button className="bg-ceedr-500 w-full py-3 md:space-y-0 space-y-4 md:py-5 px-4 md:text-xl text-center text-white flex space-x-3 items-center justify-center">
                <Image
                  className="object-contain"
                  src="/white-whatsApp-icon.png"
                  alt="button image"
                  width={20}
                  height={10}
                />
                <span className="text-[11px] font-semibold md:text-[16px] font-playfair">Start on whatsApp</span>
              </button>

              <button className="bg-ceedr-200 w-full py-3 px-4 md:py-5 md:text-xl text-center text-ceedr-500 flex space-x-3 items-center justify-center">
                <span className="text-[11px] font-semibold md:text-[16px] font-playfair">Fill Request Form</span>
              </button>

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

      <div className="grid md:mb-28 border my-3 md:mt-25 grid-cols-1 items-center gap-4 md:grid-cols-2 md:grid-rows-[auto,auto,auto] w-full md:w-[81%] mx-auto">
        <div className="flex w-9/10 md:w-full mx-auto flex-col mb-7 order-1 md:row-start-1 md:col-start-1">
          <div className="w-5/7 flex justify-center md:justify-start mt-6 md:mt-0 text-ceedrGray-100 items-center space-x-4">
            <h1 className="font-poppins font-normal md:text-[18px] text-[10px]">REQUEST FORM</h1>
            <hr className="w-3/5 border-t border-ceedrGray-100 " />
          </div>
          <h1 className="text-[22px] md:text-[36px] mt-3 mb-5 font-semibold font-playfair text-ceedr-500">
            Service Request Form
          </h1>
          <p className="text-[14px] font-poppins font-normal md:text-[18px]">
            Need Our Services? Let&apos;s Get Started
            <br />
            Fill out this quick form so we can understand what you need.
          </p>
        </div>

        <section className="requestForm order-2 md:row-start-1 md:row-span-3 md:col-start-2 h-full">
          <form
            onSubmit={handleSubmit}
            className="bg-ceedr-500 py-9 px-7  text-xs flex flex-col space-y-3 md:space-y-5"
          >
            <label
              htmlFor="name"
              className="text-white md:font-playfair font-poppins font-semibold mb-1 md:mb-3"
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
              className="p-2 md:font-playfair focus:outline-ceedrGray-100 bg-white mb-4 w-full"
            />

            <label
              htmlFor="mail"
              className="text-white md:font-playfair font-poppins font-semibold mb-1 md:mb-3"
            >
              Email Address:
            </label>
            <input
              type="text"
              id="mail"
              placeholder="Enter Email Address"
              className="p-2 md:font-playfair focus:outline-ceedrGray-100 bg-white mb-4 w-full"
              value={formData.email}
              onChange={(e) =>
                setformData({ ...formData, email: e.target.value })
              }
            />

            <label
              htmlFor="phoneNum"
              className="text-white md:font-playfair font-poppins font-semibold mb-1 md:mb-3"
            >
              Phone Number (WhatsApp preferred):
            </label>
            <input
              type="text"
              id="phoneNum"
              placeholder="Enter Phone Number"
              className="p-2 md:font-playfair focus:outline-ceedrGray-100 bg-white mb-4 w-full"
              value={formData.phone}
              onChange={(e) =>
                setformData({ ...formData, phone: e.target.value })
              }
            />

            <label
              htmlFor="serviceSel"
              className="block md:my-3  text-white md:font-playfair font-poppins font-semibold mb-1"
            >
              What service do you need?
            </label>
            <select
              id="serviceSel"
              value={formData.service}
              onChange={(e) =>
                setformData({ ...formData, service: e.target.value })
              }
              className="block md:font-playfair font-normal text-[#939393] w-full border mb-4 border-gray-300 font-poppins md:my-3 bg-white py-2 px-3 shadow-sm focus:border-black focus:outline-none focus:ring-black text-[11px]"
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

            <label
              className="text-white md:font-playfair mb-1 font-poppins font-semibold"
              htmlFor="textArea"
            >
              Tell Us a Bit More (Optional)
            </label>
            <textarea
              id="textArea"
              placeholder="Tell Us More"
              className="p-2 mb-4 w-full md:font-playfair bg-white focus:outline-ceedrGray-100 h-20"
              value={formData.moreInfo}
              onChange={(e) =>
                setformData({ ...formData, moreInfo: e.target.value })
              }
            ></textarea>

            <label
              htmlFor="timeline"
              className="block md:my-3 md:font-playfair text-xs font-poppins font-semibold text-white mb-1"
            >
              Preferred Delivery Timeline
            </label>

            <select
              value={formData.timeline}
              onChange={(e) =>
                setformData({ ...formData, timeline: e.target.value })
              }
              className="block md:font-playfair w-full text-[#939393] text-[11px] font-normal border mb-4 border-gray-300 font-poppins md:my-3 bg-white py-2  px-3 shadow-sm focus:border-black focus:outline-none focus:ring-black text-sm"
            >
              <option value="">Choose a timeline</option>
              <option value="Urgent:1-2 days">Urgent:1-2 days</option>
              <option value="Normal Timeline">Normal Timeline</option>
            </select>

            <label className="block text-xs md:font-playfair text-white md:my-3 font-bold mb-1">
              How Did You Hear About Ceedr?
            </label>
            <select
              className="block md:font-playfair w-full text-[#939393] text-[11px] font-normal border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-black focus:outline-none focus:ring-black text-sm"
              onChange={(e) =>
                setformData({ ...formData, referral: e.target.value })
              }
            >
              <option value="Social Media">Social Media</option>
              <option value="Referral">Referral</option>
              <option value="Other">Other</option>
            </select>

            <button
              type="submit"
              className="bg-ceedr-200 md:text-[16px] font-playfair font-semibold text-[10px] text-black px-2 py-4 w-1/2 mt-7"
            >
              Submit Request
            </button>
          </form>
        </section>

        <div
          id="contact"
          className="order-3 md:w-full w-9/10 mx-auto md:row-start-2 md:col-start-1 h-full  flex flex-col mt-10 md:mt-20"
        >
          <div className="w-5/7 flex mb-2 text-ceedrGray-100 items-center space-x-4">
            <h1 className="text-[11px] font-poppins md:text-[18px] font-normal">CONTACT</h1>
            <hr className="w-3/5 border-t border-ceedrGray-100" />
          </div>
          <h1 className="text-ceedr-500 md:text-[36px] mb-4 font-semibold text-[22px] font-playfair">
            Got Questions? We&apos;ve Got Pens
          </h1>
          <p className="text-[14px]  md:text-[18px] font-normal font-poppins">
            Have questions? Prefer to speak first? We&apos;re just a ping
            away.
          </p>
        </div>

        <div className="flex md:-mt-70 w-9/10 mx-auto flex-col space-y-4 mb-10 md:mb-0 md:w-1/2 order-4 md:row-start-3 md:col-start-1">
          <ContactCard
            imgPath="/mail.png"
            smText="Email"
            address="contact@ceedr.com.ng"
          />
          <ContactCard
            imgPath="/whatsapp.png"
            smText="Email"
            address="contact@ceedr.com.ng"
          />
          <ContactCard
            imgPath="/instagram.png"
            smText="Email"
            address="contact@ceedr.com.ng"
          />
          <ContactCard
            imgPath="/new-twitter.png"
            smText="Email"
            address="contact@ceedr.com.ng"
          />
        </div>
      </div>

      <footer className="bg-ceedr-500 py-15 px-5 flex space-y-7 md:space-y-5 w-full flex-col items-center text-center text-xs text-white">
        <Image
          src="/Frame 49.png"
          height={60}
          width={80}
          alt="ceedrLogo"
          className="border-white object-contain"
        />
        <h1 className="font-semibold font-playfair md:mb-9 text-[22px] md:text-3xl">
          We&apos;re not just service providers. <br /> We&apos;re your writing
          partners.
        </h1>
        <form
          onSubmit={handleSubmit}
          className="w-full mb-12 flex flex-col space-y-4 md:space-y-0 md:flex-row md:w-1/2 md:justify-between"
        >
          <input
            type="text"
            value={formData.newsLetterMail}
            onChange={(e) =>
              setformData({ ...formData, newsLetterMail: e.target.value })
            }
            className="bg-white text-ceedrGray-100 p-3 w-full md:w-3/5"
            placeholder="Enter full name"
          />
          <button
            className="bg-ceedr-200 md:text-[11px] text-black font-semibold font-playfair p-3 md:px-5 "
            type="submit"
          >
            Subscribe to our newsletter
          </button>
        </form>
        <nav className="md:flex md:space-x-40 md:text-sm md:font-medium">
          <ul className="flex space-x-9 font-semibold text-[13px] font-playfair items-center justify-center md:space-x-6">
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

          <button onClick={scrollToTop} className="hidden font-playfair md:block">
            Back to Top
          </button>
        </nav>
      </footer>
    </section>
  );
};

export default Page;
