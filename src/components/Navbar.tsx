"use client";

import Link from "next/link";
import { Menu, X, Sparkles } from "lucide-react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface NavbarProps {
    onBookClick?: () => void;
}

export default function Navbar({ onBookClick }: NavbarProps) {
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Fluid Glass Effect: Dynamic changes based on scroll
    const navBackgroundOpacity = useTransform(scrollY, [0, 100], [0.6, 0.95]);
    const navBlur = useTransform(scrollY, [0, 100], [12, 24]);
    const navShadow = useTransform(scrollY, [0, 100], [0, 0.15]);
    const navScale = useTransform(scrollY, [0, 100], [1, 0.98]);
    
    // Spring for smooth animations
    const smoothScale = useSpring(navScale, { stiffness: 200, damping: 30 });

    useEffect(() => {
        const unsubscribe = scrollY.on("change", (latest) => {
            setIsScrolled(latest > 50);
        });
        return () => unsubscribe();
    }, [scrollY]);

    const navItems = [
        { href: "#services", label: "服務" },
        { href: "#gallery", label: "作品" },
        { href: "#policies", label: "須知" },
    ];

    return (
        <>
            {/* Bottom Floating Pill Navbar - Mobile First */}
            <motion.nav
                className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 md:top-6 md:bottom-auto"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ 
                    type: "spring", 
                    stiffness: 100, 
                    damping: 20,
                    delay: 0.5 
                }}
            >
                <motion.div
                    style={{
                        scale: smoothScale,
                        boxShadow: useTransform(
                            navShadow,
                            (v) => `0 8px 32px rgba(74, 78, 105, ${v}), 0 2px 8px rgba(0,0,0,0.08)`
                        ),
                    }}
                    className="relative"
                >
                    {/* Glass Background */}
                    <motion.div 
                        className="absolute inset-0 rounded-full border border-white/40"
                        style={{
                            backgroundColor: useTransform(
                                navBackgroundOpacity,
                                (v) => `rgba(255, 255, 255, ${v})`
                            ),
                            backdropFilter: useTransform(navBlur, (v) => `blur(${v}px) saturate(180%)`),
                            WebkitBackdropFilter: useTransform(navBlur, (v) => `blur(${v}px) saturate(180%)`),
                        }}
                    />
                    
                    {/* Content */}
                    <div className="relative flex items-center gap-2 px-2 py-2 md:px-4 md:py-2.5">
                        {/* Mobile: Icon-based navigation */}
                        <div className="flex md:hidden items-center gap-1">
                            {navItems.map((item, index) => (
                                <motion.div
                                    key={item.href}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.6 + index * 0.1 }}
                                >
                                    <Link 
                                        href={item.href}
                                        className="px-4 py-2 text-sm font-medium text-text-primary/80 hover:text-text-primary hover:bg-latte/30 rounded-full transition-all duration-200"
                                    >
                                        {item.label}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>

                        {/* Desktop: Full navigation */}
                        <div className="hidden md:flex items-center gap-1">
                            {/* Logo */}
                            <motion.div 
                                className="font-semibold text-sm tracking-tight text-text-primary font-[family-name:var(--font-playfair)] px-3"
                                whileHover={{ scale: 1.02 }}
                            >
                                YS.NAILS
                            </motion.div>

                            <div className="w-px h-4 bg-text-primary/20 mx-2" />

                            {navItems.map((item, index) => (
                                <motion.div
                                    key={item.href}
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 + index * 0.1 }}
                                >
                                    <Link 
                                        href={item.href} 
                                        className="relative px-4 py-2 text-sm font-medium text-text-primary/70 hover:text-text-primary rounded-full hover:bg-latte/20 transition-all duration-200"
                                    >
                                        {item.label}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <motion.button 
                            onClick={onBookClick}
                            className="flex items-center gap-2 bg-text-primary text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-coffee transition-all duration-200 shadow-lg shadow-text-primary/20"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                           
                            <span className="hidden sm:inline">立即預約</span>
                            <span className="sm:hidden">預約</span>
                        </motion.button>
                    </div>
                </motion.div>
            </motion.nav>

            {/* Mobile Menu Overlay (Optional - for additional options) */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        className="fixed inset-0 z-40 md:hidden"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div 
                            className="absolute inset-0 bg-black/20 backdrop-blur-sm"
                            onClick={() => setIsMobileMenuOpen(false)}
                        />
                        
                        <motion.div
                            className="absolute bottom-28 left-1/2 -translate-x-1/2 w-[85%] bg-white/95 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-white/50"
                            initial={{ opacity: 0, y: 20, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 20, scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        >
                            <div className="flex flex-col gap-3">
                                {navItems.map((item, index) => (
                                    <motion.div
                                        key={item.href}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <Link
                                            href={item.href}
                                            className="block py-3 px-4 text-lg font-medium text-text-primary hover:bg-latte/20 rounded-xl transition-colors"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            {item.label}
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
