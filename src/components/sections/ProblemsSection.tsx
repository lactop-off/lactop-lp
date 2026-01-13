"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { AlertCircle, Clock, DollarSign, MessageCircle } from "lucide-react";

const problems = [
  {
    icon: DollarSign,
    title: "制作会社は高すぎる",
    description: "見積もりを取ったら予想以上の金額で、予算オーバー...",
    image: "/images/problems/cost.png",
  },
  {
    icon: Clock,
    title: "対応が遅い",
    description: "担当者を通すため、ちょっとした修正でも時間がかかる...",
    image: "/images/problems/slow.png",
  },
  {
    icon: MessageCircle,
    title: "要望が伝わりにくい",
    description: "専門用語ばかりで、思い通りのサイトにならない...",
    image: "/images/problems/communication.png",
  },
  {
    icon: AlertCircle,
    title: "公開後のサポートが不安",
    description: "作って終わり？運用や改善はどうすれば...",
    image: "/images/problems/support.png",
  },
];

export function ProblemsSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/problems/background.jpg"
          alt="Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-background/95" />
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
            className="inline-block px-4 py-1.5 bg-destructive/10 text-destructive rounded-full text-sm font-medium mb-4"
          >
            Problems
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            こんなお悩みありませんか？
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Web制作を検討している多くの企業様が抱える課題
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative h-full bg-card rounded-2xl border border-border overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex flex-col sm:flex-row h-full">
                  {/* Image */}
                  <div className="relative w-full sm:w-40 h-32 sm:h-full flex-shrink-0 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900">
                    {/* Inner shadow effect */}
                    <div className="absolute inset-0 shadow-[inset_0_2px_15px_rgba(0,0,0,0.1)] dark:shadow-[inset_0_2px_15px_rgba(0,0,0,0.4)] rounded-l-2xl sm:rounded-l-2xl sm:rounded-r-none z-10 pointer-events-none" />
                    {/* Image container with padding */}
                    <div className="absolute inset-3 flex items-center justify-center">
                      <div className="relative w-full h-full">
                        <Image
                          src={problem.image}
                          alt={problem.title}
                          fill
                          className="object-contain drop-shadow-[0_2px_4px_rgba(0,0,0,0.15)]"
                        />
                      </div>
                    </div>
                    {/* Soft gradient overlay for smooth transition */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/30 sm:bg-gradient-to-t sm:from-transparent sm:to-card/20 z-20 pointer-events-none" />
                  </div>

                  {/* Content */}
                  <div className="p-5 flex-1 flex items-center">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-destructive/10 rounded-lg flex-shrink-0">
                        <problem.icon className="h-5 w-5 text-destructive" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">{problem.title}</h3>
                        <p className="text-muted-foreground text-sm">
                          {problem.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-2xl p-6">
            <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-primary">
              <Image
                src="/images/common/profile.jpg"
                alt="Profile"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-xl font-semibold text-primary">
              そのお悩み、私が解決します。
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
