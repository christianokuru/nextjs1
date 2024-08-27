"use client"
import * as Accordion from '@radix-ui/react-accordion';
import Plus from '../../public/assets/Plus.svg'
import Image from 'next/image'


const items = [
    {
        question: 'Who are we?',
        answer: 'nnwanee wena bathong Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla laudantium beatae ipsa nobis non veniam est deserunt eum! In laudantium provident velit, odio nemo incidunt quis labore fugit non vero.'
    },
    {
        question: 'How do I subscribe?',
        answer: 'nnwanee wena bathong Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla laudantium beatae ipsa nobis non veniam est deserunt eum! In laudantium provident velit, odio nemo incidunt quis labore fugit non vero.'
    },
    {
        question: 'Is there a free trial?',
        answer: 'NO!!! nnwanee wena bathong Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla laudantium beatae ipsa nobis non veniam est deserunt eum! In laudantium provident velit, odio nemo incidunt quis labore fugit non vero.'
    },
    {
        question: 'Can this site be used on smaller devices?',
        answer: 'nnwanee wena bathong Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla laudantium beatae ipsa nobis non veniam est deserunt eum! In laudantium provident velit, odio nemo incidunt quis labore fugit non vero.'
    },
    {
        question: 'Is this legit?',
        answer: 'nnwanee wena bathong Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla laudantium beatae ipsa nobis non veniam est deserunt eum! In laudantium provident velit, odio nemo incidunt quis labore fugit non vero.'
    },
    {
        question: 'Can I contact the developer to add more features?',
        answer: 'Yes, but you will pay nnwanee wena bathong Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla laudantium beatae ipsa nobis non veniam est deserunt eum! In laudantium provident velit, odio nemo incidunt quis labore fugit non vero.'
    },
];

export function FAQ() {
    
    return(
        <div className="flex flex-col w-full py-[48px] lg:py-[60px] lg:flex-row lg:gap-x-6">
            <div className='lg:w-1/3 lg:py-[42px] lg:pr-[56px]'>
                <h3 className="text-[#EB2891] font-medium text-[14px] lg:text-base">Frequently Asked Questions</h3>
                <h1 className="py-4 text-2xl font-medium text-[#172026] lg:text-[42px] lg:leading-[58px]">Lets clarify some of your Questions</h1>
                <p className="text-[#36485C] pb-[24px]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis praesentium autem earum pariatur! Molestias</p>
            </div>

            <div className='lg:w-2/3 '>
                <Accordion.Root type='single' defaultValue='item-1' collapsible className='flex flex-col gap-y-4 '>
                    {items.map((item, index) => (
                        <div key={index}>
                           <Accordion.Item value={`item-${index + 1}`} className='shadow-xl bg-[#d3d0f0] p-[16px] rounded-[8px] border-[2px] border-gray-300'>
                                <Accordion.Header>
                                    <Accordion.Trigger className='flex w-full items-center justify-between'>
                                        <p className='text-left text-semibold lg:text-[18px] text-[#261817]'>{item.question}</p>
                                        <span>
                                            <Image src={Plus} alt='see more' />
                                        </span>
                                    </Accordion.Trigger>
                                </Accordion.Header>

                                <Accordion.Content>
                                    <p className='pt-2 text-[#36485C]'>{item.answer}</p>
                                </Accordion.Content>
                           </Accordion.Item> 
                        </div>
                    ))}
                </Accordion.Root>
            </div>

            
        </div>
    )
} 