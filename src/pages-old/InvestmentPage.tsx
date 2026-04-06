import { UserLayout } from '../components/UserLayout';
import { TrendingUp, TrendingDown, DollarSign, Target, PieChart as PieChartIcon, AlertCircle } from 'lucide-react';
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

export function InvestmentPage() {
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
    <UserLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Đầu tư thông minh</h1>
          <p className="text-gray-600">Quản lý danh mục đầu tư của bạn</p>
        </div>

        {/* Portfolio Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <DollarSign className="w-6 h-6 text-blue-600" />
              </div>
              <span className="text-sm text-green-600 bg-green-50 px-2 py-1 rounded">+24.5%</span>
            </div>
            <p className="text-gray-600 text-sm mb-1">Giá trị danh mục</p>
            <p className="text-2xl font-bold text-gray-900">165,000,000 ₫</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-green-100 p-3 rounded-lg">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
              <span className="text-sm text-green-600 bg-green-50 px-2 py-1 rounded">+18.2%</span>
            </div>
            <p className="text-gray-600 text-sm mb-1">Lợi nhuận</p>
            <p className="text-2xl font-bold text-green-600">+32,500,000 ₫</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-purple-100 p-3 rounded-lg">
                <Target className="w-6 h-6 text-purple-600" />
              </div>
              <span className="text-sm text-blue-600 bg-blue-50 px-2 py-1 rounded">On track</span>
            </div>
            <p className="text-gray-600 text-sm mb-1">Mục tiêu năm</p>
            <p className="text-2xl font-bold text-gray-900">200,000,000 ₫</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-orange-100 p-3 rounded-lg">
                <PieChartIcon className="w-6 h-6 text-orange-600" />
              </div>
              <span className="text-sm text-gray-600 bg-gray-50 px-2 py-1 rounded">4 assets</span>
            </div>
            <p className="text-gray-600 text-sm mb-1">Tỷ suất sinh lời</p>
            <p className="text-2xl font-bold text-gray-900">24.5%</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          {/* Portfolio Growth Chart */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">Biến động danh mục</h2>
              <select className="px-4 py-2 border border-gray-300 rounded-lg text-sm">
                <option>6 tháng</option>
                <option>1 năm</option>
                <option>3 năm</option>
                <option>5 năm</option>
              </select>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={portfolioData}>
                <defs>
                  <linearGradient id="investmentPortfolioGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip formatter={(value: number) => new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value)} />
                <Area type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#investmentPortfolioGradient)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Asset Allocation */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Phân bổ tài sản</h2>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={assetAllocation}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {assetAllocation.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value: number) => new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value)} />
              </PieChart>
            </ResponsiveContainer>
            <div className="space-y-3 mt-4">
              {assetAllocation.map((asset, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: asset.color }}></div>
                    <span className="text-sm text-gray-700">{asset.name}</span>
                  </div>
                  <span className="text-sm font-semibold text-gray-900">{asset.percentage}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Top Holdings */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Top danh mục nắm giữ</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Mã</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Tên công ty</th>
                  <th className="text-right py-3 px-4 text-sm font-semibold text-gray-700">Số lượng</th>
                  <th className="text-right py-3 px-4 text-sm font-semibold text-gray-700">Giá</th>
                  <th className="text-right py-3 px-4 text-sm font-semibold text-gray-700">Giá trị</th>
                  <th className="text-right py-3 px-4 text-sm font-semibold text-gray-700">Thay đổi</th>
                </tr>
              </thead>
              <tbody>
                {topHoldings.map((holding, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-4 font-semibold text-blue-600">{holding.symbol}</td>
                    <td className="py-4 px-4 text-gray-900">{holding.name}</td>
                    <td className="py-4 px-4 text-right text-gray-700">{holding.shares}</td>
                    <td className="py-4 px-4 text-right text-gray-700">{new Intl.NumberFormat('vi-VN').format(holding.price)} ₫</td>
                    <td className="py-4 px-4 text-right font-semibold text-gray-900">{new Intl.NumberFormat('vi-VN').format(holding.value)} ₫</td>
                    <td className={`py-4 px-4 text-right font-semibold ${holding.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
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
        <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-purple-600 p-3 rounded-lg">
              <Target className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900">Đề xuất đầu tư từ AI</h2>
              <p className="text-sm text-gray-600">Dựa trên hồ sơ rủi ro và mục tiêu của bạn</p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {recommendations.map((rec, index) => (
              <div key={index} className="bg-white rounded-xl p-5 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-semibold text-gray-900">{rec.name}</h3>
                  <AlertCircle className="w-5 h-5 text-blue-600" />
                </div>
                <p className="text-sm text-gray-600 mb-3">{rec.type}</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Rủi ro:</span>
                  <span className={`px-2 py-1 rounded ${
                    rec.risk === 'Rất thấp' ? 'bg-green-50 text-green-700' :
                    rec.risk === 'Thấp' ? 'bg-blue-50 text-blue-700' :
                    'bg-orange-50 text-orange-700'
                  }`}>
                    {rec.risk}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm mt-2">
                  <span className="text-gray-600">Lợi nhuận kỳ vọng:</span>
                  <span className="font-semibold text-green-600">{rec.return}</span>
                </div>
                <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-semibold">
                  Tìm hiểu thêm
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </UserLayout>
  );
}