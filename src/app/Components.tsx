import Image from "next/image";
import Link from "next/link";

export function Navbar() {
  return (
    <nav className="bg-white w-9/10 py-4 px-4 md:px-20 md:py-4 flex justify-between items-center md:mt-8 mt-4">
      <Link href="">
        <div className="h-[32.2px] w-20 md:h-[50px] relative md:ml-10">
          <Image
            src="/Group 4ceedr.png"
            alt="Ceedr Logo"
            fill
            priority
            className="object-contain"
          />
        </div>
      </Link>

      <Image
        src="/Menu.png"
        alt="Menu Logo"
        width={32}
        height={32}
        className="md:hidden object-contain"
      />

      <div className="md:flex md:w-3/5 font-semibold hidden md:justify-around md:text-sm">
        <ul className="flex space-x-2 items-center justify-center md:space-x-10">
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


      </div>

      <button className="hidden border font-semibold md:flex text-xs items-center space-x-4 border-ceedr-500 text-ceedr-500 py-2 px-8">
        <Image
          src="/whatsapp-2.png"
          alt="WhatsApp Icon"
          width={24}
          height={24}
          className="inline-block ml-2 object-contain"
        />
        <p>Chat With Us on WhatsApp</p>
      </button>
    </nav>
  );
}

interface ButtonProps {
  text: string;
  textColor: string;
  btnImage: boolean;
  backgroundColor: string;
  className?: string;
}

export function Button({
  text,
  textColor,
  btnImage,
  backgroundColor,
  className,
}: ButtonProps) {
  return (
    <button
      className={`bg-${backgroundColor} py-2 px-4 md:text-xl text-center text-${textColor} flex space-x-3 items-center justify-center ${className}`}
    >
      {btnImage && (
        <Image
          className="object-contain"
          src="/white-whatsApp-icon.png"
          alt="button image"
          width={20}
          height={10}
        />
      )}
      <span className="text-[9px] mt-1">{text}</span>
    </button>
  );
}

interface contactCardProps {
  imgPath: string;
  smText: string;
  address: string;
}

export function ContactCard({ imgPath, smText, address }: contactCardProps) {
  return (
    <div className="bg-white p-3 border flex text-xs w-full space-x-3">
      <Image
        src={imgPath}
        alt="Ceedr Logo"
        width={40}
        height={15}
        className="bg-ceedr-500 p-2 border object-contain"
      />
      <div className="flex flex-col justify-center">
        <h1>{smText}</h1>
        <h1>{address}</h1>
      </div>
    </div>
  );
}

export function Footer() { }
