"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { GoSun } from "react-icons/go";
import { LuMoon } from "react-icons/lu";

function ThemeToggle() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }
    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="ml-8 rounded-lg hover:scale-1.2 duration-200 transition-all"
        >
            {theme === "dark" ? (
                <GoSun className="w-5 h-5 " />
            ) : (
                <LuMoon className="w-5 h-5  text-black" />
            )}
        </button>
    );
}

export default ThemeToggle;
