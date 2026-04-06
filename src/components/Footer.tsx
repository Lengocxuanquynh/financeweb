import { TrendingUp, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-blue-600 p-2 rounded-lg">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <span className="font-semibold text-xl text-white">FinanceHub</span>
            </div>
            <p className="text-gray-400">
              Nền tảng tài chính hiện đại cho tương lai của bạn
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-blue-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-blue-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-blue-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-blue-500 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Sản phẩm</h4>
            <ul className="space-y-2">
              <li><Link href="/register" className="hover:text-blue-500 transition-colors">Tài khoản cá nhân</Link></li>
              <li><Link href="/register" className="hover:text-blue-500 transition-colors">Tài khoản doanh nghiệp</Link></li>
              <li><Link href="/credit-cards" className="hover:text-blue-500 transition-colors">Thẻ tín dụng</Link></li>
              <li><Link href="/investment" className="hover:text-blue-500 transition-colors">Đầu tư</Link></li>
              <li><Link href="/insurance" className="hover:text-blue-500 transition-colors">Bảo hiểm</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Công ty</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-500 transition-colors">Về chúng tôi</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Tuyển dụng</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Tin tức</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Đối tác</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Liên hệ</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-500" />
                <span>support@financehub.vn</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-500" />
                <span>1900 1234</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-500" />
                <span>Hà Nội, Việt Nam</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2026 FinanceHub. Bảo lưu mọi quyền.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-blue-500 transition-colors">Điều khoản dịch vụ</a>
            <a href="#" className="hover:text-blue-500 transition-colors">Chính sách bảo mật</a>
            <a href="#" className="hover:text-blue-500 transition-colors">Cookie</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
