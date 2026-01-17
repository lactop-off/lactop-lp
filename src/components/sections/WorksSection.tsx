"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const works = [
  {
    title: "Scorely",
    category: "Webアプリ開発",
    description: "instagramのスコアリングを管理するアプリ",
    image: "/images/works/scorely.jpg",
    tags: ["Next.js", "Stripe", "Supabase", "Vercel"],
    color: "from-violet-500 to-purple-500",
    url: "https://scorely.jp",
  },
  {
    title: "コーポレートLP",
    category: "LP制作",
    description: "車販売、修理のLPサイト。LPからの訪問者数前年比145%達成",
    image: "/images/works/urbanauto-fukuoka.jpg",
    tags: ["html", "CSS", "低予算", "SEO対策"],
    color: "from-orange-500 to-red-500",
    url: "https://urbanauto-fukuoka.com",
  },
  {
    title: "animaledge",
    category: "Webアプリ開発",
    description: "動物飼育に関する会員制のQAサイト",
    image: "/images/works/animaledge.jpg",
    tags: ["Wordpress", "SEO対策", "デザインから実装"],
    color: "from-cyan-500 to-blue-500",
    url: "https://animaledge.jp",
  },
  {
    title: "MEO対策アプリ",
    category: "Webアプリ開発",
    description: "Google Business Profile連携による一括管理及びMEO対策強化アプリ",
    image: "/images/works/meo.jpg",
    tags: ["Next.js", "自社サーバ", "GBP連携"],
    color: "from-green-500 to-emerald-500",
    // url なし = 業務用のため非公開
  },
];

const categories = ["すべて", "LP制作", "Webアプリ開発"];

export function WorksSection() {
  const [activeCategory, setActiveCategory] = useState("すべて");

  const filteredWorks =
    activeCategory === "すべて"
      ? works
      : works.filter((work) => work.category === activeCategory);

  return (
    <section id="works" className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 to-background -z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4"
          >
            Works
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            制作実績
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            これまでに手がけたプロジェクトの一部をご紹介します
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                  : "bg-muted hover:bg-muted/80 text-muted-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Works Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredWorks.map((work, index) => {
              const hasUrl = "url" in work && work.url;
              const CardWrapper = hasUrl
                ? ({ children }: { children: React.ReactNode }) => (
                    <a
                      href={work.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      {children}
                    </a>
                  )
                : ({ children }: { children: React.ReactNode }) => <>{children}</>;

              return (
                <motion.div
                  key={work.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className={`group relative ${hasUrl ? "cursor-pointer" : ""}`}
                >
                  <CardWrapper>
                    {/* Card */}
                    <div className={`relative bg-card border border-border rounded-3xl overflow-hidden transition-all duration-500 ${hasUrl ? "group-hover:shadow-2xl group-hover:-translate-y-2" : ""}`}>
                      {/* Image Area */}
                      <div className="aspect-video relative overflow-hidden">
                        <Image
                          src={work.image}
                          alt={work.title}
                          fill
                          className={`object-cover transition-transform duration-500 ${hasUrl ? "group-hover:scale-110" : ""}`}
                        />
                        {/* Gradient Overlay */}
                        <div
                          className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent`}
                        />

                        {/* Hover Overlay - リンクがある場合のみ表示 */}
                        {hasUrl && (
                          <div className="absolute inset-0 bg-foreground/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center backdrop-blur-sm">
                            <div className="flex items-center gap-2 px-6 py-3 bg-background rounded-full text-foreground font-medium transform scale-90 group-hover:scale-100 transition-transform">
                              <ExternalLink className="h-4 w-4" />
                              サイトを見る
                            </div>
                          </div>
                        )}

                        {/* Category Badge */}
                        <div className="absolute top-4 left-4">
                          <span
                            className={`px-3 py-1.5 bg-gradient-to-r ${work.color} text-white text-xs font-medium rounded-full shadow-lg`}
                          >
                            {work.category}
                          </span>
                        </div>

                        {/* Number */}
                        <div className="absolute bottom-4 right-4">
                          <span className="text-5xl font-bold text-white/20">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <h3 className={`text-xl font-bold mb-2 flex items-center gap-2 transition-colors ${hasUrl ? "group-hover:text-primary" : ""}`}>
                          {work.title}
                          {hasUrl && (
                            <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                          )}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-4">
                          {work.description}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                          {work.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardWrapper>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg" className="group" asChild>
            <Link href="#contact">
              その他の実績はお問い合わせ時にご紹介します
              <ArrowUpRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
