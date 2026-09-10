import RestaurantDemo from "./RestaurantDemo.jsx";
import SuitShopDemo from "./RestaurantDemo.jsx";
import RestaurantFeatures from "./RestaurantFeatures.jsx";
import SuitShopFeatures from "./RestaurantFeatures.jsx";

export default function RestaurantMenuSection() {
    return (
        <section className="container mx-auto px-4 mb-16">
            <div className="flex flex-col-reverse md:grid grid-cols-1 items-center md:grid-cols-[2fr_3fr] gap-4">
                <RestaurantFeatures />
                <RestaurantDemo />
            </div>
        </section>
    );
}
