import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { constructMetadata } from '@/lib/metadata';
import Link from 'next/link';
import { Calendar, User, ArrowRight, Search, Clock } from 'lucide-react';
import prisma from '@/lib/prisma';

export const metadata = constructMetadata({
  title: "Tổ ấm Tài chính | Blog Kiến thức & Chiến lược",
  description: "Khám phá các bài viết chuyên sâu về quản lý tài chính cá nhân, chiến lược đầu tư thông minh và xu hướng bảo hiểm năm 2026.",
});

export default async function BlogPage() {
  const dbPosts = await prisma.post.findMany({
    where: { published: true },
    orderBy: { createdAt: 'desc' },
  });

  // Fallback to mock if DB empty (for better UX initially)
  const posts = dbPosts.length > 0 ? dbPosts.map(p => ({
    id: p.id,
    title: p.title,
    slug: p.slug,
    excerpt: p.content.substring(0, 160) + '...',
    author: 'FinanceHub',
    date: p.createdAt.toLocaleDateString('vi-VN'),
    category: 'Tài chính',
    readingTime: '5 phút'
  })) : [
    { 
      id: '1', 
      title: 'Cách tối ưu thuế thu nhập cá nhân 2026', 
      slug: 'cach-toi-uu-thue-2026', 
      excerpt: 'Tìm hiểu các quy định mới nhất và cách tận dụng các khoản giảm trừ gia cảnh để tối ưu hóa nghĩa vụ thuế của bạn trong năm nay...',
      author: 'Admin',
      date: '01/04/2026',
      category: 'Thuế',
      readingTime: '5 phút'
    }
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-black text-gray-900 mb-6 tracking-tight">Tổ ấm Tài chính</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Nơi chia sẻ kiến thức, kinh nghiệm và các công cụ giúp bạn làm chủ tài chính cá nhân một cách chuyên nghiệp.
            </p>
          </div>

          {/* Search/Filter Bar */}
          <div className="bg-gray-50 rounded-3xl p-8 mb-16 border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6">
             <div className="relative w-full md:w-1/2">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input 
                  type="text" 
                  placeholder="Tìm kiếm bài viết..."
                  className="w-full bg-white border-transparent rounded-2xl pl-12 pr-6 py-4 outline-none ring-1 ring-gray-100 focus:ring-blue-500 transition-all font-medium shadow-sm"
                />
             </div>
             <div className="flex items-center gap-4 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
                {['Tất cả', 'Đầu tư', 'Bảo hiểm', 'Thuế', 'Tiết kiệm'].map((cat) => (
                   <button key={cat} className="whitespace-nowrap px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest bg-white border border-gray-100 text-gray-500 hover:text-blue-600 hover:border-blue-200 transition-all shadow-sm">
                      {cat}
                   </button>
                ))}
             </div>
          </div>

          {/* Post Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {posts.map((post) => (
              <article key={post.id} className="group bg-white flex flex-col">
                <Link href={`/blog/${post.slug}`} className="block relative aspect-[16/10] overflow-hidden rounded-[2rem] bg-gray-100 mb-6">
                   <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:scale-110 transition-transform duration-700"></div>
                   <div className="absolute top-6 left-6 bg-blue-600 text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">
                      {post.category}
                   </div>
                </Link>
                
                <div className="flex items-center gap-4 text-xs font-bold text-gray-400 mb-4 px-2 uppercase tracking-wide">
                   <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.date}
                   </span>
                   <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readingTime}
                   </span>
                </div>

                <Link href={`/blog/${post.slug}`} className="hover:text-blue-600 transition-colors">
                  <h2 className="text-2xl font-black text-gray-900 mb-4 leading-tight">
                    {post.title}
                  </h2>
                </Link>

                <p className="text-gray-500 font-medium mb-6 leading-relaxed line-clamp-3 px-2">
                  {post.excerpt}
                </p>

                <Link href={`/blog/${post.slug}`} className="mt-auto inline-flex items-center gap-2 font-black text-sm text-gray-900 group/link px-2">
                   Đọc thêm bài viết
                   <ArrowRight className="w-5 h-5 text-blue-500 group-hover/link:translate-x-2 transition-transform" />
                </Link>
              </article>
            ))}
          </div>

          {/* Newsletter / CTA */}
          <div className="mt-24 p-12 bg-gray-900 rounded-[3rem] text-center text-white relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 -mr-32 -mt-32 rounded-full blur-3xl"></div>
             <div className="relative z-10">
                <h3 className="text-3xl font-black mb-4">Đăng ký nhận tin tài chính</h3>
                <p className="text-gray-400 max-w-xl mx-auto mb-8 font-medium">Nhận các chiến lược đầu tư và cập nhật thị trường mới nhất qua email hàng tuần.</p>
                <div className="max-w-md mx-auto flex gap-3">
                   <input 
                     type="email" 
                     placeholder="Email của bạn..."
                     className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-blue-500 transition-all font-medium"
                   />
                   <button className="bg-blue-600 px-8 py-4 rounded-2xl font-black hover:bg-blue-700 transition-all shadow-lg shadow-blue-900">
                      Tham gia
                   </button>
                </div>
             </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
