import { UserLayout } from '../components/UserLayout';
import { Wallet, TrendingUp, CreditCard, PieChart, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, PieChart as RePieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export function UserDashboard() {
  const transactions = [
    { id: 1, type: 'income', name: 'Lương tháng 4', amount: 25000000, date: '2026-04-01', category: 'Lương' },
    { id: 2, type: 'expense', name: 'Tiền nhà', amount: 5000000, date: '2026-04-01', category: 'Nhà ở' },
    { id: 3, type: 'expense', name: 'Mua sắm', amount: 2500000, date: '2026-03-30', category: 'Shopping' },
    { id: 4, type: 'income', name: 'Freelance', amount: 8000000, date: '2026-03-28', category: 'Thu nhập phụ' },
    { id: 5, type: 'expense', name: 'Ăn uống', amount: 1200000, date: '2026-03-27', category: 'Ăn uống' }
  ];

  const monthlyData = [
    { month: 'T10', income: 30000000, expense: 18000000 },
    { month: 'T11', income: 32000000, expense: 19000000 },
    { month: 'T12', income: 35000000, expense: 22000000 },
    { month: 'T1', income: 28000000, expense: 17000000 },
    { month: 'T2', income: 31000000, expense: 20000000 },
    { month: 'T3', income: 33000000, expense: 18500000 }
  ];

  const expenseByCategory = [
    { name: 'Nhà ở', value: 5000000, color: '#3b82f6' },
    { name: 'Ăn uống', value: 3500000, color: '#10b981' },
    { name: 'Di chuyển', value: 2000000, color: '#f59e0b' },
    { name: 'Giải trí', value: 1500000, color: '#8b5cf6' },
    { name: 'Khác', value: 1500000, color: '#ef4444' }
  ];

  return (
    <UserLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
          <p className="text-gray-600">Tổng quan tài chính của bạn</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <Wallet className="w-6 h-6 text-blue-600" />
              </div>
              <span className="text-sm text-green-600 bg-green-50 px-2 py-1 rounded">+12.5%</span>
            </div>
            <p className="text-gray-600 text-sm mb-1">Tổng tài sản</p>
            <p className="text-2xl font-bold text-gray-900">245,890,000 ₫</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-green-100 p-3 rounded-lg">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
              <span className="text-sm text-green-600 bg-green-50 px-2 py-1 rounded">+8.2%</span>
            </div>
            <p className="text-gray-600 text-sm mb-1">Thu nhập tháng này</p>
            <p className="text-2xl font-bold text-gray-900">33,000,000 ₫</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-red-100 p-3 rounded-lg">
                <CreditCard className="w-6 h-6 text-red-600" />
              </div>
              <span className="text-sm text-red-600 bg-red-50 px-2 py-1 rounded">-3.5%</span>
            </div>
            <p className="text-gray-600 text-sm mb-1">Chi tiêu tháng này</p>
            <p className="text-2xl font-bold text-gray-900">13,500,000 ₫</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-purple-100 p-3 rounded-lg">
                <PieChart className="w-6 h-6 text-purple-600" />
              </div>
              <span className="text-sm text-green-600 bg-green-50 px-2 py-1 rounded">+15.7%</span>
            </div>
            <p className="text-gray-600 text-sm mb-1">Tiết kiệm</p>
            <p className="text-2xl font-bold text-gray-900">19,500,000 ₫</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Thu nhập & Chi tiêu</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip formatter={(value: number) => new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value)} />
                <Legend />
                <Bar dataKey="income" fill="#10b981" name="Thu nhập" />
                <Bar dataKey="expense" fill="#ef4444" name="Chi tiêu" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Chi tiêu theo danh mục</h2>
            <ResponsiveContainer width="100%" height={300}>
              <RePieChart>
                <Pie
                  data={expenseByCategory}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={(entry) => entry.name}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {expenseByCategory.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value: number) => new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value)} />
              </RePieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Giao dịch gần đây</h2>
          <div className="space-y-4">
            {transactions.map((transaction) => (
              <div key={transaction.id} className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg transition-colors">
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-lg ${transaction.type === 'income' ? 'bg-green-100' : 'bg-red-100'}`}>
                    {transaction.type === 'income' ? (
                      <ArrowUpRight className={`w-5 h-5 ${transaction.type === 'income' ? 'text-green-600' : 'text-red-600'}`} />
                    ) : (
                      <ArrowDownRight className={`w-5 h-5 ${transaction.type === 'income' ? 'text-green-600' : 'text-red-600'}`} />
                    )}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{transaction.name}</p>
                    <p className="text-sm text-gray-500">{transaction.category} • {transaction.date}</p>
                  </div>
                </div>
                <div className={`text-lg font-bold ${transaction.type === 'income' ? 'text-green-600' : 'text-red-600'}`}>
                  {transaction.type === 'income' ? '+' : '-'}{new Intl.NumberFormat('vi-VN').format(transaction.amount)} ₫
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </UserLayout>
  );
}