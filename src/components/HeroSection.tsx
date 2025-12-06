"use client";

import { ArrowRight, Star } from "lucide-react";
import { motion, useScroll, useTransform, useSpring, MotionValue } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";

interface HeroSectionProps {
}

export default function HeroSection({ }: HeroSectionProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isMobile, setIsMobile] = useState(false);

    const mobileSpecs = [
        { label: "PRICES", value: "From $178 HKD" },
        { label: "STUDIO", value: "Diamond Hill · 鑽石山" },
    ];

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    // Buttery smooth parallax transforms
    const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

    // Video parallax - moves slower than scroll
    const videoY = useTransform(smoothProgress, [0, 1], [0, 150]);
    const videoScale = useTransform(smoothProgress, [0, 1], [1, 1.1]);

    // Content parallax - moves faster, creates depth
    const contentY = useTransform(smoothProgress, [0, 1], [0, -100]);
    const contentOpacity = useTransform(smoothProgress, [0, 0.5], [1, 0]);

    // Overlay intensity increases on scroll
    const overlayOpacity = useTransform(smoothProgress, [0, 0.5], [0.4, 0.7]);

    // Card parallax
    const cardY = useTransform(smoothProgress, [0, 1], [0, -80]);
    const cardRotate = useTransform(smoothProgress, [0, 1], [0, 5]);
    const mobilePanelY = useTransform(smoothProgress, [0, 1], [0, 60]);

    // Check for mobile device
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Handle video playback rate for cinematic feel
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.8;
        }
    }, []);

    // Initialize Cal.com booking
    useEffect(() => {
        (async function () {
            const cal = await getCalApi({ "namespace": "gel-with-me" });
            cal("ui", { "hideEventTypeDetails": false, "layout": "month_view" });
        })();
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen w-full overflow-hidden"
        >
            {/* === FULL SCREEN VIDEO BACKGROUND === */}
            <motion.div
                className="absolute inset-0 w-full h-full"
                style={isMobile ? {} : { y: videoY, scale: videoScale }}
            >
                {/* Video Element - Always muted */}
                <video
                    ref={videoRef}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover z-10"
                    poster="/hand_back.png"
                >
                    <source src="/hands.mp4" type="video/mp4" />
                </video>
            </motion.div>

            {/* === CSS OVERLAY LAYERS === */}
            {/* Primary Dark Gradient Overlay */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60"
                style={{ opacity: overlayOpacity }}
            />

            {/* Warm Color Overlay for brand feel */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#4A4E69]/20 via-transparent to-[#CB997E]/20 mix-blend-overlay" />

            {/* Vignette Effect */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />

            {/* Noise Texture Overlay for cinematic grain */}
            <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                }}
            />

            {/* === MAIN CONTENT === */}
            <div className="relative z-10 min-h-screen flex items-center justify-center px-4 pt-8 pb-32 md:pb-16">
                <div className="w-full max-w-6xl flex flex-col md:flex-row gap-8 md:gap-12 items-center">

                    {/* Left: Content with Parallax */}
                    <motion.div
                        className="hidden md:flex w-full md:w-1/2 flex-col justify-center text-center md:text-left z-20 order-2 md:order-1 px-4"
                        style={isMobile ? { opacity: 1 } : {
                            y: contentY,
                            opacity: contentOpacity,
                        }}
                    >
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="flex items-center justify-center md:justify-start gap-2 mb-6"
                        >
                            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-[0.68rem] tracking-[0.3em] uppercase text-white/70 border border-white/20">
                                GEL · LASH · FACIAL
                            </span>
                        </motion.div>

                        {/* Main Headline - Large Cinematic Typography */}
                        <motion.div
                            className="mb-4 overflow-hidden"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                        >
                            <motion.h1
                                initial={{ y: 100 }}
                                animate={{ y: 0 }}
                                transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[0.3em] font-bold text-white tracking-tight leading-[0.9]"
                            >
                                日系
                            </motion.h1>
                            <motion.h2
                                initial={{ y: 100 }}
                                animate={{ y: 0 }}
                                transition={{ delay: 0.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-[0.9]"
                            >
                                <span className="text-[#E6CCB2]">睫毛</span><span className="text-[#E6CCB2]">美甲</span>
                            </motion.h2>
                        </motion.div>

                        {/* Subheadline */}
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                            className="text-xl sm:text-2xl md:text-3xl text-white/80 tracking-[0.3em] mb-8 leading-snug font-light"
                        >
                            專屬你的
                            <span className="text-[#E6CCB2]  tracking-[0.3em] font-medium ml-2">
                                美甲時光
                            </span>
                        </motion.h2>

                        {/* Pricing - Glass Cards */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.9 }}
                            className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-8"
                        >
                            <div className="px-5 py-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                                <span className="text-white/70 text-[0.90rem] tracking-[0.3em] uppercase">Soft Gel 單色</span>
                                <span className="text-white font-bold text-[0.90rem] ml-2">$218</span>
                            </div>
                            <div className="px-5 py-3 bg-[#CB997E] text-white rounded-2xl shadow-lg shadow-[#CB997E]/30 relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
                                <span className="text-white/90 text-[0.90rem] tracking-[0.3em] uppercase">款式任做</span>
                                <span className="font-bold text-[0.90rem] ml-2">$260</span>
                                <span className="ml-2 text-[0.68rem] bg-white/20 px-2 py-0.5 rounded-full">Best</span>
                            </div>
                        </motion.div>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1 }}
                            className="text-base sm:text-lg text-white/60 mb-10 leading-relaxed max-w-md mx-auto md:mx-0"
                        >
                            私人空間，專注細節。體驗日式美甲的精緻與舒適。
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.1 }}
                            className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4"
                        >
                            <motion.button
                                data-cal-namespace="gel-with-me"
                                data-cal-link="cheng-steven-rgxpcj/gel-with-me"
                                data-cal-config='{"layout":"month_view"}'
                                className="group bg-white text-[#4A4E69] px-8 py-4 rounded-full text-[0.90rem] tracking-[0.3em] uppercase font-semibold text-lg flex items-center gap-3 hover:bg-[#E6CCB2] transition-all duration-300 shadow-2xl shadow-black/20"
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.98 }}
                            >

                                立即預約 Book Now
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </motion.button>


                        </motion.div>
                    </motion.div>

                    {/* Right: Card - Desktop glass, Mobile simple branding */}
                    <motion.div
                        className="hidden md:flex w-full md:w-1/2 relative h-auto md:h-[60vh] order-1 md:order-2 items-center justify-center"
                        style={isMobile ? {} : { y: cardY }}
                    >
                        {/* Desktop: Glassmorphism Card */}
                        <motion.div
                            className="hidden md:flex absolute inset-0 items-center justify-center"
                            style={{ rotateY: cardRotate }}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.6, duration: 0.8, type: "spring" }}
                        >
                            <motion.div
                                className="w-[70%] max-w-[320px] aspect-[3/4] bg-white/10 backdrop-blur-xl rounded-[32px] border border-white/20 shadow-2xl shadow-black/20 overflow-hidden"
                                whileHover={{ scale: 1.02, rotateY: 5 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <div className="w-full h-full flex flex-col items-center justify-center p-8 relative">
                                    <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-[#E6CCB2]/20 to-transparent" />

                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 1 }}
                                        className="relative z-10 text-center"
                                    >
                                        <div className="w-28 h-28 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#E6CCB2] to-[#CB997E] flex items-center justify-center shadow-xl shadow-[#CB997E]/30">
                                            <span className="text-white text-4xl font-bold font-[family-name:var(--font-playfair)]">YS</span>
                                        </div>

                                        <h3 className="text-white font-semibold tracking-[0.3em]  text-[0.90rem] text-2xl mb-2 font-[family-name:var(--font-playfair)]">
                                            YS Nails Beauty
                                        </h3>

                                        <p className="text-white/60  tracking-[0.3em]  text-[0.70rem]  text-sm mb-6">
                                            Diamond Hill, Hong Kong
                                        </p>

                                        <div className="flex items-center justify-center gap-4 text-sm text-white/50">
                                            <div className="flex items-center gap-1">
                                                <Star className="w-4 h-4 fill-[#E6CCB2] text-[#E6CCB2]" />
                                                <span className="text-white">5.0</span>
                                            </div>
                                            <div className="w-px h-4 tracking-[0.3em] text-[0.70rem] bg-white/20" />
                                            <span>Est. 2024</span>
                                        </div>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </motion.div>

                    </motion.div>

                    {/* Mobile spec layout */}
                    <motion.div
                        className="md:hidden w-full z-20"
                        style={isMobile ? { y: mobilePanelY } : undefined}
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        <div className="flex flex-col gap-6 px-4 pt-24 pb-16">
                            <div className="text-left space-y-3">
                                <span className="inline-flex text-[0.68rem] tracking-[0.3em] uppercase text-white/70">
                                    Gel · Lash · Facial
                                </span>
                                <h3 className="text-white font-semibold tracking-[0.3em]  text-[0.90rem] text-2xl mb-2 font-[family-name:var(--font-playfair)]">
                                    YS Nails Beauty
                                </h3>
                                <p className="text-white/80 text-base leading-relaxed">
                                    日系．睫毛．美甲
                                </p>
                            </div>

                            <div className="bg-white/5 border border-white/15 rounded-[32px] px-6 py-8 backdrop-blur-xl space-y-6">
                                {mobileSpecs.map((spec, index) => (
                                    <div key={spec.label} className="flex flex-col gap-1 text-[0.5rem] tracking-[0.35em]  ">
                                        <span className="text-[0.65rem] tracking-[0.35em] text-white/50 uppercase">
                                            {spec.label}
                                        </span>
                                        <span className="text-xl text-white font-medium">
                                            {spec.value}
                                        </span>
                                        {index !== mobileSpecs.length - 1 && (
                                            <div className="h-px w-full bg-white/10 mt-4" />
                                        )}
                                    </div>
                                ))}
                            </div>

                            <motion.button
                                data-cal-namespace="gel-with-me"
                                data-cal-link="cheng-steven-rgxpcj/gel-with-me"
                                data-cal-config='{"layout":"month_view"}'
                                className="bg-white text-[#4A4E69] px-8 py-4 rounded-full tracking-[0.25em] font-semibold text-lg flex items-center justify-center gap-3"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                立即預約 Book Now
                                <ArrowRight className="w-5 h-5" />
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* === SCROLL INDICATOR - Hidden on mobile === */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex-col items-center gap-2 hidden md:flex"
            >
                <span className="text-white/50 text-xs tracking-widest uppercase">Scroll</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2"
                >
                    <motion.div className="w-1 h-2 bg-white/60 rounded-full" />
                </motion.div>
            </motion.div>
        </section>
    );
}
