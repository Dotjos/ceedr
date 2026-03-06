"use client"
import { useState, useCallback } from "react";
import { Navbar } from "./Components";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Impact from "./components/Impact";
import Testimonials from "./components/Testimonials";
import Process from "./components/Process";
import Narrative from "./components/Narrative";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

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

  return (
    <main className="md:w-full items-center flex flex-col">
      <section className="w-full flex flex-col items-center">
        <Navbar onNavItemClick={handleLinkClick} />

        <Hero onNavItemClick={handleLinkClick} />

        <div className="w-9/10 flex flex-col space-y-4 items-center justify-center">
          <Services />
          <Impact />
        </div>

        <Testimonials />

        <Process onNavItemClick={handleLinkClick} />

        <Narrative />

        <ContactForm
          formData={formData}
          setformData={setformData}
          handleSubmit={handleSubmit}
        />

        <Footer
          formData={formData}
          setformData={setformData}
          handleSubmit={handleSubmit}
          scrollToTop={scrollToTop}
        />
      </section>
    </main>
  );
};

export default Page;
