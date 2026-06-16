// components/AnimatedImage.jsx
"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { IoHandLeftOutline } from "react-icons/io5";

export default function AnimatedImage({ imageSrc, altText }) {
    return (
        <motion.div
            className="relative w-[80vw] h-full md:w-85 md:h-120  mx-auto"
            initial={{ opacity: 0, scale: 0.8, rotateY: -180 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{
                duration: 1,
                delay: 0.3,
                stiffness: 100,
                ease: "easeInOut",
                damping: 15,
            }}
        >
            <Image
                alt={altText}
                fill
                src={imageSrc}
                className="object-cover object-top rounded-2xl"
                priority
            />
            <div className="absolute bg-yellow-200 dark:bg-amber-600 -bottom-1 md:bottom-2 p-4 rounded-full">
                <IoHandLeftOutline className="waving-hand w-8 h-8" />
            </div>
        </motion.div>
    );
}
