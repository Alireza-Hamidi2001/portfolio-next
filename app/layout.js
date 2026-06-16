// app/layout.js
import { Geist, Geist_Mono } from "next/font/google";
import "./_styles/globals.css";
import { ThemeProvider } from "./_components/ThemeProvider";
import {
    arizonia,
    audioWide,
    caveat,
    coiny,
    comic,
    courgette,
    kottaOne,
    lime,
    openSans,
} from "./fonts";

export const metadata = {
    title: "Alireza Hamidi | Developer",
    description:
        "Front-End Developer specializing in Next.js, React, and Tailwind CSS. Master's student in Computer Engineering with Meta and University of Michigan certifications.",
    keywords:
        "Front-End Developer, Next.js, React, Tailwind CSS, Web Developer, Portfolio",
    authors: [{ name: "Alireza Hamidi" }],
    openGraph: {
        title: "Alireza Hamidi | Developer Portfolio",
        description:
            "Explore my projects and skills in modern web development.",
        url: "https://your-domain.com",
        type: "website",
    },
};

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export default function RootLayout({ children }) {
    return (
        <html
            lang="en"
            suppressHydrationWarning // ← این رو اضافه کن (قبلاً نداشتی)
            className={`${lime.variable} ${comic.variable} ${caveat.variable} ${coiny.variable} ${openSans.variable} ${arizonia.variable} ${audioWide.variable} ${courgette.variable} ${kottaOne.variable} ${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
            <body
                suppressHydrationWarning
                className="bg-gray-50 dark:bg-black text-black dark:text-gray-50 flex flex-col min-h-screen text-[62.5%] sm:text[75%] md:text[100%]">
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                    enableColorScheme={false}>
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
