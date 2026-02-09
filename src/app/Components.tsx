"use client"
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export function Navbar({ onNavItemClick }: { onNavItemClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  return (
    <nav className="bg-white w-9/10 py-4 px-4 md:px-7 lg:px-20 md:py-4 flex justify-between items-center md:mt-8 mt-4 relative">
      <Link href="">
        <div className="h-[32.2px] w-20 md:h-[50px] relative lg:ml-10">
          <Image
            src="/Group 4ceedr.png"
            alt="Ceedr Logo"
            fill
            priority
            className="object-contain"
          />
        </div>
      </Link>

      {!isMenuOpen &&
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden z-50 focus:outline-none"
        >
          <Image
            src="/Menu.png"
            alt="Menu Logo"
            width={32}
            height={32}
            className="object-contain"
          />
        </button>
      }

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-ceedr-500 flex flex-col items-center justify-center space-y-8 lg:hidden transition-transform duration-300 ease-in-out overflow-y-auto max-h-screen ${isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <button
          className="absolute top-6 right-6 text-4xl font-light text-white"
          onClick={() => setIsMenuOpen(false)}
        >
          &times;
        </button>
        <ul className="flex flex-col space-y-8 text-center text-white font-playfair font-medium text-3xl">
          <li>
            <a
              href="#services"
              onClick={(e) => {
                setIsMenuOpen(false);
                onNavItemClick?.(e);
              }}
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#testimonials"
              onClick={(e) => {
                setIsMenuOpen(false);
                onNavItemClick?.(e);
              }}
            >
              Testimonials
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={(e) => {
                setIsMenuOpen(false);
                onNavItemClick?.(e);
              }}
            >
              Contact
            </a>
          </li>
        </ul>

        <a
          href="https://wa.link/otpw1g"
          target="_blank"
          rel="noopener noreferrer"
          className="flex border font-semibold text-xs items-center space-x-3 border-wa-green text-white py-3 px-8 mt-8 border-white"
        >
          <div className="relative w-6 h-6">
            <Image
              src="/white-whatsApp-icon.png"
              alt="WhatsApp Icon"
              fill
              className="object-contain"
            />
          </div>
          <p className="font-poppins">Chat With Us on WhatsApp</p>
        </a>
      </div>

      <div className="lg:flex lg:w-3/5 font-semibold hidden lg:justify-around lg:text-sm">
        <ul className="flex space-x-2 items-center justify-center lg:space-x-10">
          <li>
            <a
              href="#services"
              onClick={onNavItemClick}
              className="hover:underline"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#testimonials"
              onClick={onNavItemClick}
              className="hover:underline"
            >
              Testimonials
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={onNavItemClick}
              className="hover:underline"
            >
              Contact
            </a>
          </li>
        </ul>


      </div>

      <a
        href="https://wa.link/otpw1g"
        target="_blank"
        rel="noopener noreferrer"
        className="hidden border font-semibold lg:w-fit lg:flex text-xs items-center lg:space-x-4 space-x-2 border-ceedr-500 text-ceedr-500 py-2 md:px-4"
      >
        <Image
          src="/whatsapp-2.png"
          alt="WhatsApp Icon"
          width={24}
          height={24}
          className="inline-block ml-2 border object-contain"
        />
        <p className="">Chat With Us on WhatsApp</p>
      </a>
    </nav >
  );
}

interface ButtonProps {
  text: string;
  textColor: string;
  btnImage: boolean;
  backgroundColor: string;
  className?: string;
}

interface contactCardProps {
  imgPath: string;
  smText: string;
  address: string;
  href?: string;
}

export function ContactCard({ imgPath, smText, address, href }: contactCardProps) {
  const content = (
    <div className="bg-white p-3 border flex text-xs w-full space-x-3 h-full">
      <div className="bg-ceedr-500 p-2 border flex items-center justify-center">
        <Image
          src={imgPath}
          alt="Contact Icon"
          width={24}
          height={24}
          className="object-contain"
        />
      </div>
      <div className="flex flex-col justify-center">
        <h1 className="font-semibold">{smText}</h1>
        <h1 className="text-ceedrGray-100">{address}</h1>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="block w-full">
        {content}
      </a>
    );
  }

  return content;
}

export function Footer() { }
