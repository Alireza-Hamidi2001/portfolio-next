// components/CertificateImage.jsx
"use client";
import { useState } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { PiHandTap } from "react-icons/pi";
import { FaGraduationCap, FaBookOpen } from "react-icons/fa";
import { HiOutlineSparkles } from "react-icons/hi";

const certificates = [
    {
        id: 1,
        url: "https://res.cloudinary.com/direu398z/image/upload/v1781504392/meta-coursera_uvlvqb.png",
        title: "Meta",
        subtitle: "Front-End Developer Professional Certificate",
        courses: [
            "Introduction to Front-End Development",
            "Programming with JavaScript",
            "Version Control",
            "HTML and CSS in depth",
            "React Basics",
            "Advanced React",
            "Principles of UX/UI Design",
            "Front-End Developer Capstone",
            "Coding Interview Preparation",
        ],
    },
    {
        id: 2,
        url: "https://res.cloudinary.com/direu398z/image/upload/v1781504948/michigan-coursera_paan8p.png",
        title: "Michigan",
        subtitle: "Web Design for Everybody Specialization",
        courses: [
            "Introduction to HTML5",
            "Introduction to CSS3",
            "Interactivity with JavaScript",
            "Advanced Styling with Responsive Design",
            "Web Design for Everybody Capstone",
        ],
    },
];

function CourseList({ courses, title, subtitle, isVisible }) {
    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{
                        opacity: 0,
                        scale: 0.95,
                        backdropFilter: "blur(0px)",
                    }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                        backdropFilter: "blur(8px)",
                    }}
                    exit={{
                        opacity: 0,
                        scale: 0.95,
                        backdropFilter: "blur(0px)",
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 25,
                        duration: 0.2,
                    }}
                    className="absolute inset-0 z-20 flex items-center justify-center bg-black/70 backdrop-blur-sm rounded-lg p-2 sm:p-4 md:p-8 overflow-y-auto"
                >
                    <div className="w-full max-h-full">
                        {/* header , subHeader */}
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-center mb-6"
                        >
                            <div className="flex items-center justify-center gap-3 mb-2">
                                <FaGraduationCap className="w-8 h-8 text-red-400" />
                                <h3 className="text-2xl sm:text-4xl md:text-5xl font-bold bg-linear-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                                    {title}
                                </h3>
                            </div>
                            <p className="text-gray-300 text-xs sm:text-sm md:text-base font-light tracking-wide">
                                {subtitle}
                            </p>
                            <div className="w-24 h-0.5 bg-linear-to-r from-red-400 to-transparent mx-auto mt-3" />
                        </motion.div>

                        {/* coursers list */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="grid grid-cols-1 md:grid-cols-2 gap-2 max-h-48 overflow-y-auto pr-2 custom-scrollbar"
                        >
                            {courses.map((course, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 + idx * 0.03 }}
                                    className="flex items-center gap-1 sm:gap-2 p-1 sm:p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-all group"
                                >
                                    <span className="text-red-400 text-xs font-bold min-w-[20px]">
                                        {String(idx + 1).padStart(2, "0")}
                                    </span>
                                    <span className="text-gray-200 text-xs sm:text-sm md:text-base group-hover:text-white transition-colors">
                                        {course}
                                    </span>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* footer */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="mt-6 flex items-center justify-center gap-6 pt-4 border-t border-gray-700/50"
                        >
                            <span className="flex items-center gap-2 text-red-400 text-xs sm:text-sm font-medium">
                                <FaBookOpen className="w-4 h-4" />
                                {courses.length} Courses
                            </span>
                            <span className="flex items-center gap-2 text-gray-400 text-xs sm:text-sm">
                                <HiOutlineSparkles className="w-4 h-4" />
                                Complete Specialization
                            </span>
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

function CertificateImage() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [hovered, setHovered] = useState(false);
    const [showCourses, setShowCourses] = useState(false);
    const [direction, setDirection] = useState(0);

    const nextSlide = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % certificates.length);
        setShowCourses(false);
    };

    const prevSlide = () => {
        setDirection(-1);
        setCurrentIndex(
            (prev) => (prev - 1 + certificates.length) % certificates.length,
        );
        setShowCourses(false);
    };

    const currentCertificate = certificates[currentIndex];

    const handleMouseEnter = () => {
        setHovered(true);
        setShowCourses(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
        setShowCourses(false);
    };

    const variants = {
        enter: (direction) => ({
            x: direction > 0 ? 300 : -300,
            opacity: 0,
            rotateY: direction > 0 ? 45 : -45,
        }),
        center: {
            x: 0,
            opacity: 1,
            rotateY: 0,
        },
        exit: (direction) => ({
            x: direction > 0 ? -300 : 300,
            opacity: 0,
            rotateY: direction > 0 ? -45 : 45,
        }),
    };

    return (
        <div className="flex flex-col items-center justify-center">
            {/* counter */}
            <div className="text-center mb-0 sm:mb-4 text-gray-600 dark:text-gray-400 font-medium text-lg">
                <span className="text-red-400 text-3xl sm:text-4xl font-bold">
                    {String(currentIndex + 1).padStart(2, "0")}
                </span>
                <span className="text-gray-400"> / </span>
                <span className="text-gray-400 text-md sm:text-2xl">
                    {String(certificates.length).padStart(2, "0")}
                </span>
            </div>

            {/* controls */}
            <div className="flex items-center justify-center gap-1 lg:gap-6">
                <button
                    onClick={prevSlide}
                    className="p-2 lg:p-4 rounded-full bg-gray-200 dark:bg-zinc-900 hover:bg-red-500 transition-transform duration-300 hover:scale-110 shadow-lg group"
                    aria-label="Previous"
                >
                    <IoChevronBack className="w-4 h-4 sm:w-8 sm:h-8 text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors" />
                </button>

                {/* images */}
                <div
                    className="relative w-75 h-70 sm:w-160 sm:h-90 lg:w-220 lg:h-120 overflow-hidden rounded-2xl shadow-2xl group cursor-pointer"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <AnimatePresence
                        initial={false}
                        custom={direction}
                    >
                        <motion.div
                            key={currentIndex}
                            custom={direction}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: {
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 30,
                                },
                                opacity: { duration: 0.2 },
                                rotateY: { duration: 0.4 },
                            }}
                            className="absolute inset-0"
                        >
                            <Image
                                src={currentCertificate.url}
                                alt={currentCertificate.title}
                                fill
                                className={`object-contain transition-all duration-500 ${
                                    showCourses
                                        ? "blur-sm scale-105 brightness-85"
                                        : "blur-0 scale-100 brightness-100"
                                }`}
                                priority
                            />
                        </motion.div>
                    </AnimatePresence>

                    {/* لیست درس‌ها */}
                    <CourseList
                        courses={currentCertificate.courses}
                        title={currentCertificate.title}
                        subtitle={currentCertificate.subtitle}
                        isVisible={showCourses}
                    />

                    {/* نشانگر هاور */}
                    {!showCourses && (
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="text-white/60 text-xs bg-black/50 px-4 py-1.5 rounded-full backdrop-blur-sm flex items-center gap-2">
                                <HiOutlineSparkles className="w-3 h-3" />
                                Hover to see courses
                            </span>
                        </div>
                    )}
                </div>

                <button
                    onClick={nextSlide}
                    className="p-2 lg:p-4 rounded-full bg-gray-200 dark:bg-zinc-900 hover:bg-red-500 transition-all duration-300 hover:scale-110 shadow-lg group"
                    aria-label="Next"
                >
                    <IoChevronForward className="w-4 sm:w-8 h-4 sm:h-8 text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors" />
                </button>
            </div>

            {/* دایره‌های پایین */}
            <div className="flex gap-3 mt-6">
                {certificates.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            setCurrentIndex(index);
                            setShowCourses(false);
                        }}
                        className={`h-3 rounded-full transition-all duration-300 ${
                            index === currentIndex
                                ? "bg-red-500 w-8"
                                : "bg-gray-400 hover:bg-gray-500 w-3"
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            {/* موبایل */}
            <p className="sm:hidden mt-4 flex gap-2 items-center text-gray-400 text-sm">
                <span className="tapBtn">
                    <PiHandTap className="w-6 h-6 text-red-400" />
                </span>
                tap to see details
            </p>
        </div>
    );
}

export default CertificateImage;
