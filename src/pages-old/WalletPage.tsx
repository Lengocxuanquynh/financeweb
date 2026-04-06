import { UserLayout } from '../components/UserLayout';
import { Wallet, Send, Download, Plus, ArrowUpRight, ArrowDownRight, Clock } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export function WalletPage() {
  const balanceHistory = [
    { date: 'T10', balance: 45000000 },
    { date: 'T11', balance: 52000000 },
    { date: 'T12', balance: 58000000 },
    { date: 'T1', balance: 63000000 },
    { date: 'T2', balance: 71000000 },
    { date: 'T3', balance: 85000000 }
  ];

  const recentActivities = [
    { id: 1, type: 'receive', from: 'Nguyễn Văn A', amount: 5000000, date: '2026-04-02 10:30', status: 'completed' },
    { id: 2, type: 'send', to: 'Trần Thị B', amount: 2500000, date: '2026-04-01 15:20', status: 'completed' },
    { id: 3, type: 'topup', amount: 10000000, date: '2026-03-31 09:15', status: 'completed' },
    { id: 4, type: 'send', to: 'Lê Văn C', amount: 1200000, date: '2026-03-30 14:45', status: 'pending' },
    { id: 5, type: 'receive', from: 'Phạm Thị D', amount: 3000000, date: '2026-03-29 11:30', status: 'completed' }
  ];

  const quickActions = [
    { icon: Send, label: 'Chuyển tiền', color: 'bg-blue-500' },
    { icon: Download, label: 'Nạp tiền', color: 'bg-green-500' },
    { icon: ArrowDownRight, label: 'Rút tiền', color: 'bg-purple-500' },
    { icon: Plus, label: 'Yêu cầu', color: 'bg-orange-500' }
  ];

  return (
    <UserLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Ví điện tử</h1>
          <p className="text-gray-600">Quản lý và theo dõi giao dịch của bạn</p>
        </div>

        {/* Balance Card */}
        <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Wallet className="w-8 h-8" />
            <span className="text-lg">Số dư khả dụng</span>
          </div>
          <div className="text-5xl font-bold mb-6">85,430,000 ₫</div>
          <div className="flex gap-4">
            <div>
              <p className="text-blue-200 text-sm">Tháng này</p>
              <p className="text-xl font-semibold">+14,200,000 ₫</p>
            </div>
            <div>
              <p className="text-blue-200 text-sm">Tổng giao dịch</p>
              <p className="text-xl font-semibold">248</p>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {quickActions.map((action, index) => {
            const Icon = action.icon;
            return (
              <button
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-center gap-3"
              >
                <div className={`${action.color} p-4 rounded-full`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <span className="font-semibold text-gray-900">{action.label}</span>
              </button>
            );
          })}
        </div>

        {/* Balance History Chart */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Biến động số dư</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={balanceHistory}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip formatter={(value: number) => new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value)} />
              <Line type="monotone" dataKey="balance" stroke="#3b82f6" strokeWidth={3} dot={{ fill: '#3b82f6', r: 6 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Recent Activities */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Hoạt động gần đây</h2>
          <div className="space-y-4">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg transition-colors">
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-lg ${
                    activity.type === 'receive' ? 'bg-green-100' :
                    activity.type === 'send' ? 'bg-red-100' :
                    'bg-blue-100'
                  }`}>
                    {activity.type === 'receive' ? (
                      <ArrowDownRight className="w-5 h-5 text-green-600" />
                    ) : activity.type === 'send' ? (
                      <ArrowUpRight className="w-5 h-5 text-red-600" />
                    ) : (
                      <Plus className="w-5 h-5 text-blue-600" />
                    )}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      {activity.type === 'receive' && `Nhận tiền từ ${activity.from}`}
                      {activity.type === 'send' && `Chuyển tiền cho ${activity.to}`}
                      {activity.type === 'topup' && 'Nạp tiền vào ví'}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Clock className="w-4 h-4" />
                      <span>{activity.date}</span>
                      <span className={`px-2 py-0.5 rounded text-xs ${
                        activity.status === 'completed' ? 'bg-green-50 text-green-700' : 'bg-yellow-50 text-yellow-700'
                      }`}>
                        {activity.status === 'completed' ? 'Hoàn thành' : 'Đang xử lý'}
                      </span>
                    </div>
                  </div>
                </div>
                <div className={`text-lg font-bold ${
                  activity.type === 'receive' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {activity.type === 'receive' ? '+' : '-'}{new Intl.NumberFormat('vi-VN').format(activity.amount)} ₫
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </UserLayout>
  );
}
