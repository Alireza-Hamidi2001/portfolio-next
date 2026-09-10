import SuitShopDemo from "./SuitShopDemo.jsx";
import SuitShopFeatures from "./SuitShopFeatures";

export default function SuitShopSection() {
    return (
        <section className="container mx-auto px-4 mb-20">
            <div className="grid grid-cols-1 items-center md:grid-cols-[3fr_2fr] gap-4">
                <SuitShopDemo />
                <SuitShopFeatures />
            </div>
        </section>
    );
}
