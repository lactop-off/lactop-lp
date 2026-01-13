"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MessageCircle, FileText, Code, Rocket, Headphones } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    step: "01",
    title: "お問い合わせ・ヒアリング",
    description:
      "まずはお気軽にご相談ください。ご要望やお悩みをヒアリングし、最適なプランをご提案します。",
    duration: "1〜3日",
    image: "/images/flow/inquiry.jpg",
  },
  {
    icon: FileText,
    step: "02",
    title: "お見積もり・ご契約",
    description:
      "ヒアリング内容をもとに、詳細なお見積もりをお出しします。ご納得いただけましたらご契約となります。",
    duration: "2〜5日",
    image: "/images/flow/estimate.jpg",
  },
  {
    icon: Code,
    step: "03",
    title: "デザイン・開発",
    description:
      "デザインカンプの作成から開発まで進めます。進捗は随時共有し、フィードバックを反映します。",
    duration: "2〜8週間",
    image: "/images/flow/development.jpg",
  },
  {
    icon: Rocket,
    step: "04",
    title: "テスト・公開",
    description:
      "動作確認・修正を経て、本番環境へ公開します。公開前に最終確認をいただきます。",
    duration: "3〜5日",
    image: "/images/flow/launch.jpg",
  },
  {
    icon: Headphones,
    step: "05",
    title: "運用・サポート",
    description:
      "公開後も安心のサポート。更新作業や改善提案など、継続的にサポートいたします。",
    duration: "継続",
    image: "/images/flow/support.jpg",
  },
];

export function FlowSection() {
  return (
    <section id="flow" className="relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/flow/background.jpg"
          alt="Team collaboration"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-muted/95" />
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
            Flow
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">制作の流れ</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            お問い合わせから公開まで、丁寧にサポートいたします
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pb-12 last:pb-0"
            >
              {/* Timeline line */}
              {index !== steps.length - 1 && (
                <div className="absolute left-6 md:left-1/2 md:-translate-x-px top-24 bottom-0 w-0.5 bg-border" />
              )}

              <div className={`flex flex-col md:flex-row gap-6 items-start ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                {/* Image Card */}
                <div className="w-full md:w-1/2">
                  <div className="relative rounded-2xl overflow-hidden shadow-lg group">
                    <div className="relative h-48 md:h-56">
                      <Image
                        src={step.image}
                        alt={step.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>
                    {/* Step number overlay */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-primary text-primary-foreground text-sm font-bold rounded-full">
                        STEP {step.step}
                      </span>
                    </div>
                    {/* Duration badge */}
                    <div className="absolute bottom-4 right-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-foreground text-xs rounded-full">
                        {step.duration}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content Card */}
                <div className="w-full md:w-1/2">
                  <div className="bg-card border border-border rounded-2xl p-6 shadow-sm h-full">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                        <step.icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <h3 className="text-lg font-semibold">{step.title}</h3>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
