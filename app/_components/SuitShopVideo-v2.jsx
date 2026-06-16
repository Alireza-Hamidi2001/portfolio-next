// components/SuitShopVideo.jsx
"use client";
import { useEffect, useRef, useState } from "react";
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

const SuitShopVideo = () => {
    const videoRef = useRef(null);
    const [videoUrl, setVideoUrl] = useState(null);
    const [loading, setLoading] = useState(true);

    // دریافت Signed URL از API
    useEffect(() => {
        const fetchVideoUrl = async () => {
            try {
                const res = await fetch("/api/get-video-url");
                const data = await res.json();
                setVideoUrl(data.url);
            } catch (error) {
                console.error("Error fetching video URL:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchVideoUrl();
    }, []);

    // پخش خودکار بعد از لود شدن URL
    useEffect(() => {
        if (videoUrl && videoRef.current) {
            videoRef.current.play().catch((error) => {
                console.log("Autoplay was prevented:", error);
            });
        }
    }, [videoUrl]);

    const features = [
        {
            icon: FaLock,
            title: "Authentication & Authorization",
            description:
                "Secure login/register with Supabase Auth, role-based access (Admin/User)",
            color: "text-blue-500",
        },
        {
            icon: FaUserCircle,
            title: "User Panel",
            description:
                "Browse products, cart management, leave comments (requires admin approval)",
            color: "text-green-500",
        },
        {
            icon: MdOutlineAdminPanelSettings,
            title: "Admin Panel",
            description:
                "Create, edit, delete posts; manage comments (approve/delete); full product control",
            color: "text-purple-500",
        },
        {
            icon: FaDatabase,
            title: "Database & Backend",
            description:
                "Supabase (PostgreSQL) for users, products, comments, orders, sessions",
            color: "text-yellow-500",
        },
        {
            icon: FaCommentDots,
            title: "Comment System",
            description:
                "Users comment, hidden until admin approves; admin can delete or approve",
            color: "text-indigo-500",
        },
        {
            icon: FaFilter,
            title: "Filtering & Navigation",
            description:
                "Filter by category, price, size, color; active menu item gets distinct style",
            color: "text-pink-500",
        },
        {
            icon: FaTags,
            title: "Dynamic Meta Tags",
            description:
                "Custom meta title & description per product/page for SEO & social sharing",
            color: "text-orange-500",
        },
        {
            icon: FaEdit,
            title: "Post Management",
            description: "Admin can create/edit/delete posts/products",
            color: "text-red-500",
        },
    ];

    if (loading) {
        return (
            <div className="container mx-auto px-4 mb-16">
                <div className="max-w-5xl mx-auto rounded-xl overflow-hidden bg-gray-800 animate-pulse h-[100]"></div>
            </div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="container mx-auto px-4 mb-16"
        >
            {/* عنوان پروژه با آیکون */}
            <div className="text-center mb-8">
                <div className="flex justify-center mb-4">
                    <FaShoppingBag className="w-12 h-12 text-blue-600 dark:text-blue-400" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
                    Suit Shop – Full-Stack E-Commerce Platform
                </h2>
                <div className="flex justify-center gap-4 mt-3">
                    <span className="inline-flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
                        <FaCheckCircle className="w-4 h-4 text-green-500" />
                        Next.js
                    </span>
                    <span className="inline-flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
                        <FaDatabase className="w-4 h-4 text-yellow-500" />
                        Supabase
                    </span>
                    <span className="inline-flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
                        <HiOutlineSparkles className="w-4 h-4 text-purple-500" />
                        Tailwind CSS
                    </span>
                </div>
            </div>
            {/* پلیر ویدیو با Signed URL */}
            <div className="max-w-5xl mx-auto rounded-xl overflow-hidden border border-gray-600 dark:border-zinc-400 shadow-2xl mb-12 bg-black">
                <video
                    ref={videoRef}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-auto pointer-events-none"
                    style={{
                        pointerEvents: "none",
                        userSelect: "none",
                        WebkitUserSelect: "none",
                    }}
                >
                    <source
                        src={videoUrl}
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>
            </div>
            {/* لیست ویژگی‌ها */}
            <div className="max-w-5xl mx-auto">
                <div className="flex items-center justify-center gap-2 mb-6">
                    <TbLayoutDashboard className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                    <h3 className="text-2xl font-bold text-center text-gray-700 dark:text-gray-300">
                        Key Features
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.05 }}
                            className="bg-gray-100 dark:bg-gray-800/50 p-4 rounded-lg border-l-4 border-blue-500 shadow-md hover:shadow-md transition-all hover:scale-[1.02] group"
                        >
                            <div className="flex items-start gap-3">
                                <feature.icon
                                    className={`w-6 h-6 mt-1 ${feature.color} group-hover:scale-110 transition-transform`}
                                />
                                <div>
                                    <h4 className="font-bold text-gray-800 dark:text-white text-lg">
                                        {feature.title}
                                    </h4>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
            {/* بخش فوتر */}
            <div className="text-center mt-8 pt-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex justify-center gap-6 text-xs text-gray-500 dark:text-gray-400">
                    <span className="flex items-center gap-1">
                        <FaCheckCircle className="w-5 h-5 text-green-500" />
                        Fully Responsive
                    </span>
                    <span className="flex items-center gap-1">
                        <FaLock className="w-5 h-5 text-blue-500" />
                        Secure Authentication
                    </span>
                    <span className="flex items-center gap-1">
                        <FaCartPlus className="w-5 h-5 text-orange-500" />
                        Shopping Cart
                    </span>
                </div>
            </div>
        </motion.div>
    );
};

export default SuitShopVideo;
