import Image from "next/image";
import { Button } from "../Components";

interface FooterProps {
    formData: any;
    setformData: (data: any) => void;
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    scrollToTop: () => void;
}

export default function Footer({ formData, setformData, handleSubmit, scrollToTop }: FooterProps) {
    return (
        <footer className="bg-ceedr-500 py-15 px-5 flex space-y-7 md:space-y-5 w-full flex-col items-center text-center text-xs text-white">
            <Image
                src="/Frame 49.svg"
                height={100}
                width={100}
                alt="ceedrLogo"
                className="border-white object-contain"
            />
            <h1 className="font-semibold font-bonche md:mb-9 text-[22px] md:text-3xl">
                We are not just service providers. <br /> We are your writing partners.
            </h1>
            <form
                onSubmit={handleSubmit}
                className="w-full mb-12 flex flex-col space-y-4 md:space-y-0 md:space-x-4 md:flex-row md:w-3/4 lg:w-1/2"
            >
                <input
                    type="text"
                    value={formData.newsLetterMail}
                    onChange={(e) => setformData({ ...formData, newsLetterMail: e.target.value })}
                    className="bg-white text-ceedrGray-100 p-3 w-full md:w-3/5"
                    placeholder="Enter your email"
                />
                <Button
                    text="Subscribe to our newsletter"
                    variant="secondary"
                    type="submit"
                    className="w-full md:w-auto font-bonche h-full p-3 md:px-5"
                />
            </form>
            <nav className="md:flex md:space-x-40 md:text-[18px] md:font-medium">
                <ul className="flex space-x-9 font-semibold text-[16px] font-bonche items-center justify-center md:space-x-6">
                    <li><a href="#services" className="hover:underline">Services</a></li>
                    <li><a href="#testimonials" className="hover:underline">Testimonials</a></li>
                    <li><a href="#contact" className="hover:underline">Contact</a></li>
                </ul>
                <button onClick={scrollToTop} className="hidden hover:underline font-bonche md:block">
                    Back to Top
                </button>
            </nav>
        </footer>
    );
}
