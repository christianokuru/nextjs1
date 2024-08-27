import Image from "next/image"
import Logo from '../../public/assets/Logo.svg'
import user from '../../public/assets/User.svg'
import menu from '../../public/assets/Menu.svg'

const NavLinks = [
    {name: "Features"},
    {name: "Pricing"},
    {name: "Enterprise"},
    {name: "Careers"},
]

export function NavBar() {
    return(
        <nav className="flex w-full items-center justify-between px-[20px] py-[16px] lg:container lg:mx-auto lg:px-20">
            <div className="flex items-center">
                <Image src={Logo} alt="Logo" />
                <div className="hidden lg:flex pl-[74px] gap-x-[56px]">
                    {NavLinks.map((item, index) => (<p className="text-[#36485C] font-medium" key={index}>{item.name}</p>))}
                </div>
            </div>

            <div className="flex gap-x-5">
                <p className="hidden lg:block text-[#36485C] font-medium pr-[56px]">Open an Account</p>
                <div className="flex items-center gap-x-2">
                    <Image src={user} alt="User Profile" />
                    <span className="hidden font-medium text-[#36485C] lg:block">Sign in</span>
                </div>
                <div>
                    <Image src={menu} alt="menu" className="lg:hidden" />
                </div>
            </div>
        </nav>
    )
}