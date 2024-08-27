import Image from 'next/image'
import Feature1 from '../../public/assets/feature-1.svg'
import Feature2 from '../../public/assets/feature-2.svg'
import Feature3 from '../../public/assets/feature-3.svg'
import Check from '../../public/assets/check.svg'
import BlueButton from '../../public/assets/blue-button.svg'
import GreenButton from '../../public/assets/green-button.svg'
import PinkButton from '../../public/assets/pink-button.svg'

export function Features() {

    return(
        <div className="flex flex-col gap-y-[56px] py-[56px] lg:py-[120px] lg:gap-y-[20px]">  {/* Main Wrapper */}


            <div className="flex flex-col sm:flex-row-reverse"> {/* Wrapper that holds te 3 sections */}
                <Image src={Feature1} alt='Feature1' className='hidden w-1/2 sm:block'/> {/* This image will be hidden on mobile devices */}

                <div className="sm:w-1/2 lg:py-[56px] lg:pr-[56px]">  {/* First Section */}
                    <h3 className="font-medium text-[#0085FF] lg:text-[18px]">Sales Monitoring</h3>
                    <h1 className="pt-[12px] text-2xl font-medium text-[#172026] lg:text-[42px] lg:leading-[58px] ">Simplify your sales monitoring</h1>
                    <Image src={Feature1} alt='feature1' className='pt-[24px] sm:hidden' />
                    <p className='py-[24px] text-[#36485C] lg:text-[18px]'>Stay on top of things and revamp your work process with our game-changing feature. Get a bird's eye view with our customizable dashboard.</p>

                    <ul className='flex flex-col gap-y-3 lg:text-[18px]'>   {/* CheckBox list */}
                        <li className='flex items-center gap-x-2 text-[#36485C]'>
                            <span><Image src={Check} alt='check' /></span>lorem ipsum dolor sit amet
                        </li>
                        <li className='flex items-center gap-x-2 text-[#36485C]'>
                            <span><Image src={Check} alt='check' /></span>lorem ipsum dolor sit amet
                        </li>
                        <li className='flex items-center gap-x-2 text-[#36485C]'>
                            <span><Image src={Check} alt='check' /></span>lorem ipsum dolor sit amet
                        </li>
                    </ul>

                    <p className='flex gap-x-2 items-center pt-6 font-medium text-[#0085FF] lg:text-[18px]'>Learn More  <span><Image src={BlueButton} alt='bluebutton' /></span></p>

                </div>

            </div>

            <div className="flex flex-col sm:flex-row lg:pt-8"> {/* Wrapper that holds te 3 sections */}
                <Image src={Feature2} alt='Feature2' className='hidden w-1/2 sm:block'/> {/* This image will be hidden on mobile devices */}

                <div className="sm:w-1/2 lg:py-[56px] lg:pl-[56px]">  {/* First Section */}
                    <h3 className="font-medium text-[#00A424] lg:text-[18px]">Customer Support</h3>
                    <h1 className="pt-[12px] text-2xl font-medium text-[#172026] lg:text-[42px] lg:leading-[58px] ">Get in touch with your Customers.</h1>
                    <Image src={Feature2} alt='feature2' className='pt-[24px] sm:hidden' />
                    <p className='py-[24px] text-[#36485C] lg:text-[18px]'>Stay on top of things and revamp your work process with our game-changing feature. Get a bird's eye view with our customizable dashboard.</p>

                    <ul className='flex flex-col gap-y-3 lg:text-[18px]'>   {/* CheckBox list */}
                        <li className='flex items-center gap-x-2 text-[#36485C]'>
                            <span><Image src={Check} alt='check' /></span>lorem ipsum dolor sit amet
                        </li>
                        <li className='flex items-center gap-x-2 text-[#36485C]'>
                            <span><Image src={Check} alt='check' /></span>lorem ipsum dolor sit amet
                        </li>
                        <li className='flex items-center gap-x-2 text-[#36485C]'>
                            <span><Image src={Check} alt='check' /></span>lorem ipsum dolor sit amet
                        </li>
                    </ul>

                    <p className='flex gap-x-2 items-center pt-6 font-medium text-[#00A424] lg:text-[18px]'>Learn More  <span><Image src={GreenButton} alt='bluebutton' /></span></p>

                </div>

            </div>


            <div className="flex flex-col sm:flex-row-reverse"> {/* Wrapper that holds te 3 sections */}
                <Image src={Feature3} alt='Feature3' className='hidden w-1/2 sm:block'/> {/* This image will be hidden on mobile devices */}

                <div className="sm:w-1/2 lg:py-[56px] lg:pr-[56px]">  {/* First Section */}
                    <h3 className="font-medium text-[#e91e63] lg:text-[18px]">Growth Monitoring</h3>
                    <h1 className="pt-[12px] text-2xl font-medium text-[#172026] lg:text-[42px] lg:leading-[58px] ">Monitor your site's new Subscribers.</h1>
                    <Image src={Feature3} alt='feature3' className='pt-[24px] sm:hidden' />
                    <p className='py-[24px] text-[#36485C] lg:text-[18px]'>Stay on top of things and revamp your work process with our game-changing feature. Get a bird's eye view with our customizable dashboard.</p>

                    <div className='flex w-full gap-x-[24px]'>
                        <div className='flex flex-col w-1/2 gap-y-3'>
                            <h3 className='text-[20px] font-medium text-[#172026]'>100+</h3>
                            <p className='text-[#36485C]'>Lorem ipsum dolor sit amet</p>
                        </div>
                        <div className='flex flex-col w-1/2 gap-y-3'>
                            <h3 className='text-[20px] font-medium text-[#172026]'>800+</h3>
                            <p className='text-[#36485C]'>Another Lorem ipsum dolor!</p>
                        </div>
                    </div>

                    <p className='flex gap-x-2 items-center pt-6 font-medium text-[#e91e63] lg:text-[18px]'>Learn More  <span><Image src={PinkButton} alt='bluebutton' /></span></p>

                </div>

            </div>
        </div>
    )
}


                    {/* <Image src={Feature2} alt='feature2' />
                    <Image src={Feature3} alt='feature3' /> */}