"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MessageSquare, Zap, PiggyBank, HeartHandshake } from "lucide-react";

const reasons = [
  {
    icon: MessageSquare,
    title: "直接やりとり",
    description:
      "制作会社のように担当者を挟まず、エンジニアと直接コミュニケーション。要望がダイレクトに伝わり、認識のズレを防ぎます。",
    image: "/images/why-choose/direct.jpg",
  },
  {
    icon: Zap,
    title: "スピード対応",
    description:
      "フリーランスならではの機動力で、急なご依頼や修正にも柔軟に対応。ビジネスチャンスを逃しません。",
    image: "/images/why-choose/speed.jpg",
  },
  {
    icon: PiggyBank,
    title: "コストパフォーマンス",
    description:
      "中間マージンがないため、制作会社と同等のクオリティを、より低コストで実現できます。",
    image: "/images/why-choose/cost.jpg",
  },
  {
    icon: HeartHandshake,
    title: "長期的なパートナーシップ",
    description:
      "制作して終わりではなく、公開後の運用・改善まで一貫してサポート。ビジネスの成長に伴走します。",
    image: "/images/why-choose/partnership.jpg",
  },
];

export function WhyChooseSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/why-choose/background.jpg"
          alt="Office background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-secondary/30" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4"
          >
            Why Choose Me
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">選ばれる理由</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            フリーランスだからこそ提供できる価値があります
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative bg-card rounded-2xl border border-border overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={reason.image}
                    alt={reason.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                  {/* Icon overlay */}
                  <div className="absolute bottom-4 left-4">
                    <div className="p-3 bg-primary/90 backdrop-blur-sm rounded-xl shadow-lg">
                      <reason.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Visual Element */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-6 bg-card/80 backdrop-blur-sm rounded-2xl p-6 border border-border">
            <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-primary">
              <Image
                src="/images/common/profile.jpg"
                alt="Developer"
                fill
                className="object-cover"
              />
            </div>
            <div className="text-left">
              <p className="text-lg font-semibold">お客様の成功が、私の成功です。</p>
              <p className="text-sm text-muted-foreground">一緒にビジネスを成長させましょう</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
