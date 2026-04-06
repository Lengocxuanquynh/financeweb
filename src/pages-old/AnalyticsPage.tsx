import { UserLayout } from '../components/UserLayout';
import { TrendingUp, TrendingDown, DollarSign, Calendar, Target, AlertTriangle, Download } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

export function AnalyticsPage() {
  const incomeVsExpense = [
    { month: 'T7', income: 28000000, expense: 16000000, saving: 12000000 },
    { month: 'T8', income: 30000000, expense: 17500000, saving: 12500000 },
    { month: 'T9', income: 29000000, expense: 16800000, saving: 12200000 },
    { month: 'T10', income: 32000000, expense: 18000000, saving: 14000000 },
    { month: 'T11', income: 31000000, expense: 17200000, saving: 13800000 },
    { month: 'T12', income: 35000000, expense: 19500000, saving: 15500000 },
    { month: 'T1', income: 33000000, expense: 18200000, saving: 14800000 },
    { month: 'T2', income: 34000000, expense: 19000000, saving: 15000000 },
    { month: 'T3', income: 36000000, expense: 20500000, saving: 15500000 }
  ];

  const categoryBreakdown = [
    { category: 'Nhà ở', amount: 5000000, percentage: 24.4, change: 0 },
    { category: 'Ăn uống', amount: 4500000, percentage: 22.0, change: -5.2 },
    { category: 'Di chuyển', amount: 3200000, percentage: 15.6, change: 3.1 },
    { category: 'Giải trí', amount: 2800000, percentage: 13.7, change: 8.5 },
    { category: 'Mua sắm', amount: 2500000, percentage: 12.2, change: -2.3 },
    { category: 'Sức khỏe', amount: 1500000, percentage: 7.3, change: 1.2 },
    { category: 'Khác', amount: 1000000, percentage: 4.9, change: -0.5 }
  ];

  const savingsGoal = [
    { month: 'T10', actual: 12000000, goal: 10000000 },
    { month: 'T11', actual: 12500000, goal: 10000000 },
    { month: 'T12', actual: 12200000, goal: 10000000 },
    { month: 'T1', actual: 14000000, goal: 12000000 },
    { month: 'T2', actual: 13800000, goal: 12000000 },
    { month: 'T3', actual: 15500000, goal: 12000000 }
  ];

  const financialMetrics = [
    {
      label: 'Tỷ lệ tiết kiệm',
      value: '43.1%',
      change: '+2.5%',
      isPositive: true,
      description: 'Của tổng thu nhập',
      icon: Target
    },
    {
      label: 'Chi tiêu trung bình/ngày',
      value: '683,333 ₫',
      change: '-5.2%',
      isPositive: true,
      description: 'So với tháng trước',
      icon: DollarSign
    },
    {
      label: 'Số dư khả dụng',
      value: '245.89M ₫',
      change: '+12.5%',
      isPositive: true,
      description: 'Tăng so với tháng trước',
      icon: TrendingUp
    },
    {
      label: 'Dự báo cuối tháng',
      value: '262.5M ₫',
      change: '+6.8%',
      isPositive: true,
      description: 'Nếu duy trì xu hướng',
      icon: Calendar
    }
  ];

  const insights = [
    {
      type: 'success',
      title: 'Tiết kiệm tốt!',
      message: 'Bạn đã tiết kiệm được 15,500,000 ₫ trong tháng này, vượt mục tiêu 29.2%',
      icon: TrendingUp,
      color: 'bg-green-50 border-green-200 text-green-800'
    },
    {
      type: 'warning',
      title: 'Chi tiêu giải trí tăng',
      message: 'Chi tiêu giải trí tăng 8.5% so với tháng trước. Hãy xem xét điều chỉnh ngân sách.',
      icon: AlertTriangle,
      color: 'bg-yellow-50 border-yellow-200 text-yellow-800'
    },
    {
      type: 'info',
      title: 'Cơ hội đầu tư',
      message: 'Với số dư hiện tại, bạn có thể xem xét đầu tư thêm vào quỹ VFM để tối ưu lợi nhuận.',
      icon: TrendingUp,
      color: 'bg-blue-50 border-blue-200 text-blue-800'
    }
  ];

  return (
    <UserLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Phân tích tài chính</h1>
            <p className="text-gray-600">Thống kê chi tiết và xu hướng tài chính của bạn</p>
          </div>
          <button className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            <Download className="w-5 h-5" />
            <span className="font-semibold">Xuất báo cáo</span>
          </button>
        </div>

        {/* Financial Metrics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {financialMetrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <span className={`text-sm px-2 py-1 rounded ${
                    metric.isPositive ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'
                  }`}>
                    {metric.change}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-1">{metric.label}</p>
                <p className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</p>
                <p className="text-xs text-gray-500">{metric.description}</p>
              </div>
            );
          })}
        </div>

        {/* AI Insights */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Thông tin chi từ AI</h2>
          <div className="space-y-4">
            {insights.map((insight, index) => {
              const Icon = insight.icon;
              return (
                <div key={index} className={`flex items-start gap-4 p-4 rounded-lg border ${insight.color}`}>
                  <Icon className="w-6 h-6 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-1">{insight.title}</h3>
                    <p className="text-sm">{insight.message}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Income vs Expense Trend */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Xu hướng thu nhập & chi tiêu</h2>
          <ResponsiveContainer width="100%" height={350}>
            <AreaChart data={incomeVsExpense}>
              <defs>
                <linearGradient id="analyticsIncomeGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="analyticsExpenseGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="analyticsSavingGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip formatter={(value: number) => new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value)} />
              <Legend />
              <Area type="monotone" dataKey="income" stroke="#10b981" fillOpacity={1} fill="url(#analyticsIncomeGradient)" name="Thu nhập" strokeWidth={2} />
              <Area type="monotone" dataKey="expense" stroke="#ef4444" fillOpacity={1} fill="url(#analyticsExpenseGradient)" name="Chi tiêu" strokeWidth={2} />
              <Area type="monotone" dataKey="saving" stroke="#3b82f6" fillOpacity={1} fill="url(#analyticsSavingGradient)" name="Tiết kiệm" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Category Breakdown and Savings Goal */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Category Breakdown */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Chi tiết chi tiêu theo danh mục</h2>
            <div className="space-y-4">
              {categoryBreakdown.map((cat, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-semibold text-gray-900">{cat.category}</span>
                    <div className="flex items-center gap-3">
                      <span className="text-gray-600">{new Intl.NumberFormat('vi-VN').format(cat.amount)} ₫</span>
                      <span className={`text-xs px-2 py-1 rounded ${
                        cat.change > 0 ? 'bg-red-50 text-red-600' : cat.change < 0 ? 'bg-green-50 text-green-600' : 'bg-gray-50 text-gray-600'
                      }`}>
                        {cat.change > 0 ? '+' : ''}{cat.change}%
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${cat.percentage}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-600 w-12 text-right">{cat.percentage}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Savings Goal */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Tiến độ mục tiêu tiết kiệm</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={savingsGoal}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip formatter={(value: number) => new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value)} />
                <Legend />
                <Bar dataKey="goal" fill="#e5e7eb" name="Mục tiêu" radius={[8, 8, 0, 0]} />
                <Bar dataKey="actual" fill="#10b981" name="Thực tế" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
            <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
              <div className="flex items-center gap-2 mb-2">
                <Target className="w-5 h-5 text-green-600" />
                <span className="font-semibold text-green-900">Đang đạt mục tiêu</span>
              </div>
              <p className="text-sm text-green-700">Bạn đã tiết kiệm được 129.2% mục tiêu đề ra. Tiếp tục duy trì!</p>
            </div>
          </div>
        </div>

        {/* Cash Flow Summary */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Tổng quan dòng tiền tháng 3/2026</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-green-100 p-3 rounded-lg">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                </div>
                <span className="text-sm font-semibold text-gray-600">Tổng thu nhập</span>
              </div>
              <p className="text-3xl font-bold text-gray-900 mb-2">36,000,000 ₫</p>
              <p className="text-sm text-green-600">+9.1% so với tháng trước</p>
            </div>

            <div className="bg-white rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-red-100 p-3 rounded-lg">
                  <TrendingDown className="w-6 h-6 text-red-600" />
                </div>
                <span className="text-sm font-semibold text-gray-600">Tổng chi tiêu</span>
              </div>
              <p className="text-3xl font-bold text-gray-900 mb-2">20,500,000 ₫</p>
              <p className="text-sm text-red-600">+7.9% so với tháng trước</p>
            </div>

            <div className="bg-white rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <DollarSign className="w-6 h-6 text-blue-600" />
                </div>
                <span className="text-sm font-semibold text-gray-600">Tiết kiệm ròng</span>
              </div>
              <p className="text-3xl font-bold text-gray-900 mb-2">15,500,000 ₫</p>
              <p className="text-sm text-green-600">+10.7% so với tháng trước</p>
            </div>
          </div>
        </div>
      </div>
    </UserLayout>
  );
}