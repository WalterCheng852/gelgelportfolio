import { Clock, Banknote, MapPin } from "lucide-react";

export default function PoliciesSection() {
    return (
        <section className="py-24 px-4 bg-off-white">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-text-primary mb-16 tracking-wide">
                    預約須知
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Policy 1 */}
                    <div className="bg-white p-6 rounded-3xl shadow-sm text-center border border-latte/20">
                        <div className="w-12 h-12 bg-warm-cream rounded-full flex items-center justify-center mx-auto mb-4 text-dark-mocha">
                            <Clock className="w-6 h-6" />
                        </div>
                        <h3 className="font-bold text-text-primary mb-2">守時須知</h3>
                        <p className="text-sm text-gray-500 leading-relaxed">
                            遲到 15 分鐘自動取消<br />
                            訂金不退
                        </p>
                    </div>

                    {/* Policy 2 */}
                    <div className="bg-white p-6 rounded-3xl shadow-sm text-center border border-latte/20">
                        <div className="w-12 h-12 bg-warm-cream rounded-full flex items-center justify-center mx-auto mb-4 text-dark-mocha">
                            <Banknote className="w-6 h-6" />
                        </div>
                        <h3 className="font-bold text-text-primary mb-2">付款方式</h3>
                        <p className="text-sm text-gray-500 leading-relaxed">
                            只收 PayMe / FPS<br />
                            或 現金
                        </p>
                    </div>

                    {/* Policy 3 */}
                    <div className="bg-white p-6 rounded-3xl shadow-sm text-center border border-latte/20">
                        <div className="w-12 h-12 bg-warm-cream rounded-full flex items-center justify-center mx-auto mb-4 text-dark-mocha">
                            <MapPin className="w-6 h-6" />
                        </div>
                        <h3 className="font-bold text-text-primary mb-2">工作室地址</h3>
                        <p className="text-sm text-gray-500 leading-relaxed">
                            新蒲崗彩虹道 206-208 號<br />
                            盛景工業大廈 5/F 56 室<br />
                            (鑽石山 A2 出口)
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
