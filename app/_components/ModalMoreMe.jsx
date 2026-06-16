// components/ModalMoreMe.jsx
"use client";
import { HiAcademicCap } from "react-icons/hi2";
import { GrCertificate } from "react-icons/gr";
import { MdOutlineQuestionMark } from "react-icons/md";
import { IoCloseOutline } from "react-icons/io5";
import { useEffect } from "react";

export default function ModalMoreMe({ onClose }) {
    // Close modal with Escape key
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === "Escape") {
                onClose();
            }
        };
        document.addEventListener("keydown", handleEscape);

        // Prevent body scrolling when modal is open
        document.body.style.overflow = "hidden";
        document.body.style.paddingRight = "0px"; // جلوگیری از اسکرول افقی

        return () => {
            document.removeEventListener("keydown", handleEscape);
            document.body.style.overflow = "unset";
            document.body.style.paddingRight = "unset";
        };
    }, [onClose]);

    // Close when clicking on backdrop
    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <>
            <div
                className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/30 backdrop-blur-md overflow-x-hidden"
                onClick={handleBackdropClick}
            >
                <div className="relative w-[90vw] sm:w-[80rem] md:w-[50rem] max-w-2xl max-h-[90vh] bg-white dark:bg-zinc-950 border border-white/20 rounded-2xl shadow-2xl overflow-hidden flex flex-col">
                    {/* Header */}
                    <div className="flex items-center justify-between p-3 sm:p-4 md:p-6 pb-2 sm:pb-3 md:pb-0 flex-shrink-0">
                        <div className="inline-block min-w-0">
                            <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-gray-800 dark:text-white font-comic truncate">
                                More About Me
                            </h2>
                            <div className="w-20 sm:w-28 md:w-32 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 mt-1 sm:mt-2"></div>
                        </div>
                        <button
                            onClick={onClose}
                            className="p-1.5 sm:p-2 rounded-full bg-gray-100 dark:bg-zinc-800 hover:bg-gray-200 dark:hover:bg-zinc-700 transition-colors flex-shrink-0 ml-2"
                        >
                            <IoCloseOutline className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 dark:text-gray-300" />
                        </button>
                    </div>

                    {/* Scrollable content */}
                    <div className="overflow-y-auto flex-1 px-3 sm:px-4 md:px-6 pb-4 sm:pb-6 md:pb-8">
                        <div className="space-y-3 sm:space-y-4 text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                            <p>
                                Hi! I&apos;m Alireza Hamidi, a passionate
                                developer with a strong academic background in
                                computer engineering.
                            </p>

                            {/* Academic Background */}
                            <div className="my-4 sm:my-6 p-3 sm:p-4 bg-gray-50 dark:bg-zinc-800/50 rounded-lg">
                                <div className="inline-block">
                                    <div className="flex items-center gap-2 mb-2">
                                        <HiAcademicCap className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500 flex-shrink-0" />
                                        <h3 className="text-sm sm:text-base md:text-xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                                            Academic Background:
                                        </h3>
                                    </div>
                                    <div className="w-16 sm:w-20 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                                </div>
                                <ul className="space-y-1.5 sm:space-y-2 list-disc list-inside mt-3 sm:mt-4 italic text-xs sm:text-sm">
                                    <li>
                                        Master&apos;s Student in Computer
                                        Engineering - GPA:{" "}
                                        <span className="font-bold">
                                            19.04&nbsp;
                                        </span>
                                        / 20
                                    </li>
                                    <li>
                                        Bachelor&apos;s Degree in Computer
                                        Engineering - GPA:{" "}
                                        <span className="font-bold">
                                            18.93&nbsp;
                                        </span>
                                        / 20
                                    </li>
                                </ul>
                            </div>

                            {/* Certifications */}
                            <div className="my-4 sm:my-6 p-3 sm:p-4 bg-gray-50 dark:bg-zinc-800/50 rounded-lg">
                                <div className="inline-block">
                                    <div className="flex items-center gap-2 mb-2">
                                        <GrCertificate className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 flex-shrink-0" />
                                        <h3 className="text-sm sm:text-base md:text-xl font-bold bg-gradient-to-r from-green-500 via-teal-500 to-cyan-600 bg-clip-text text-transparent">
                                            Certifications:
                                        </h3>
                                    </div>
                                    <div className="w-16 sm:w-20 h-0.5 bg-gradient-to-r from-green-500 to-teal-500"></div>
                                </div>
                                <ul className="space-y-1.5 sm:space-y-2 list-disc list-inside mt-3 sm:mt-4 text-xs sm:text-sm">
                                    <li>
                                        Meta Front-End Developer Professional
                                        Certificate
                                    </li>
                                    <li>
                                        University of Michigan - Front-End Web
                                        Development
                                    </li>
                                </ul>
                            </div>

                            {/* More About Me */}
                            <div className="my-4 sm:my-6 p-3 sm:p-4 bg-gray-50 dark:bg-zinc-800/50 rounded-lg">
                                <div className="inline-block">
                                    <div className="flex items-center gap-2 mb-2">
                                        <MdOutlineQuestionMark className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500 flex-shrink-0" />
                                        <h3 className="text-sm sm:text-base md:text-xl font-bold bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-600 bg-clip-text text-transparent">
                                            More About Me:
                                        </h3>
                                    </div>
                                    <div className="w-16 sm:w-20 h-0.5 bg-gradient-to-r from-orange-500 to-amber-500"></div>
                                </div>
                                <ul className="space-y-1.5 sm:space-y-2 list-disc list-inside mt-3 sm:mt-4 text-xs sm:text-sm">
                                    <li>
                                        Calligrapher & Artist - passionate about
                                        the art of handwriting
                                    </li>
                                    <li>
                                        Fluent in English, always reading
                                        technical content
                                    </li>
                                    <li>
                                        Interested in AI and Machine Learning
                                    </li>
                                    <li>
                                        My goal is to build products that make
                                        people&apos;s lives easier
                                    </li>
                                </ul>
                            </div>

                            <p className="text-xs sm:text-sm">
                                I pay great attention to quality and details,
                                always striving to deliver the best user
                                experience. I enjoy working on challenging
                                projects and collaborating with creative teams.
                            </p>
                        </div>

                        <div className="mt-4 sm:mt-6 flex justify-end">
                            <button
                                onClick={onClose}
                                className="px-3 sm:px-4 py-1.5 sm:py-2 bg-red-500 hover:bg-red-600 text-white rounded-md transition-colors cursor-pointer text-sm sm:text-base"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
