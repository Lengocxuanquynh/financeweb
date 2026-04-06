import { ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';

export function CTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-indigo-600">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center mb-6">
          <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Sẵn sàng bắt đầu hành trình tài chính?
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Tham gia cùng hàng trăm nghìn người dùng đã tin tưởng và phát triển tài sản cùng FinanceHub
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/register" className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all flex items-center gap-2 shadow-lg hover:shadow-xl font-semibold">
            Mở tài khoản miễn phí
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link href="/login" className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all font-semibold">
            Liên hệ tư vấn
          </Link>
        </div>
        <p className="text-blue-100 mt-6 text-sm">
          Không cần thẻ tín dụng • Miễn phí 30 ngày đầu • Hủy bất cứ lúc nào
        </p>
      </div>
    </section>
  );
}
