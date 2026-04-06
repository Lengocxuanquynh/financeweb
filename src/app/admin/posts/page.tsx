import { PostManagementClient } from './PostManagementClient';
import { constructMetadata } from '@/lib/metadata';
import { Metadata } from 'next';

export const metadata: Metadata = constructMetadata({
  title: "Quản lý Bài viết SEO | FinanceHub CMS",
  description: "Hệ thống quản lý nội dung (CMS) cho phép tạo, chỉnh sửa và tối ưu hóa các bài viết tài chính cho Google Search.",
});

export default function PostsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <PostManagementClient />
    </div>
  );
}
