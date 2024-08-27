import Image from "next/image"
import Check from '../../public/assets/check.svg'

export function Pricing() {

    return(
        <div className="py-[48px] lg:py-[60px]">
            <div>
                <h1 className="text-[#172026] text-center font-medium text-2xl lg:text-[42px]">Flexible plans for you</h1>
                <p className="pt-[16px] pb-[40px] text-center text-[#36485C] lg:text-[18px] ">No hidden fees!</p>

                
                <div className="flex flex-col gap-y-6 lg:flex-row gap-x-[24px]">  {/* div wrapper for tge 3 cards */}

                    <div className="w-full rounded-[8px] bg-[#e7e6f7] p-6 flex flex-col lg:justify-between shadow-xl">  {/* 1st card */}
                        <div>
                            <h3 className="font-medium text-[#4328EB] text-[18px] lg:text-xl">Free Trial</h3>
                            <p className="pt-[12px] text-[#36485C] lg:text-[18px]">Perfect for testing the waters</p>
                            <h2 className="pt-4 text-2xl font-medium lg:text-[42px]">$0<span className="text-[#5F7896]">/month</span></h2>
                            <ul className="flex flex-col gap-y-2 pt-[16px] text-[#485a71]">
                                <li className="flex items-center gap-x-3">
                                    <span><Image src={Check} alt="check" /></span>
                                    lorem ipsum dolor!!
                                </li>
                                <li className="flex items-center gap-x-3">
                                    <span><Image src={Check} alt="check" /></span>
                                    lorem ipsum dolor!!
                                </li>
                                <li className="flex items-center gap-x-3">
                                    <span><Image src={Check} alt="check" /></span>
                                    lorem ipsum dolor!!
                                </li>
                                <li className="flex items-center gap-x-3">
                                    <span><Image src={Check} alt="check" /></span>
                                    lorem ipsum dolor!!
                                </li>
                            </ul>
                        </div>
                        <button className="mt-[16px] rounded-[4px] bg-white py-[14px] text-[#4328EB] font-medium">Start Trial</button>
                    </div>

                    <div className="w-full rounded-[8px] bg-[#4328EB] p-6 flex flex-col lg:justify-between shadow-xl">  {/* 2nd card */}
                        <div>
                            <h3 className="font-medium text-[#ffffff] text-[18px] lg:text-xl">Business</h3>
                            <p className="pt-[12px] text-[#F4F8FA] lg:text-[18px]">Perfect for small businesses</p>
                            <h2 className="pt-4 text-2xl font-medium lg:text-[42px] text-white">$100<span className="text-[#F4F8FA]">/month</span></h2>
                            <ul className="flex flex-col gap-y-2 pt-[16px] text-[#F4F8FA]">
                                <li className="flex items-center gap-x-3">
                                    <span><Image src={Check} alt="check" /></span>
                                    lorem ipsum dolor!!
                                </li>
                                <li className="flex items-center gap-x-3">
                                    <span><Image src={Check} alt="check" /></span>
                                    lorem ipsum dolor!!
                                </li>
                                <li className="flex items-center gap-x-3">
                                    <span><Image src={Check} alt="check" /></span>
                                    lorem ipsum dolor!!
                                </li>
                                <li className="flex items-center gap-x-3">
                                    <span><Image src={Check} alt="check" /></span>
                                    lorem ipsum dolor!!
                                </li>
                                <li className="flex items-center gap-x-3">
                                    <span><Image src={Check} alt="check" /></span>
                                    lorem ipsum dolor!!
                                </li>
                                <li className="flex items-center gap-x-3">
                                    <span><Image src={Check} alt="check" /></span>
                                    lorem ipsum dolor!!
                                </li>
                            </ul>
                        </div>
                        <button className="mt-[16px] rounded-[4px] bg-white py-[14px] text-[#4328EB] font-medium">Get Started</button>
                    </div>

                    <div className="w-full rounded-[8px] bg-[#e7e6f7] p-6 flex flex-col lg:justify-between shadow-xl">  {/* 3rd card */}
                        <div>
                            <h3 className="font-medium text-[#4328EB] text-[18px] lg:text-xl">Enterprise</h3>
                            <p className="pt-[12px] text-[#36485C] lg:text-[18px]">Perfect for large businesses</p>
                            <h2 className="pt-4 text-2xl font-medium lg:text-[42px]">$300<span className="text-[#5F7896]">/month</span></h2>
                            <ul className="flex flex-col gap-y-2 pt-[16px] text-[#485a71]">
                                <li className="flex items-center gap-x-3">
                                    <span><Image src={Check} alt="check" /></span>
                                    lorem ipsum dolor!!
                                </li>
                                <li className="flex items-center gap-x-3">
                                    <span><Image src={Check} alt="check" /></span>
                                    lorem ipsum dolor!!
                                </li>
                                <li className="flex items-center gap-x-3">
                                    <span><Image src={Check} alt="check" /></span>
                                    lorem ipsum dolor!!
                                </li>
                                <li className="flex items-center gap-x-3">
                                    <span><Image src={Check} alt="check" /></span>
                                    lorem ipsum dolor!!
                                </li>
                                <li className="flex items-center gap-x-3">
                                    <span><Image src={Check} alt="check" /></span>
                                    lorem ipsum dolor!!
                                </li>
                                <li className="flex items-center gap-x-3">
                                    <span><Image src={Check} alt="check" /></span>
                                    lorem ipsum dolor!!
                                </li>
                                <li className="flex items-center gap-x-3">
                                    <span><Image src={Check} alt="check" /></span>
                                    lorem ipsum dolor!!
                                </li>
                            </ul>
                        </div>
                        <button className="mt-[16px] rounded-[4px] bg-white py-[14px] text-[#4328EB] font-medium">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    )
}