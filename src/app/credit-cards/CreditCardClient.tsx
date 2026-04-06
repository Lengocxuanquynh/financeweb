'use client';

import { CreditCard, Eye, EyeOff, Lock, ShoppingBag, Utensils, Car, Zap, Plus, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import Link from 'next/link';

export function CreditCardClient() {
  const [showCardNumber, setShowCardNumber] = useState(false);

  const spendingByCategory = [
    { name: 'Mua sắm', value: 4200000, color: '#3b82f6' },
    { name: 'Ăn uống', value: 2800000, color: '#10b981' },
    { name: 'Du lịch', value: 5500000, color: '#f59e0b' },
    { name: 'Giải trí', value: 1500000, color: '#8b5cf6' }
  ];

  const monthlySpending = [
    { month: 'T10', amount: 12000000 },
    { month: 'T11', amount: 15000000 },
    { month: 'T12', amount: 18000000 },
    { month: 'T1', amount: 13000000 },
    { month: 'T2', amount: 16000000 },
    { month: 'T3', amount: 14000000 }
  ];

  const recentTransactions = [
    { id: 1, merchant: 'Shopee', category: 'Shopping', amount: 1250000, date: '2026-04-02', icon: ShoppingBag, color: 'bg-blue-100 text-blue-600' },
    { id: 2, merchant: 'The Coffee House', category: 'Ăn uống', amount: 250000, date: '2026-04-01', icon: Utensils, color: 'bg-green-100 text-green-600' },
    { id: 3, merchant: 'Grab', category: 'Di chuyển', amount: 150000, date: '2026-04-01', icon: Car, color: 'bg-orange-100 text-orange-600' },
    { id: 4, merchant: 'Netflix', category: 'Giải trí', amount: 260000, date: '2026-03-31', icon: Zap, color: 'bg-purple-100 text-purple-600' },
    { id: 5, merchant: 'Lotte Mart', category: 'Shopping', amount: 2500000, date: '2026-03-30', icon: ShoppingBag, color: 'bg-blue-100 text-blue-600' }
  ];

  const benefits = [
    { title: 'Hoàn tiền 5%', description: 'Cho tất cả giao dịch online', icon: '💰' },
    { title: 'Miễn phí phí thường niên', description: 'Năm đầu tiên', icon: '🎁' },
    { title: 'Tích lũy điểm', description: '1 điểm cho mỗi 1000₫', icon: '⭐' },
    { title: 'Bảo hiểm du lịch', description: 'Lên đến 500 triệu', icon: '✈️' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">Thẻ tín dụng & Quản lý Chi tiêu</h1>
        <p className="text-xl text-gray-600 max-w-2xl">
          Trải nghiệm quyền năng thanh toán toàn cầu với thẻ FinanceHub. Theo dõi chi tiết mọi giao dịch và tối ưu hóa ưu đãi hoàn tiền.
        </p>
      </div>

      {/* Card Display & Stats */}
      <div className="grid lg:grid-cols-2 gap-12 mb-16">
        <div className="space-y-8">
          <div className="relative aspect-[1.586/1] w-full max-w-[480px] bg-gradient-to-br from-slate-800 via-slate-900 to-black rounded-3xl p-10 text-white shadow-2xl shadow-slate-300 isolate overflow-hidden group">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-full blur-[100px] -z-10 group-hover:scale-110 transition-transform duration-700"></div>
            
            <div className="flex items-center justify-between mb-12">
              <div className="flex items-center gap-3">
                <div className="bg-white/10 p-2 rounded-xl backdrop-blur-md border border-white/10">
                  <CreditCard className="w-8 h-8 text-white" />
                </div>
                <span className="font-bold text-xl tracking-wide uppercase italic">FinanceHub <span className="text-blue-400">Black</span></span>
              </div>
              <button
                onClick={() => setShowCardNumber(!showCardNumber)}
                className="p-3 bg-white/5 hover:bg-white/10 rounded-2xl transition-all border border-white/10"
              >
                {showCardNumber ? <EyeOff className="w-5 h-5 text-gray-300" /> : <Eye className="w-5 h-5 text-gray-300" />}
              </button>
            </div>

            <div className="mb-14">
              <p className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-3">Số thẻ hội viên</p>
              <p className="text-3xl font-mono tracking-[0.2em] drop-shadow-md">
                {showCardNumber ? '4532 1234 5678 9012' : '•••• •••• •••• 9012'}
              </p>
            </div>

            <div className="flex items-end justify-between">
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Chủ thẻ</p>
                <p className="font-bold text-lg tracking-wider">NGUYEN VAN A</p>
              </div>
              <div className="text-right">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Hết hạn</p>
                <p className="font-bold text-lg tracking-wider">12 / 28</p>
              </div>
            </div>

            <div className="absolute bottom-10 right-10 flex gap-1">
               <div className="w-8 h-5 bg-red-500/80 rounded-sm"></div>
               <div className="w-8 h-5 bg-orange-500/80 rounded-sm -ml-2"></div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 max-w-[480px]">
            <button className="bg-gray-900 text-white py-4 rounded-2xl hover:bg-black transition-all font-bold flex items-center justify-center gap-3 shadow-lg">
              <Lock className="w-5 h-5" />
              Khóa thẻ tạm thời
            </button>
            <Link href="/register" className="bg-white border border-gray-200 text-gray-900 py-4 rounded-2xl hover:bg-gray-50 transition-all font-bold flex items-center justify-center gap-3 shadow-sm">
              <Plus className="w-5 h-5" />
              Yêu cầu thẻ mới
            </Link>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Tình trạng hạn mức</h3>
            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-3 text-sm font-bold">
                  <span className="text-gray-500 uppercase tracking-wider">Đã sử dụng (28%)</span>
                  <span className="text-gray-900">14,000,000 ₫</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden">
                  <div className="bg-blue-600 h-full rounded-full shadow-lg shadow-blue-200" style={{ width: '28%' }}></div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-8 pt-4 border-t border-gray-50">
                <div>
                  <span className="text-xs font-bold text-gray-400 uppercase block mb-1">Hạn mức tổng</span>
                  <span className="text-xl font-extrabold text-gray-900">50,000,000 ₫</span>
                </div>
                <div>
                  <span className="text-xs font-bold text-gray-400 uppercase block mb-1">Còn lại khả dụng</span>
                  <span className="text-xl font-extrabold text-emerald-600">36,000,000 ₫</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-600 rounded-3xl shadow-xl shadow-blue-100 p-8 text-white">
            <h3 className="text-xl font-bold mb-6 opacity-90">Thanh toán kỳ này</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="opacity-80 font-medium">Tổng dư nợ hiện tại</span>
                <span className="text-3xl font-black italic">14,000,000 ₫</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="opacity-70">Thanh toán tối thiểu</span>
                <span className="font-bold tracking-wider">1,400,000 ₫</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="opacity-70">Hạn chót thanh toán</span>
                <span className="font-bold text-red-300 flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
                  15 / 04 / 2026
                </span>
              </div>
              <button className="w-full mt-6 bg-white text-blue-600 py-4 rounded-2xl hover:bg-blue-50 transition-all font-bold text-lg shadow-lg">
                Thanh toán dư nợ
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Visual Analytics */}
      <div className="grid lg:grid-cols-2 gap-8 mb-16">
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Phân tích chi dùng</h2>
          <div className="h-[280px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={spendingByCategory}
                  cx="50%"
                  cy="50%"
                  innerRadius={70}
                  outerRadius={100}
                  paddingAngle={8}
                  dataKey="value"
                  stroke="none"
                >
                  {spendingByCategory.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'}}
                  formatter={(value: number) => [new Intl.NumberFormat('vi-VN').format(value) + ' ₫', 'Chi tiêu']}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8">
            {spendingByCategory.map((asset, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: asset.color }}></div>
                  <span className="text-xs font-bold text-gray-600 uppercase tracking-tight">{asset.name}</span>
                </div>
                <span className="text-xs font-black text-gray-900">{(asset.value / 14000000 * 100).toFixed(0)}%</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Xu hướng hàng tháng</h2>
          <div className="h-[350px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthlySpending}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} dy={10} />
                <YAxis hide />
                <Tooltip 
                  cursor={{fill: '#f8fafc'}}
                  contentStyle={{borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'}}
                  formatter={(value: number) => [new Intl.NumberFormat('vi-VN').format(value) + ' ₫', 'Tổng chi']}
                />
                <Bar dataKey="amount" fill="#3b82f6" radius={[10, 10, 0, 0]} barSize={40} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Transaction Feed */}
      <div className="bg-white rounded-[2.5rem] shadow-sm border border-gray-100 p-10 mb-16">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-2xl font-bold text-gray-900 italic">Timeline Giao dịch</h2>
          <Link href="/register" className="text-blue-600 font-bold flex items-center gap-2 group hover:gap-3 transition-all">
            Xuất sao kê 30 ngày
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
        <div className="space-y-3">
          {recentTransactions.map((transaction) => {
            const Icon = transaction.icon;
            return (
              <div key={transaction.id} className="flex items-center justify-between p-5 hover:bg-gray-50 rounded-2xl transition-all border border-transparent hover:border-gray-100 group">
                <div className="flex items-center gap-5">
                  <div className={`p-4 rounded-2xl ${transaction.color} shadow-sm group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-extrabold text-gray-900 text-lg">{transaction.merchant}</p>
                    <div className="flex items-center gap-2">
                       <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">{transaction.category}</span>
                       <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                       <span className="text-xs text-gray-500 font-medium">{transaction.date}</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xl font-black text-gray-900">-{new Intl.NumberFormat('vi-VN').format(transaction.amount)} ₫</p>
                  <p className="text-[10px] font-bold text-blue-500 uppercase tracking-tighter">Thanh toán thẻ 💳</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Perks Grid */}
      <div className="bg-gradient-to-br from-indigo-50 via-white to-blue-50 rounded-[3rem] p-16 border border-gray-100">
        <div className="text-center mb-16">
           <h2 className="text-4xl font-black text-gray-900 mb-4 tracking-tight">Đặc quyền hội viên FinanceHub</h2>
           <p className="text-gray-500 font-medium italic">Sở hữu thẻ FinanceHub để tận hưởng hệ sinh thái ưu đãi không giới hạn.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-50 group hover:-translate-y-2">
              <div className="text-5xl mb-8 group-hover:scale-125 transition-transform inline-block grayscale group-hover:grayscale-0">{benefit.icon}</div>
              <h3 className="text-xl font-black text-gray-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-500 font-medium leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
