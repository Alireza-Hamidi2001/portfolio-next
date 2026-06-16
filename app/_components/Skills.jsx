import AnimatedText from "./AnimatedText";
import SkillCharts from "./SkillChart";

function Skills() {
    return (
        <section
            id="skills"
            className="grid py-8 px-2 sm:px-0 grid-cols-1 justify-center min-h-screen lg:min-h-auto"
        >
            <AnimatedText
                text="Skills"
                className="text-7xl md:text-8xl lg:text-9xl my-8 font-bold text-center text-gray-800 dark:text-white mask-fade-bottom"
                delay={0.2}
                duration={0.6}
                staggerDelay={0.1}
                direction="bottom"
            />
            <SkillCharts />
        </section>
    );
}

export default Skills;
