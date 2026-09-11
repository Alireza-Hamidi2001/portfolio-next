import {
    FaCommentDots,
    FaDatabase,
    FaEdit,
    FaFilter,
    FaLock,
    FaTags,
    FaUserCircle,
} from "react-icons/fa";
import { MdOutlineAdminPanelSettings } from "react-icons/md";

export const SuitShop_features = [
    {
        // direction: "bottom",
        // delay: 0.05,
        icon: FaLock,
        title: "Authentication & Authorization",
        description:
            "Secure login/register with Supabase Auth, role-based access (Admin/User)",
        color: "text-blue-500",
        bgColor: "bg-blue-500",
    },
    {
        // direction: "top",
        // delay: 0.1,
        icon: FaUserCircle,
        title: "User Panel",
        description:
            "Browse products, cart management, leave comments (requires admin approval)",
        color: "text-green-500",
        bgColor: "bg-green-500",
    },
    {
        // direction: "bottom",
        // delay: 0.25,
        icon: MdOutlineAdminPanelSettings,
        title: "Admin Panel",
        description:
            "Create, edit, delete posts; manage comments (approve/delete); full product control",
        color: "text-purple-500",
        bgColor: "bg-purple-500",
    },
    {
        // direction: "top",
        // delay: 0.3,
        icon: FaDatabase,
        title: "Database & Backend",
        description:
            "Supabase (PostgreSQL) for users, products, comments, orders, sessions",
        color: "text-yellow-500",
        bgColor: "bg-yellow-500",
    },
    {
        // direction: "bottom",
        // delay: 0.35,
        icon: FaCommentDots,
        title: "Comment System",
        description:
            "Users comment, hidden until admin approves; admin can delete or approve",
        color: "text-indigo-500",
        bgColor: "bg-indigo-500",
    },
    {
        // direction: "top",
        // delay: 0.4,
        icon: FaFilter,
        title: "Filtering & Navigation",
        description:
            "Filter by category, price, size, color; active menu item gets distinct style",
        color: "text-pink-500",
        bgColor: "bg-pink-500",
    },
    {
        // direction: "bottom",
        // delay: 0.45,
        icon: FaTags,
        title: "Dynamic Meta Tags",
        description:
            "Custom meta title & description per product/page for SEO & social sharing",
        color: "text-orange-500",
        bgColor: "bg-orange-500",
    },
    {
        // direction: "top",
        // delay: 0.5,
        icon: FaEdit,
        title: "Post Management",
        description: "Admin can create/edit/delete posts/products",
        color: "text-red-500",
        bgColor: "bg-red-500",
    },
];


//////////// --------------------------------
//////////// --------------------------------
//////////// --------------------------------
//////////// --------------------------------
//////////// --------------------------------


export const Restaurant_features = [
    {
        // direction: "bottom",
        // delay: 0.05,
        icon: FaLock,
        title: "Authentication & Authorization",
        description:
            "Secure login/register with Supabase Auth, role-based access (Admin/User)",
        color: "text-blue-500",
        bgColor: "bg-blue-500",
    },
    {
        // direction: "top",
        // delay: 0.1,
        icon: FaUserCircle,
        title: "User Panel",
        description:
            "Browse products, cart management, leave comments (requires admin approval)",
        color: "text-green-500",
        bgColor: "bg-green-500",
    },
    {
        // direction: "bottom",
        // delay: 0.25,
        icon: MdOutlineAdminPanelSettings,
        title: "Admin Panel",
        description:
            "Create, edit, delete posts; manage comments (approve/delete); full product control",
        color: "text-purple-500",
        bgColor: "bg-purple-500",
    },
    {
        // direction: "top",
        // delay: 0.3,
        icon: FaDatabase,
        title: "Database & Backend",
        description:
            "Supabase (PostgreSQL) for users, menu, orders",
        color: "text-yellow-500",
        bgColor: "bg-yellow-500",
    },
    {
        // direction: "top",
        // delay: 0.4,
        icon: FaFilter,
        title: "Filtering & Navigation",
        description:
            "Filter by category, price, size, color; active menu item gets distinct style",
        color: "text-pink-500",
        bgColor: "bg-pink-500",
    },
    {
        // direction: "bottom",
        // delay: 0.45,
        icon: FaTags,
        title: "Dynamic Meta Tags",
        description:
            "Custom meta title & description per product/page for SEO & social sharing",
        color: "text-orange-500",
        bgColor: "bg-orange-500",
    },
];
