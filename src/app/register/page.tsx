'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Eye, EyeOff, Mail, Lock, User, Sparkles, TrendingUp, ShieldCheck } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from 'sonner';

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const { register } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (password !== confirmPassword) {
      toast.error('Mật khẩu xác nhận không khớp');
      setLoading(false);
      return;
    }

    if (password.length < 6) {
      toast.error('Mật khẩu phải có ít nhất 6 ký tự');
      setLoading(false);
      return;
    }

    try {
      const success = register(name, email, password);
      if (success) {
        toast.success('Đăng ký tài khoản thành công!');
        router.push('/user');
      } else {
        toast.error('Đăng ký thất bại. Vui lòng thử lại');
      }
    } catch (err) {
      toast.error('Đã có lỗi xảy ra trong quá trình đăng ký');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col lg:flex-row-reverse">
      {/* Visual Branding Section */}
      <div className="hidden lg:flex lg:w-1/2 bg-gray-950 relative items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1579621970795-87f967b16c8a?q=80&w=2000')] bg-cover bg-center opacity-10 scale-110 blur-sm"></div>
        <div className="absolute inset-0 bg-gradient-to-bl from-emerald-600/20 via-transparent to-blue-600/20"></div>
        
        <div className="relative z-10 text-center px-12">
           <div className="inline-flex p-4 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/10 mb-8 animate-float">
              <ShieldCheck className="w-12 h-12 text-emerald-400" />
           </div>
           <h2 className="text-5xl font-black text-white mb-6 leading-tight tracking-tighter">
              Bắt đầu hành trình <br /> 
              <span className="text-emerald-400 italic">thịnh vượng.</span>
           </h2>
           <p className="text-gray-400 text-lg max-w-md mx-auto font-medium">
              Tham gia cùng +62k người dùng đang tối ưu hóa tài sản mỗi ngày với hệ sinh thái FinanceHub.
           </p>
        </div>
      </div>

      {/* Form Section */}
      <div className="flex-1 flex items-center justify-center p-8 bg-white relative">
        <div className="absolute top-8 right-8 lg:hidden flex items-center gap-2">
           <div className="bg-blue-600 p-2 rounded-lg">
              <TrendingUp className="w-5 h-5 text-white" />
           </div>
           <span className="font-black text-gray-900 uppercase tracking-tighter">FinanceHub</span>
        </div>

        <div className="max-w-md w-full">
          <div className="mb-10">
            <h1 className="text-4xl font-black text-gray-900 mb-3 tracking-tighter uppercase italic">Gia nhập</h1>
            <p className="text-gray-500 font-medium tracking-tight">Kiến tạo di sản tài chính của bạn từ hôm nay.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <label className="text-xs font-black text-gray-400 uppercase tracking-widest pl-1">Họ và tên</label>
              <div className="relative group">
                <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-300 group-focus-within:text-blue-500 transition-colors" />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-600 outline-none transition-all font-bold text-gray-900"
                  placeholder="Nguyễn Văn A"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-black text-gray-400 uppercase tracking-widest pl-1">Email liên lạc</label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-300 group-focus-within:text-blue-500 transition-colors" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-600 outline-none transition-all font-bold text-gray-900"
                  placeholder="email@example.com"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-black text-gray-400 uppercase tracking-widest pl-1">Mật khẩu</label>
                <div className="relative group">
                  <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-300 group-focus-within:text-blue-500 transition-colors" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-600 outline-none transition-all font-bold text-gray-900 text-sm"
                    placeholder="••••••"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black text-gray-400 uppercase tracking-widest pl-1">Xác nhận</label>
                <div className="relative group">
                  <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-300 group-focus-within:text-blue-500 transition-colors" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-600 outline-none transition-all font-bold text-gray-900 text-sm"
                    placeholder="••••••"
                    required
                  />
                   <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-300 hover:text-gray-900 transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3 py-2">
              <input type="checkbox" className="w-5 h-5 rounded-lg border-gray-200 text-blue-600 focus:ring-blue-600 cursor-pointer mt-1" required />
              <p className="text-xs font-medium text-gray-500 leading-relaxed">
                Tôi đồng ý với <a href="#" className="text-blue-600 font-bold hover:underline">Điều khoản dịch vụ</a> và <a href="#" className="text-blue-600 font-bold hover:underline">Chính sách bảo mật</a> của FinanceHub.
              </p>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gray-900 text-white py-5 rounded-[2rem] hover:bg-black transition-all font-black text-lg shadow-xl shadow-gray-200 flex items-center justify-center gap-3 disabled:opacity-70 group"
            >
              {loading ? 'Đang khởi tạo...' : 'Tạo tài khoản ngay'}
              <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform text-emerald-400" />
            </button>
          </form>

          <div className="mt-10 pt-8 border-t border-gray-100">
            <p className="text-gray-500 font-bold text-center">
              Đã là thành viên?{' '}
              <Link href="/login" className="text-blue-600 hover:text-blue-700 font-black uppercase tracking-tighter">
                Đăng nhập hệ thống
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
