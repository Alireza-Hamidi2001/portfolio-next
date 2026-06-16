// components/Skills.jsx
"use client";
import { Radar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
} from "chart.js";
import AnimateOnScroll from "./AnimateOnScroll";

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
);

export default function SkillCharts() {
    const radarSkills = {
        labels: [
            "HTML",
            "CSS / SASS",
            "Tailwind CSS",
            "JavaScript",
            "React",
            "Next.js",
            "Git",
        ],
        datasets: [
            {
                label: "Abilities",
                data: [95, 95, 95, 90, 85, 80, 90],
                backgroundColor: "rgba(59, 130, 246, 0.2)",
                borderColor: "rgba(59, 130, 246, 1)",
                borderWidth: 2,

                // تنظیمات نقاط (دایره‌ها)
                pointBackgroundColor: "#ffde67",
                pointBorderColor: "#ffffff",
                pointBorderWidth: 0,
                pointRadius: 4,
                pointHoverRadius: 10,
                pointHoverBackgroundColor: "#0d9488",
                pointHoverBorderColor: "#0d9488",
                borderJoinStyle: "round",
            },
        ],
    };

    // Skills data for progress bars
    const progressSkills = [
        { name: "HTML", percentage: 95, delay: 0.2 },
        { name: "CSS / SASS", percentage: 95, delay: 0.3 },
        { name: "Tailwind CSS", percentage: 95, delay: 0.4 },
        { name: "JavaScript", percentage: 90, delay: 0.5 },
        { name: "React", percentage: 85, delay: 0.6 },
        { name: "Next.js", percentage: 80, delay: 0.7 },
        { name: "Git", percentage: 90, delay: 0.8 },
    ];

    // Tags data
    const skillTags = [
        { name: "Python", delay: 0.8, bgColor: "bg-cyan-500" },
        { name: "Vue.js", delay: 0.9, bgColor: "bg-amber-500" },
        { name: "REST API", delay: 1, bgColor: "bg-red-500" },
        { name: "Figma", delay: 1.1, bgColor: "bg-teal-500" },
        { name: "MySQL", delay: 1.2, bgColor: "bg-lime-500" },
    ];

    // Chart options
    const options = {
        responsive: true,
        maintainAspectRatio: true,
        aspectRatio: 1.4,
        scales: {
            r: {
                beginAtZero: true,
                max: 100,
                ticks: {
                    stepSize: 20,
                    backdropColor: "transparent",
                    color: "#31bc387b",
                    font: {
                        size: 13,
                    },
                },
                grid: {
                    color: "#056d8ab9",
                    circular: true,
                },
                angleLines: {
                    color: "#1658dba3",
                },
                pointLabels: {
                    color: "#8a8a8a",
                    font: {
                        size: 10,
                        // weight: "bold",
                    },
                },
            },
        },
        plugins: {
            legend: {
                position: "bottom",
                labels: {
                    color: "#6b7280",
                    font: {
                        size: 12,
                    },
                    usePointStyle: true,
                    pointStyle: "circle",
                },
            },
            tooltip: {
                callbacks: {
                    label: function (context) {
                        return `${context.label}: ${context.raw}%`;
                    },
                },
            },
        },
    };

    return (
        <section
            id="skills"
            className=""
        >
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-12">
                    {/* Radar Chart */}
                    <AnimateOnScroll
                        direction="left"
                        delay={0.4}
                    >
                        <div className="md:p-6">
                            <Radar
                                data={radarSkills}
                                options={options}
                            />
                        </div>
                    </AnimateOnScroll>

                    {/* Skills Details */}
                    <div>
                        <AnimateOnScroll
                            direction="right"
                            delay={0.4}
                            className="w-full max-w-sm"
                        >
                            <div className="space-y-4">
                                <div className="space-y-3">
                                    {progressSkills.map((skill, index) => (
                                        <AnimateOnScroll
                                            key={index}
                                            direction="right"
                                            delay={skill.delay}
                                            className="w-full max-w-sm justify-center text-center sm:text-left grid grid-cols-2 items-center"
                                        >
                                            <span className="font-open-sans font-bold">
                                                {skill.name}
                                            </span>
                                            <div className="w-40 sm:w-48 bg-gray-300 dark:bg-zinc-700 rounded-sm h-4">
                                                <div
                                                    className="bg-teal-600 dark:bg-teal-500 h-4 rounded-sm"
                                                    style={{
                                                        width: `${skill.percentage}%`,
                                                    }}
                                                ></div>
                                            </div>
                                            <span className="text-sm text-teal-700 dark:text-teal-500">
                                                {skill.percentage}%
                                            </span>
                                        </AnimateOnScroll>
                                    ))}
                                </div>
                            </div>
                        </AnimateOnScroll>

                        {/* Skills Tags */}
                        <div className="flex flex-wrap gap-2 mt-6">
                            {skillTags.map((tag, index) => (
                                <AnimateOnScroll
                                    key={index}
                                    direction="right"
                                    delay={tag.delay}
                                    className="flex flex-wrap gap-2 mt-6"
                                >
                                    <span
                                        className={`${tag.bgColor} px-3 py-1 text-white dark:text-black rounded-full text-xs sm:text-sm`}
                                    >
                                        {tag.name}
                                    </span>
                                </AnimateOnScroll>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
