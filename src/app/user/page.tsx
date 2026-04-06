import { UserClient } from './UserClient';
import { constructMetadata } from '@/lib/metadata';
import { Metadata } from 'next';
import prisma from '@/lib/prisma';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export const metadata: Metadata = constructMetadata({
  title: "Bảng điều khiển Cá nhân | FinanceHub",
  description: "Quản lý tài sản, theo dõi giao dịch và tối ưu hóa danh mục đầu tư chuyên nghiệp.",
});

export default async function UserPage() {
  const cookieStore = await cookies();
  const authUserCookie = cookieStore.get('auth-user')?.value;
  
  if (!authUserCookie) {
    redirect('/login');
  }
  
  const sessionUser = JSON.parse(authUserCookie);
  
  const dbUser = await prisma.user.findUnique({
    where: { email: sessionUser.email }
  });
  
  if (!dbUser) {
    redirect('/login');
  }

  const transactions = await prisma.transaction.findMany({
    where: { userId: dbUser.id },
    orderBy: { createdAt: 'desc' },
    take: 10
  });

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <main className="flex-1">
        <UserClient user={dbUser} transactions={transactions} />
      </main>
    </div>
  );
}
