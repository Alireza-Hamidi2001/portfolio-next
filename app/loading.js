// app/loading.jsx
import { FaCode } from "react-icons/fa";

export default function Loading() {
    return (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white dark:bg-zinc-900 transition-colors duration-300">
            <div className="relative">
                <div className="w-20 h-20 relative">
                    <div className="absolute inset-0 rounded-full border-4 border-gray-200 dark:border-gray-700"></div>
                    <div className="absolute inset-0 rounded-full border-4 border-t-blue-500 border-r-purple-500 border-b-transparent border-l-transparent animate-spin"></div>

                    <div className="absolute inset-0 flex items-center justify-center">
                        <FaCode className="w-8 h-8 text-blue-500 dark:text-blue-400 animate-pulse" />
                    </div>
                </div>

                <div className="mt-6 text-center">
                    <p className="text-xl font-medium text-gray-700 dark:text-gray-300">
                        Loading
                    </p>
                    <div className="flex justify-center gap-1 mt-2">
                        <span
                            className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"
                            style={{ animationDelay: "0ms" }}></span>
                        <span
                            className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"
                            style={{ animationDelay: "150ms" }}></span>
                        <span
                            className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"
                            style={{ animationDelay: "300ms" }}></span>
                    </div>
                </div>
            </div>
        </div>
    );
}
