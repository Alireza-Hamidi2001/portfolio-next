import AnimatedText from "./AnimatedText";
import AnimateOnScroll from "./AnimateOnScroll";
import Gallery from "./Gallery";
import RestaurantMenuSection from "./restaurantMenu/RestaurantMenuSection";
import SuitShopSection from "./suitShop/SuitShopSection";

function Projects() {
    return (
        <section
            id="projects"
            className="p-4"
        >
            <AnimatedText
                text="Projects"
                className="text-7xl md:text-8xl lg:text-9xl font-bold text-center mb-14 text-gray-800 dark:text-white mask-fade-bottom"
                delay={0.2}
                duration={0.6}
                staggerDelay={0.1}
                direction="bottom"
            />

            <SuitShopSection />
            <RestaurantMenuSection />

            <AnimateOnScroll
                direction="bottom"
                delay={0.5}
            >
                <Gallery />
            </AnimateOnScroll>
        </section>
    );
}

export default Projects;
