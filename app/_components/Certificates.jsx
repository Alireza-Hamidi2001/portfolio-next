// components/Certificates.jsx (Server Component)
import AnimatedText from "./AnimatedText";
import CertificateImage from "./CertificateImage";
import AnimateOnScroll from "./AnimateOnScroll";

function Certificates() {
    return (
        <section
            id="certificates"
            className="py-20"
        >
            <AnimatedText
                text="Certificates"
                className="text-6xl md:text-8xl lg:text-9xl font-bold text-center mb-12 text-gray-800 dark:text-white mask-fade-bottom"
                delay={0.2}
                duration={0.6}
                staggerDelay={0.1}
                direction="bottom"
            />

            <AnimateOnScroll
                direction="bottom"
                delay={0.5}
            >
                <CertificateImage />
            </AnimateOnScroll>
        </section>
    );
}

export default Certificates;
