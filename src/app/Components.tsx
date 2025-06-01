import Image from "next/image";
import Link from "next/link";


export function Navbar(){
   return <nav className="bg-white flex justify-between items-center p-3 w-full">
          <Link href="">
          <div className=" h-6 w-15 relative md:h-10 md:w-25 md:ml-10">
            <Image src="/ceedrLogo.png" alt="Ceedr Logo" fill priority className="md:h-12 border"/>
          </div>
          </Link>
          
            <Image src="/Menu.png" alt="Menu Logo" width={20} height={50} className="md:hidden" />
            
            <nav className="md:flex md:w-3/5 text-ceedr-500 hidden md:justify-around md:text-sm md:font-medium">
                <ul className="flex space-x-2 items-center justify-center md:space-x-10">
                 <li>
                   <a href="#services" className="hover:underline">Services</a>
                 </li>
                 <li>
                   <a href="#testimonials" className="hover:underline">Testimonials</a>
                 </li>
                 <li>
                  <a href="#contact" className="hover:underline">Contact</a>
                 </li>
                </ul>

                <button className="border flex text-xs items-center space-x-4 border-ceedr-500 text-ceedr-500 p-3">
                    <Image src="/whatsapp500.png" alt="WhatsApp Icon" width={20} height={10} className="inline-block ml-2" />
                    <p>Chat With Us on WhatsApp</p>
                    </button>

      </nav>
         </nav>
}

interface ButtonProps{
    text:string
    textColor:string
    btnImage:boolean
    backgroundColor:string
    className?:string
}

export function Button({text,textColor,btnImage,backgroundColor,className}: ButtonProps){
    return  <button className={`bg-${backgroundColor} md:text-xl text-center text-${textColor} flex items-center justify-center px-5 w-6/7 space-x-2 py-3 ${className}`}>
       {btnImage? <Image className="" src="/white-whatsApp-icon.png" alt="button image" width={20} height={10}/>:""}
       <span className="inline-block text-[9px]">{text}</span>
    </button>
}

interface contactCardProps {
    imgPath:string
    smText:string
    address:string
}

export function ContactCard({imgPath,smText,address}:contactCardProps){
    return <div className="bg-white p-3 border flex text-xs w-full space-x-3">
        <Image src={imgPath} alt="Ceedr Logo" width={40} height={15} className="bg-ceedr-500 p-2 border" />
        <div className="flex flex-col justify-center">
            <h1>{smText}</h1>
            <h1>{address}</h1>
        </div>
    </div>
}

export function Footer(){}