import { UserLayout } from '../components/UserLayout';
import { CreditCard, Eye, EyeOff, Lock, ShoppingBag, Utensils, Car, Zap, Plus, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

export function CreditCardPage() {
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
    <UserLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Thẻ tín dụng</h1>
          <p className="text-gray-600">Quản lý thẻ và chi tiêu của bạn</p>
        </div>

        {/* Card Display */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <div>
            <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 text-white shadow-xl mb-6">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"></div>

              <div className="relative">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-2">
                    <CreditCard className="w-8 h-8" />
                    <span className="font-semibold text-lg">FinanceHub Premium</span>
                  </div>
                  <button
                    onClick={() => setShowCardNumber(!showCardNumber)}
                    className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                  >
                    {showCardNumber ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>

                <div className="mb-8">
                  <p className="text-sm text-gray-300 mb-2">Số thẻ</p>
                  <p className="text-2xl font-mono tracking-wider">
                    {showCardNumber ? '4532 1234 5678 9012' : '•••• •••• •••• 9012'}
                  </p>
                </div>

                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-sm text-gray-300 mb-1">Chủ thẻ</p>
                    <p className="font-semibold">NGUYEN VAN A</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-300 mb-1">Hết hạn</p>
                    <p className="font-semibold">12/28</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button className="bg-blue-600 text-white p-4 rounded-xl hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                <Lock className="w-5 h-5" />
                <span className="font-semibold">Khóa thẻ</span>
              </button>
              <button className="bg-white border-2 border-gray-200 text-gray-900 p-4 rounded-xl hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                <Plus className="w-5 h-5" />
                <span className="font-semibold">Thêm thẻ</span>
              </button>
            </div>
          </div>

          {/* Card Stats */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Thông tin chi tiêu</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">Đã chi tiêu</span>
                    <span className="text-sm font-semibold text-gray-900">14,000,000 ₫</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '28%' }}></div>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Hạn mức</span>
                  <span className="font-semibold text-gray-900">50,000,000 ₫</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Còn lại</span>
                  <span className="font-semibold text-green-600">36,000,000 ₫</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Thanh toán kỳ này</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Tổng phải trả</span>
                  <span className="text-2xl font-bold text-gray-900">14,000,000 ₫</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Thanh toán tối thiểu</span>
                  <span className="text-gray-900">1,400,000 ₫</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Hạn thanh toán</span>
                  <span className="text-red-600 font-semibold">15/04/2026</span>
                </div>
                <button className="w-full mt-4 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                  Thanh toán ngay
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Charts */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Chi tiêu theo danh mục</h2>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={spendingByCategory}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={(entry) => `${entry.name}: ${(entry.value / 14000000 * 100).toFixed(1)}%`}
                  outerRadius={80}
                  dataKey="value"
                >
                  {spendingByCategory.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value: number) => new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value)} />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Chi tiêu 6 tháng</h2>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={monthlySpending}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip formatter={(value: number) => new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value)} />
                <Bar dataKey="amount" fill="#3b82f6" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">Giao dịch gần đây</h2>
            <button className="text-blue-600 hover:text-blue-700 font-semibold text-sm flex items-center gap-1">
              Xem tất cả
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <div className="space-y-4">
            {recentTransactions.map((transaction) => {
              const Icon = transaction.icon;
              return (
                <div key={transaction.id} className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg transition-colors">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-lg ${transaction.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{transaction.merchant}</p>
                      <p className="text-sm text-gray-500">{transaction.category} • {transaction.date}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-gray-900">-{new Intl.NumberFormat('vi-VN').format(transaction.amount)} ₫</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Benefits */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Ưu đãi thẻ</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-5 hover:shadow-md transition-shadow">
                <div className="text-3xl mb-3">{benefit.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </UserLayout>
  );
}
