import Image from "next/image";
import { Button } from "../Components";

interface ProcessProps {
    onNavItemClick: (e: React.MouseEvent<HTMLElement>) => void;
}

export default function Process({ onNavItemClick }: ProcessProps) {
    return (
        <section className="process mt-10 md:mt-20 w-full">
            <div className="flex md:w-[78%] md:mx-auto text-ceedrGray-100 items-center my-3 space-x-4 px-5 md:px-0">
                <h1 className="text-[10px] md:font-normal font-poppins md:text-[18px]">OUR PROCESS</h1>
                <hr className="w-[55%] md:w-[25%] border-t border-ceedrGray-100" />
            </div>

            <div className="w-full">
                <div className="md:w-[78%] md:mx-auto grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 items-end justify-between mb-6 px-5 md:px-0">
                    <h1 className="order-1 md:col-span-1 md:text-4xl font-bonche md:text-left text-2xl font-semibold text-ceedr-500 max-w-[300px] md:max-w-md">
                        The Ceedr Process: <br /> Simple. Smart. Seamless
                    </h1>

                    <div className="order-3 md:order-2 md:col-span-1 w-full flex flex-col md:items-end">
                        <Button
                            text="Work With Us"
                            href="#request-form"
                            onClick={onNavItemClick}
                            className="w-3/5 md:py-5 md:text-xl font-bonche"
                        />
                    </div>
                </div>

                <div className="bg-ceedrGray-200 p-9 md:p-20 relative pt-10 flex flex-col md:flex-row space-y-4 md:space-y-0 md:justify-center mb-4">
                    <div className="md:w-[78%] md:mx-auto flex flex-col md:flex-row md:space-x-8 lg:space-x-15">
                        {/* Step 01 */}
                        <div className="text-xs md:text-sm flex flex-col md:w-1/3 space-y-6">
                            <div className="md:flex items-center md:space-x-4">
                                <div className="w-fit p-2 md:p-4 text-ceedr-200 text-2xl md:text-[30px] font-semibold font-bonche bg-ceedr-500">
                                    <span>01</span>
                                </div>
                                <div className="hidden md:block border-t-2 md:border-t-3 md:w-3/4 border-dashed border-ceedrGray-100"></div>
                            </div>
                            <p className="font-normal text-[14px] md:text-[18px] font-poppins text-black">
                                Tap WhatsApp or fill the request form to tell us what you need.
                            </p>
                        </div>

                        <div className="h-20 border-l-3 md:hidden border-dashed border-ceedrGray-100"></div>

                        {/* Step 02 */}
                        <div className="text-xs md:text-sm flex flex-col md:w-1/3 space-y-6">
                            <div className="md:flex items-center md:space-x-4">
                                <div className="w-fit p-2 md:p-4 text-ceedr-200 text-2xl md:text-[30px] font-semibold font-bonche bg-ceedr-500">
                                    <span>02</span>
                                </div>
                                <div className="hidden md:block border-t-2 md:border-t-3 md:w-3/4 border-dashed border-ceedrGray-100"></div>
                            </div>
                            <p className="font-normal text-[14px] md:text-[18px] font-poppins text-black">
                                Let us Talk Goals <br /> Job? School? Pitch? Project?
                                We will guide you on the best way to tell your story.
                            </p>
                        </div>

                        <div className="h-20 border-l-3 md:hidden border-dashed border-ceedrGray-100"></div>

                        {/* Step 03 */}
                        <div className="text-xs md:text-sm flex flex-col md:w-1/3 space-y-6">
                            <div className="md:flex items-center md:space-x-4">
                                <div className="w-fit p-2 md:p-4 text-ceedr-200 text-2xl md:text-[30px] font-semibold font-bonche bg-ceedr-500">
                                    <span>03</span>
                                </div>
                            </div>
                            <p className="font-normal text-[14px] md:text-[18px] font-poppins text-black">
                                Approve & Proceed <br />
                                We share the plan, pricing, and timeline. You sign off, we get to work.
                            </p>
                        </div>
                    </div>

                    <Image
                        src="/backGroundVector.png"
                        width={100}
                        height={25}
                        className="absolute hidden md:block right-4 top-0 md:w-[138px] md:h-[140px]"
                        priority
                        alt="backgoundceedr"
                    />
                </div>
            </div>
        </section>
    );
}
