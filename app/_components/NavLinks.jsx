// components/NavLinks.jsx
"use client";

import AnimateOnScroll from "./AnimateOnScroll";
import ThemeToggle from "./ThemeToggle";

function NavLinks() {
    const links = [
        {
            id: 1,
            href: "#skills",
            scroll: "skills",
            link: "Skills",
            delay: 0.2,
        },
        {
            id: 2,
            href: "#projects",
            scroll: "projects",
            link: "Projects",
            delay: 0.3,
        },
        {
            id: 3,
            href: "#certificates",
            scroll: "certificates",
            link: "Certificates",
            delay: 0.4,
        },
        {
            id: 4,
            href: "#contact",
            scroll: "contact",
            link: "Contact",
            delay: 0.5,
        },
    ];

    const scrollToSection = (e, sectionId) => {
        e.preventDefault();
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    return (
        <ul className="flex gap-0 sm:gap-1 font-open-sans text-xs sm:text-sm items-center">
            {links.map((link) => (
                <AnimateOnScroll
                    key={link.id}
                    direction="left"
                    delay={link.delay}
                >
                    <li className="header_menu_item">
                        <a
                            href={link.href}
                            onClick={(e) =>
                                scrollToSection(e, `${link.scroll}`)
                            }
                        >
                            {link.link}
                        </a>
                    </li>
                </AnimateOnScroll>
            ))}
            <li className="ml-1">
                <ThemeToggle />
            </li>
        </ul>
    );
}

export default NavLinks;
