"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ServicesSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Parallax effect for background text
    const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -100]);

    return (
        <section 
            ref={containerRef}
            className="relative py-16 md:py-24 px-4 bg-warm-cream overflow-hidden"
        >
            {/* Decorative Background Text with Parallax */}
            <motion.div 
                style={{ y: backgroundY }}
                className="absolute top-10 left-0 text-[6rem] md:text-[10rem] font-[family-name:var(--font-playfair)] text-latte/10 leading-none select-none pointer-events-none hidden md:block"
            >
                Menu
            </motion.div>

            <div className="max-w-4xl mx-auto relative z-10">
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-2xl md:text-4xl font-bold text-center text-text-primary mb-8 md:mb-16 tracking-widest font-[family-name:var(--font-playfair)]"
                >
                    SERVICE MENU
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">

                    {/* Column 1 */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="space-y-8 md:space-y-12"
                    >
                        {/* Nails Category */}
                        <div>
                            <h3 className="text-xl md:text-2xl font-bold text-coffee mb-4 md:mb-6 border-b border-coffee/20 pb-2 inline-block pr-8">
                                美甲 Nails
                            </h3>
                            <ul className="space-y-3 md:space-y-4">
                                <li className="flex justify-between items-baseline gap-2">
                                    <span className="text-text-primary font-medium text-sm md:text-base">簡單款式任做 Soft Gel</span>
                                    <span className="text-base md:text-lg font-semibold text-text-primary whitespace-nowrap">$260</span>
                                </li>
                                <li className="flex justify-between items-baseline gap-2">
                                    <span className="text-text-primary font-medium text-sm md:text-base">複雜手繪款式</span>
                                    <span className="text-base md:text-lg font-semibold text-text-primary whitespace-nowrap">$330起</span>
                                </li>
                                <li className="text-xs md:text-sm text-gray-500 pt-1">
                                    所有款式 Hard Gel +$80 / 鑽另算 $3起
                                </li>
                                <li className="text-xs md:text-sm text-gray-500">
                                    延長 $10@1 / 10隻 $90
                                </li>
                            </ul>
                        </div>

                        {/* Single Color Category */}
                        <div>
                            <h3 className="text-xl md:text-2xl font-bold text-coffee mb-4 md:mb-6 border-b border-coffee/20 pb-2 inline-block pr-8">
                                單色 Single Color
                            </h3>
                            <ul className="space-y-3 md:space-y-4">
                                <li className="flex justify-between items-baseline gap-2">
                                    <span className="text-text-primary font-medium text-sm md:text-base">Soft Gel</span>
                                    <span className="text-base md:text-lg font-semibold text-text-primary whitespace-nowrap">手 $178 / 腳 $210</span>
                                </li>
                                <li className="flex justify-between items-baseline gap-2">
                                    <span className="text-text-primary font-medium text-sm md:text-base">Hard Gel</span>
                                    <span className="text-base md:text-lg font-semibold text-text-primary whitespace-nowrap">手 $228 / 腳 $240</span>
                                </li>
                                <li className="flex justify-between items-baseline gap-2">
                                    <span className="text-text-primary font-medium text-sm md:text-base">純卸甲</span>
                                    <span className="text-base md:text-lg font-semibold text-text-primary whitespace-nowrap">手 $100 / 腳 $130</span>
                                </li>
                                <li className="text-xs md:text-sm text-gray-500 pt-1">
                                    加色 $20 / 鑽 $3起 / 延長 $10@1 (10隻 $90)
                                </li>
                            </ul>
                        </div>
                    </motion.div>

                    {/* Column 2 */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-8 md:space-y-12"
                    >
                        {/* Lash Category */}
                        <div>
                            <h3 className="text-xl md:text-2xl font-bold text-coffee mb-4 md:mb-6 border-b border-coffee/20 pb-2 inline-block pr-8">
                                睫毛 Lash
                            </h3>
                            <ul className="space-y-3 md:space-y-4">
                                <li className="flex justify-between items-baseline gap-2">
                                    <span className="text-text-primary font-medium text-sm md:text-base">角蛋白美睫術</span>
                                    <span className="text-base md:text-lg font-semibold text-text-primary whitespace-nowrap">$200</span>
                                </li>
                                <li className="flex justify-between items-baseline gap-2">
                                    <span className="text-text-primary font-medium text-sm md:text-base">日式 Y 型</span>
                                    <span className="text-base md:text-lg font-semibold text-text-primary whitespace-nowrap">$260</span>
                                </li>
                                <li className="flex justify-between items-baseline gap-2">
                                    <span className="text-text-primary font-medium text-sm md:text-base">日式單根</span>
                                    <span className="text-base md:text-lg font-semibold text-text-primary whitespace-nowrap">$270</span>
                                </li>
                                <li className="flex justify-between items-baseline gap-2">
                                    <span className="text-text-primary font-medium text-sm md:text-base">日式手工山茶花</span>
                                    <span className="text-base md:text-lg font-semibold text-text-primary whitespace-nowrap">$360</span>
                                </li>
                                <li className="text-xs md:text-sm text-gray-500 pt-1">
                                    加密款一律 +$150
                                </li>
                            </ul>
                        </div>

                        {/* Beauty Category */}
                        <div>
                            <h3 className="text-xl md:text-2xl font-bold text-coffee mb-4 md:mb-6 border-b border-coffee/20 pb-2 inline-block pr-8">
                                美容 Beauty
                            </h3>
                            <ul className="space-y-3 md:space-y-4">
                                <li className="flex justify-between items-baseline gap-2">
                                    <span className="text-text-primary font-medium text-sm md:text-base">韓國 Bubble Aqua Peel</span>
                                    <span className="text-base md:text-lg font-semibold text-text-primary whitespace-nowrap">$190</span>
                                </li>
                                <li className="flex justify-between items-baseline gap-2">
                                    <span className="text-text-primary font-medium text-sm md:text-base">韓國納米 Bubble Aqua Peel</span>
                                    <span className="text-base md:text-lg font-semibold text-text-primary whitespace-nowrap">$290</span>
                                </li>
                                <li className="flex justify-between items-baseline gap-2">
                                    <span className="text-text-primary font-medium text-sm md:text-base">韓國納米微秒 RF 磁頻</span>
                                    <span className="text-base md:text-lg font-semibold text-text-primary whitespace-nowrap">$378</span>
                                </li>
                            </ul>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
