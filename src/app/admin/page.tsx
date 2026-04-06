import { AdminClient } from './AdminClient';
import { constructMetadata } from '@/lib/metadata';
import { Metadata } from 'next';
import prisma from '@/lib/prisma';

export const metadata: Metadata = constructMetadata({
  title: "Bảng điều khiển Quản trị | FinanceHub System",
  description: "Trang quản trị tập trung cho việc giám sát hoạt động người dùng, giao dịch và quản lý nội dung SEO cho FinanceHub.",
});

export default async function AdminPage() {
  const userCount = await prisma.user.count();
  const postCount = await prisma.post.count();

  const totalBalanceAggregate = await prisma.user.aggregate({
    _sum: { balance: true }
  });
  const totalBalance = totalBalanceAggregate._sum.balance ?? 0;

  const totalTransactionsCount = await prisma.transaction.count();

  const users = await prisma.user.findMany({
    orderBy: { createdAt: 'desc' },
    take: 10,
  });

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <main className="flex-1">
        <AdminClient 
          stats={{ userCount, postCount, totalBalance, totalTransactionsCount }} 
          users={users} 
        />
      </main>
    </div>
  );
}
