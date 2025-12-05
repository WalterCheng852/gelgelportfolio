"use client";

import Image from "next/image";
import { Heart, Instagram, ExternalLink } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function GallerySection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Parallax effects for images
    const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const y2 = useTransform(scrollYProgress, [0, 1], [50, -150]);
    const rotate1 = useTransform(scrollYProgress, [0, 1], [-2, 2]);
    const rotate2 = useTransform(scrollYProgress, [0, 1], [2, -2]);

    return (
        <section 
            ref={containerRef}
            id="gallery" 
            className="relative py-16 md:py-32 px-4 bg-white overflow-hidden"
        >
            {/* Large Background Typography - Parallax */}
            <motion.div 
                style={{ y: useTransform(scrollYProgress, [0, 1], [0, -80]) }}
                className="absolute top-10 right-0 text-[6rem] md:text-[16rem] font-[family-name:var(--font-playfair)] text-[#F9F7F2] leading-none select-none pointer-events-none hidden md:block"
            >
                Gallery
            </motion.div>

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-10 md:mb-20"
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

                {/* Gallery Grid with Parallax */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
                    {/* Gallery Item 1 */}
                    <motion.div 
                        style={{ y: y1, rotate: rotate1 }}
                        className="group relative"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative aspect-[4/5] rounded-[32px] overflow-hidden shadow-2xl shadow-[#4A4E69]/10"
                        >
                            <Image
                                src="/feedback1.png"
                                alt="Customer Review 1"
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                            
                            {/* Content on Hover */}
                            <div className="absolute inset-0 flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                                <div className="flex items-center gap-3 text-white">
                                    <Heart className="w-6 h-6 fill-white" />
                                    <span className="font-medium text-lg">客人實拍</span>
                                </div>
                                <p className="text-white/80 text-sm mt-2">
                                    "超級滿意！細節處理得很好 💅"
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Gallery Item 2 */}
                    <motion.div 
                        style={{ y: y2, rotate: rotate2 }}
                        className="group relative mt-0 md:mt-24"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative aspect-[4/5] rounded-[32px] overflow-hidden shadow-2xl shadow-[#4A4E69]/10"
                        >
                            <Image
                                src="/feedback2.png"
                                alt="Customer Review 2"
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                            
                            {/* Content on Hover */}
                            <div className="absolute inset-0 flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                                <div className="flex items-center gap-3 text-white">
                                    <Heart className="w-6 h-6 fill-white" />
                                    <span className="font-medium text-lg">客人實拍</span>
                                </div>
                                <p className="text-white/80 text-sm mt-2">
                                    "每次都很期待來做美甲 ✨"
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Instagram CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-10 md:mt-20 text-center"
                >
                    <a 
                        href="https://www.instagram.com/ys.nails.beauty/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 md:gap-4 px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-[#E6CCB2] to-[#DDB892] rounded-full text-[#4A4E69] font-semibold text-sm md:text-base hover:shadow-lg hover:shadow-[#E6CCB2]/30 transition-all duration-300 group"
                    >
                        <Instagram className="w-5 h-5" />
                        <span>Follow @YSNAILSBEAUTY</span>
                        <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <p className="text-[#4A4E69]/50 mt-4 text-sm">
                        更多作品持續更新中
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
