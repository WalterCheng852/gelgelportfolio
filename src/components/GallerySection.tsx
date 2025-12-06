"use client";

import Image from "next/image";
import { Heart, Instagram, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const galleryItems = [
    {
        src: "/feedback1.png",
        alt: "Customer Review 1",
        label: "客人實拍",
        quote: "超級滿意！細節處理得很好 💅",
    },
    {
        src: "/feedback2.png",
        alt: "Customer Review 2",
        label: "客人實拍",
        quote: "每次都很期待來做美甲 ✨",
    },
];

const slideVariants = {
    enter: (direction: number) => ({
        x: direction > 0 ? 120 : -120,
        opacity: 0,
        scale: 0.96,
    }),
    center: {
        x: 0,
        opacity: 1,
        scale: 1,
    },
    exit: (direction: number) => ({
        x: direction > 0 ? -120 : 120,
        opacity: 0,
        scale: 0.96,
    }),
};

export default function GallerySection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -80]);
    const sectionY = useTransform(scrollYProgress, [0, 1], [40, -40]);

    const [activeIndex, setActiveIndex] = useState(0);
    const [direction, setDirection] = useState(1);
    const itemCount = galleryItems.length;

    useEffect(() => {
        const autoplay = setInterval(() => {
            setDirection(1);
            setActiveIndex((prev) => (prev + 1) % itemCount);
        }, 6000);
        return () => clearInterval(autoplay);
    }, [itemCount]);

    const handlePrev = () => {
        setDirection(-1);
        setActiveIndex((prev) => (prev - 1 + itemCount) % itemCount);
    };

    const handleNext = () => {
        setDirection(1);
        setActiveIndex((prev) => (prev + 1) % itemCount);
    };

    const handleDotClick = (index: number) => {
        if (index === activeIndex) return;
        setDirection(index > activeIndex ? 1 : -1);
        setActiveIndex(index);
    };

    return (
        <section
            ref={containerRef}
            id="gallery"
            className="relative py-16 md:py-32 px-4 bg-white overflow-hidden"
        >
            {/* Large Background Typography - Parallax */}
            <motion.div
                style={{ y: backgroundY }}
                className="absolute top-10 right-0 text-[6rem] md:text-[16rem] font-[family-name:var(--font-playfair)] text-[#F9F7F2] leading-none select-none pointer-events-none hidden md:block"
            >
                Gallery
            </motion.div>

            <motion.div style={{ y: sectionY }} className="max-w-6xl mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-10 md:mb-16"
                >
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#E6CCB2]/30 rounded-full text-sm font-medium text-[#4A4E69] mb-6">
                        <Heart className="w-4 h-4 fill-[#CB997E] text-[#CB997E]" />
                        客人好評
                    </span>
                    <h2 className="text-3xl md:text-6xl font-bold text-[#4A4E69] tracking-tight font-[family-name:var(--font-playfair)]">
                        好評回圖
                    </h2>
                    <p className="text-[#4A4E69]/60 mt-4 text-lg">
                        每一位客人的滿意，都是我們的驕傲
                    </p>
                </motion.div>

                {/* Carousel */}
                <div className="flex flex-col lg:flex-row items-center gap-10">
                    <div className="relative w-full max-w-xl mx-auto lg:max-w-3xl">
                        <div className="relative aspect-[4/5] rounded-[32px] overflow-hidden shadow-2xl shadow-[#4A4E69]/10">
                            <AnimatePresence initial={false} custom={direction}>
                                <motion.div
                                    key={activeIndex}
                                    custom={direction}
                                    variants={slideVariants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                    className="absolute inset-0"
                                >
                                    <Image
                                        src={galleryItems[activeIndex].src}
                                        alt={galleryItems[activeIndex].alt}
                                        fill
                                        priority
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                                    <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                                        <div className="flex items-center gap-3 text-white/80 text-sm uppercase tracking-[0.4em]">
                                            <Heart className="w-5 h-5" />
                                            {galleryItems[activeIndex].label}
                                        </div>
                                        <p className="text-lg md:text-xl font-medium mt-3">
                                            {galleryItems[activeIndex].quote}
                                        </p>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Carousel Controls */}
                        <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-4">
                            <button
                                onClick={handlePrev}
                                className="w-10 h-10 rounded-full bg-white/80 text-[#4A4E69] flex items-center justify-center shadow-md hover:bg-white"
                                aria-label="Previous slide"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </button>
                            <button
                                onClick={handleNext}
                                className="w-10 h-10 rounded-full bg-white/80 text-[#4A4E69] flex items-center justify-center shadow-md hover:bg-white"
                                aria-label="Next slide"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>

                        <div className="flex items-center justify-center gap-2 mt-6">
                            {galleryItems.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleDotClick(index)}
                                    className={`h-2 rounded-full transition-all ${index === activeIndex ? "bg-[#4A4E69] w-8" : "bg-[#4A4E69]/30 w-3"
                                        }`}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="flex-1 text-center lg:text-left space-y-4">
                        <p className="text-[#4A4E69]/70 text-base md:text-lg leading-relaxed">
                            以匠心的手藝記錄每位客人的獨特時光。
                            滑動查看更多回圖，感受細節帶來的溫度。
                        </p>
                        <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4">
                            <a
                                href="https://www.instagram.com/ys.nails.beauty/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#E6CCB2] to-[#DDB892] rounded-full text-[#4A4E69] font-semibold text-sm md:text-base hover:shadow-lg hover:shadow-[#E6CCB2]/30 transition-all duration-300"
                            >
                                <Instagram className="w-5 h-5" />
                                Follow @YSNAILSBEAUTY
                                <ExternalLink className="w-4 h-4" />
                            </a>
                        </div>
                        <p className="text-[#4A4E69]/40 text-sm">
                            持續更新更多作品與保養日常
                        </p>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
