import { Suspense } from "react";
import { FaCartPlus, FaCheckCircle, FaDatabase, FaLock } from "react-icons/fa";
import { HiOutlineSparkles } from "react-icons/hi";
import Spinner from "../Spinner";

export default function SuitShopDemo() {
    return (
        <div>
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
            <Suspense fallback={<Spinner />}>
                <div className="w-full mx-auto rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm mb-12 bg-black aspect-video">
                    <iframe
                        src="https://player.cloudinary.com/embed/?cloud_name=direu398z&public_id=suit-shop_l7zxnq&autoplay=true&muted=true&loop=true&controls=false"
                        allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                        frameBorder="0"
                        className="w-full h-full"
                        loading="lazy"
                        title="Suit Shop Demo Video"
                    />
                </div>
            </Suspense>

            <div className="text-center mt-8 pt-2 md:pt-4 border-t border-gray-200 dark:border-gray-700">
                <div className="grid grid-cols-2 md:grid-cols-3 justify-center mb-6 md:mb-0 gap-2 md:gap-6 text-xs text-gray-500 dark:text-gray-400">
                    <span className="flex items-center md:mx-auto gap-1">
                        <FaCheckCircle className="w-5 h-5 text-green-500" />
                        Fully Responsive
                    </span>
                    <span className="flex items-center md:mx-auto gap-1">
                        <FaLock className="w-5 h-5 text-blue-500" />
                        Secure Authentication
                    </span>
                    <span className="flex items-center md:mx-auto gap-1">
                        <FaCartPlus className="w-5 h-5 text-orange-500" />
                        Shopping Cart
                    </span>
                </div>
            </div>
        </div>
    );
}
