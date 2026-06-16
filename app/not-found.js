// app/not-found.jsx
import Link from "next/link";
import { FaHome, FaSearch, FaArrowLeft } from "react-icons/fa";
import { HiOutlineEmojiSad } from "react-icons/hi";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center px-4">
            <div className="max-w-2xl mx-auto text-center">
                {/* آیکون خطا */}
                <div className="mb-8">
                    <div className="relative inline-block">
                        <div className="absolute inset-0 animate-ping rounded-full bg-blue-400 opacity-20"></div>
                        <HiOutlineEmojiSad className="w-32 h-32 text-blue-500 dark:text-blue-400 relative z-10" />
                    </div>
                </div>

                {/* عدد 404 */}
                <h1 className="text-8xl md:text-9xl font-black text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-4">
                    404
                </h1>

                {/* عنوان */}
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
                    Oops! Page Not Found
                </h2>

                {/* توضیحات */}
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-md mx-auto">
                    The page you&apos;re looking for doesn&apos;t exist or has been moved.
                    But don&apos;t worry, there&apos;s plenty of other content to explore!
                </p>

                {/* پیشنهادات */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 mb-8 shadow-lg">
                    <h3 className="font-semibold text-gray-700 dark:text-gray-300 mb-3">
                        You might want to try:
                    </h3>
                    <ul className="text-gray-600 dark:text-gray-400 space-y-2">
                        <li>• Checking the URL for typos</li>
                        <li>• Going back to the previous page</li>
                        <li>• Starting from the homepage</li>
                    </ul>
                </div>

                {/* دکمه‌های ناوبری */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                        <FaHome className="w-5 h-5" />
                        Back to Home
                    </Link>

                    <button
                        onClick={() => window.history.back()}
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 font-semibold rounded-xl transition-all duration-300 hover:scale-105">
                        <FaArrowLeft className="w-5 h-5" />
                        Go Back
                    </button>
                </div>

                {/* فوتر کوچک */}
                <div className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        Need help?{" "}
                        <a
                            href="/contact"
                            className="text-blue-600 hover:underline">
                            Contact me
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}
