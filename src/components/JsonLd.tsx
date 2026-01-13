export function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://lactop.dev/#organization",
        name: "Lactop",
        url: "https://lactop.dev",
        logo: {
          "@type": "ImageObject",
          url: "https://lactop.dev/logo.png",
        },
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer service",
          availableLanguage: "Japanese",
        },
        sameAs: [],
      },
      {
        "@type": "WebSite",
        "@id": "https://lactop.dev/#website",
        url: "https://lactop.dev",
        name: "Lactop",
        publisher: {
          "@id": "https://lactop.dev/#organization",
        },
        inLanguage: "ja",
      },
      {
        "@type": "WebPage",
        "@id": "https://lactop.dev/#webpage",
        url: "https://lactop.dev",
        name: "Lactop | LP制作・Webアプリ開発",
        isPartOf: {
          "@id": "https://lactop.dev/#website",
        },
        about: {
          "@id": "https://lactop.dev/#organization",
        },
        description:
          "スタートアップ・中小企業向けのLP制作、Webアプリ開発、運用保守を提供するフリーランスエンジニア。",
        inLanguage: "ja",
      },
      {
        "@type": "Service",
        "@id": "https://lactop.dev/#lp-service",
        name: "LP制作",
        provider: {
          "@id": "https://lactop.dev/#organization",
        },
        description:
          "コンバージョンを意識した、成果の出るランディングページを制作します。",
        areaServed: {
          "@type": "Country",
          name: "Japan",
        },
        offers: {
          "@type": "Offer",
          priceSpecification: {
            "@type": "PriceSpecification",
            price: "150000",
            priceCurrency: "JPY",
            minPrice: "150000",
          },
        },
      },
      {
        "@type": "Service",
        "@id": "https://lactop.dev/#webapp-service",
        name: "Webアプリ開発",
        provider: {
          "@id": "https://lactop.dev/#organization",
        },
        description:
          "業務効率化ツールからWebサービスまで、オーダーメイドで開発します。",
        areaServed: {
          "@type": "Country",
          name: "Japan",
        },
        offers: {
          "@type": "Offer",
          priceSpecification: {
            "@type": "PriceSpecification",
            price: "700000",
            priceCurrency: "JPY",
            minPrice: "700000",
          },
        },
      },
      {
        "@type": "Service",
        "@id": "https://lactop.dev/#maintenance-service",
        name: "運用保守",
        provider: {
          "@id": "https://lactop.dev/#organization",
        },
        description: "公開後も安心。サイトの更新やトラブル対応をサポートします。",
        areaServed: {
          "@type": "Country",
          name: "Japan",
        },
        offers: {
          "@type": "Offer",
          priceSpecification: {
            "@type": "PriceSpecification",
            price: "15000",
            priceCurrency: "JPY",
            minPrice: "15000",
            billingDuration: "P1M",
          },
        },
      },
      {
        "@type": "FAQPage",
        "@id": "https://lactop.dev/#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "対応可能なエリアはどこですか？",
            acceptedAnswer: {
              "@type": "Answer",
              text: "オンラインでの対応を基本としているため、全国どこからでもご依頼いただけます。",
            },
          },
          {
            "@type": "Question",
            name: "納期はどのくらいですか？",
            acceptedAnswer: {
              "@type": "Answer",
              text: "LP制作の場合は2〜5週間、Webアプリ開発の場合は1〜3ヶ月が目安です。",
            },
          },
          {
            "@type": "Question",
            name: "料金の支払い方法・タイミングは？",
            acceptedAnswer: {
              "@type": "Answer",
              text: "銀行振込でのお支払いとなります。着手金として50%、納品完了後に残り50%をお支払いいただく形が基本です。",
            },
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
