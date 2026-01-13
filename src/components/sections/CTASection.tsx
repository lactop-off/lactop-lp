"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="relative overflow-hidden py-24">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/cta/background.jpg"
          alt="Team collaboration"
          fill
          className="object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-orange-500/85 to-primary/90" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating circles - fixed positions to avoid hydration mismatch */}
        {[
          { width: 180, height: 180, left: 10, top: 20, duration: 6, delay: 0 },
          { width: 120, height: 120, left: 80, top: 10, duration: 7, delay: 1 },
          { width: 200, height: 200, left: 30, top: 70, duration: 8, delay: 0.5 },
          { width: 150, height: 150, left: 70, top: 60, duration: 5, delay: 1.5 },
          { width: 100, height: 100, left: 50, top: 40, duration: 9, delay: 0.8 },
          { width: 160, height: 160, left: 90, top: 80, duration: 6.5, delay: 1.2 },
        ].map((circle, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/10"
            style={{
              width: circle.width,
              height: circle.height,
              left: `${circle.left}%`,
              top: `${circle.top}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 15, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: circle.duration,
              repeat: Infinity,
              delay: circle.delay,
            }}
          />
        ))}

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-primary-foreground"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6"
            >
              <Sparkles className="h-4 w-4" />
              無料相談受付中
            </motion.div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              まずはお気軽に
              <br />
              ご相談ください
            </h2>

            <p className="text-lg sm:text-xl opacity-90 mb-10 max-w-xl">
              ご相談・お見積もりは無料です。
              お客様のビジネスに最適なプランをご提案いたします。
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                className="group bg-white text-primary hover:bg-white/90 shadow-xl text-lg px-8 py-6"
                asChild
              >
                <Link href="#contact">
                  無料相談する
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white bg-transparent hover:bg-white/10 text-lg px-8 py-6"
                asChild
              >
                <Link href="#pricing">料金を見る</Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right: Decorative Image Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Main image card */}
              <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-4 shadow-2xl">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                  <Image
                    src="/images/cta/success.jpg"
                    alt="Success"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Floating testimonial card */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl max-w-xs"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden">
                    <Image
                      src="/images/cta/client.jpg"
                      alt="Client"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">スタートアップ企業様</p>
                    <p className="text-xs text-gray-500">LP制作</p>
                  </div>
                </div>
                <p className="text-sm text-gray-700">
                  「期待以上の仕上がりで、CVRが大幅に向上しました！」
                </p>
              </motion.div>

              {/* Floating stats card */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -top-4 -right-4 bg-white rounded-xl p-4 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
                    <span className="text-green-500 text-lg">↑</span>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-500">98%</div>
                    <div className="text-xs text-gray-500">お客様満足度</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
