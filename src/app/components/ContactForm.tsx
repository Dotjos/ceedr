import Image from "next/image";
import { Mail, Instagram, Twitter } from "lucide-react";
import { ContactCard, Button } from "../Components";

interface ContactFormProps {
    formData: any;
    setformData: (data: any) => void;
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export default function ContactForm({ formData, setformData, handleSubmit }: ContactFormProps) {
    return (
        <div id="request-form" className="grid md:mb-28 my-3 md:mt-25 grid-cols-1 items-center gap-4 lg:grid-cols-2 lg:grid-rows-[auto,auto,auto] w-full md:w-[90%] lg:w-[81%] mx-auto">
            <div className="flex w-9/10 md:w-full mx-auto flex-col mb-7 order-1 lg:row-start-1 lg:col-start-1">
                <div className="w-5/7 flex justify-center md:justify-start mt-6 md:mt-0 text-ceedrGray-100 items-center space-x-4">
                    <h1 className="font-poppins font-normal md:text-[18px] text-[10px] whitespace-nowrap">REQUEST FORM</h1>
                    <hr className="w-3/5 border-t border-ceedrGray-100" />
                </div>
                <h1 className="text-[22px] md:text-[36px] mt-3 mb-5 font-semibold font-bonche text-ceedr-500">
                    Need Our Services? Let Us Get Started
                </h1>
                <p className="text-[14px] font-poppins font-normal md:text-[18px]">
                    Need Our Services? Let us Get Started
                    <br />
                    Fill out this quick form so we can understand what you need.
                </p>
            </div>

            <section className="requestForm order-2 lg:row-start-1 lg:row-span-3 lg:col-start-2 h-full">
                <form
                    onSubmit={handleSubmit}
                    className="bg-ceedr-500 py-10 px-7 md:px-10 text-sm md:text-base flex flex-col space-y-4 md:space-y-6"
                >
                    {/* Name Field */}
                    <div className="flex flex-col">
                        <label htmlFor="name" className="text-white md:font-bonche font-poppins font-semibold text-sm md:text-lg mb-2">
                            Full Name:
                        </label>
                        <input
                            type="text"
                            id="name"
                            value={formData.name}
                            placeholder="Enter full name"
                            onChange={(e) => setformData({ ...formData, name: e.target.value })}
                            className="p-3 md:p-4 text-sm md:text-lg md:font-bonche focus:outline-ceedrGray-100 bg-white w-full"
                        />
                    </div>

                    {/* Email Field */}
                    <div className="flex flex-col">
                        <label htmlFor="mail" className="text-white md:font-bonche font-poppins font-semibold text-sm md:text-lg mb-2">
                            Email Address:
                        </label>
                        <input
                            type="text"
                            id="mail"
                            placeholder="Enter Email Address"
                            className="p-3 md:p-4 text-sm md:text-lg md:font-bonche focus:outline-ceedrGray-100 bg-white w-full"
                            value={formData.email}
                            onChange={(e) => setformData({ ...formData, email: e.target.value })}
                        />
                    </div>

                    {/* WhatsApp Field */}
                    <div className="flex flex-col">
                        <label htmlFor="phoneNum" className="text-white md:font-bonche font-poppins font-semibold text-sm md:text-lg mb-2">
                            WhatsApp Number:
                        </label>
                        <input
                            type="text"
                            id="phoneNum"
                            placeholder="Enter Phone Number"
                            className="p-3 md:p-4 text-sm md:text-lg md:font-bonche focus:outline-ceedrGray-100 bg-white w-full"
                            value={formData.phone}
                            onChange={(e) => setformData({ ...formData, phone: e.target.value })}
                        />
                    </div>

                    {/* Service Field */}
                    <div className="flex flex-col">
                        <label htmlFor="serviceSel" className="text-white md:font-bonche font-poppins font-semibold text-sm md:text-lg mb-2">
                            What service do you need?
                        </label>
                        <select
                            id="serviceSel"
                            value={formData.service}
                            onChange={(e) => setformData({ ...formData, service: e.target.value })}
                            className="block md:font-bonche font-normal text-[#939393] w-full border border-gray-300 font-poppins bg-white py-3 md:py-4 px-3 shadow-sm focus:border-black focus:outline-none focus:ring-black text-sm md:text-lg"
                        >
                            <option value="">Select Preferred Service</option>
                            <option value="CV/Resume">CV or Resume</option>
                            <option value="Cover Letter">Cover Letter</option>
                            <option value="LinkedIn Profile Optimization">LinkedIn Profile Optimization</option>
                            <option value="Final Year Project Writing">Final Year Project Writing</option>
                            <option value="Business Pitch Writing">Business Pitch Writing</option>
                            <option value="Statement Of Purpose(SOP)">Statement Of Purpose</option>
                            <option value="Editing/Proofreading">Editing and Proofreading</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                    {/* More Info Field */}
                    <div className="flex flex-col">
                        <label className="text-white md:font-bonche font-poppins font-semibold text-sm md:text-lg mb-2" htmlFor="textArea">
                            Tell us a Bit More Optional
                        </label>
                        <textarea
                            id="textArea"
                            placeholder="Tell Us More"
                            className="p-3 md:p-4 w-full text-sm md:text-lg md:font-bonche bg-white focus:outline-ceedrGray-100 h-24 md:h-32"
                            value={formData.moreInfo}
                            onChange={(e) => setformData({ ...formData, moreInfo: e.target.value })}
                        ></textarea>
                    </div>

                    {/* Timeline Field */}
                    <div className="flex flex-col">
                        <label htmlFor="timeline" className="text-white md:font-bonche font-poppins font-semibold text-sm md:text-lg mb-2">
                            Preferred Delivery Timeline
                        </label>
                        <select
                            value={formData.timeline}
                            onChange={(e) => setformData({ ...formData, timeline: e.target.value })}
                            className="block md:font-bonche w-full text-[#939393] font-normal border border-gray-300 font-poppins bg-white py-3 md:py-4 px-3 shadow-sm focus:border-black focus:outline-none focus:ring-black text-sm md:text-lg"
                        >
                            <option value="">Choose a timeline</option>
                            <option value="Urgent:1-2 days">Urgent: 1 to 2 days</option>
                            <option value="Normal Timeline">Normal Timeline</option>
                        </select>
                    </div>

                    {/* Referral Field */}
                    <div className="flex flex-col">
                        <label className="text-white md:font-bonche font-poppins font-semibold text-sm md:text-lg mb-2">
                            How Did You Hear About Ceedr?
                        </label>
                        <select
                            className="block md:font-bonche w-full text-[#939393] font-normal border border-gray-300 bg-white py-3 md:py-4 px-3 shadow-sm focus:border-black focus:outline-none focus:ring-black text-sm md:text-lg"
                            onChange={(e) => setformData({ ...formData, referral: e.target.value })}
                        >
                            <option value="Social Media">Social Media</option>
                            <option value="Referral">Referral</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                    <Button
                        text="Submit Form"
                        variant="secondary"
                        type="submit"
                        className="mt-4 md:mt-8 font-bonche md:py-5 md:text-xl"
                    />
                </form>
            </section>

            {/* Contact Section */}
            <div id="contact" className="order-3 md:w-full w-9/10 mx-auto lg:row-start-2 lg:col-start-1 h-full flex flex-col mt-10 md:mt-20">
                <div className="w-5/7 flex mb-2 text-ceedrGray-100 items-center space-x-4">
                    <h1 className="text-[11px] font-poppins md:text-[18px] font-normal">CONTACT</h1>
                    <hr className="w-3/5 border-t border-ceedrGray-100" />
                </div>
                <h1 className="text-ceedr-500 md:text-[36px] mb-4 font-semibold text-[22px] font-bonche">
                    Got Questions? We Have Got Pens
                </h1>
                <p className="text-[14px] md:text-[18px] font-normal font-poppins">
                    Have questions? Prefer to speak first? We are just a ping away.
                </p>
            </div>

            <div className="flex w-9/10 mx-auto md:mx-0 flex-col space-y-4 mb-10 md:mb-0 md:w-3/5 order-4 lg:row-start-3 lg:col-start-1">
                <ContactCard
                    icon={<Mail size={24} />}
                    smText="Email"
                    address="contact@ceedr.com.ng"
                />
                <ContactCard
                    icon={<Image src="/Digital_Glyph_White.svg" alt="WhatsApp" width={24} height={24} className="object-contain" />}
                    smText="WhatsApp"
                    address="wa.link/ceedr"
                    href="https://wa.link/otpw1g"
                />
                <ContactCard
                    icon={<Instagram size={24} />}
                    smText="Instagram"
                    address="@ceedrconsults"
                    href="https://www.instagram.com/ceedrconsults?igsh=anZlcHEyZzhkaXAw"
                />
                <ContactCard
                    icon={<Twitter size={24} />}
                    smText="Twitter"
                    address="@ceedrconsults"
                    href="https://x.com/CeedrConsults"
                />
            </div>
        </div>
    );
}
