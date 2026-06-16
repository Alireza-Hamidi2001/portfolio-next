// components/Header.jsx
import Image from "next/image";
import logo_light from "@/public/logos/alireza2.png";
import logo_dark from "@/public/logos/alireza5.png";
import NavLinks from "./NavLinks";

function Header() {
    return (
        <div>
            <div className="fixed z-100 shadow shadow-black/40 dark:shadow-white/60 bg-gray-200 dark:bg-zinc-800 w-screen sm:w-fit flex mt-3 sm:left-[50%] sm:translate-x-[-50%] items-center rounded-full mx-auto px-1 sm:px-4 py-1.5 sm:py-1">
                <div className="relative w-16 h-6">
                    <Image
                        src={logo_light}
                        alt="header logo"
                        fill
                        className="dark:hidden object-contain"
                    />
                    <Image
                        src={logo_dark}
                        alt="header logo"
                        fill
                        className="hidden dark:block object-contain"
                    />
                </div>
                <NavLinks />
            </div>
        </div>
    );
}

export default Header;
