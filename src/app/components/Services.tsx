import Image from "next/image";

export default function Services() {
    return (
        <section id="services" className="services flex flex-col md:items-center items-start mt md:mt-96">
            <div className="w-5/7 md:w-[78%] font-poppins my-2.5 flex text-[10px] text-ceedrGray-100 items-center space-x-3">
                <h1 className="text-ceedrGray-100 font-normal text-[10px] md:text-[18px]">SERVICES</h1>
                <hr className="w-4/5 md:w-1/5 border-t border-ceedrGray-100" />
            </div>
            <h1 className="mb-7 md:mb-12 md:w-[78%] md:text-4xl font-bonche font-semibold text-2xl">
                From Projects to Pitches,<br /> We Have Got Your Back
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {/* Academic Writing */}
                <div className="bg-ceedr-500 relative text-white space-y-8 text-xs min-h-[500px] px-6 pt-6 flex flex-col">
                    <div className="flex space-x-3 font-bonche items-end">
                        <div className="bg-ceedr-200 text-ceedr-500 flex items-center justify-center font-semibold text-2xl md:text-[30px]">
                            <span className="py-2 px-3">01</span>
                        </div>
                        <h1 className="font-semibold text-[18px] md:text-[24px]">Academic Writing</h1>
                    </div>
                    <p className="font-poppins font-normal text-[14px] md:text-[18px] leading-5 md:leading-7">
                        Whether you are stuck on your project topic or need a full
                        final-year research guide, Ceedr delivers clarity, structure,
                        and polish.
                    </p>
                    <ul className="list-disc pl-5 font-poppins font-normal text-[14px] md:text-[18px] leading-5 md:leading-7">
                        <li>Full academic projects (UG & PG)</li>
                        <li>Research topic selection & guidance</li>
                        <li>SPSS & data analysis</li>
                        <li>Editing, proofreading & structuring</li>
                        <li>Statement of Purpose (SOP) writing</li>
                        <li>Personal statements & scholarship letters</li>
                    </ul>
                    <div className="absolute bottom-0 right-4 opacity-50 md:opacity-100">
                        <Image
                            src="/vectorLemon.png"
                            width="100"
                            height="100"
                            alt="lemonCeedr"
                            className="md:w-[130px] md:h-[50px]"
                        />
                    </div>
                </div>

                {/* Career Writing */}
                <div className="bg-ceedr-200 min-h-[500px] relative text-ceedr-500 text-xs px-6 pt-6 flex flex-col space-y-5 md:space-y-11">
                    <div className="flex space-x-3 font-bonche items-end">
                        <div className="text-ceedr-200 md:text-[30px] bg-ceedr-500 flex items-center justify-center font-semibold text-2xl">
                            <span className="py-2 px-3">02</span>
                        </div>
                        <h1 className="font-semibold md:text-[24px] text-[18px]">Career Writing</h1>
                    </div>
                    <p className="font-poppins my-4 font-normal md:my-0 text-[14px] md:text-[18px] leading-5 md:leading-7">
                        Get noticed by recruiters with writing that positions you, not
                        just describes you.
                    </p>
                    <ul className="list-disc pl-5 font-poppins mt-2 md:mt-6 font-normal text-[14px] md:text-[18px] leading-5 md:leading-7">
                        <li>ATS-compliant CVs</li>
                        <li>Cover letters that connect</li>
                        <li>LinkedIn optimization & profile revamps</li>
                    </ul>
                    <div className="absolute bottom-0 right-4 opacity-50 md:opacity-100">
                        <Image
                            src="/Vectorceedr.png"
                            width="100"
                            height="100"
                            alt="greenCeedr"
                            className="md:w-[130px] md:h-[80px]"
                        />
                    </div>
                </div>

                {/* Business and Professional Writing */}
                <div className="bg-ceedrBrown-100 relative text-white text-xs min-h-[500px] px-6 pt-6 flex flex-col">
                    <div className="flex space-x-3 font-bonche items-end">
                        <div className="bg-white text-ceedrBrown-100 flex items-center justify-center font-semibold text-2xl md:text-[30px]">
                            <span className="py-2 px-3">03</span>
                        </div>
                        <h1 className="font-semibold md:text-[24px] text-[18px]">Business and Professional Writing</h1>
                    </div>
                    <p className="font-poppins font-normal mt-8 md:mt-10 md:mb-8 mb-6 text-[14px] md:text-[18px] leading-5 md:leading-7">
                        Ideas do not fund themselves. We help you pitch them right.
                    </p>
                    <ul className="list-disc pl-5 font-poppins mb-6 font-normal text-[14px] md:text-[18px] leading-5 md:leading-7">
                        <li>Business proposals & concept notes</li>
                        <li>Pitch decks (designed & written)</li>
                        <li>Company profiles</li>
                        <li>Executive bios</li>
                        <li>Email copy & brand messaging</li>
                    </ul>
                    <div className="absolute bottom-0 right-4 opacity-50 md:opacity-100">
                        <Image
                            src="/ vectorceedrwhite.png"
                            width="100"
                            height="100"
                            alt="whiteCeedr"
                            className="md:w-[130px] md:h-[100px] whiteCeedr"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
