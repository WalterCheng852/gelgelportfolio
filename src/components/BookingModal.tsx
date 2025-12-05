"use client";

import { X } from "lucide-react";
import { useEffect, useState } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";

interface BookingModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        (async function () {
            const cal = await getCalApi({ "namespace": "gel-with-me" });
            cal("ui", { "theme": "light", "hideEventTypeDetails": false, "layout": "month_view" });
        })();
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    if (!isMounted) return null;
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            />

            {/* Modal Content */}
            <div className="relative w-full max-w-4xl h-[80vh] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in-95 duration-200">

                {/* Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-latte/20 bg-warm-cream">
                    <h3 className="font-semibold text-text-primary">預約您的時段</h3>
                    <button
                        onClick={onClose}
                        className="p-2 rounded-full hover:bg-latte/20 transition-colors"
                    >
                        <X className="w-5 h-5 text-gray-500" />
                    </button>
                </div>

                {/* Body (Cal.com Embed) */}
                <div className="flex-1 w-full bg-white overflow-y-auto">
                    <Cal
                        namespace="gel-with-me"
                        calLink="cheng-steven-rgxpcj/gel-with-me"
                        style={{ width: "100%", height: "100%", overflow: "scroll" }}
                        config={{ "layout": "month_view", "theme": "light" }}
                    />
                </div>
            </div>
        </div>
    );
}
