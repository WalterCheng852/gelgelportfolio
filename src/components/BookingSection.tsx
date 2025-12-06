"use client";

import { useEffect, useRef } from "react";
import { AlertTriangle, Clock, CreditCard } from "lucide-react";
import Cal, { getCalApi } from "@calcom/embed-react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function BookingSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });
    const parallaxY = useTransform(scrollYProgress, [0, 1], [60, -60]);
    const parallaxOpacity = useTransform(scrollYProgress, [0, 1], [0.85, 1]);

    useEffect(() => {
        (async function () {
            const cal = await getCalApi({ namespace: "gel-with-me" });
            cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
        })();
    }, []);

    return (
        <section ref={sectionRef} id="booking" className="relative py-16 md:py-24 px-4 bg-[#F9F7F2] overflow-hidden">
            <motion.div
                style={{ y: parallaxY, opacity: parallaxOpacity }}
                className="max-w-5xl mx-auto"
            >
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-8 md:mb-12"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-[#4A4E69] mb-2 font-[family-name:var(--font-playfair)]">
                        預約時間
                    </h2>
                    <p className="text-[#4A4E69]/60 text-sm md:text-base">Reservation</p>
                </motion.div>

                {/* Booking Policy Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="bg-[#E6CCB2]/30 rounded-2xl p-4 md:p-6 mb-6 md:mb-8"
                >
                    <div className="flex items-start gap-3 md:gap-4">
                        <div className="w-8 h-8 md:w-10 md:h-10 bg-[#E6CCB2]/50 rounded-full flex items-center justify-center flex-shrink-0">
                            <AlertTriangle className="w-4 h-4 md:w-5 md:h-5 text-[#4A4E69]" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-[#4A4E69] mb-2 md:mb-3 text-sm md:text-base">
                                預約須知 Booking Policy
                            </h3>
                            <ul className="space-y-2 text-xs md:text-sm text-[#4A4E69]/80">
                                <li className="flex items-center gap-2">
                                    <Clock className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#4A4E69]/60 flex-shrink-0" />
                                    <span>遲到15分鐘自動取消</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <CreditCard className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#4A4E69]/60 flex-shrink-0" />
                                    <span>預約後請於3小時內 PayMe 落訂</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </motion.div>

                {/* Cal.com Embed */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-white rounded-2xl md:rounded-3xl shadow-lg overflow-hidden border border-[#E6CCB2]/20"
                >
                    <div className="w-full min-h-[500px] md:min-h-[600px]">
                        <Cal
                            namespace="gel-with-me"
                            calLink="cheng-steven-rgxpcj/gel-with-me"
                            style={{ width: "100%", height: "100%", minHeight: "500px", overflow: "scroll" }}
                            config={{ layout: "month_view" }}
                        />
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}
