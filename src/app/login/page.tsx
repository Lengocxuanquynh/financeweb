'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Eye, EyeOff, Mail, Lock, Sparkles, TrendingUp } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from 'sonner';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const success = login(email, password);
      if (success) {
        toast.success('Chào mừng bạn quay trở lại!');
        if (email === 'admin@finance.com') {
          router.push('/admin');
        } else {
          router.push('/user');
        }
      } else {
        toast.error('Email hoặc mật khẩu không đúng');
      }
    } catch (err) {
      toast.error('Đã có lỗi xảy ra, vui lòng thử lại');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col lg:flex-row">
      {/* Visual Branding Section */}
      <div className="hidden lg:flex lg:w-1/2 bg-gray-900 relative items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2000')] bg-cover bg-center opacity-20 scale-110 blur-sm"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-indigo-600/20"></div>
        
        <div className="relative z-10 text-center px-12">
           <div className="inline-flex p-4 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/10 mb-8 animate-float">
              <TrendingUp className="w-12 h-12 text-blue-400" />
           </div>
           <h2 className="text-5xl font-black text-white mb-6 leading-tight tracking-tighter">
              Làm chủ tài chính <br /> 
              <span className="text-blue-400 italic">trong tầm tay.</span>
           </h2>
           <p className="text-gray-400 text-lg max-w-md mx-auto font-medium">
              Giao diện hiện đại, dữ liệu thời gian thực và các chiến lược đầu tư thông minh nhất năm 2026.
           </p>
        </div>
      </div>

      {/* Form Section */}
      <div className="flex-1 flex items-center justify-center p-8 bg-white relative">
        <div className="absolute top-8 left-8 lg:hidden flex items-center gap-2">
           <div className="bg-blue-600 p-2 rounded-lg">
              <TrendingUp className="w-5 h-5 text-white" />
           </div>
           <span className="font-black text-gray-900 uppercase tracking-tighter">FinanceHub</span>
        </div>

        <div className="max-w-md w-full">
          <div className="mb-12">
            <h1 className="text-4xl font-black text-gray-900 mb-3 tracking-tighter uppercase italic">Đăng nhập</h1>
            <p className="text-gray-500 font-medium tracking-tight">Ký quỹ tương lai của bạn ngay hôm nay.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-black text-gray-400 uppercase tracking-widest pl-1">Email định danh</label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-300 group-focus-within:text-blue-500 transition-colors" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-600 outline-none transition-all font-bold text-gray-900"
                  placeholder="admin@finance.com"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-black text-gray-400 uppercase tracking-widest pl-1">Mật khẩu bảo mật</label>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-300 group-focus-within:text-blue-500 transition-colors" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-12 pr-12 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-600 outline-none transition-all font-bold text-gray-900"
                  placeholder="admin123"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-300 hover:text-gray-900 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between py-2">
              <label className="flex items-center gap-3 cursor-pointer group">
                <input type="checkbox" className="w-5 h-5 rounded-lg border-gray-200 text-blue-600 focus:ring-blue-600 cursor-pointer" />
                <span className="text-sm font-bold text-gray-500 group-hover:text-gray-900 transition-colors">Ghi nhớ tôi</span>
              </label>
              <a href="#" className="text-sm font-black text-blue-600 hover:text-blue-700 uppercase tracking-tighter">
                Quên mật khẩu?
              </a>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gray-900 text-white py-5 rounded-[2rem] hover:bg-black transition-all font-black text-lg shadow-xl shadow-gray-200 flex items-center justify-center gap-3 disabled:opacity-70 group"
            >
              {loading ? 'Đang xác thực...' : 'Truy cập hệ thống'}
              <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            </button>
          </form>

          <div className="mt-12 pt-8 border-t border-gray-100">
            <p className="text-gray-500 font-bold text-center">
              Chưa có tài khoản?{' '}
              <Link href="/register" className="text-blue-600 hover:text-blue-700 font-black uppercase tracking-tighter">
                Đăng ký thành viên
              </Link>
            </p>
          </div>

          <div className="mt-12 bg-blue-50/50 rounded-[2rem] p-6 border border-blue-50">
            <p className="text-[10px] font-black text-blue-400 uppercase tracking-widest mb-4 text-center">Thông tin Demo</p>
            <div className="space-y-3 text-xs">
              <div className="flex justify-between items-center text-blue-900/60">
                <span className="font-bold">Quản trị:</span>
                <span className="font-black">admin@finance.com / admin123</span>
              </div>
              <div className="flex justify-between items-center text-blue-900/60">
                <span className="font-bold">Người dùng:</span>
                <span className="font-black">user@test.com / any</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
