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

        return () => {
            document.removeEventListener("keydown", handleEscape);
            document.body.style.overflow = "unset";
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
                className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/30 backdrop-blur-md"
                onClick={handleBackdropClick}
            >
                <div className="relative max-w-2xl w-full max-h-[90vh] bg-white dark:bg-zinc-950 border border-white rounded-2xl shadow-2xl overflow-hidden flex flex-col">
                    {/* Header */}
                    <div className="flex items-center justify-between p-6 md:p-8 pb-0">
                        <div className="inline-block">
                            <h2 className="title-1 font-comic">
                                More About Me
                            </h2>
                            <div className="w-32 h-0.5 bg-white dark:bg-black mt-2"></div>
                        </div>
                        <button
                            onClick={onClose}
                            className="p-2 rounded-full bg-gray-100 dark:bg-zinc-800 hover:bg-gray-200 dark:hover:bg-zinc-700 transition-colors"
                        >
                            <IoCloseOutline className="w-6 h-6 text-gray-600 dark:text-gray-300" />
                        </button>
                    </div>

                    {/* Scrollable content */}
                    <div className="overflow-y-auto flex-1">
                        <div className="p-6 md:p-8 pt-4">
                            <div className="space-y-4 text-gray-600 dark:text-gray-300">
                                <p>
                                    Hi! I&apos;m Alireza Hamidi, a passionate
                                    developer with a strong academic background
                                    in computer engineering.
                                </p>

                                {/* Academic Background */}
                                <div className="my-6 p-4 bg-gray-50 dark:bg-zinc-800/50 rounded-lg">
                                    <div className="inline-block">
                                        <div className="flex items-center gap-2 mb-2">
                                            <HiAcademicCap className="w-6 h-6 text-blue-500" />
                                            <h3 className="text-xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                                                Academic Background:
                                            </h3>
                                        </div>
                                        <div className="w-20 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                                    </div>{" "}
                                    <ul className="space-y-2 list-disc list-inside mt-4 italic">
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
                                <div className="my-6 p-4 bg-gray-50 dark:bg-zinc-800/50 rounded-lg">
                                    <div className="inline-block">
                                        <div className="flex items-center gap-2 mb-2">
                                            <GrCertificate className="w-6 h-6 text-green-500" />
                                            <h3 className="font-bold text-xl bg-gradient-to-r from-green-500 via-teal-500 to-cyan-600 bg-clip-text text-transparent">
                                                Certifications:
                                            </h3>
                                        </div>
                                        <div className="w-20 h-0.5 bg-gradient-to-r from-green-500 to-teal-500"></div>
                                    </div>
                                    <ul className="space-y-2 list-disc list-inside mt-4">
                                        <li>
                                            Meta Front-End Developer
                                            Professional Certificate
                                        </li>
                                        <li>
                                            University of Michigan - Front-End
                                            Web Development
                                        </li>
                                    </ul>
                                </div>

                                {/* More About Me */}
                                <div className="my-6 p-4 bg-gray-50 dark:bg-zinc-800/50 rounded-lg">
                                    <div className="inline-block">
                                        <div className="flex items-center gap-2 mb-2">
                                            <MdOutlineQuestionMark className="w-6 h-6 text-orange-500" />
                                            <h3 className="font-bold text-xl bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-600 bg-clip-text text-transparent">
                                                More About Me:
                                            </h3>
                                        </div>
                                        <div className="w-20 h-0.5 bg-gradient-to-r from-orange-500 to-amber-500"></div>
                                    </div>
                                    <ul className="space-y-2 list-disc list-inside mt-4">
                                        <li>
                                            Calligrapher & Artist - passionate
                                            about the art of handwriting
                                        </li>
                                        <li>
                                            Fluent in English, always reading
                                            technical content
                                        </li>
                                        <li>
                                            Interested in AI and Machine
                                            Learning
                                        </li>
                                        <li>
                                            My goal is to build products that
                                            make people&apos;s lives easier
                                        </li>
                                    </ul>
                                </div>

                                <p>
                                    I pay great attention to quality and
                                    details, always striving to deliver the best
                                    user experience. I enjoy working on
                                    challenging projects and collaborating with
                                    creative teams.
                                </p>
                            </div>

                            <div className="mt-6 flex justify-end">
                                <button
                                    onClick={onClose}
                                    className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md transition-colors cursor-pointer"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
