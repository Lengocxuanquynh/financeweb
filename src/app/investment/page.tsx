import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { InvestmentClient } from "./InvestmentClient";
import { constructMetadata } from "@/lib/metadata";
import { Metadata } from "next";

export const metadata: Metadata = constructMetadata({
  title: "Cá nhân hóa Danh mục Đầu tư | FinanceHub AI",
  description: "Trải nghiệm nền tảng quản lý danh mục đầu tư thông minh. Theo dõi tăng trưởng, phân bổ tài sản và nhận đề xuất đầu tư từ AI giúp tối ưu hóa lợi nhuận.",
});

export default function InvestmentPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-1 pt-16">
        <InvestmentClient />
      </main>
      <Footer />
    </div>
  );
}
