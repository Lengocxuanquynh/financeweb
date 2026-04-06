import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CreditCardClient } from "./CreditCardClient";
import { constructMetadata } from "@/lib/metadata";
import { Metadata } from "next";

export const metadata: Metadata = constructMetadata({
  title: "Thẻ Tín Dụng Cao Cấp | FinanceHub Black Card",
  description: "Khám phá dòng thẻ tín dụng cao cấp FinanceHub. Hoàn tiền 5% mọi chi tiêu, bảo hiểm du lịch 500 triệu và quản lý hạn mức thông minh qua ứng dụng.",
});

export default function CreditCardPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-1 pt-16">
        <CreditCardClient />
      </main>
      <Footer />
    </div>
  );
}
