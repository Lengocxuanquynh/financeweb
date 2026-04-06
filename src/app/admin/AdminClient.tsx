'use client';

import { 
  Users, 
  DollarSign, 
  TrendingUp, 
  CreditCard, 
  Search, 
  MoreVertical, 
  FileText,
  Activity,
  Plus,
  ArrowUpRight
} from 'lucide-react';
import { 
  LineChart, 
  Line, 
  BarChart, 
  Bar, 
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

export function AdminClient({ stats, users: dbUsers }: any) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const users = dbUsers || [
    { id: 'DEMO-1', name: 'Nguyễn Văn A', email: 'nguyenvana@email.com', balance: 125000000, status: 'ACTIVE', activity: 'High' },
    { id: 'DEMO-2', name: 'Trần Thị B', email: 'tranthib@email.com', balance: 89000000, status: 'ACTIVE', activity: 'Medium' },
    { id: 'DEMO-3', name: 'Lê Văn C', email: 'levanc@email.com', balance: 245000000, status: 'ACTIVE', activity: 'Low' },
    { id: 'DEMO-4', name: 'Phạm Thị D', email: 'phamthid@email.com', balance: 156000000, status: 'INACTIVE', activity: 'N/A' },
    { id: 'DEMO-5', name: 'Hoàng Văn E', email: 'hoangvane@email.com', balance: 98000000, status: 'ACTIVE', activity: 'Medium' }
  ];

  const systemStats = [
    { month: 'T10', users: 450, transactions: 1250, revenue: 850 },
    { month: 'T11', users: 480, transactions: 1350, revenue: 920 },
    { month: 'T12', users: 520, transactions: 1480, revenue: 1050 },
    { month: 'T1', users: 550, transactions: 1560, revenue: 1120 },
    { month: 'T2', users: 580, transactions: 1680, revenue: 1250 },
    { month: 'T3', users: 620, transactions: 1820, revenue: 1380 }
  ];

  return (
    <div className="bg-gray-50 min-h-screen p-8 lg:p-12">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
          <div>
            <h1 className="text-4xl font-black text-gray-900 mb-2 tracking-tight">Hệ thống Quản trị</h1>
            <p className="text-gray-500 font-medium italic">Giám sát hiệu quả hoạt động và tài sản FinanceHub toàn cầu.</p>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/admin/posts" className="bg-white border border-gray-200 text-gray-700 px-6 py-3 rounded-2xl hover:bg-gray-50 transition-all font-bold flex items-center gap-2 shadow-sm">
              <FileText className="w-5 h-5 text-blue-600" />
              Quản lý Blog SEO
            </Link>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-2xl hover:bg-blue-700 transition-all font-bold flex items-center gap-2 shadow-lg shadow-blue-100">
              <Plus className="w-5 h-5" />
              Tạo mới Dashboard
            </button>
          </div>
        </div>

        {/* Quick KPI Panels */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="bg-white border border-gray-100 p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 -mr-16 -mt-16 rounded-full group-hover:scale-125 transition-transform duration-500"></div>
            <div className="flex items-center justify-between mb-6">
              <div className="bg-blue-100 p-4 rounded-2xl">
                <Users className="w-7 h-7 text-blue-600" />
              </div>
              <span className="text-xs font-black text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">+7.2%</span>
            </div>
            <p className="text-gray-400 text-sm font-bold uppercase tracking-widest mb-1">Cộng đồng</p>
            <p className="text-3xl font-black text-gray-900 tracking-tighter">{stats?.userCount || 62458} <span className="text-lg font-medium text-gray-400">user</span></p>
          </div>

          <div className="bg-white border border-gray-100 p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
             <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 -mr-16 -mt-16 rounded-full group-hover:scale-125 transition-transform duration-500"></div>
            <div className="flex items-center justify-between mb-6">
              <div className="bg-emerald-100 p-4 rounded-2xl">
                <Activity className="w-7 h-7 text-emerald-600" />
              </div>
              <span className="text-xs font-black text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">+12.5%</span>
            </div>
            <p className="text-gray-400 text-sm font-bold uppercase tracking-widest mb-1">Giao dịch 24h</p>
            <p className="text-3xl font-black text-gray-900 tracking-tighter">{stats?.totalTransactionsCount || '182.5k'}</p>
          </div>

          <div className="bg-white border border-gray-100 p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 -mr-16 -mt-16 rounded-full group-hover:scale-125 transition-transform duration-500"></div>
            <div className="flex items-center justify-between mb-6">
              <div className="bg-purple-100 p-4 rounded-2xl">
                <DollarSign className="w-7 h-7 text-purple-600" />
              </div>
              <span className="text-xs font-black text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">+18.3%</span>
            </div>
            <p className="text-gray-400 text-sm font-bold uppercase tracking-widest mb-1">Cộng đồng SEO (Posts)</p>
            <p className="text-3xl font-black text-gray-900 tracking-tighter">{stats?.postCount || '1.38 tỷ ₫'}</p>
          </div>

          <div className="bg-white border border-gray-100 p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 -mr-16 -mt-16 rounded-full group-hover:scale-125 transition-transform duration-500"></div>
            <div className="flex items-center justify-between mb-6">
              <div className="bg-amber-100 p-4 rounded-2xl">
                <TrendingUp className="w-7 h-7 text-amber-600" />
              </div>
              <span className="text-xs font-black text-blue-600 bg-blue-50 px-3 py-1 rounded-full">+5.8%</span>
            </div>
            <p className="text-gray-400 text-sm font-bold uppercase tracking-widest mb-1">Tổng tài sản (AUM)</p>
            <p className="text-3xl font-black text-gray-900 tracking-tighter">{stats ? new Intl.NumberFormat('vi-VN').format(stats.totalBalance) : '523 tỷ'} ₫</p>
          </div>
        </div>

        {/* Visual Analytics Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          <div className="bg-white rounded-[2.5rem] border border-gray-100 p-10 shadow-sm relative isolate">
            <div className="flex items-center justify-between mb-10">
              <div>
                <h2 className="text-2xl font-black text-gray-900">Người dùng mới</h2>
                <p className="text-sm text-gray-400 font-medium">Xu hướng tăng trưởng trong 6 tháng qua</p>
              </div>
              <div className="p-2 bg-blue-50 rounded-xl text-blue-600 hover:bg-blue-100 transition-colors cursor-pointer">
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </div>
            <div className="h-[350px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={systemStats}>
                  <defs>
                    <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} dy={10} />
                  <YAxis hide />
                  <Tooltip 
                    contentStyle={{borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'}}
                    formatter={(value: any) => [value + ' user', 'Tăng mới']} 
                  />
                  <Area type="monotone" dataKey="users" stroke="#3b82f6" strokeWidth={4} fillOpacity={1} fill="url(#colorUsers)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-white rounded-[2.5rem] border border-gray-100 p-10 shadow-sm relative isolate">
            <div className="flex items-center justify-between mb-10">
               <div>
                <h2 className="text-2xl font-black text-gray-900">Giao dịch hệ thống</h2>
                <p className="text-sm text-gray-400 font-medium">Lưu lượng thanh toán và chuyển khoản</p>
              </div>
              <div className="p-2 bg-emerald-50 rounded-xl text-emerald-600 hover:bg-emerald-100 transition-colors cursor-pointer">
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </div>
            <div className="h-[350px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={systemStats}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} dy={10} />
                  <YAxis hide />
                  <Tooltip 
                    cursor={{fill: '#f8fafc'}}
                    contentStyle={{borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'}}
                    formatter={(value: any) => [value + 'k', 'Số lượng']} 
                  />
                  <Bar dataKey="transactions" fill="#10b981" radius={[12, 12, 0, 0]} barSize={40} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Dynamic User Registry Table */}
        <div className="bg-white rounded-[3rem] border border-gray-100 p-10 shadow-sm overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
            <h2 className="text-2xl font-black text-gray-900 uppercase italic">Người dùng Registry</h2>
            <div className="flex items-center gap-4">
              <div className="relative group">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-300 group-focus-within:text-blue-500 transition-colors" />
                <input
                  type="text"
                  placeholder="ID, Email hoặc Tên..."
                  className="pl-12 pr-6 py-3 bg-gray-50 border-none rounded-2xl w-[300px] text-sm font-medium outline-none ring-1 ring-gray-100 focus:ring-blue-500 transition-all"
                />
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-gray-50 text-gray-400 text-xs font-black uppercase tracking-widest">
                  <th className="pb-6 px-4"># ID</th>
                  <th className="pb-6 px-4">Định danh người dùng</th>
                  <th className="pb-6 px-4">Ví tích lũy</th>
                  <th className="pb-6 px-4">Tình trạng</th>
                  <th className="pb-6 px-4">Hành trình</th>
                  <th className="pb-6 px-4 text-center">Tác vụ</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {users.map((user: any) => (
                  <tr key={user.id} className="group hover:bg-gray-50 transition-all duration-300">
                    <td className="py-7 px-4 text-gray-400 font-bold">SYST-{user.id.substring(0, 4)}</td>
                    <td className="py-7 px-4">
                      <div className="flex items-center gap-4">
                         <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center font-black text-blue-600 shadow-sm group-hover:scale-110 transition-transform">
                            {user.name ? user.name.charAt(0) : 'U'}
                         </div>
                         <div>
                            <p className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{user.name || 'Người dùng mới'}</p>
                            <p className="text-xs text-gray-400 font-medium">{user.email}</p>
                         </div>
                      </div>
                    </td>
                    <td className="py-7 px-4 font-black text-gray-900">
                      {isMounted ? new Intl.NumberFormat('vi-VN').format(user.balance) : '---'} ₫
                    </td>
                    <td className="py-7 px-4 text-gray-600">
                      <span className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wide border ${
                        user.status === 'ACTIVE' || user.status === 'active' ? 'bg-emerald-50 text-emerald-600 border-emerald-100' : 'bg-gray-50 text-gray-400 border-gray-100'
                      }`}>
                        <div className={`w-1.5 h-1.5 rounded-full ${user.status === 'ACTIVE' || user.status === 'active' ? 'bg-emerald-500 animate-pulse' : 'bg-gray-300'}`}></div>
                        {user.status === 'ACTIVE' || user.status === 'active' ? 'Trực tuyến' : 'Ngoại tuyến'}
                      </span>
                    </td>
                    <td className="py-7 px-4">
                       <span className={`text-[10px] font-black tracking-tighter italic ${
                         user.activity === 'High' ? 'text-blue-500' :
                         user.activity === 'Medium' ? 'text-amber-500' :
                         'text-gray-400'
                       }`}>{user.activity} Velocity</span>
                    </td>
                    <td className="py-7 px-4 text-center">
                      <button className="p-3 bg-white border border-gray-100 rounded-2xl hover:bg-gray-900 hover:text-white transition-all shadow-sm">
                        <MoreVertical className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
