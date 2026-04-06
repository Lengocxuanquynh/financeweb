import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { constructMetadata } from "@/lib/metadata";
import { Shield, Heart, Car, Home, Plane, Briefcase, Check, AlertCircle, ChevronRight, Plus } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = constructMetadata({
  title: "Bảo hiểm thông minh | Bảo vệ tài chính toàn diện",
  description: "Giải pháp bảo hiểm nhân thọ, sức khỏe, và tài sản được cá nhân hóa cho nhu cầu của bạn. Quản lý dễ dàng, bồi thường nhanh chóng.",
});

export default function InsurancePage() {
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

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">Giải pháp Bảo hiểm Thông minh</h1>
            <p className="text-xl text-gray-600 max-w-2xl">
              Bảo vệ những điều quý giá nhất của bạn với các gói bảo hiểm linh hoạt, minh bạch và quản lý dễ dàng ngay trên ứng dụng.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-6 group hover:translate-y-[-4px] transition-all duration-300">
              <div className="bg-blue-100 p-4 rounded-xl text-blue-600">
                <Shield className="w-8 h-8" />
              </div>
              <div>
                <p className="text-gray-500 font-medium mb-1">Mức độ bảo vệ</p>
                <p className="text-3xl font-bold text-gray-900">3.3 tỷ ₫</p>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-6 group hover:translate-y-[-4px] transition-all duration-300">
              <div className="bg-emerald-100 p-4 rounded-xl text-emerald-600">
                <Heart className="w-8 h-8" />
              </div>
              <div>
                <p className="text-gray-500 font-medium mb-1">Hợp đồng hoạt động</p>
                <p className="text-3xl font-bold text-gray-900">3</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-6 group hover:translate-y-[-4px] transition-all duration-300">
              <div className="bg-amber-100 p-4 rounded-xl text-amber-600">
                <AlertCircle className="w-8 h-8" />
              </div>
              <div>
                <p className="text-gray-500 font-medium mb-1">Phí bảo hiểm/tháng</p>
                <p className="text-3xl font-bold text-gray-900">2.2 triệu ₫</p>
              </div>
            </div>
          </div>

          {/* Active Policies */}
          <div className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-gray-900">Sản phẩm đang bảo vệ bạn</h2>
              <Link href="/register" className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2.5 rounded-xl hover:bg-blue-700 transition-all font-semibold shadow-lg shadow-blue-200">
                <Plus className="w-5 h-5" />
                Thêm bảo hiểm
              </Link>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              {activeInsurance.map((insurance) => {
                const Icon = insurance.icon;
                return (
                  <div key={insurance.id} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:border-blue-200 transition-colors">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <div className={`${insurance.color} p-4 rounded-xl shadow-lg ring-4 ring-opacity-10 ring-white`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">{insurance.type}</h3>
                          <p className="text-gray-600 font-medium">{insurance.provider}</p>
                        </div>
                      </div>
                      <span className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider ${
                        insurance.status === 'active' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
                      }`}>
                        {insurance.status === 'active' ? 'Đang hoạt động' : 'Chờ xác nhận'}
                      </span>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6 mb-6 py-4 border-y border-gray-50">
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Số tiền bảo lãnh</p>
                        <p className="text-lg font-bold text-gray-900">{new Intl.NumberFormat('vi-VN').format(insurance.coverage)} ₫</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Gia hạn tiếp theo</p>
                        <p className="text-lg font-bold text-gray-900">{insurance.expiryDate}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {insurance.benefits.map((benefit, index) => (
                        <span key={index} className="flex items-center gap-1.5 bg-gray-50 text-gray-700 px-4 py-1.5 rounded-full text-sm font-medium border border-gray-100">
                          <Check className="w-4 h-4 text-emerald-600" />
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Suggested Section */}
          <div className="bg-gray-100 rounded-[2.5rem] p-12 border border-gray-200">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Gợi ý dành riêng cho bạn</h2>
              <p className="text-gray-600 max-w-xl mx-auto">
                Dựa trên phân tích nhu cầu, đây là các gói bảo hiểm giúp gia tăng sự an tâm cho tương lai.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {suggestedInsurance.map((suggestion, index) => {
                const Icon = suggestion.icon;
                return (
                  <div key={index} className="bg-white rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 group border border-transparent hover:border-blue-100">
                    <div className={`${suggestion.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{suggestion.name}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{suggestion.description}</p>
                    
                    <ul className="space-y-3 mb-8">
                      {suggestion.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-gray-700 font-medium">
                          <div className="bg-emerald-100 p-1 rounded-full">
                            <Check className="w-4 h-4 text-emerald-600" />
                          </div>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="pt-6 border-t border-gray-50 flex items-center justify-between">
                      <span className="text-lg font-bold text-blue-600">{suggestion.premium}</span>
                      <Link href="/register" className="text-gray-900 font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                        Khám phá
                        <ChevronRight className="w-5 h-5" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
