import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { constructMetadata } from '@/lib/metadata';
import { Calendar, User, Clock, ChevronLeft, Share2, Facebook, Twitter, Linkedin, Copy } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import prisma from '@/lib/prisma';

// Fetch post from Prisma based on slug
async function getPost(slug: string) {
  const post = await prisma.post.findUnique({
    where: { slug }
  });
  
  if (!post) return null;

  return {
    ...post,
    author: 'FinanceHub',
    date: post.createdAt.toLocaleDateString('vi-VN'),
    category: 'Tài chính',
    readingTime: '5 phút'
  };
}

export async function generateStaticParams() {
  const posts = await prisma.post.findMany({
    where: { published: true },
    select: { slug: true }
  });
  
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);
  if (!post) return {};

  return constructMetadata({
    title: `${post.title} | FinanceHub Blog`,
    description: `Đọc ngay bài chia sẻ về ${post.title} để nắm bắt chiến lược tài chính thông minh nhất trong năm 2026.`,
  });
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-24 pb-20">
        {/* Article Breadcrumb & Back */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
           <Link href="/blog" className="inline-flex items-center gap-2 font-bold text-sm text-gray-400 hover:text-blue-600 transition-colors uppercase tracking-widest group">
              <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              Tất cả bài viết
           </Link>
        </div>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-6">
               <span className="bg-blue-600/10 text-blue-600 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border border-blue-600/20">
                  {post.category}
               </span>
               <span className="text-gray-300 font-bold text-xs">•</span>
               <span className="text-gray-400 font-bold text-xs flex items-center gap-1.5 uppercase tracking-wide">
                  <Clock className="w-3.5 h-3.5" />
                  {post.readingTime} Đọc
               </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.1] mb-8 tracking-tight italic">
              {post.title}
            </h1>

            <div className="flex items-center justify-between border-y border-gray-50 py-6">
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-950 rounded-2xl flex items-center justify-center text-white font-black">
                     {post.author.charAt(0)}
                  </div>
                  <div>
                     <p className="font-bold text-gray-900 leading-none mb-1">{post.author}</p>
                     <p className="text-xs text-gray-400 font-medium italic">Ngày {post.date}</p>
                  </div>
               </div>
               <div className="flex items-center gap-3">
                  <button className="p-3 bg-gray-50 rounded-2xl text-gray-400 hover:bg-gray-100 transition-all hover:text-gray-900 shadow-sm border border-transparent">
                     <Share2 className="w-5 h-5" />
                  </button>
               </div>
            </div>
          </header>

          {/* Social Floating Bar - Optional, but keeping it simple for now */}

          {/* Feature Image Placeholder */}
          <div className="aspect-[21/9] bg-gray-50 rounded-[3rem] mb-16 border border-gray-100 flex items-center justify-center overflow-hidden isolate relative group">
             <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 group-hover:scale-105 transition-transform duration-700"></div>
             <p className="relative z-10 text-gray-300 font-black text-2xl uppercase italic opacity-30">Featured Post Asset</p>
          </div>

          {/* Content Body */}
          <div className="prose prose-lg prose-blue max-w-none prose-headings:font-black prose-headings:tracking-tighter prose-p:font-medium prose-p:text-gray-600 prose-p:leading-relaxed prose-strong:font-black prose-strong:text-gray-900 mb-20 whitespace-pre-wrap">
             {post.content}
          </div>

          {/* Post Footer / Share */}
          <footer className="border-t border-gray-100 pt-12 pb-20">
             <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div>
                  <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-4">Chia sẻ kiến thức này</p>
                  <div className="flex items-center gap-3">
                     <button className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-100">
                        <Facebook className="w-5 h-5" />
                        Facebook
                     </button>
                     <button className="flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-2xl font-bold hover:bg-black transition-all shadow-lg">
                        <Twitter className="w-5 h-5" />
                        Twitter
                     </button>
                     <button className="p-4 bg-gray-50 rounded-2xl text-gray-400 hover:bg-gray-100 transition-all shadow-sm">
                        <Copy className="w-5 h-5" />
                     </button>
                  </div>
                </div>
                
                <div className="text-center md:text-right">
                   <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-4">Có thắc mắc?</p>
                   <Link href="/register" className="bg-blue-50 text-blue-600 px-8 py-3.5 rounded-2xl font-black hover:bg-blue-100 transition-all">
                      Tư vấn chuyên gia ngay
                   </Link>
                </div>
             </div>
          </footer>
        </article>
      </main>

      <Footer />
    </div>
  );
}
