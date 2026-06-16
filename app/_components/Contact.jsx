// components/Contact.jsx (Server Component)
import AnimatedText from "./AnimatedText";
import ContactCards from "./ContactCards";

function Contact() {
    return (
        <section
            id="contact"
            className="py-20"
        >
            <AnimatedText
                text="Contact"
                className="text-7xl md:text-8xl lg:text-9xl font-bold text-center mb-12 text-gray-800 dark:text-white mask-fade-bottom"
                delay={0.2}
                duration={0.6}
                staggerDelay={0.1}
                direction="bottom"
            />
            <ContactCards />
        </section>
    );
}

export default Contact;
