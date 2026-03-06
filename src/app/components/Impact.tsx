import Image from "next/image";

export default function Impact() {
    return (
        <section className="bg-ceedrGray-200 mt-20 md:w-full pb-4 px-5 pt-6 flex flex-col space-y-8 md:flex-row md:p-0 md:py-8 md:px-10 lg:justify-between lg:space-x-9 lg:space-y-0 md:items-center overflow-hidden">
            <div className="md:w-[45%] flex flex-col">
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
                                    src="/Check.svg"
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
                    We are not just service providers. We are your writing partners.
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
    );
}
