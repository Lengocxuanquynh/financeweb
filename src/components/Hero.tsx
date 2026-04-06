import { ArrowRight, Shield, Zap, TrendingUp } from 'lucide-react';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Quản lý tài chính
              <span className="text-blue-600"> thông minh</span>
            </h1>
            <p className="text-xl text-gray-600">
              Nền tảng tài chính hiện đại giúp bạn đầu tư, tiết kiệm và phát triển tài sản một cách hiệu quả nhất.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/register"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-all flex items-center gap-2 shadow-lg hover:shadow-xl"
              >
                Bắt đầu ngay
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/login"
                className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all"
              >
                Tìm hiểu thêm
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-8">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-blue-600" />
                <span className="text-sm text-gray-600">Bảo mật cao</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-blue-600" />
                <span className="text-sm text-gray-600">Nhanh chóng</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-blue-600" />
                <span className="text-sm text-gray-600">Tăng trưởng</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-6 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-gray-900">Tổng quan tài khoản</h3>
                <span className="text-sm text-green-600 bg-green-50 px-3 py-1 rounded-full">+12.5%</span>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-gray-600">Tổng tài sản</p>
                <p className="text-4xl font-bold text-gray-900">2,458,900,000 ₫</p>
              </div>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">Thu nhập</p>
                  <p className="text-xl font-semibold text-blue-600">+85,000,000 ₫</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">Chi tiêu</p>
                  <p className="text-xl font-semibold text-purple-600">-32,500,000 ₫</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
