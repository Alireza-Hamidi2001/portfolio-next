// components/About.jsx
import AnimatedImage from "./AnimatedImage";
import heroImage from "@/public/hero-section.png";
import AnimateOnScroll from "./AnimateOnScroll";
import LearnMore from "./LearnMore";

export default function About() {
    return (
        <section
            id="about"
            className=" pt-15 sm:pt-0 min-h-screen grid grid-cols-[auto] grid-rows-[1fr_3fr_1fr] lg:grid-cols-[auto_auto_auto] lg:grid-rows-1 lg:items-center justify-center"
        >
            <AnimateOnScroll
                direction="right"
                delay={1.1}
                duration={1}
                className="text-center sm:text-left"
            >
                <p className="text-lg md:text-2xl text-gray-600 dark:text-gray-300">
                    Hey there
                </p>
                <p className="text-6xl md:text-8xl font-bold text-gray-800 dark:text-white">
                    Alireza
                </p>
            </AnimateOnScroll>

            <AnimatedImage
                imageSrc={heroImage}
                altText="hero image"
            />

            <AnimateOnScroll
                direction="left"
                delay={1.1}
                duration={1}
                className="text-center sm:text-left"
            >
                <p className="text-6xl md:text-8xl invisible hidden sm:block">
                    .
                </p>
                <p className="text-6xl md:text-8xl font-bold text-gray-800 dark:text-white">
                    Hamidi
                </p>
                <LearnMore />
            </AnimateOnScroll>
        </section>
    );
}
