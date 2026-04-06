import { Metadata } from 'next';

export const siteConfig = {
  name: "FinanceHub",
  description: "Nền tảng quản lý tài chính thông minh cho đầu tư, bảo hiểm và chi tiêu.",
  url: "https://finance-web-interface.vercel.app", // Change to production URL
  ogImage: "https://finance-web-interface.vercel.app/og.jpg",
  links: {
    twitter: "https://twitter.com/financehub",
  },
};

export function constructMetadata({
  title = siteConfig.name,
  description = siteConfig.description,
  image = siteConfig.ogImage,
  icons = "/favicon.ico",
  noIndex = false,
  canonical = siteConfig.url,
}: {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
  noIndex?: boolean;
  canonical?: string;
} = {}): Metadata {
  return {
    title: {
      default: title,
      template: `%s | ${siteConfig.name}`,
    },
    description,
    keywords: [
      "tài chính cá nhân",
      "đầu tư thông minh",
      "bảo hiểm tài chính",
      "quản lý ví",
      "phân tích tài sản",
      "finance app",
      "fintech Việt Nam"
    ],
    authors: [
      {
        name: "FinanceHub Team",
        url: siteConfig.url,
      },
    ],
    creator: "FinanceHub",
    openGraph: {
      type: "website",
      locale: "vi_VN",
      url: siteConfig.url,
      title,
      description,
      siteName: title,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@financehub",
    },
    icons,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: canonical,
    },
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
