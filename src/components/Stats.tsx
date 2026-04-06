import { Users, DollarSign, TrendingUp, Award } from 'lucide-react';

export function Stats() {
  const stats = [
    {
      icon: Users,
      value: '500K+',
      label: 'Người dùng',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: DollarSign,
      value: '15T+',
      label: 'Giao dịch',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: TrendingUp,
      value: '99.9%',
      label: 'Uptime',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: Award,
      value: '4.9/5',
      label: 'Đánh giá',
      color: 'bg-orange-100 text-orange-600'
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center space-y-3">
              <div className={`${stat.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto`}>
                <stat.icon className="w-8 h-8" />
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
