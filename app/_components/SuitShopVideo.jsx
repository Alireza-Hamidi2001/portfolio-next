// components/SuitShopVideo.jsx
"use client";
import { motion } from "framer-motion";
import { FaCartPlus, FaCheckCircle, FaDatabase, FaLock } from "react-icons/fa";
import { HiOutlineSparkles } from "react-icons/hi";
import { TbLayoutDashboard } from "react-icons/tb";
import AnimateOnScroll from "./AnimateOnScroll";
import { features } from "./Features";

function SuitShopVideo() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="container mx-auto px-4 mb-16"
        >
            {/* ----------- HEADER */}
            <div className="text-center mb-10">
                <h2 className="text-2xl md:text-4xl font-bold text-gray-800 dark:text-white">
                    Suit Shop – Full-Stack E-Commerce Platform
                </h2>
                <div className="flex justify-center gap-4 mt-3">
                    <span className="inline-flex items-center gap-1 text-xs md:text-sm text-gray-600 dark:text-gray-400">
                        <FaCheckCircle className="w-2 h-2 sm:w-4 sm:h-4 text-green-500" />
                        Next.js
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs md:text-sm text-gray-600 dark:text-gray-400">
                        <FaDatabase className="w-2 h-2 sm:w-4 sm:h-4 text-yellow-500" />
                        Supabase
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs md:text-sm text-gray-600 dark:text-gray-400">
                        <HiOutlineSparkles className="w-2 h-2 sm:w-4 sm:h-4 text-purple-500" />
                        Tailwind CSS
                    </span>
                </div>
            </div>
            {/* ----------- VIDER - FEATURES */}

            <div className="grid grid-cols-1 items-center md:grid-cols-[3fr_2fr] gap-4">
                {/* ----------- VIDEO */}

                <div>
                    <div className="w-full mx-auto rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm mb-12 bg-black aspect-video">
                        <iframe
                            src="https://player.cloudinary.com/embed/?cloud_name=direu398z&public_id=suit-shop_l7zxnq&autoplay=true&muted=true&loop=true&controls=false"
                            allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                            frameBorder="0"
                            className="w-full h-full"
                        />
                    </div>
                    <div className="text-center mt-8 pt-4 border-t border-gray-200 dark:border-gray-700">
                        <div className="grid grid-cols-1 md:grid-cols-3  justify-center gap-6 text-xs text-gray-500 dark:text-gray-400">
                            <span className="flex items-center mx-auto  gap-1">
                                <FaCheckCircle className="w-5 h-5 text-green-500" />{" "}
                                Fully Responsive
                            </span>
                            <span className="flex items-center mx-auto gap-1">
                                <FaLock className="w-5 h-5 text-blue-500" />{" "}
                                Secure Authentication
                            </span>
                            <span className="flex items-center mx-auto gap-1">
                                <FaCartPlus className="w-5 h-5 text-orange-500" />{" "}
                                Shopping Cart
                            </span>
                        </div>
                    </div>
                </div>
                {/* ----------- FEATURES */}

                <div className="max-w-5xl mx-auto">
                    <AnimateOnScroll
                        direction="top"
                        delay={0.1}
                        className="w-full flex items-center justify-center gap-2 mb-6"
                    >
                        <TbLayoutDashboard className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                        <h3 className="text-2xl font-bold text-center text-gray-700 dark:text-gray-300">
                            Key Features
                        </h3>
                    </AnimateOnScroll>

                    <div className="relative grid mx-auto grid-cols-1 gap-3">
                        <div className="absolute right-5 top-10 w-50 h-50 rounded-full bg-black/5 dark:bg-white/10 animate-bounce"></div>
                        <div className="absolute right-30 bottom-5 w-30 h-30 rounded-full bg-black/7 dark:bg-white/12 animate-bounce"></div>

                        {features.map((feature, idx) => (
                            <AnimateOnScroll
                                key={idx}
                                direction={feature.direction}
                                delay={feature.delay}
                                className="relative group bg-white/30 backdrop-blur-[6px] dark:bg-zinc-900/80 p-2 rounded-xl shadow-sm transition-all duration-300 overflow-hidden cursor-default border border-gray-200 dark:border-gray-700"
                            >
                                <div
                                    className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 ${feature.color.replace(
                                        "text",
                                        "bg",
                                    )}`}
                                />

                                <div className="relative z-10 grid grid-cols-[auto_1fr] items-center gap-1">
                                    <div
                                        className={`p-2 rounded-xl ${feature.color} bg-opacity-10 dark:bg-opacity-20 group-hover:scale-120  group-hover:-rotate-25 transition-transform duration-300`}
                                    >
                                        <feature.icon
                                            className={`w-4 h-4 sm:w-7 sm:h-7  ${feature.color}`}
                                        />
                                    </div>

                                    <div className="flex-1">
                                        <h4
                                            className={`font-bold text-gray-800 dark:text-white text-sm md:text-[1.1rem] mb-1`}
                                        >
                                            {feature.title}
                                        </h4>
                                        <p className="text-gray-600/70 dark:text-gray-300/70 text-xs md:text-[0.8rem] leading-4">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            </AnimateOnScroll>
                        ))}
                    </div>
                </div>
            </div>

            {/* /// */}
        </motion.div>
    );
}

export default SuitShopVideo;
