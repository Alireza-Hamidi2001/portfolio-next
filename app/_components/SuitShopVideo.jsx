// components/SuitShopVideo.jsx
"use client";
import { motion } from "framer-motion";
import {
    FaLock,
    FaUserCircle,
    FaDatabase,
    FaCommentDots,
    FaFilter,
    FaTags,
    FaEdit,
    FaShoppingBag,
    FaCartPlus,
    FaCheckCircle,
} from "react-icons/fa";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { HiOutlineSparkles } from "react-icons/hi";
import { TbLayoutDashboard } from "react-icons/tb";
import AnimateOnScroll from "./AnimateOnScroll";

const SuitShopVideo = () => {
    const features = [
        {
            direction: "left",
            delay: 0.1,
            icon: FaLock,
            title: "Authentication & Authorization",
            description:
                "Secure login/register with Supabase Auth, role-based access (Admin/User)",
            color: "text-blue-500",
            bgColor: "bg-blue-500",
        },
        {
            direction: "right",
            delay: 0.2,
            icon: FaUserCircle,
            title: "User Panel",
            description:
                "Browse products, cart management, leave comments (requires admin approval)",
            color: "text-green-500",
            bgColor: "bg-green-500",
        },
        {
            direction: "left",
            delay: 0.3,
            icon: MdOutlineAdminPanelSettings,
            title: "Admin Panel",
            description:
                "Create, edit, delete posts; manage comments (approve/delete); full product control",
            color: "text-purple-500",
            bgColor: "bg-purple-500",
        },
        {
            direction: "right",
            delay: 0.4,
            icon: FaDatabase,
            title: "Database & Backend",
            description:
                "Supabase (PostgreSQL) for users, products, comments, orders, sessions",
            color: "text-yellow-500",
            bgColor: "bg-yellow-500",
        },
        {
            direction: "left",
            delay: 0.5,
            icon: FaCommentDots,
            title: "Comment System",
            description:
                "Users comment, hidden until admin approves; admin can delete or approve",
            color: "text-indigo-500",
            bgColor: "bg-indigo-500",
        },
        {
            direction: "right",
            delay: 0.6,
            icon: FaFilter,
            title: "Filtering & Navigation",
            description:
                "Filter by category, price, size, color; active menu item gets distinct style",
            color: "text-pink-500",
            bgColor: "bg-pink-500",
        },
        {
            direction: "left",
            delay: 0.7,
            icon: FaTags,
            title: "Dynamic Meta Tags",
            description:
                "Custom meta title & description per product/page for SEO & social sharing",
            color: "text-orange-500",
            bgColor: "bg-orange-500",
        },
        {
            direction: "right",
            delay: 0.8,
            icon: FaEdit,
            title: "Post Management",
            description: "Admin can create/edit/delete posts/products",
            color: "text-red-500",
            bgColor: "bg-red-500",
        },
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="container mx-auto px-4 mb-16"
        >
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

            {/* iframe ویدیو - بدون کنترل با اضافه کردن controls=false */}
            <div className="max-w-5xl mx-auto rounded-xl overflow-hidden border border-gray-600 dark:border-zinc-400 shadow-2xl mb-12 bg-black aspect-video">
                <iframe
                    src="https://player.cloudinary.com/embed/?cloud_name=direu398z&public_id=suit-shop_l7zxnq&autoplay=true&muted=true&loop=true&controls=false"
                    width="100%"
                    height="100%"
                    allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                    allowFullScreen
                    frameBorder="0"
                    className="w-full h-full"
                />
            </div>

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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
                    {features.map((feature, idx) => (
                        <AnimateOnScroll
                            key={idx}
                            direction={feature.direction}
                            delay={feature.delay}
                            className="relative group bg-white dark:bg-zinc-900/80 p-2 sm:p-4 md:p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-colors duration-300 overflow-hidden cursor-default border border-gray-200 dark:border-gray-700"
                        >
                            {/* گرادیانت پس‌زمینه در هاور */}
                            <div
                                className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 ${feature.color.replace(
                                    "text",
                                    "bg",
                                )}`}
                            />

                            {/* circle */}
                            <div
                                className={`absolute -top-10 -right-10 w-32 h-32 rounded-full ${feature.bgColor} opacity-5 group-hover:opacity-25 transition-all duration-500 group-hover:scale-110`}
                            />

                            <div className="relative z-10 grid grid-cols-[auto_1fr] items-start gap-1 md:gap-4">
                                {/* آیکون با پس‌زمینه */}
                                <div
                                    className={`p-3 rounded-xl ${feature.color} bg-opacity-10 dark:bg-opacity-20 group-hover:scale-110 transition-transform duration-300`}
                                >
                                    <feature.icon
                                        className={`w-4 h-4 sm:w-7 sm:h-7 md:w-9 md:h-9  ${feature.color}`}
                                    />
                                </div>

                                <div className="flex-1">
                                    <h4 className="font-bold text-gray-800 dark:text-white text-sm md:text-2xl mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                        {feature.title}
                                    </h4>
                                    <p className="text-gray-600 dark:text-gray-300 text-xs leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        </AnimateOnScroll>
                    ))}
                </div>
            </div>

            <div className="text-center mt-8 pt-4 border-t border-gray-200 dark:border-gray-700">
                <div className="grid grid-cols-1 md:grid-cols-3  justify-center gap-6 text-xs text-gray-500 dark:text-gray-400">
                    <span className="flex items-center gap-1">
                        <FaCheckCircle className="w-5 h-5 text-green-500" />{" "}
                        Fully Responsive
                    </span>
                    <span className="flex items-center gap-1">
                        <FaLock className="w-5 h-5 text-blue-500" /> Secure
                        Authentication
                    </span>
                    <span className="flex items-center gap-1">
                        <FaCartPlus className="w-5 h-5 text-orange-500" />{" "}
                        Shopping Cart
                    </span>
                </div>
            </div>
        </motion.div>
    );
};

export default SuitShopVideo;
