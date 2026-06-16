// components/ContactCards.jsx (Client Component)
"use client";
import { FaTelegram, FaLinkedin, FaEnvelope, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import AnimateOnScroll from "./AnimateOnScroll";

const contactLinks = [
    {
        id: 1,
        name: "Telegram",
        icon: FaTelegram,
        color: "#26A5E4",
        bgColor: "hover:bg-[#26A5E4]",
        link: "https://t.me/alireza_arh12",
    },
    {
        id: 2,
        name: "LinkedIn",
        icon: FaLinkedin,
        color: "#0077B5",
        bgColor: "hover:bg-[#0077B5]",
        link: "https://www.linkedin.com/in/alireza-hamidi-aa8547288",
    },
    {
        id: 3,
        name: "Email",
        icon: FaEnvelope,
        color: "#EA4335",
        bgColor: "hover:bg-[#EA4335]",
        link: "https://mail.google.com/mail/?view=cm&fs=1&to=alireza.hamidi.eng@gmail.com",
    },
    {
        id: 4,
        name: "GitHub",
        icon: FaGithub,
        color: "#181717",
        bgColor: "hover:bg-[#181717]",
        link: "https://github.com/Alireza-Hamidi2001",
    },
];

function ContactCards() {
    const handleClick = (link) => {
        if (link.includes("mail.google.com")) {
            window.open(link, "_blank", "noopener,noreferrer");
        } else {
            window.open(link, "_blank", "noopener,noreferrer");
        }
    };

    return (
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 md:gap-6 max-w-5xl mx-auto">
                {contactLinks.map((contact, index) => (
                    <AnimateOnScroll
                        key={contact.id}
                        direction="bottom"
                        delay={0.4 + index * 0.1}
                    >
                        <motion.div
                            whileHover={{
                                y: -8,
                                transition: { duration: 0.2 },
                            }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => handleClick(contact.link)}
                            className={`
                                relative overflow-hidden
                                rounded-xl px-2 py-2 sm:px-4 sm:py-7 md:px-6 md:py-10
                                cursor-pointer
                                border-2 border-transparent
                                transition-all duration-300
                                ${contact.bgColor}
                                group
                            `}
                        >
                            {/* content */}
                            <div className="relative z-10 flex flex-col items-center text-center">
                                <contact.icon className="absolute left-[-60%] top-[50%] translate-[-50%] -z-2 opacity-10 w-40 h-40 transition-all duration-300 text-gray-700 dark:text-gray-300 group-hover:text-white group-hover:iconContact2" />
                                {/* icons */}
                                <motion.div>
                                    <contact.icon className="w-16 h-16 transition-colors duration-300 text-gray-700 dark:text-gray-300 group-hover:iconContact group-hover:text-white" />
                                </motion.div>

                                {/* name */}
                                <h3 className="text-xl font-bold mt-4 mb-2 text-gray-800 dark:text-gray-200 group-hover:text-white transition-colors duration-300">
                                    {contact.name}
                                </h3>
                            </div>
                        </motion.div>
                    </AnimateOnScroll>
                ))}
            </div>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="text-center text-gray-500 dark:text-gray-400 mt-12 text-sm"
            >
                Feel free to reach out through any of these platforms
            </motion.p>
        </div>
    );
}

export default ContactCards;
