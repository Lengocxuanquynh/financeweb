'use client';

import { 
  Wallet, 
  TrendingUp, 
  CreditCard, 
  PieChart as PieChartIcon, 
  ArrowUpRight, 
  ArrowDownRight,
  Plus,
  ChevronRight,
  ShieldCheck,
  Zap,
  ArrowRight
} from 'lucide-react';
import { 
  LineChart, 
  Line, 
  BarChart, 
  Bar, 
  PieChart, 
  Pie, 
  Cell, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts';
import Link from 'next/link';

import { useEffect, useState } from 'react';

export function UserClient({ user, transactions: dbTransactions }: any) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const transactions = dbTransactions || [
    { id: 'DEMO-1', type: 'INCOME', category: 'Lương', amount: 25000000, createdAt: new Date('2026-04-01') },
    { id: 'DEMO-2', type: 'EXPENSE', category: 'Tiền nhà', amount: 5000000, createdAt: new Date('2026-04-01') },
    { id: 'DEMO-3', type: 'EXPENSE', category: 'Mua sắm', amount: 2500000, createdAt: new Date('2026-03-30') },
    { id: 'DEMO-4', type: 'INCOME', category: 'Thu nhập', amount: 8000000, createdAt: new Date('2026-03-28') },
    { id: 'DEMO-5', type: 'EXPENSE', category: 'Ăn uống', amount: 1200000, createdAt: new Date('2026-03-27') }
  ];

  const monthlyData = [
    { month: 'T10', income: 30, expense: 18, savings: 12 },
    { month: 'T11', income: 32, expense: 19, savings: 13 },
    { month: 'T12', income: 35, expense: 22, savings: 13 },
    { month: 'T1', income: 28, expense: 17, savings: 11 },
    { month: 'T2', income: 31, expense: 20, savings: 11 },
    { month: 'T3', income: 33, expense: 18, savings: 15 }
  ];

  const expenseByCategory = [
    { name: 'Nhà ở', value: 5000000, color: '#3b82f6' },
    { name: 'Ăn uống', value: 3500000, color: '#10b981' },
    { name: 'Di chuyển', value: 2000000, color: '#f59e0b' },
    { name: 'Giải trí', value: 1500000, color: '#8b5cf6' },
    { name: 'Khác', value: 1500000, color: '#ef4444' }
  ];

  return (
    <div className="bg-white min-h-screen p-8 lg:p-12">
      <div className="max-w-7xl mx-auto">
        {/* Personalized Welcome */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 bg-blue-600 rounded-3xl flex items-center justify-center text-white shadow-xl shadow-blue-200">
               <Zap className="w-10 h-10" />
            </div>
            <div>
              <h1 className="text-4xl font-black text-gray-900 mb-1 tracking-tight">Chào buổi sáng, {user?.name || 'bạn'}!</h1>
              <p className="text-gray-500 font-medium italic">Tài chính của bạn đang tăng trưởng <span className="text-emerald-600 font-bold">+12.5%</span> tuần này.</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
             <Link href="/user/investments" className="bg-gray-100 p-4 rounded-2xl hover:bg-gray-200 transition-all text-gray-600 shadow-sm border border-transparent">
                <TrendingUp className="w-6 h-6" />
             </Link>
             <button className="bg-gray-950 text-white px-8 py-4 rounded-3xl hover:bg-black transition-all font-bold flex items-center gap-3 shadow-xl">
                <Plus className="w-6 h-6" />
                Giao dịch mới
             </button>
          </div>
        </div>

        {/* Financial KPI Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Main Balance Card */}
          <div className="lg:col-span-2 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 p-8 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 -mr-32 -mt-32 rounded-full blur-3xl pointer-events-none transition-transform group-hover:scale-125 duration-700"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/10 -ml-32 -mb-32 rounded-full blur-3xl pointer-events-none transition-transform group-hover:scale-125 duration-700"></div>
            
            <div className="relative z-10">
               <div className="flex items-center justify-between mb-8">
                  <div className="bg-white/10 p-3 rounded-2xl backdrop-blur-md border border-white/10">
                     <Wallet className="w-8 h-8" />
                  </div>
                  <span className="text-xs font-black text-emerald-400 bg-emerald-400/10 px-4 py-2 rounded-full border border-emerald-400/20">TRỰC TUYẾN ⚡</span>
               </div>
               <p className="text-blue-100/70 text-sm font-bold uppercase tracking-widest mb-2">Tổng tài sản quản lý</p>
               <p className="text-5xl font-black mb-1 tracking-tighter italic">{isMounted && user ? new Intl.NumberFormat('vi-VN').format(user.balance) : '---'} <span className="text-2xl font-medium opacity-60">₫</span></p>
               <div className="flex items-center gap-4 mt-8 pt-8 border-t border-white/10">
                  <div className="flex-1">
                     <p className="text-[10px] font-bold text-white/50 uppercase tracking-widest mb-1">Thu nhập (T3)</p>
                     <p className="text-xl font-bold">+33,000,000 ₫</p>
                  </div>
                  <div className="flex-1">
                     <p className="text-[10px] font-bold text-white/50 uppercase tracking-widest mb-1">Chi dùng (T3)</p>
                     <p className="text-xl font-bold">-13,500,000 ₫</p>
                  </div>
               </div>
            </div>
          </div>

          <div className="bg-white border border-gray-100 p-8 rounded-[2.5rem] shadow-sm hover:shadow-md transition-all relative overflow-hidden group">
            <div className="flex items-center justify-between mb-6">
              <div className="bg-amber-100 p-4 rounded-2xl">
                <ShieldCheck className="w-7 h-7 text-amber-600" />
              </div>
              <span className="text-xs font-black text-blue-600 bg-blue-50 px-3 py-1 rounded-full">92 SCORE</span>
            </div>
            <p className="text-gray-400 text-sm font-bold uppercase tracking-widest mb-2">Tình trạng tài chính</p>
            <p className="text-3xl font-black text-gray-900 tracking-tighter">Excellent</p>
            <Link href="/insurance" className="mt-8 pt-8 border-t border-gray-50 flex items-center justify-between group">
               <span className="text-xs font-black text-gray-400 uppercase group-hover:text-amber-600 transition-colors">Xem bảo hiểm</span>
               <ArrowRight className="w-5 h-5 text-gray-300 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          <div className="bg-white border border-gray-100 p-8 rounded-[2.5rem] shadow-sm hover:shadow-md transition-all relative overflow-hidden group">
            <div className="flex items-center justify-between mb-6">
              <div className="bg-purple-100 p-4 rounded-2xl">
                <CreditCard className="w-7 h-7 text-purple-600" />
              </div>
              <span className="text-xs font-black text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">+15.7%</span>
            </div>
            <p className="text-gray-400 text-sm font-bold uppercase tracking-widest mb-2">Khả năng tích lũy</p>
            <p className="text-3xl font-black text-gray-900 tracking-tighter">19.5 Tr/tháng</p>
             <Link href="/credit-cards" className="mt-8 pt-8 border-t border-gray-50 flex items-center justify-between group">
               <span className="text-xs font-black text-gray-400 uppercase group-hover:text-purple-600 transition-colors">Quản lý thẻ</span>
               <ArrowRight className="w-5 h-5 text-gray-300 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Dynamic Charts Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Main Visualizer */}
          <div className="lg:col-span-2 bg-gray-50 rounded-[3rem] p-10 relative isolate overflow-hidden">
            <div className="flex items-center justify-between mb-10">
              <div>
                <h2 className="text-2xl font-black text-gray-900">Chu trình Thu nhập</h2>
                <p className="text-sm text-gray-400 font-medium">Báo cáo chi tiết luồng tiền 6 tháng qua (Đơn vị: Triệu ₫)</p>
              </div>
            </div>
            <div className="h-[350px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={monthlyData}>
                  <defs>
                    <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorExpense" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#ef4444" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                  <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} dy={10} />
                  <YAxis hide />
                  <Tooltip 
                    contentStyle={{borderRadius: '24px', border: 'none', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)'}}
                    formatter={(value: any) => [value + ' Tr ₫', '']} 
                  />
                  <Area type="monotone" dataKey="income" stroke="#10b981" strokeWidth={4} fillOpacity={1} fill="url(#colorIncome)" stackId="1" />
                  <Area type="monotone" dataKey="expense" stroke="#ef4444" strokeWidth={4} fillOpacity={1} fill="url(#colorExpense)" stackId="2" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-white border border-gray-100 rounded-[3rem] p-10 shadow-sm relative overflow-hidden isolate">
            <h2 className="text-2xl font-black text-gray-900 mb-10">Phân loại chi dùng</h2>
            <div className="h-[250px] w-full mb-10">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={expenseByCategory}
                    cx="50%"
                    cy="50%"
                    innerRadius={70}
                    outerRadius={100}
                    paddingAngle={8}
                    dataKey="value"
                    stroke="none"
                  >
                    {expenseByCategory.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'}}
                    formatter={(value: number) => [new Intl.NumberFormat('vi-VN').format(value) + ' ₫', '']}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="grid gap-3">
              {expenseByCategory.slice(0, 3).map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-2xl">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }}></div>
                    <span className="text-[10px] font-black text-gray-500 uppercase tracking-tighter">{item.name}</span>
                  </div>
                  <span className="text-xs font-black text-gray-900">{((item.value / 13500000) * 100).toFixed(0)}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Smart Registry Table */}
        <div className="bg-gray-900 rounded-[3rem] p-12 text-white relative isolate overflow-hidden group">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 -mr-48 -mt-48 rounded-full blur-[100px] pointer-events-none group-hover:scale-110 transition-transform duration-700"></div>
          
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-black tracking-tighter">Timeline Giao dịch</h2>
              <p className="text-gray-400 font-medium italic">Báo cáo thời gian thực từ ví FinanceHub của bạn.</p>
            </div>
            <button className="text-blue-400 font-bold flex items-center gap-2 group hover:gap-4 transition-all">
               Xuất báo cáo 30 ngày
               <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-4">
            {transactions.map((transaction: any) => {
              const isIncome = transaction.type === 'INCOME';
              const Icon = isIncome ? ArrowUpRight : ArrowDownRight;
              const colorClass = isIncome ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600';
              const formattedDate = new Date(transaction.createdAt).toLocaleDateString('vi-VN');
              
              return (
                <div key={transaction.id} className="flex items-center justify-between p-6 bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 rounded-3xl transition-all group/item">
                  <div className="flex items-center gap-6">
                    <div className={`p-4 rounded-2xl ${colorClass} shadow-lg shadow-black/20 group-hover/item:scale-110 transition-transform`}>
                       <Icon className="w-6 h-6" />
                    </div>
                    <div>
                       <p className="text-lg font-black text-white mb-0.5">{transaction.category}</p>
                       <div className="flex items-center gap-2">
                          <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">{transaction.type}</span>
                          <span className="w-1 h-1 bg-white/10 rounded-full"></span>
                          <span className="text-[10px] text-gray-500 font-medium tracking-tight italic">
                             {isMounted ? formattedDate : '--/--/----'}
                          </span>
                       </div>
                    </div>
                  </div>
                  <div className="text-right">
                     <p className={`text-xl font-black ${isIncome ? 'text-emerald-400' : 'text-rose-400'}`}>
                        {isIncome ? '+' : '-'}{new Intl.NumberFormat('vi-VN').format(transaction.amount)}<span className="text-xs font-medium ml-1">₫</span>
                     </p>
                     <p className="text-[10px] font-bold text-gray-500 uppercase tracking-tighter">Confirmed ✔</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
