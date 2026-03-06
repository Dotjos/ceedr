import Image from "next/image";
import { testimonials } from "../constants/data";

export default function Testimonials() {
    return (
        <section id="testimonials" className="testimonies md:w-[78%] md:py-10">
            <div className="w-5/7 flex text-ceedrGray-100 items-center mt-3 mb-2 space-x-3">
                <h1 className="text-xs md:text-[18px] font-poppins">TESTIMONIES</h1>
                <hr className="w-[55%] md:w-[37%] border-t border-ceedrGray-100" />
            </div>

            <h1 className="font-playfair md:text-4xl font-semibold text-2xl md:text-[36px] text-left">
                Receipts? We have Got Plenty.
                <br /> Do not Just Take Our Word for It.
            </h1>

            <div className="flex flex-col space-y-5 lg:flex-row lg:space-x-10">
                {testimonials.map((testimonial, index) => (
                    <div
                        key={index}
                        className="p-4 py-8 mt-8 lg:flex-1 text-xs flex flex-col justify-between h-auto md:h-[400px] shadow-xl bg-white"
                    >
                        <div>
                            <div className="text-ceedrYellow-100 mb-5">
                                {[...Array(5)].map((_, i) => (
                                    <span key={i} className="text-[15px] h-3.5 w-3.5">&#9733;</span>
                                ))}
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
    );
}
