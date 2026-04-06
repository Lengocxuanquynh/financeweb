'use client';

import { 
  FileText, 
  Search, 
  Plus, 
  Edit2, 
  Trash2, 
  Eye, 
  ExternalLink,
  Loader2,
  Image as ImageIcon,
  CheckCircle,
  Clock,
  ArrowLeft
} from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import { toast } from 'sonner';

export function PostManagementClient() {
  const [isCreating, setIsCreating] = useState(false);
  const [loading, setLoading] = useState(false);

  const posts = [
    { 
      id: '1', 
      title: 'Cách tối ưu thuế thu nhập cá nhân 2026', 
      slug: 'cach-toi-uu-thue-2026', 
      status: 'Published', 
      date: '2026-04-01', 
      views: 1245 
    },
    { 
      id: '2', 
      title: 'Đầu tư vàng hay bất động sản hiện nay?', 
      slug: 'dau-tu-vang-hay-bat-dong-san', 
      status: 'Draft', 
      date: '2026-04-03', 
      views: 0 
    },
    { 
      id: '3', 
      title: 'Top 5 quỹ mở lợi nhuận cao nhất Việt Nam', 
      slug: 'top-quu-mo-viet-nam', 
      status: 'Published', 
      date: '2026-03-25', 
      views: 890 
    }
  ];

  const handleCreatePost = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call + Cloudinary upload
    setTimeout(() => {
      setLoading(false);
      setIsCreating(false);
      toast.success('Bài viết đã được tạo thành công!');
    }, 1500);
  };

  return (
    <div className="bg-white min-h-screen p-8 lg:p-12">
      <div className="max-w-7xl mx-auto">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 mb-8">
          <Link href="/admin" className="text-gray-400 hover:text-blue-600 transition-colors flex items-center gap-1 font-bold text-sm">
            <ArrowLeft className="w-4 h-4" />
            Admin Panel
          </Link>
          <span className="text-gray-300 font-black">/</span>
          <span className="text-gray-900 font-black text-sm uppercase">Quản lý Blog SEO</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
          <div>
            <h1 className="text-4xl font-black text-gray-900 mb-2 tracking-tight">Post Inventory</h1>
            <p className="text-gray-500 font-medium italic">Tối ưu hóa nội dung để tối đa hóa lưu lượng tìm kiếm hữu cơ.</p>
          </div>
          <button 
            onClick={() => setIsCreating(true)}
            className="bg-gray-950 text-white px-8 py-4 rounded-3xl hover:bg-black transition-all font-bold flex items-center gap-3 shadow-xl group"
          >
            <Plus className="w-6 h-6 group-hover:rotate-90 transition-transform" />
            Soạn thảo bài viết
          </button>
        </div>

        {/* CMS Table */}
        <div className="bg-gray-50 rounded-[3rem] border border-gray-100 p-10">
          <div className="flex items-center justify-between mb-8">
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-300 group-focus-within:text-blue-500 transition-colors" />
              <input
                type="text"
                placeholder="Tìm tiêu đề hoặc slug..."
                className="pl-12 pr-6 py-3 bg-white border-transparent rounded-2xl w-[350px] text-sm font-medium outline-none ring-1 ring-gray-100 focus:ring-blue-500 transition-all shadow-sm"
              />
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs font-black text-gray-400 uppercase">Lọc theo:</span>
              <select className="bg-white border-none rounded-xl px-4 py-2 text-xs font-bold text-gray-600 outline-none ring-1 ring-gray-100 shadow-sm cursor-pointer">
                <option>Tất cả trạng thái</option>
                <option>Đã xuất bản</option>
                <option>Bản nháp</option>
              </select>
            </div>
          </div>

          <div className="grid gap-6">
            {posts.map((post) => (
              <div key={post.id} className="bg-white rounded-3xl p-6 border border-gray-100 hover:shadow-xl hover:translate-y-[-4px] transition-all group">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  <div className="flex items-start gap-6">
                    <div className="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 shrink-0 group-hover:scale-105 transition-transform">
                      <ImageIcon className="w-8 h-8 opacity-40" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                         <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full ${
                           post.status === 'Published' ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'
                         }`}>
                           {post.status}
                         </span>
                         <span className="text-gray-300 font-bold text-xs">•</span>
                         <span className="text-gray-400 font-bold text-xs flex items-center gap-1">
                           <Clock className="w-3 h-3" />
                           {post.date}
                         </span>
                      </div>
                      <h3 className="text-xl font-black text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">{post.title}</h3>
                      <p className="text-sm font-medium text-gray-400 tracking-tight">Slug: <span className="text-blue-500/70 italic underline">/{post.slug}</span></p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 pt-4 lg:pt-0 border-t lg:border-t-0 border-gray-50 lg:pl-8">
                    <div className="text-center px-6">
                       <p className="text-2xl font-black text-gray-900 tracking-tighter">{post.views}</p>
                       <p className="text-[10px] text-gray-400 font-black uppercase">Lượt xem</p>
                    </div>
                    <div className="flex items-center gap-2">
                       <button className="p-3 bg-gray-50 rounded-2xl hover:bg-blue-50 hover:text-blue-600 transition-all text-gray-400 shadow-sm border border-transparent">
                          <Edit2 className="w-5 h-5" />
                       </button>
                       <button className="p-3 bg-gray-50 rounded-2xl hover:bg-rose-50 hover:text-rose-600 transition-all text-gray-400 shadow-sm border border-transparent">
                          <Trash2 className="w-5 h-5" />
                       </button>
                       <Link href={`/blog/${post.slug}`} className="p-3 bg-gray-900 rounded-2xl hover:bg-black text-white transition-all shadow-lg">
                          <Eye className="w-5 h-5" />
                       </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Create Post Modal Overlay */}
        {isCreating && (
          <div className="fixed inset-0 bg-gray-950/40 backdrop-blur-md flex items-center justify-center p-4 z-50 animate-in fade-in duration-300">
            <div className="bg-white rounded-[3rem] w-full max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl flex flex-col scale-95 animate-in zoom-in-95 duration-500 slide-in-from-bottom-10">
              <div className="p-10 border-b border-gray-100 flex items-center justify-between">
                <div>
                  <h2 className="text-3xl font-black text-gray-900 tracking-tighter">Drafting New SEO Post</h2>
                  <p className="text-gray-400 font-medium italic">Sử dụng slug thân thiện để tối ưu hóa Google indexing.</p>
                </div>
                <button 
                  onClick={() => setIsCreating(false)}
                  className="bg-gray-100 p-4 rounded-3xl hover:bg-gray-200 transition-all text-gray-500 font-black text-xl"
                >
                  &times;
                </button>
              </div>

              <form onSubmit={handleCreatePost} className="p-10 overflow-y-auto space-y-8 flex-1">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-xs font-black text-gray-400 uppercase tracking-widest pl-1">Tiêu đề bài viết</label>
                    <input 
                      required
                      placeholder="VD: Cẩm nang đầu tư chứng khoán cho người mới..."
                      className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 text-sm font-bold outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black text-gray-400 uppercase tracking-widest pl-1">SEO Slug (Auto-generated)</label>
                    <div className="relative">
                      <span className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-300 font-bold text-sm">/blog/</span>
                      <input 
                        required
                        placeholder="cam-nang-dau-tu-2026"
                        className="w-full bg-blue-50/50 border-none rounded-2xl pl-20 pr-6 py-4 text-sm font-black text-blue-600 outline-none focus:ring-2 focus:ring-blue-500 transition-all placeholder:text-blue-200"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black text-gray-400 uppercase tracking-widest pl-1">Thumbnail Cover (Cloudinary Upload)</label>
                  <div className="border-4 border-dashed border-gray-100 rounded-[2.5rem] p-12 text-center hover:border-blue-200 hover:bg-blue-50/30 transition-all cursor-pointer group relative overflow-hidden">
                    <div className="relative z-10 flex flex-col items-center gap-4">
                      <div className="bg-white p-6 rounded-3xl shadow-sm text-blue-600 group-hover:scale-110 transition-transform">
                        <ImageIcon className="w-10 h-10" />
                      </div>
                      <div>
                        <p className="font-black text-gray-900 group-hover:text-blue-600 transition-colors">Tải lên hình ảnh từ máy tính</p>
                        <p className="text-xs text-gray-400 font-medium italic">Format đề nghị: WEBP, PNG - Max size 2MB</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black text-gray-400 uppercase tracking-widest pl-1">Nội dung SEO (Markdown Editor)</label>
                  <textarea 
                    rows={10}
                    placeholder="Viết nội dung bài viết tại đây... # H1 ## H2"
                    className="w-full bg-gray-50 border-none rounded-[2rem] px-8 py-6 text-sm font-medium outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  />
                </div>

                <div className="flex items-center gap-6 pt-6 sticky bottom-0 bg-white pb-2 mt-4 border-t border-gray-50 pt-8">
                  <button 
                    disabled={loading}
                    type="submit"
                    className="flex-1 bg-blue-600 text-white py-5 rounded-[2rem] font-black text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-100 disabled:opacity-70 flex items-center justify-center gap-3"
                  >
                    {loading ? <Loader2 className="w-6 h-6 animate-spin" /> : <CheckCircle className="w-6 h-6" />}
                    {loading ? 'Đang triển khai...' : 'Lưu & Đăng tải bài viết'}
                  </button>
                  <button 
                    type="button"
                    onClick={() => setIsCreating(false)}
                    className="bg-gray-100 text-gray-500 py-5 px-10 rounded-[2rem] font-black hover:bg-gray-200 transition-all shadow-md"
                  >
                    Hủy bỏ
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
