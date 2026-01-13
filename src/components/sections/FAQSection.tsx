"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "対応可能なエリアはどこですか？",
    answer:
      "オンラインでの対応を基本としているため、全国どこからでもご依頼いただけます。Zoom、Google Meet、Slackなどでコミュニケーションを取りながら進めていきます。",
  },
  {
    question: "納期はどのくらいですか？",
    answer:
      "LP制作の場合は2〜5週間、Webアプリ開発の場合は1〜3ヶ月が目安です。ただし、プロジェクトの規模や要件によって変動しますので、まずはお気軽にご相談ください。",
  },
  {
    question: "料金の支払い方法・タイミングは？",
    answer:
      "銀行振込でのお支払いとなります。着手金として50%、納品完了後に残り50%をお支払いいただく形が基本です。分割払いについてもご相談可能です。",
  },
  {
    question: "デザインデータの持ち込みは可能ですか？",
    answer:
      "はい、可能です。Figma、Adobe XD、Photoshopなどのデザインデータをお持ちの場合は、コーディングのみのご依頼も承っております。",
  },
  {
    question: "公開後の修正は対応してもらえますか？",
    answer:
      "納品後1ヶ月間は軽微な修正を無料で対応いたします。それ以降は運用保守プランへのご加入、またはスポット対応（別途お見積もり）となります。",
  },
  {
    question: "途中でキャンセルは可能ですか？",
    answer:
      "ご契約後のキャンセルは、進行状況に応じた費用をいただく場合がございます。詳細は契約時にご説明いたします。",
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/faq/background.jpg"
          alt="FAQ background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-background/95" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Image and Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-24"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4"
            >
              FAQ
            </motion.span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              よくあるご質問
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              お問い合わせ前にご確認ください
            </p>

            {/* Decorative Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/faq/support.jpg"
                  alt="Support"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <p className="text-lg font-semibold mb-2">
                  ご不明点がございましたら
                </p>
                <p className="text-sm opacity-90">
                  お気軽にお問い合わせください。丁寧にご対応いたします。
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: FAQ Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <AccordionItem
                    value={`item-${index}`}
                    className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-lg transition-all duration-300"
                  >
                    <AccordionTrigger className="text-left hover:no-underline py-6">
                      <span className="font-semibold pr-4">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="pb-6 text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
