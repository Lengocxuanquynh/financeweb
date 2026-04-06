'use client';

import { TrendingUp, TrendingDown, DollarSign, Target, PieChart as PieChartIcon, AlertCircle, ChevronRight } from 'lucide-react';
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import Link from 'next/link';

export function InvestmentClient() {
  const portfolioData = [
    { date: 'T10', value: 125000000 },
    { date: 'T11', value: 132000000 },
    { date: 'T12', value: 138000000 },
    { date: 'T1', value: 145000000 },
    { date: 'T2', value: 152000000 },
    { date: 'T3', value: 165000000 }
  ];

  const assetAllocation = [
    { name: 'Cổ phiếu', value: 65000000, color: '#3b82f6', percentage: 39.4 },
    { name: 'Trái phiếu', value: 45000000, color: '#10b981', percentage: 27.3 },
    { name: 'Quỹ đầu tư', value: 35000000, color: '#f59e0b', percentage: 21.2 },
    { name: 'Tiền mặt', value: 20000000, color: '#8b5cf6', percentage: 12.1 }
  ];

  const topHoldings = [
    { symbol: 'VCB', name: 'Vietcombank', shares: 500, price: 85000, value: 42500000, change: 2.5 },
    { symbol: 'VIC', name: 'Vingroup', shares: 800, price: 42000, value: 33600000, change: -1.2 },
    { symbol: 'VNM', name: 'Vinamilk', shares: 400, price: 68000, value: 27200000, change: 1.8 },
    { symbol: 'GAS', name: 'PV Gas', shares: 300, price: 95000, value: 28500000, change: 3.4 }
  ];

  const recommendations = [
    { name: 'Quỹ cân bằng VFM', type: 'Quỹ đầu tư', risk: 'Thấp', return: '12-15%/năm' },
    { name: 'VN30 Index Fund', type: 'Quỹ ETF', risk: 'Trung bình', return: '15-20%/năm' },
    { name: 'Trái phiếu chính phủ 5 năm', type: 'Trái phiếu', risk: 'Rất thấp', return: '6-8%/năm' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">Đầu tư thông minh & Hiệu quả</h1>
        <p className="text-xl text-gray-600 max-w-2xl">
          Tối ưu hóa lợi nhuận với danh mục đầu tư đa dạng và các đề xuất thông minh từ hệ thống phân tích dữ liệu thị trường.
        </p>
      </div>

      {/* Portfolio Stats */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-blue-100 p-3 rounded-xl">
              <DollarSign className="w-6 h-6 text-blue-600" />
            </div>
            <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">+24.5%</span>
          </div>
          <p className="text-gray-500 text-sm font-medium mb-1">Giá trị danh mục</p>
          <p className="text-2xl font-bold text-gray-900">165,000,000 ₫</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-emerald-100 p-3 rounded-xl">
              <TrendingUp className="w-6 h-6 text-emerald-600" />
            </div>
            <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">+18.2%</span>
          </div>
          <p className="text-gray-500 text-sm font-medium mb-1">Lợi nhuận ròng</p>
          <p className="text-2xl font-bold text-emerald-600">+32,500,000 ₫</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-purple-100 p-3 rounded-xl">
              <Target className="w-6 h-6 text-purple-600" />
            </div>
            <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded-full">Đúng kế hoạch</span>
          </div>
          <p className="text-gray-500 text-sm font-medium mb-1">Mục tiêu tài chính</p>
          <p className="text-2xl font-bold text-gray-900">200,000,000 ₫</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-amber-100 p-3 rounded-xl">
              <PieChartIcon className="w-6 h-6 text-amber-600" />
            </div>
            <span className="text-xs font-bold text-gray-500 bg-gray-50 px-2 py-1 rounded-full">4 loại tài tản</span>
          </div>
          <p className="text-gray-500 text-sm font-medium mb-1">Tỷ suất kỳ vọng</p>
          <p className="text-2xl font-bold text-gray-900">24.5% /năm</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 mb-12">
        {/* Portfolio Growth Chart */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-bold text-gray-900">Tăng trưởng danh mục</h2>
            <select className="px-4 py-2 bg-gray-50 border-none rounded-xl text-sm font-semibold text-gray-700 outline-none ring-1 ring-gray-200">
              <option>6 tháng gần nhất</option>
              <option>1 năm</option>
              <option>Toàn thời gian</option>
            </select>
          </div>
          <div className="h-[350px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={portfolioData}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.15}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} dy={10} />
                <YAxis hide />
                <Tooltip 
                  contentStyle={{borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'}}
                  formatter={(value: number) => [new Intl.NumberFormat('vi-VN').format(value) + ' ₫', 'Giá trị']} 
                />
                <Area type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={4} fillOpacity={1} fill="url(#colorValue)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Asset Allocation */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-8">Phân bổ tài sản</h2>
          <div className="h-[220px] w-full mb-8">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={assetAllocation}
                  cx="50%"
                  cy="50%"
                  innerRadius={65}
                  outerRadius={90}
                  paddingAngle={5}
                  dataKey="value"
                  stroke="none"
                >
                  {assetAllocation.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value: number) => new Intl.NumberFormat('vi-VN').format(value) + ' ₫'} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-4">
            {assetAllocation.map((asset, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: asset.color }}></div>
                  <span className="text-sm font-medium text-gray-600">{asset.name}</span>
                </div>
                <span className="text-sm font-bold text-gray-900">{asset.percentage}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Top Holdings */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl font-bold text-gray-900">Danh mục thành phần</h2>
          <Link href="/register" className="text-blue-600 font-bold text-sm hover:underline">Xem thêm tài sản</Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-gray-50 text-gray-400 text-sm font-semibold uppercase tracking-wider">
                <th className="pb-4 px-4 text-center">Mã</th>
                <th className="pb-4 px-4">Tên công ty</th>
                <th className="pb-4 px-4 text-right">Số lượng</th>
                <th className="pb-4 px-4 text-right">Thị giá</th>
                <th className="pb-4 px-4 text-right">Tổng giá trị</th>
                <th className="pb-4 px-4 text-right">24h</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {topHoldings.map((holding, index) => (
                <tr key={index} className="group hover:bg-gray-50 transition-colors">
                  <td className="py-5 px-4 font-bold text-blue-600 text-center">
                    <span className="bg-blue-50 px-3 py-1 rounded-lg">{holding.symbol}</span>
                  </td>
                  <td className="py-5 px-4 text-gray-900 font-semibold">{holding.name}</td>
                  <td className="py-5 px-4 text-right text-gray-600 font-medium">{holding.shares}</td>
                  <td className="py-5 px-4 text-right text-gray-600 font-medium">{new Intl.NumberFormat('vi-VN').format(holding.price)} ₫</td>
                  <td className="py-5 px-4 text-right font-bold text-gray-900">{new Intl.NumberFormat('vi-VN').format(holding.value)} ₫</td>
                  <td className={`py-5 px-4 text-right font-bold ${holding.change >= 0 ? 'text-emerald-600' : 'text-rose-600'}`}>
                    <div className="flex items-center justify-end gap-1">
                      {holding.change >= 0 ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                      {holding.change >= 0 ? '+' : ''}{holding.change}%
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* AI Recommendations */}
      <div className="bg-gray-900 rounded-[3rem] p-12 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 opacity-20 blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600 opacity-20 blur-[100px] pointer-events-none"></div>
        
        <div className="relative z-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
            <div>
              <h2 className="text-3xl font-extrabold mb-4">Cơ hội đầu tư từ AI Hub</h2>
              <p className="text-gray-400 max-w-xl">Giải pháp AI tự động hóa việc phân tích rủi ro và tìm kiếm lợi nhuận tối ưu cho danh mục của bạn.</p>
            </div>
            <Link href="/register" className="bg-white text-gray-900 px-8 py-4 rounded-2xl font-bold hover:bg-blue-50 transition-colors shadow-xl">Bắt đầu ngay hôm nay</Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {recommendations.map((rec, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all group">
                <div className="flex items-start justify-between mb-8">
                  <div>
                    <h3 className="text-xl font-bold mb-1">{rec.name}</h3>
                    <span className="text-blue-400 text-sm font-semibold">{rec.type}</span>
                  </div>
                  <div className="bg-blue-600 p-2 rounded-xl group-hover:scale-110 transition-transform">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400 font-medium">Chỉ số rủi ro:</span>
                    <span className={`px-3 py-1 rounded-full font-bold tracking-wide text-[10px] uppercase ${
                      rec.risk === 'Rất thấp' ? 'bg-emerald-500/20 text-emerald-400' :
                      rec.risk === 'Thấp' ? 'bg-blue-500/20 text-blue-400' :
                      'bg-amber-500/20 text-amber-400'
                    }`}>
                      {rec.risk}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm font-medium">Lợi nhuận kỳ vọng:</span>
                    <span className="text-lg font-extrabold text-emerald-400">{rec.return}</span>
                  </div>
                </div>

                <Link href="/register" className="w-full inline-flex items-center justify-center gap-2 border border-white/20 py-4 rounded-2xl font-bold group-hover:bg-white group-hover:text-gray-900 transition-all">
                  Chi tiết cơ hội
                  <ChevronRight className="w-5 h-5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
