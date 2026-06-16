// components/AnimatedText.jsx
"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function AnimatedText({
    text,
    className = "",
    delay = 0,
    duration = 0.5,
    staggerDelay = 0.08,
    direction = "bottom",
}) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, threshold: 0.3 });

    const letters = text.split("").map((char, index) => ({
        char: char === " " ? "\u00A0" : char,
        index,
    }));

    const getInitialAnimation = () => {
        switch (direction) {
            case "bottom":
                return { y: 100, opacity: 0, rotateX: 90 };
            case "top":
                return { y: -100, opacity: 0, rotateX: -90 };
            case "left":
                return { x: -100, opacity: 0 };
            case "right":
                return { x: 100, opacity: 0 };
            case "scale":
                return { scale: 0, opacity: 0 };
            case "rotate":
                return { rotate: 180, scale: 0, opacity: 0 };
            default:
                return { y: 100, opacity: 0 };
        }
    };

    const getAnimateAnimation = () => {
        return { y: 0, x: 0, rotate: 0, scale: 1, opacity: 1, rotateX: 0 };
    };

    return (
        <div
            ref={ref}
            className="overflow-visible"
        >
            <h2 className={`flex flex-wrap justify-center ${className}`}>
                {letters.map(({ char, index }) => (
                    <motion.span
                        key={index}
                        initial={getInitialAnimation()}
                        animate={
                            isInView
                                ? getAnimateAnimation()
                                : getInitialAnimation()
                        }
                        transition={{
                            duration: duration,
                            delay: delay + index * staggerDelay,
                            type: "spring",
                            stiffness: 150,
                            damping: 12,
                            ease: "easeOut",
                        }}
                        className="inline-block whitespace-pre"
                        style={{
                            display: "inline-block",
                            transformStyle: "preserve-3d",
                        }}
                    >
                        {char}
                    </motion.span>
                ))}
            </h2>
        </div>
    );
}
