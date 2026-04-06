import { UserLayout } from '../components/UserLayout';
import { Shield, Heart, Car, Home, Plane, Briefcase, Plus, Check, AlertCircle, ChevronRight } from 'lucide-react';

export function InsurancePage() {
  const activeInsurance = [
    {
      id: 1,
      type: 'Bảo hiểm sức khỏe',
      provider: 'Prudential',
      premium: 12000000,
      coverage: 500000000,
      status: 'active',
      expiryDate: '15/12/2026',
      icon: Heart,
      color: 'bg-red-500',
      benefits: ['Điều trị nội trú', 'Phẫu thuật', 'Khám bệnh', 'Thai sản']
    },
    {
      id: 2,
      type: 'Bảo hiểm xe ô tô',
      provider: 'Bảo Việt',
      premium: 8500000,
      coverage: 800000000,
      status: 'active',
      expiryDate: '20/08/2026',
      icon: Car,
      color: 'bg-blue-500',
      benefits: ['Vật chất', 'Trách nhiệm dân sự', 'Tai nạn lái phụ xe']
    },
    {
      id: 3,
      type: 'Bảo hiểm nhà',
      provider: 'PVI',
      premium: 6000000,
      coverage: 2000000000,
      status: 'pending',
      expiryDate: '10/05/2026',
      icon: Home,
      color: 'bg-green-500',
      benefits: ['Hỏa hoạn', 'Thiên tai', 'Trộm cắp', 'Vỡ kính']
    }
  ];

  const suggestedInsurance = [
    {
      name: 'Bảo hiểm du lịch',
      provider: 'Liberty',
      premium: 'Từ 500,000₫',
      icon: Plane,
      color: 'bg-purple-500',
      description: 'Bảo vệ bạn khi đi du lịch trong và ngoài nước',
      features: ['Hủy chuyến', 'Hành lý', 'Y tế khẩn cấp', 'Hỗ trợ 24/7']
    },
    {
      name: 'Bảo hiểm nhân thọ',
      provider: 'Manulife',
      premium: 'Từ 2,000,000₫/tháng',
      icon: Shield,
      color: 'bg-indigo-500',
      description: 'Bảo vệ tài chính cho gia đình của bạn',
      features: ['Tử vong', 'Thương tật', 'Bệnh hiểm nghèo', 'Tiết kiệm']
    },
    {
      name: 'Bảo hiểm hưu trí',
      provider: 'AIA',
      premium: 'Từ 5,000,000₫/tháng',
      icon: Briefcase,
      color: 'bg-orange-500',
      description: 'Chuẩn bị cho tương lai nghỉ hưu thoải mái',
      features: ['Trả dần', 'Lãi suất hấp dẫn', 'Linh hoạt', 'Miễn thuế']
    }
  ];

  const claimHistory = [
    { id: 1, type: 'Bảo hiểm sức khỏe', date: '15/02/2026', amount: 8500000, status: 'approved', description: 'Khám và điều trị viêm phổi' },
    { id: 2, type: 'Bảo hiểm xe ô tô', date: '03/01/2026', amount: 12000000, status: 'approved', description: 'Sửa chữa sau va chạm nhẹ' },
    { id: 3, type: 'Bảo hiểm sức khỏe', date: '20/11/2025', amount: 2500000, status: 'approved', description: 'Khám tổng quát định kỳ' }
  ];

  return (
    <UserLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Bảo hiểm</h1>
          <p className="text-gray-600">Quản lý các hợp đồng bảo hiểm của bạn</p>
        </div>

        {/* Overview Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-xl shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-8 h-8" />
              <span className="text-lg font-semibold">Tổng bảo hiểm</span>
            </div>
            <p className="text-4xl font-bold mb-2">3</p>
            <p className="text-blue-100 text-sm">Hợp đồng đang hoạt động</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border-2 border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-600 font-semibold">Phí hàng năm</span>
              <AlertCircle className="w-5 h-5 text-gray-400" />
            </div>
            <p className="text-3xl font-bold text-gray-900 mb-2">26,500,000 ₫</p>
            <p className="text-sm text-gray-600">~2,200,000 ₫/tháng</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border-2 border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-600 font-semibold">Tổng bảo vệ</span>
              <Shield className="w-5 h-5 text-green-600" />
            </div>
            <p className="text-3xl font-bold text-gray-900 mb-2">3.3 tỷ ₫</p>
            <p className="text-sm text-green-600">Giá trị bảo hiểm</p>
          </div>
        </div>

        {/* Active Insurance Policies */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">Hợp đồng bảo hiểm của bạn</h2>
            <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              <Plus className="w-5 h-5" />
              <span className="font-semibold">Thêm bảo hiểm</span>
            </button>
          </div>

          <div className="space-y-4">
            {activeInsurance.map((insurance) => {
              const Icon = insurance.icon;
              return (
                <div key={insurance.id} className="border border-gray-200 rounded-xl p-6 hover:border-blue-300 transition-colors">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className={`${insurance.color} p-4 rounded-xl`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{insurance.type}</h3>
                        <p className="text-gray-600">{insurance.provider}</p>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      insurance.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {insurance.status === 'active' ? 'Đang hoạt động' : 'Chờ gia hạn'}
                    </span>
                  </div>

                  <div className="grid md:grid-cols-4 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Phí bảo hiểm/năm</p>
                      <p className="font-semibold text-gray-900">{new Intl.NumberFormat('vi-VN').format(insurance.premium)} ₫</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Số tiền bảo hiểm</p>
                      <p className="font-semibold text-gray-900">{new Intl.NumberFormat('vi-VN').format(insurance.coverage)} ₫</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Ngày hết hạn</p>
                      <p className="font-semibold text-gray-900">{insurance.expiryDate}</p>
                    </div>
                    <div className="flex items-end">
                      <button className="text-blue-600 hover:text-blue-700 font-semibold text-sm flex items-center gap-1">
                        Chi tiết
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100">
                    {insurance.benefits.map((benefit, index) => (
                      <span key={index} className="flex items-center gap-1 bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                        <Check className="w-4 h-4 text-green-600" />
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Suggested Insurance */}
        <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6 mb-8">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-2">Gợi ý bảo hiểm phù hợp</h2>
            <p className="text-gray-600 text-sm">Dựa trên hồ sơ và nhu cầu của bạn</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {suggestedInsurance.map((suggestion, index) => {
              const Icon = suggestion.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className={`${suggestion.color} w-14 h-14 rounded-xl flex items-center justify-center mb-4`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{suggestion.name}</h3>
                  <p className="text-sm text-gray-600 mb-4">{suggestion.description}</p>
                  <div className="mb-4">
                    <p className="text-sm text-gray-600 mb-2">Quyền lợi:</p>
                    <div className="space-y-1">
                      {suggestion.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                          <Check className="w-4 h-4 text-green-600" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="font-semibold text-blue-600">{suggestion.premium}</span>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-semibold">
                      Tìm hiểu
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Claim History */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Lịch sử yêu cầu bồi thường</h2>
          <div className="space-y-4">
            {claimHistory.map((claim) => (
              <div key={claim.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-semibold text-gray-900">{claim.type}</h3>
                    <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-semibold">
                      Đã chấp nhận
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-1">{claim.description}</p>
                  <p className="text-xs text-gray-500">{claim.date}</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-green-600">+{new Intl.NumberFormat('vi-VN').format(claim.amount)} ₫</p>
                  <button className="text-blue-600 hover:text-blue-700 text-sm font-semibold mt-2">
                    Xem chi tiết
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </UserLayout>
  );
}
