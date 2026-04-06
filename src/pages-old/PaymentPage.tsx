import { UserLayout } from '../components/UserLayout';
import { Smartphone, Scan, QrCode, CreditCard, Zap, Gift, Star, Clock, Check, ChevronRight } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export function PaymentPage() {
  const paymentMethods = [
    { id: 1, type: 'Ví điện tử', name: 'FinanceHub Wallet', balance: 85430000, isDefault: true, icon: Smartphone, color: 'bg-blue-600' },
    { id: 2, type: 'Thẻ tín dụng', name: 'Premium **** 9012', balance: 36000000, isDefault: false, icon: CreditCard, color: 'bg-purple-600' },
    { id: 3, type: 'Ngân hàng', name: 'Vietcombank', balance: 125000000, isDefault: false, icon: CreditCard, color: 'bg-green-600' }
  ];

  const quickPayments = [
    { name: 'Điện', icon: Zap, color: 'bg-yellow-500' },
    { name: 'Nước', icon: Smartphone, color: 'bg-blue-500' },
    { name: 'Internet', icon: Smartphone, color: 'bg-purple-500' },
    { name: 'Di động', icon: Smartphone, color: 'bg-green-500' }
  ];

  const recentPayments = [
    { id: 1, merchant: 'Shopee', category: 'Mua sắm', amount: 1250000, date: '2026-04-02 14:30', status: 'success', cashback: 62500 },
    { id: 2, merchant: 'EVN HCMC', category: 'Hóa đơn', amount: 450000, date: '2026-04-01 09:15', status: 'success', cashback: 0 },
    { id: 3, merchant: 'The Coffee House', category: 'Ăn uống', amount: 125000, date: '2026-03-31 16:45', status: 'success', cashback: 12500 },
    { id: 4, merchant: 'Grab', category: 'Di chuyển', amount: 85000, date: '2026-03-31 11:20', status: 'success', cashback: 4250 },
    { id: 5, merchant: 'VNPT', category: 'Hóa đơn', amount: 200000, date: '2026-03-30 10:00', status: 'pending', cashback: 0 }
  ];

  const monthlyPaymentVolume = [
    { month: 'T10', amount: 28000000 },
    { month: 'T11', amount: 32000000 },
    { month: 'T12', amount: 35000000 },
    { month: 'T1', amount: 30000000 },
    { month: 'T2', amount: 38000000 },
    { month: 'T3', amount: 42000000 }
  ];

  const rewards = [
    { title: 'Hoàn tiền 10%', description: 'Khi thanh toán tại Shopee', expiry: '30/04/2026', icon: Gift, tag: 'Hot' },
    { title: 'Giảm 50K', description: 'Cho đơn hàng từ 500K', expiry: '15/04/2026', icon: Gift, tag: 'New' },
    { title: 'Tích điểm x2', description: 'Thanh toán hóa đơn', expiry: '10/04/2026', icon: Star, tag: null }
  ];

  return (
    <UserLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Thanh toán di động</h1>
          <p className="text-gray-600">Thanh toán nhanh chóng và an toàn</p>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-blue-100 mb-2">Tổng số dư khả dụng</p>
                <p className="text-4xl font-bold">246.43M ₫</p>
              </div>
              <Smartphone className="w-12 h-12 text-blue-200" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-xl p-4 transition-colors text-left">
                <Scan className="w-8 h-8 mb-2" />
                <p className="font-semibold">Quét mã</p>
              </button>
              <button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-xl p-4 transition-colors text-left">
                <QrCode className="w-8 h-8 mb-2" />
                <p className="font-semibold">Mã của tôi</p>
              </button>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border-2 border-gray-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-orange-100 p-3 rounded-xl">
                <Star className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <p className="text-gray-600 text-sm">Điểm thưởng</p>
                <p className="text-3xl font-bold text-gray-900">12,450</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Tháng này</span>
                <span className="font-semibold text-green-600">+2,350 điểm</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Hoàn tiền tích lũy</span>
                <span className="font-semibold text-gray-900">624,500 ₫</span>
              </div>
              <button className="w-full mt-4 bg-orange-600 text-white py-3 rounded-xl hover:bg-orange-700 transition-colors font-semibold">
                Đổi điểm
              </button>
            </div>
          </div>
        </div>

        {/* Quick Bill Payments */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Thanh toán nhanh</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {quickPayments.map((payment, index) => {
              const Icon = payment.icon;
              return (
                <button key={index} className="flex flex-col items-center gap-3 p-6 border-2 border-gray-200 rounded-xl hover:border-blue-500 hover:bg-blue-50 transition-all group">
                  <div className={`${payment.color} p-4 rounded-full group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="font-semibold text-gray-900">{payment.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Payment Methods */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">Phương thức thanh toán</h2>
            <button className="text-blue-600 hover:text-blue-700 font-semibold text-sm flex items-center gap-1">
              Thêm mới
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <div className="space-y-4">
            {paymentMethods.map((method) => {
              const Icon = method.icon;
              return (
                <div key={method.id} className={`flex items-center justify-between p-5 rounded-xl border-2 transition-all ${
                  method.isDefault ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'
                }`}>
                  <div className="flex items-center gap-4">
                    <div className={`${method.color} p-3 rounded-xl`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <p className="font-semibold text-gray-900">{method.name}</p>
                        {method.isDefault && (
                          <span className="bg-blue-600 text-white text-xs px-2 py-0.5 rounded-full">Mặc định</span>
                        )}
                      </div>
                      <p className="text-sm text-gray-600">{method.type}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-gray-900">{new Intl.NumberFormat('vi-VN').format(method.balance)} ₫</p>
                    <p className="text-sm text-gray-500">Số dư khả dụng</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Payment Volume Chart */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Khối lượng thanh toán</h2>
          <ResponsiveContainer width="100%" height={250}>
            <AreaChart data={monthlyPaymentVolume}>
              <defs>
                <linearGradient id="paymentGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip formatter={(value: number) => new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value)} />
              <Area type="monotone" dataKey="amount" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#paymentGradient)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Recent Payments */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">Giao dịch gần đây</h2>
              <button className="text-blue-600 hover:text-blue-700 font-semibold text-sm flex items-center gap-1">
                Xem tất cả
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
            <div className="space-y-3">
              {recentPayments.map((payment) => (
                <div key={payment.id} className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg transition-colors">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <p className="font-semibold text-gray-900">{payment.merchant}</p>
                      {payment.status === 'success' ? (
                        <Check className="w-4 h-4 text-green-600" />
                      ) : (
                        <Clock className="w-4 h-4 text-yellow-600" />
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <span>{payment.category}</span>
                      <span>•</span>
                      <span>{payment.date}</span>
                    </div>
                    {payment.cashback > 0 && (
                      <p className="text-xs text-green-600 mt-1">+{new Intl.NumberFormat('vi-VN').format(payment.cashback)} ₫ hoàn tiền</p>
                    )}
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-gray-900">-{new Intl.NumberFormat('vi-VN').format(payment.amount)} ₫</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Rewards & Offers */}
          <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Ưu đãi & Khuyến mãi</h2>
            <div className="space-y-4">
              {rewards.map((reward, index) => {
                const Icon = reward.icon;
                return (
                  <div key={index} className="bg-white rounded-xl p-5 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="bg-orange-100 p-2 rounded-lg">
                          <Icon className="w-5 h-5 text-orange-600" />
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900">{reward.title}</h3>
                        </div>
                      </div>
                      {reward.tag && (
                        <span className={`text-xs px-2 py-1 rounded-full font-semibold ${
                          reward.tag === 'Hot' ? 'bg-red-100 text-red-700' : 'bg-blue-100 text-blue-700'
                        }`}>
                          {reward.tag}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{reward.description}</p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>HSD: {reward.expiry}</span>
                      <button className="text-blue-600 hover:text-blue-700 font-semibold">Dùng ngay</button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </UserLayout>
  );
}