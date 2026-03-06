import Image from "next/image";
import { Button } from "../Components";

export default function Narrative() {
    return (
        <section className="mt-16 w-9/10 md:w-[90%] lg:w-[81%] mx-auto flex flex-col md:flex-row md:justify-between md:space-y-0 space-y-10 items-center">
            <div className="md:order-2 p-2 md:w-1/2 lg:w-[52%] md:space-y-8 flex flex-col items-center md:items-start space-y-5">
                <h1 className="font-playfair text-ceedr-500 w-full font-semibold text-[22px] md:text-4xl lg:text-5xl text-center md:text-left">
                    Let us Turn Your Goals Into Compelling Narratives
                </h1>
                <p className="text-center text-sm md:text-left md:text-lg lg:text-xl font-normal">
                    Whether it is your first job or your next big deal, Ceedr has
                    the words that open doors.
                </p>
                <div className="lg:flex-row lg:space-x-4 flex flex-col items-center w-3/5 md:w-full lg:space-y-0 space-y-4">
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
    );
}
