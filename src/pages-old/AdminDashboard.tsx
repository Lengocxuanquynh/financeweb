import { Header } from '../components/Header';
import { Users, DollarSign, TrendingUp, CreditCard, Search, MoreVertical } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export function AdminDashboard() {
  const users = [
    { id: 1, name: 'Nguyễn Văn A', email: 'nguyenvana@email.com', balance: 125000000, status: 'active' },
    { id: 2, name: 'Trần Thị B', email: 'tranthib@email.com', balance: 89000000, status: 'active' },
    { id: 3, name: 'Lê Văn C', email: 'levanc@email.com', balance: 245000000, status: 'active' },
    { id: 4, name: 'Phạm Thị D', email: 'phamthid@email.com', balance: 156000000, status: 'inactive' },
    { id: 5, name: 'Hoàng Văn E', email: 'hoangvane@email.com', balance: 98000000, status: 'active' }
  ];

  const systemStats = [
    { month: 'T10', users: 45000, transactions: 125000, revenue: 850000000 },
    { month: 'T11', users: 48000, transactions: 135000, revenue: 920000000 },
    { month: 'T12', users: 52000, transactions: 148000, revenue: 1050000000 },
    { month: 'T1', users: 55000, transactions: 156000, revenue: 1120000000 },
    { month: 'T2', users: 58000, transactions: 168000, revenue: 1250000000 },
    { month: 'T3', users: 62000, transactions: 182000, revenue: 1380000000 }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
          <p className="text-gray-600">Quản lý hệ thống tài chính</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-xl shadow-lg text-white">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-white/20 p-3 rounded-lg">
                <Users className="w-6 h-6" />
              </div>
              <span className="text-sm bg-white/20 px-2 py-1 rounded">+7.2%</span>
            </div>
            <p className="text-blue-100 text-sm mb-1">Tổng người dùng</p>
            <p className="text-3xl font-bold">62,458</p>
          </div>

          <div className="bg-gradient-to-br from-green-500 to-green-600 p-6 rounded-xl shadow-lg text-white">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-white/20 p-3 rounded-lg">
                <TrendingUp className="w-6 h-6" />
              </div>
              <span className="text-sm bg-white/20 px-2 py-1 rounded">+12.5%</span>
            </div>
            <p className="text-green-100 text-sm mb-1">Giao dịch tháng này</p>
            <p className="text-3xl font-bold">182,543</p>
          </div>

          <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-6 rounded-xl shadow-lg text-white">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-white/20 p-3 rounded-lg">
                <DollarSign className="w-6 h-6" />
              </div>
              <span className="text-sm bg-white/20 px-2 py-1 rounded">+18.3%</span>
            </div>
            <p className="text-purple-100 text-sm mb-1">Doanh thu</p>
            <p className="text-3xl font-bold">1.38 tỷ ₫</p>
          </div>

          <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-6 rounded-xl shadow-lg text-white">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-white/20 p-3 rounded-lg">
                <CreditCard className="w-6 h-6" />
              </div>
              <span className="text-sm bg-white/20 px-2 py-1 rounded">+5.8%</span>
            </div>
            <p className="text-orange-100 text-sm mb-1">Tài sản quản lý</p>
            <p className="text-3xl font-bold">523 tỷ ₫</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Tăng trưởng người dùng</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={systemStats}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="users" stroke="#3b82f6" strokeWidth={3} name="Người dùng" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Giao dịch & Doanh thu</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={systemStats}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="transactions" fill="#10b981" name="Giao dịch (nghìn)" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">Quản lý người dùng</h2>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Tìm kiếm người dùng..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                Thêm người dùng
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-4 px-4 font-semibold text-gray-700">ID</th>
                  <th className="text-left py-4 px-4 font-semibold text-gray-700">Tên</th>
                  <th className="text-left py-4 px-4 font-semibold text-gray-700">Email</th>
                  <th className="text-left py-4 px-4 font-semibold text-gray-700">Số dư</th>
                  <th className="text-left py-4 px-4 font-semibold text-gray-700">Trạng thái</th>
                  <th className="text-left py-4 px-4 font-semibold text-gray-700">Hành động</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-4 text-gray-600">#{user.id}</td>
                    <td className="py-4 px-4">
                      <p className="font-semibold text-gray-900">{user.name}</p>
                    </td>
                    <td className="py-4 px-4 text-gray-600">{user.email}</td>
                    <td className="py-4 px-4 font-semibold text-gray-900">
                      {new Intl.NumberFormat('vi-VN').format(user.balance)} ₫
                    </td>
                    <td className="py-4 px-4">
                      <span className={`px-3 py-1 rounded-full text-sm ${user.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'}`}>
                        {user.status === 'active' ? 'Hoạt động' : 'Không hoạt động'}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <button className="p-2 hover:bg-gray-100 rounded-lg">
                        <MoreVertical className="w-5 h-5 text-gray-600" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}