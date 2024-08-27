import Image from 'next/image'
import Arrow from '../../public/assets/arrow.png'

export function CTA() {

    return(
        <div className="w-full rounded-xl bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 py-[56px] px-[32px] text-center lg:my-[60px] lg:px-[324px] lg:py-[89px]">
           <h1 className="text-white text-[32px] font-medium lg:text-[56px] lg:leading-[64px]">Monitor your website like a Pro</h1>
           <p className="text-white pt-6 lg:pt-[48px] lg:text-[18px]">Join over 800+ happy site owners boosting productivity and efficiency!</p>

           <div className="mt-[40px] flex flex-col w-full items-center lg:mt-[56px] lg:flex-row lg:justify-center lg:gap-x-[40px]">
            <button className="py-[16px] px-[32px] bg-white rounded-xl text-pink-500 w-fit lg:font-medium">Try for free</button>
            <button className='flex gap-x-3 justify-center items-center w-full mt-[32px] text-white font-medium lg:w-fit lg:mt-0'>Contact Sales<span><Image src={Arrow} alt='arrow' /></span></button>
           </div>
        </div>
    )
}