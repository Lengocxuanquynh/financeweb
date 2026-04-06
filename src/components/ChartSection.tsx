'use client';

import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export function ChartSection() {
  const data = [
    { month: 'T1', value: 45000000, income: 65000000, expense: 20000000 },
    { month: 'T2', value: 52000000, income: 70000000, expense: 18000000 },
    { month: 'T3', value: 48000000, income: 68000000, expense: 20000000 },
    { month: 'T4', value: 61000000, income: 82000000, expense: 21000000 },
    { month: 'T5', value: 55000000, income: 75000000, expense: 20000000 },
    { month: 'T6', value: 67000000, income: 89000000, expense: 22000000 },
    { month: 'T7', value: 73000000, income: 95000000, expense: 22000000 },
    { month: 'T8', value: 69000000, income: 92000000, expense: 23000000 },
    { month: 'T9', value: 78000000, income: 102000000, expense: 24000000 },
    { month: 'T10', value: 85000000, income: 110000000, expense: 25000000 },
    { month: 'T11', value: 82000000, income: 108000000, expense: 26000000 },
    { month: 'T12', value: 91000000, income: 120000000, expense: 29000000 }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Theo dõi tài chính của bạn
          </h2>
          <p className="text-xl text-gray-600">
            Biểu đồ trực quan giúp bạn nắm bắt xu hướng tài chính
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Tăng trưởng tài sản
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="chartSectionGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="month" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip
                  formatter={(value: number) => new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value)}
                  contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }}
                />
                <Area type="monotone" dataKey="value" stroke="#3b82f6" fillOpacity={1} fill="url(#chartSectionGradient)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Thu nhập & Chi tiêu
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="month" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip
                  formatter={(value: number) => new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value)}
                  contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }}
                />
                <Line type="monotone" dataKey="income" stroke="#10b981" strokeWidth={3} dot={{ fill: '#10b981', r: 4 }} />
                <Line type="monotone" dataKey="expense" stroke="#ef4444" strokeWidth={3} dot={{ fill: '#ef4444', r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
}