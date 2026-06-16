// components/LearnMore.jsx
"use client";

import { useState } from "react";
import ModalMoreMe from "./ModalMoreMe";
import AnimateOnScroll from "./AnimateOnScroll";

function LearnMore() {
    const [showModal, setShowModal] = useState(false);

    function handleShowModal() {
        setShowModal(!showModal);
    }

    return (
        <AnimateOnScroll
            direction="bottom"
            delay={1.4}
        >
            <button
                onClick={handleShowModal}
                className="learn-more-btn text-lg md:text-2xl mt-4 hover:cursor-pointer font-medium transition-colors inline-flex items-center gap-1"
            >
                More about me
                <span className="group-hover:translate-x-1 transition-transform">
                    →
                </span>
            </button>

            {showModal && <ModalMoreMe onClose={handleShowModal} />}
        </AnimateOnScroll>
    );
}

export default LearnMore;
