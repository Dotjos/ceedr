"use client";
import { useState } from "react";
import Image from "next/image";
import { Button, ContactCard, Navbar } from "./Components";
import bonche from "./fonts/boncheConf";

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

  return (
    <section
      className={`md:w-full items-center flex flex-col ${bonche.className}`}
    >
      <section className="p-4 text-xs flex flex-col w-full justify-between items-center text-center  bg-[url(/greenGradient.png)] md:bg-[url(/rectangle-1.png)] bg-cover bg-no-repeat">
        <Navbar />
        <div className="p-3 flex md:w-3/5 md:mt-20 md:mb-10 flex-col md:space-y-7 space-y-4 items-center">
          <h3 className="text-xl font-extrabold leading-10 md:text-2xl md:w-1/2 text-ceedr-500">
            It&apos;s not just what you&apos;ve done, <br /> it&apos;s how you
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
          <p className="md:text-md leading-5 font-poppins md:w-4/5 text-black">
            At Ceedr, we don&apos;t just write documents, we shape your career
            narrative. From standout CVs to academic finesse and business
            proposals that seal deals, Ceedr helps you write your way up.
          </p>
          <p className="md:text-md font-poppins text-black">
            For students. For professionals. For go-getters.
          </p>
          <p className=" font-poppins text-black">Get writing that works.</p>
          <div className="md:flex-row md:space-x-5 flex flex-col md:space-y-0 space-y-5">
            <Button
              text="Chat With Us on WhatsApp"
              textColor="white"
              backgroundColor="ceedr-500"
              className="font-extrabold"
              btnImage={true}
            />
            <Button
              text="Request a Service"
              textColor="black"
              className="font-extrabold"
              backgroundColor="ceedr-200"
              btnImage={false}
            />
          </div>
        </div>

        <div className="relative w-full h-[400px] md:w-4/5 md:h-[500px] md:-mb-[300px]  ml-auto mr-auto">
          <Image
            src="/BlueShirt.png"
            alt="Guy in blue shirt"
            priority
            fill
            className="block md:hidden object-contain"
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
        <section id="services" className="services md:mt-80">
          <div className="w-5/7 my-2.5 flex text-[10px] text-ceedrGray-100 items-center space-x-3">
            <h1 className="text-ceedrGray-100 text-xs">SERVICES</h1>
            <span className="w-3/5 border "></span>
          </div>
          <h1 className="mb-4">
            From Projects to Pitches, We&apos;ve Got Your Back
          </h1>

          <section className="flex mb-4 flex-col md:flex-row md:space-x-5  space-y-5">
            <div className="bg-ceedr-500 text-white text-xs md:w-1/3 h-85 px-6 pt-6 flex flex-col space-y-3 justify-between">
              <div className="flex space-x-3 items-end">
                <div className="bg-ceedr-200 p-2 text-ceedr-500 font-bold text-center">
                  01
                </div>
                <h1 className="font-bold">Academic writing</h1>
              </div>

              <p>
                Whether you&apos;re stuck on your project topic or need a full
                final-year research guide, Ceedr delivers clarity, structure,
                and polish.
              </p>
              <ul className="list-disc pl-5">
                <li>Full academic projects (UG & PG) </li>
                <li>Research topic selection & guidance</li>
                <li>SPSS & data analysis</li>
                <li>Editing, proofreading & structuring </li>
                <li>Statement of Purpose (SOP) writing</li>
                <li>Personal statements & scholarship letters</li>
              </ul>
              <div className=" flex justify-end ">
                <Image
                  src="/vectorLemon.png"
                  width="70"
                  height="70"
                  alt="lemonCeedr"
                  className=""
                />
              </div>
            </div>

            <div className="bg-ceedr-200 relative text-ceedr-500 md:w-1/3 text-xs h-75 md:h-85 px-6 pt-6 flex flex-col space-y-5">
              <div className="flex space-x-3 items-end">
                <div className="bg-ceedr-500 p-2 text-ceedr-200 font-bold text-center">
                  02
                </div>
                <h1 className="font-bold">Career writing</h1>
              </div>

              <p>
                Get noticed by recruiters with writing that positions you, not
                just describes you.
              </p>
              <ul className="list-disc pl-5">
                <li>ATS-compliant CVs</li>
                <li>Cover letters that connect</li>
                <li>LinkedIn optimization & profile revamps</li>
              </ul>
              <div className="flex justify-end absolute bottom-0 right-5">
                <Image
                  src="/Vectorceedr.png"
                  width="70"
                  height="70"
                  alt="greenCeedr"
                  className=""
                />
              </div>
            </div>

            <div className="bg-ceedrBrown-100 text-white text-xs md:w-1/3 h-85 px-6 pt-6 flex flex-col space-y-3 justify-between">
              <div className="flex space-x-3 items-end">
                <div className="bg-white p-2 text-ceedrBrown-100 font-bold text-center">
                  03
                </div>
                <h1 className="font-bold">Business and professional writing</h1>
              </div>

              <p className="">
                Ideas don&apos;t fund themselves. We help you pitch them right.
              </p>
              <ul className="list-disc pl-5">
                <li>Business proposals & concept notes</li>
                <li>Pitch decks (designed & written)</li>
                <li>Company profiles</li>
                <li>Executive bios</li>
                <li>Email copy & brand messaging</li>
              </ul>
              <div className=" flex justify-end ">
                <Image
                  src="/ vectorceedrwhite.png"
                  width="70"
                  height="70"
                  alt="whiteCeedr"
                  className=""
                />
              </div>
            </div>
          </section>

          <section className="bg-ceedrGray-200 p-4 pt-6 flex flex-col space-y-4 md:flex-row md:p-6 md:justify-center md:space-x-9 md:items-center overflow-hidden">
            <div className=" md:w-2/5 flex flex-col md:space-y-3">
              <h1 className="text-ceedr-500 md:text-2xl  text-left">
                Not Just Words, Results
                <br /> That Speak
              </h1>
              <ul className=" text-sm space-y-4 md:space-y-6">
                {[
                  "Human-first writing! No templates, no fluff.",
                  "Fast delivery, with a real revision process.",
                  "Over 300 clients across Nigeria.",
                  "WhatsApp-based support. Get quick automated answers, and talk to real people, anytime.",
                  "Student-friendly but pro-level quality",
                ].map((text, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Image
                      src="/Check.png"
                      alt="check"
                      className="w-4 h-4 mt-0.5"
                      width={10}
                      height={10}
                    />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
              <h3>
                We&apos;re not just service providers. We&apos;re your writing
                partners.
              </h3>
            </div>

            <div className="relative h-30 w-full md:h-75 md:w-3/8">
              <Image
                src="/blackFingerTyping.png"
                alt="TYPING"
                fill
                className="object-cover"
              />
            </div>
          </section>
        </section>

        <section id="testimonials" className="testimonies md:p-10">
          <div className="w-5/7 flex text-ceedrGray-100 items-center my-3 space-x-3 justify-between">
            <h1 className="text-xs">TESTIMONIES</h1>
            <span className="w-3/5 border border-ceedrGray-100 "></span>
          </div>

          <h1 className="">
            Receipts? We&apos;ve Got Plenty.
            <br /> Don&apos;t Just Take Our Word for It.
          </h1>

          <div className="flex flex-col space-y-5 md:flex-row md:space-x-10 ">
            <div className="p-3 py-8 text-xs flex flex-col justify-between md:h-55 shadow-xl rounded-md bg-white">
              <div className="">
                <div className="text-ceedrYellow-100 mb-4 ">
                  <span>&#9733;</span>
                  <span>&#9733;</span>
                  <span>&#9733;</span>
                  <span>&#9733;</span>
                  <span>&#9733;</span>
                </div>
                <p className="mb-10 text-sm">
                  “My Ceedr CV got me 3 interviews in 2 weeks. Didn&apos;t
                  realize how off my old CV was until they rewrote it.”
                </p>
              </div>

              <div className="flex items-center space-x-3">
                <Image
                  src="/Testimony.png"
                  alt="Testimony 1"
                  width={50}
                  height={50}
                  className="rounded-full object-cover"
                />
                <div>
                  <h4 className="f font-bold">Dami,</h4>
                  <p className=" text-ceedrGray-100">
                    Graduate Trainee Applicant
                  </p>
                </div>
              </div>
            </div>

            <div className="p-3 py-8 text-xs flex flex-col justify-between md:h-55 shadow-xl rounded-md bg-white">
              <div className="">
                <div className="text-ceedrYellow-100 mb-4 ">
                  <span>&#9733;</span>
                  <span>&#9733;</span>
                  <span>&#9733;</span>
                  <span>&#9733;</span>
                  <span>&#9733;</span>
                </div>
                <p className="mb-10 text-sm">
                  “I used Ceedr for my MSc application, my SOP, CV and LinkedIn.
                  Got into UCL and Warwick.”
                </p>
              </div>

              <div className="flex items-center space-x-3">
                <Image
                  src="/Testimony.png"
                  alt="Testimony 1"
                  width={50}
                  height={50}
                  className="rounded-full object-cover"
                />
                <div>
                  <h4 className="f font-bold">Dami,</h4>
                  <p className=" text-ceedrGray-100">
                    Graduate Trainee Applicant
                  </p>
                </div>
              </div>
            </div>

            <div className="p-3 py-8 text-xs flex flex-col justify-between md:h-55 shadow-xl rounded-md bg-white">
              <div className="">
                <div className="text-ceedrYellow-100 mb-4 ">
                  <span>&#9733;</span>
                  <span>&#9733;</span>
                  <span>&#9733;</span>
                  <span>&#9733;</span>
                  <span>&#9733;</span>
                </div>
                <p className="mb-10 text-sm">
                  “Ceedr helped us write a solid pitch deck. Our first funding
                  round? Closed.”
                </p>
              </div>

              <div className="flex items-center space-x-3">
                <Image
                  src="/Testimony.png"
                  alt="Testimony 1"
                  width={50}
                  height={50}
                  className="rounded-full object-cover"
                />
                <div>
                  <h4 className="f font-bold">Dami,</h4>
                  <p className=" text-ceedrGray-100">
                    Graduate Trainee Applicant
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="process">
          <div className="flex text-ceedrGray-100 items-center my-3 space-x-4 md:pl-6">
            <h1 className="text-[10px]">OUR PROCESS</h1>
            <span className="border w-2/5  border-ceedrGray-100"></span>
          </div>

          <div className="grid grid-cols-1 gap-4 md:md:grid-cols-2  md:grid-rows-[auto_auto] md:gap-6 md:items-end md:justify-between">
            <h1 className="md:pl-10 order-1 md:order-1 md:col-span-1 md:text-left md:text-2xl md:w-2/4 text-ceedr-500">
              The Ceedr Process: Simple. Smart. Seamless
            </h1>

            <div className="order-2 md:order-3 md:col-span-2 bg-ceedrGray-200 p-4 relative pt-6 flex flex-col md:space-x-15 md:flex-row space-y-4 mb-6 md:p-7">
              <div className="text-xs md:text-sm flex flex-col md:w-1/5 space-y-4">
                <div className="md:flex items-center md:space-x-4">
                  <div className="text-center w-10 h-10 p-2 text-ceedr-200 text-xl bg-ceedr-500">
                    01
                  </div>
                  <div className="hidden md:block border-t-2 md:w-3/4 border-dashed"></div>
                </div>
                <p>
                  Tap WhatsApp or fill the request form to tell us what you
                  need.
                </p>
              </div>

              <div className="h-15 border-l  md:hidden  border-dashed"></div>

              <div className="text-xs flex flex-col md:text-sm md:w-1/5 space-y-4">
                <div className="md:flex items-center md:space-x-4">
                  <div className="text-center w-10 h-10 p-2 text-ceedr-200 text-xl bg-ceedr-500">
                    02
                  </div>
                  <div className="hidden md:block border-t-2 md:w-3/4 border-dashed"></div>
                </div>
                <p>
                  Let&apos;s Talk Goals <br /> Job? School? Pitch? Project?
                  We&apos;ll guide you on the best way to tell your story.
                </p>
              </div>

              <div className="h-15 border-l  md:hidden border-dashed"></div>

              <div className="text-xs flex flex-col md:text-sm md:w-1/5 space-y-4">
                <div className="md:flex items-center md:space-x-4">
                  <div className="text-center w-10 h-10 p-2 text-ceedr-200 text-xl bg-ceedr-500">
                    03
                  </div>
                  <div className="hidden md:block border-t-2 md:w-3/4 border-dashed"></div>
                </div>
                <p>
                  Approve & Proceed <br />
                  We share the plan, pricing, and timeline. You sign off, we get
                  to work.
                </p>
              </div>

              <div className="h-15 border-l md:hidden border-dashed"></div>

              <div className="text-xs flex flex-col md:text-sm md:w-1/5 space-y-4">
                <div className="md:flex items-center md:space-x-4">
                  <div className="text-center w-10 h-10 p-2 text-ceedr-200 text-xl bg-ceedr-500">
                    04
                  </div>
                </div>
                <p>
                  We Write. You Shine.
                  <br />
                  Receive polished content with support and revisions to match.
                </p>
              </div>

              <Image
                src="/backGroundVector.png"
                width={100}
                height={25}
                className="absolute hidden md:block right-4 top-0"
                priority
                alt="backgoundceedr"
              />
            </div>

            <div className="order-3 md:w-full md:flex md:flex-col md:pr-10 md:items-end md:order-2 md:col-span-1 w-60">
              <Button
                text="Work With Us"
                textColor="white"
                btnImage={false}
                backgroundColor="ceedr-500"
                className="md:w-1/2"
              />
            </div>
          </div>
        </section>

        <section className="p-2 flex flex-col md:ml-auto md:mr-auto md:flex-row md:p-10 md:justify-between space-y-4 items-center">
          <div className=" md:order-2 md:w-2/4 md:space-y-7 flex flex-col items-center space-y-3 ">
            <h1 className="text-ceedr-500 md:w-3/4 w-4/5 text-center md:text-3xl md:text-left">
              Let&apos;s Turn Your Goals Into Compelling Narratives
            </h1>
            <p className="text-center text-sm md:text-left md:text-xl md:font-normal md:w-2/5">
              Whether it&apos;s your first job or your next big deal, Ceedr has
              the words that open doors.
            </p>
            <div className="md:flex-row md:space-x-10 flex flex-col items-center w-3/4 space-y-4">
              <Button
                text="Start on whatsApp"
                btnImage={true}
                textColor="white"
                backgroundColor="ceedr-500"
                className="md:w-3/5 "
              />
              <Button
                text="Fill Request Form"
                btnImage={false}
                textColor="ceedr-500"
                backgroundColor="ceedr-200"
                className="md:w-2/5 "
              />
            </div>
          </div>
          <div className="md:order-1 md:w-2/5">
            <Image
              src="/bookPen.png"
              height={300}
              width={300}
              alt="Book and Pen"
              className="md:w-full hidden h-auto"
            />
            <Image
              src="/Rectangle 18.png"
              height={300}
              width={300}
              alt="Book and Pen"
              className="md:w-full md:block h-auto"
            />
          </div>
        </section>

        <div className="grid my-3 grid-cols-1 items-center gap-4 md:grid-cols-2 md:grid-rows-[auto,auto,auto] w-full md:p-10 md:min-h-auto">
          <div className="flex flex-col space-y-3 md:space-y-5 order-1 md:row-start-1 md:col-start-1">
            <div className="w-5/7 flex justify-center mt-6 text-ceedrGray-100 items-center space-x-4">
              <h1 className="text-[7px] md:text-[10px]">REQUEST FORM</h1>
              <span className="w-3/5 border border-ceedrGray-100 "></span>
            </div>
            <h1 className="text-xl font-medium text-ceedr-500">
              Service Request Form
            </h1>
            <p className="text-xs md:text-sm">
              Need Our Services? Let&apos;s Get Started
              <br />
              Fill out this quick form so we can understand what you need.
            </p>
          </div>

          <section className="requestForm order-2 md:row-start-1 md:row-span-3 md:col-start-2 h-full">
            <form
              onSubmit={handleSubmit}
              className="bg-ceedr-500 p-4 text-xs flex flex-col space-y-3 md:space-y-5"
            >
              <label
                htmlFor="name"
                className="text-white mb-1 md:mb-3 font-bold"
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
                className="p-2 focus:outline-ceedrGray-100 bg-white mb-2 w-full"
              />

              <label
                htmlFor="mail"
                className="text-white mb-1 md:my-3 font-bold"
              >
                Email Address:
              </label>
              <input
                type="text"
                id="mail"
                placeholder="Enter Email Address"
                className="p-2 focus:outline-ceedrGray-100 bg-white mb-2 w-full"
                value={formData.email}
                onChange={(e) =>
                  setformData({ ...formData, email: e.target.value })
                }
              />

              <label
                htmlFor="phoneNum"
                className="text-white mb-1 md:my-3 font-bold"
              >
                Phone Number (WhatsApp preferred):
              </label>
              <input
                type="text"
                id="phoneNum"
                placeholder="Enter Phone Number"
                className="p-2 focus:outline-ceedrGray-100 bg-white mb-2 w-full"
                value={formData.phone}
                onChange={(e) =>
                  setformData({ ...formData, phone: e.target.value })
                }
              />

              <label
                htmlFor="serviceSel"
                className="block text-sm md:my-3 text-white font-bold mb-1"
              >
                What service do you need?
              </label>
              <select
                id="serviceSel"
                value={formData.service}
                onChange={(e) =>
                  setformData({ ...formData, service: e.target.value })
                }
                className="block w-full border border-gray-300 md:my-3 bg-white py-2 px-3 shadow-sm focus:border-black focus:outline-none focus:ring-black text-sm"
              >
                <option value="">Select a service</option>
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
                className="text-white md:mb-3 font-bold"
                htmlFor="textArea"
              >
                Tell Us a Bit More (Optional)
              </label>
              <textarea
                id="textArea"
                placeholder="Tell Us More"
                className="p-2 mb-2 w-full bg-white focus:outline-ceedrGray-100 h-20"
                value={formData.moreInfo}
                onChange={(e) =>
                  setformData({ ...formData, moreInfo: e.target.value })
                }
              ></textarea>

              <label
                htmlFor="timeline"
                className="block md:my-3 text-xs font-bold text-white mb-1"
              >
                Preferred Delivery Timeline
              </label>

              <select
                value={formData.timeline}
                onChange={(e) =>
                  setformData({ ...formData, timeline: e.target.value })
                }
                className="block w-full border border-gray-300 md:my-3 bg-white py-2  px-3 shadow-sm focus:border-black focus:outline-none focus:ring-black text-sm"
              >
                <option value="">Choose a timeline</option>
                <option value="Urgent:1-2 days">Urgent:1-2 days</option>
                <option value="Normal Timeline">Normal Timeline</option>
              </select>

              <label className="block text-xs text-white md:my-3 font-bold mb-1">
                How Did You Hear About Ceedr?
              </label>
              <select
                className="block w-full border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-black focus:outline-none focus:ring-black text-sm"
                onChange={(e) =>
                  setformData({ ...formData, referral: e.target.value })
                }
              >
                <option value="">How did you hear about us?</option>
                <option value="Social Media">Social Media</option>
                <option value="Referral">Referral</option>
                <option value="Other">Other</option>
              </select>

              <button
                type="submit"
                className="bg-ceedr-200 text-ceedr-500 p-2 w-1/2"
              >
                Submit Request
              </button>
            </form>
          </section>

          <div
            id="contact"
            className="order-3 md:row-start-2 md:col-start-1 h-full flex flex-col space-y-7 md:mt-20"
          >
            <div className="w-5/7 flex text-ceedrGray-100 items-center space-x-4">
              <h1 className="text-[10px]">CONTACT</h1>
              <span className="w-3/5 border border-ceedrGray-100"></span>
            </div>
            <h1 className="text-ceedr-500 font-medium text-xl">
              Got Questions? We&apos;ve Got Pens
            </h1>
            <p className="text-xs md:text-sm">
              Have questions? Prefer to speak first? We&apos;re just a ping
              away.
            </p>
          </div>

          <div className="flex flex-col space-y-4 w-full md:w-1/2 order-4 md:row-start-3 md:col-start-1">
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
      </div>

      <footer className="bg-ceedr-500 p-4 flex space-y-7 w-full flex-col items-center text-center text-xs text-white">
        <Image
          src="/Frame 49.png"
          height={60}
          width={80}
          alt="ceedrLogo"
          className="border-white object-contain"
        />
        <h1 className=" font-medium md:text-3xl">
          We&apos;re not just service providers. <br /> We&apos;re your writing
          partners.
        </h1>
        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col space-y-2 md:flex-row md:w-1/2 md:space-x-6"
        >
          <input
            type="text"
            value={formData.newsLetterMail}
            onChange={(e) =>
              setformData({ ...formData, newsLetterMail: e.target.value })
            }
            className="bg-white text-ceedrGray-100 p-2 w-full md:w-3/4 h-8"
            placeholder="Enter full name"
          />
          <button
            className="bg-ceedr-200 w-full  text-ceedr-500 p-2 md:w-1/3 h-8"
            type="submit"
          >
            Subscribe to our newsletter
          </button>
        </form>
        <nav className="md:flex md:w-1/3 md:justify-between md:text-sm md:font-medium">
          <ul className="flex space-x-2 items-center justify-center md:space-x-6">
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

          <button onClick={scrollToTop} className="hidden md:block">
            Back to Top
          </button>
        </nav>
      </footer>
    </section>
  );
};

export default Page;
