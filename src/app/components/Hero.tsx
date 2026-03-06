import Image from "next/image";
import { Button } from "../Components";

interface HeroProps {
    onNavItemClick: (e: React.MouseEvent<HTMLElement>) => void;
}

export default function Hero({ onNavItemClick }: HeroProps) {
    return (
        <section className="font-bonche text-xs h-full flex flex-col w-full justify-between items-center text-center pb-10">
            <div className="p-0 mt-12 md:p-3 flex md:mt-20 md:mb-10 mb-10 flex-col md:space-y-7 space-y-5 items-center">
                <h3 className="text-[28px] text-center w-4/5 mb-10 leading-9 font-semibold md:leading-16 md:text-5xl text-ceedr-500">
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
                <p className="md:text-[18px] w-4/5 md:w-3/5 text-[14px] text-black leading-5 font-poppins font-normal">
                    At Ceedr, we do not just write documents, we shape your career
                    narrative. From standout CVs to academic finesse and business
                    proposals that seal deals, Ceedr helps you write your way up.
                </p>
                <p className="md:text-[18px] w-4/5 md:w-3/5 text-[14px] text-black leading-5 font-poppins font-normal">
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
                    onClick={onNavItemClick}
                    className="w-full md:w-auto"
                />
            </div>

            <div className="relative mt-10 md:mt-0 w-full h-[300px] md:w-4/5 md:h-[500px] md:-mb-[300px] ml-auto mr-auto">
                <Image
                    src="/BlueShirt.png"
                    alt="Guy in blue shirt"
                    priority
                    fill
                    className="block md:hidden"
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
    );
}
