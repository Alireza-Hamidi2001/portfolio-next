import { TbLayoutDashboard } from "react-icons/tb";
import AnimateOnScroll from "../AnimateOnScroll";
import { SuitShop_features } from "../Features";

export default function SuitShopFeatures() {
    return (
        <div className="max-w-5xl mx-auto">
            <AnimateOnScroll
                // direction="top"
                // delay={0.1}
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

                {SuitShop_features.map((feature, idx) => (
                    <AnimateOnScroll
                        key={idx}
                        // direction={feature.direction}
                        // delay={feature.delay}
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
                                className={`p-2 rounded-xl ${feature.color} bg-opacity-10 dark:bg-opacity-20 group-hover:scale-120 group-hover:-rotate-25 transition-transform duration-300`}
                            >
                                <feature.icon
                                    className={`w-4 h-4 sm:w-7 sm:h-7 ${feature.color}`}
                                />
                            </div>

                            <div className="flex-1">
                                <h4 className="font-bold text-gray-800 dark:text-white text-sm md:text-[1.1rem] mb-1">
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
    );
}
