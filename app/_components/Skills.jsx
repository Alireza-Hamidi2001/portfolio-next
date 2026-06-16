import AnimatedText from "./AnimatedText";
import SkillCharts from "./SkillChart";

function Skills() {
    return (
        <section
            id="skills"
            className="grid py-2 px-2 sm:px-0 grid-cols-1 justify-center min-h-screen"
        >
            <AnimatedText
                text="Skills"
                className="text-7xl md:text-8xl lg:text-9xl font-bold text-center mb-12 text-gray-800 dark:text-white mask-fade-bottom"
                delay={0.2}
                duration={0.6}
                staggerDelay={0.1}
                direction="bottom"
            />
            <div>
                <SkillCharts />
            </div>
        </section>
    );
}

export default Skills;
