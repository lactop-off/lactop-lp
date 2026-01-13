"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Code2, Laptop, Settings, ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Laptop,
    title: "LP制作",
    description: "コンバージョンを意識した、成果の出るランディングページを制作します。",
    features: [
      "レスポンシブデザイン",
      "SEO対策込み",
      "お問い合わせフォーム設置",
      "アニメーション演出",
    ],
    price: "15万円〜",
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-500/10",
    image: "/images/services/lp.jpg",
  },
  {
    icon: Code2,
    title: "Webアプリ開発",
    description: "業務効率化ツールからWebサービスまで、オーダーメイドで開発します。",
    features: [
      "要件定義からサポート",
      "モダンな技術スタック",
      "管理画面付き",
      "API連携対応",
    ],
    price: "70万円〜",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
    image: "/images/services/webapp.jpg",
  },
  {
    icon: Settings,
    title: "運用保守",
    description: "公開後も安心。サイトの更新やトラブル対応をサポートします。",
    features: [
      "定期的なバックアップ",
      "セキュリティ対策",
      "コンテンツ更新代行",
      "改善提案",
    ],
    price: "1.5万円/月〜",
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-500/10",
    image: "/images/services/maintenance.jpg",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

export function ServicesSection() {
  return (
    <section id="services" className="relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4"
          >
            Services
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            サービス
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            お客様のニーズに合わせた3つのサービスを提供しています
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group relative"
            >
              {/* Glow effect on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${service.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
              />

              {/* Card */}
              <div className="relative h-full bg-card border border-border rounded-3xl overflow-hidden transition-all duration-500 group-hover:border-primary/30 group-hover:-translate-y-2 group-hover:shadow-2xl">
                {/* Service Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent`} />
                  {/* Icon overlay */}
                  <div className="absolute bottom-4 left-6">
                    <div
                      className={`w-14 h-14 ${service.bgColor} backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg`}
                    >
                      <service.icon
                        className={`h-7 w-7 bg-gradient-to-r ${service.color} bg-clip-text`}
                        style={{
                          stroke: `url(#gradient-${service.title})`,
                        }}
                      />
                      <svg width="0" height="0">
                        <defs>
                          <linearGradient
                            id={`gradient-${service.title}`}
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="0%"
                          >
                            <stop offset="0%" stopColor={service.color.includes("orange") ? "#f97316" : service.color.includes("blue") ? "#3b82f6" : "#22c55e"} />
                            <stop offset="100%" stopColor={service.color.includes("orange") ? "#ef4444" : service.color.includes("blue") ? "#06b6d4" : "#10b981"} />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="p-8 pt-4">
                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6">{service.description}</p>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-center gap-3 text-sm text-muted-foreground"
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color}`}
                        />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>

                  {/* Price & CTA */}
                  <div className="pt-6 border-t border-border flex items-center justify-between">
                    <div>
                      <span className="text-sm text-muted-foreground">料金</span>
                      <p
                        className={`text-2xl font-bold bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}
                      >
                        {service.price}
                      </p>
                    </div>
                    <Link
                      href="#contact"
                      className="flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
                    >
                      相談する
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
