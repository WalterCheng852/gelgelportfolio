import { Instagram, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[#6B5B4F] text-white">
            {/* Main Footer Content */}
            <div className="max-w-6xl mx-auto px-4 md:px-6 py-10 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-8 text-center md:text-left">
                    
                    {/* Brand Column */}
                    <div>
                        <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 tracking-wide">
                            YS Nails Beauty
                        </h3>
                        <p className="text-white/70 text-sm leading-relaxed">
                            鑽石山日系美甲
                        </p>
                        <p className="text-white/70 text-sm">
                            一人工作室
                        </p>
                    </div>

                    {/* Contact Column */}
                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-widest text-white/80 mb-3 md:mb-4">
                            Contact
                        </h4>
                        <ul className="space-y-2 md:space-y-3 text-sm text-white/70">
                            <li className="flex items-center gap-3 justify-center md:justify-start">
                                <MapPin className="w-4 h-4 text-white/50" />
                                <span>Diamond Hill, Hong Kong</span>
                            </li>
                            <li className="flex items-center gap-3 justify-center md:justify-start">
                                <Phone className="w-4 h-4 text-white/50" />
                                <a href="https://wa.me/85212345678" className="hover:text-white transition-colors">
                                    WhatsApp
                                </a>
                            </li>
                            <li className="flex items-center gap-3 justify-center md:justify-start">
                                <Mail className="w-4 h-4 text-white/50" />
                                <a href="mailto:hello@ysnailsbeauty.com" className="hover:text-white transition-colors text-xs md:text-sm">
                                    hello@ysnailsbeauty.com
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Social Column */}
                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-widest text-white/80 mb-3 md:mb-4">
                            Follow Us
                        </h4>
                        <a 
                            href="https://www.instagram.com/ys.nails.beauty/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-white/20 hover:border-white/40 hover:bg-white/10 transition-all mb-2 md:mb-3"
                        >
                            <Instagram className="w-5 h-5" />
                        </a>
                        <p className="text-sm text-white/70">
                            @ysnailsbeauty
                        </p>
                    </div>

                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10">
                <div className="max-w-6xl mx-auto px-4 md:px-6 py-4 md:py-6">
                    <p className="text-center text-xs md:text-sm text-white/50">
                        © {new Date().getFullYear()} YS Nails Beauty. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
