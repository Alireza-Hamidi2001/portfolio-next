// components/Header.jsx
import Image from "next/image";
import logo_light from "@/public/logos/alireza2.png";
import logo_dark from "@/public/logos/alireza5.png";
import NavLinks from "./NavLinks";

function Header() {
    return (
        <div className="w-[screen] flex justify-center">
            <header className="fixed z-100 shadow shadow-black/40 dark:shadow-white/60 bg-gray-200 dark:bg-zinc-800 w-[90vw] sm:w-fit flex mt-3 sm:left-[50%] sm:translate-x-[-50%] items-center rounded-full mx-auto px-2 sm:px-4 py-1.5 sm:py-1">
                <div className="relative w-20 sm:w-32 h-8">
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
            </header>
        </div>
    );
}

export default Header;
