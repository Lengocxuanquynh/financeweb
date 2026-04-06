import { Wallet, PieChart, CreditCard, LineChart, Shield, Smartphone } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: Wallet,
      title: 'Ví điện tử',
      description: 'Quản lý tiền bạc thông minh với ví điện tử an toàn và tiện lợi',
      color: 'bg-blue-500'
    },
    {
      icon: PieChart,
      title: 'Đầu tư thông minh',
      description: 'Đa dạng hóa danh mục đầu tư với AI và công nghệ tiên tiến',
      color: 'bg-purple-500'
    },
    {
      icon: CreditCard,
      title: 'Thẻ tín dụng',
      description: 'Thẻ tín dụng với ưu đãi hấp dẫn và hoàn tiền cao',
      color: 'bg-green-500'
    },
    {
      icon: LineChart,
      title: 'Phân tích tài chính',
      description: 'Báo cáo chi tiết giúp bạn hiểu rõ tình hình tài chính',
      color: 'bg-orange-500'
    },
    {
      icon: Shield,
      title: 'Bảo hiểm',
      description: 'Bảo vệ toàn diện cho bạn và gia đình với các gói bảo hiểm linh hoạt',
      color: 'bg-red-500'
    },
    {
      icon: Smartphone,
      title: 'Thanh toán di động',
      description: 'Thanh toán nhanh chóng, an toàn mọi lúc mọi nơi',
      color: 'bg-indigo-500'
    }
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Dịch vụ của chúng tôi
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Giải pháp tài chính toàn diện cho mọi nhu cầu của bạn
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all cursor-pointer group"
            >
              <div className={`${service.color} w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <service.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
