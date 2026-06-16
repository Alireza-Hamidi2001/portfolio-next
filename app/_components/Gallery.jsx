import Image from "next/image";
import AnimateOnScroll from "./AnimateOnScroll";
const imageUrls = [
    "https://res.cloudinary.com/direu398z/image/upload/v1781422607/Screenshot_1349_eghqyr.png",
    "https://res.cloudinary.com/direu398z/image/upload/v1781422552/Screenshot_1335_x8jtvk.png",
    "https://res.cloudinary.com/direu398z/image/upload/v1781422555/Screenshot_1340_gxbkas.png",
    "https://res.cloudinary.com/direu398z/image/upload/v1781422561/Screenshot_1341_pw3bmd.png",
    "https://res.cloudinary.com/direu398z/image/upload/v1781422556/Screenshot_1333_qeafuy.png",
    "https://res.cloudinary.com/direu398z/image/upload/v1781422554/Screenshot_1338_ciwg84.png", //
    "https://res.cloudinary.com/direu398z/image/upload/v1781422560/Screenshot_1342_rlqstp.png",
    "https://res.cloudinary.com/direu398z/image/upload/v1781422555/Screenshot_1334_tqdqv8.png",
    "https://res.cloudinary.com/direu398z/image/upload/v1781422566/Screenshot_1343_go3peb.png",
    "https://res.cloudinary.com/direu398z/image/upload/v1781422563/Screenshot_1344_ll87ws.png",
    "https://res.cloudinary.com/direu398z/image/upload/v1781422562/Screenshot_1339_z21ukt.png",
    "https://res.cloudinary.com/direu398z/image/upload/v1781422578/Screenshot_1345_aqzrtz.png",
    "https://res.cloudinary.com/direu398z/image/upload/v1781422552/Screenshot_1336_phjcft.png",
    "https://res.cloudinary.com/direu398z/image/upload/v1781422604/Screenshot_1346_yfejjt.png",
];

function Gallery() {
    return (
        <>
            <p className="text-2xl sm:text-4xl my-8 text-center">
                Other projects overview
            </p>

            <section className="p-0 sm:p-2 xl:p-20 pt-0 grid grid-cols-8 auto-rows-[45px] sm:auto-rows-[60px] md:auto-rows-[100px] lg:auto-rows-[120px] gap-1 sm:gap-2">
                <div className="relative col-start-1 col-span-2 row-start-1 row-span-2 overflow-hidden border border-gray-700 dark:border-gray-300 rounded-sm">
                    <Image
                        fill
                        src={imageUrls[0]}
                        alt="gallery"
                        className="image_gallery"
                        quality={100}
                    />
                </div>

                <div className="relative col-start-3 col-span-3 row-start-1 row-span-3 overflow-hidden border border-gray-700 dark:border-gray-300 rounded-sm">
                    <Image
                        fill
                        src={imageUrls[1]}
                        alt="gallery"
                        className="image_gallery"
                    />
                </div>

                <div className="relative col-start-6 col-span-1 row-start-1 row-span-2 overflow-hidden border border-gray-700 dark:border-gray-300 rounded-sm">
                    <Image
                        fill
                        src={imageUrls[2]}
                        alt="gallery"
                        className="image_gallery"
                    />
                </div>

                <div className="relative col-start-7 col-span-2 row-start-1 row-span-2 overflow-hidden border border-gray-700 dark:border-gray-300 rounded-sm">
                    <Image
                        fill
                        src={imageUrls[3]}
                        alt="gallery"
                        className="image_gallery"
                    />
                </div>

                <div className="relative col-start-1 col-span-2 row-start-3 row-span-3 overflow-hidden border border-gray-700 dark:border-gray-300 rounded-sm">
                    <Image
                        fill
                        src={imageUrls[4]}
                        alt="gallery"
                        className="image_gallery"
                    />
                </div>

                <div className="relative col-start-3 col-span-2 row-start-4 row-span-2 overflow-hidden border border-gray-700 dark:border-gray-300 rounded-sm">
                    <Image
                        fill
                        src={imageUrls[5]}
                        alt="gallery"
                        className="image_gallery"
                    />
                </div>

                <div className="relative col-start-5 col-span-1 row-start-4 row-span-1 overflow-hidden border border-gray-700 dark:border-gray-300 rounded-sm">
                    <Image
                        fill
                        src={imageUrls[6]}
                        alt="gallery"
                        className="image_gallery"
                    />
                </div>

                <div className="relative col-start-6 col-span-2 row-start-3 row-span-2 overflow-hidden border border-gray-700 dark:border-gray-300 rounded-sm">
                    <Image
                        fill
                        src={imageUrls[7]}
                        alt="gallery"
                        className="image_gallery"
                    />
                </div>

                <div className="relative col-start-8 col-span-1 row-start-3 row-span-3 overflow-hidden border border-gray-700 dark:border-gray-300 rounded-sm">
                    <Image
                        fill
                        src={imageUrls[8]}
                        alt="gallery"
                        className="image_gallery"
                    />
                </div>

                <div className="relative col-start-1 col-span-1 row-start-6 row-span-2 overflow-hidden border border-gray-700 dark:border-gray-300 rounded-sm">
                    <Image
                        fill
                        src={imageUrls[9]}
                        alt="gallery"
                        className="object-cover object-left rounded-sm border border-gray-700 dark:border-gray-300"
                    />
                </div>

                <div className="relative col-start-2 col-span-2 row-start-6 row-span-2 overflow-hidden border border-gray-700 dark:border-gray-300 rounded-sm">
                    <Image
                        fill
                        src={imageUrls[10]}
                        alt="gallery"
                        className="image_gallery"
                    />
                </div>

                <div className="relative col-start-4 col-span-1 row-start-6 row-span-2  overflow-hidden border border-gray-700 dark:border-gray-300 rounded-sm">
                    <Image
                        fill
                        src={imageUrls[11]}
                        alt="gallery"
                        className="object-cover object-left rounded-sm border border-gray-700 dark:border-gray-300"
                    />
                </div>

                <div className="relative col-start-5 col-span-3 row-start-5 row-span-3 overflow-hidden border border-gray-700 dark:border-gray-300 rounded-sm">
                    <Image
                        fill
                        src={imageUrls[12]}
                        alt="gallery"
                        className="image_gallery"
                    />
                </div>

                <div className="relative col-start-8 col-span-1 row-start-6 row-span-2 overflow-hidden border border-gray-700 dark:border-gray-300 rounded-sm">
                    <Image
                        fill
                        src={imageUrls[13]}
                        alt="gallery"
                        className="image_gallery"
                    />
                </div>
            </section>
        </>
    );
}

export default Gallery;
