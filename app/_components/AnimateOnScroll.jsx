// components/AnimateOnScroll.jsx
"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function AnimateOnScroll({
    children,
    direction = "bottom", 
    delay = 0,
    duration = 0.6,
    distance = 50,
    className = "",
    threshold = 0.1,
    once = false,
}) {
    const { ref, inView } = useInView({
        threshold: threshold,
        triggerOnce: once,
    });

    const getInitialPosition = () => {
        switch (direction) {
            case "left":
                return { x: -distance, opacity: 0 };
            case "right":
                return { x: distance, opacity: 0 };
            case "top":
                return { y: -distance, opacity: 0 };
            case "bottom":
                return { y: distance, opacity: 0 };
            default:
                return { y: distance, opacity: 0 };
        }
    };

    const getAnimatePosition = () => {
        return { x: 0, y: 0, opacity: 1 };
    };

    return (
        <motion.div
            ref={ref}
            initial={getInitialPosition()}
            animate={inView ? getAnimatePosition() : getInitialPosition()}
            transition={{
                duration: duration,
                delay: delay,
                ease: "easeOut",
                type: "spring",
                stiffness: 100,
                damping: 20,
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
