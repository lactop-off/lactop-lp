"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ParticleBackground } from "@/components/effects/ParticleBackground";
import { TypeWriter } from "@/components/effects/TypeWriter";
import { CountUp } from "@/components/effects/CountUp";
import { FloatingElements } from "@/components/effects/FloatingElements";
import { ScrollIndicator } from "@/components/effects/ScrollIndicator";
import { GradientText } from "@/components/effects/GradientText";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/images/hero/background.jpg"
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-background/90" />
      </div>

      {/* Animated Background */}
      <ParticleBackground />
      <FloatingElements />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary/20 to-accent/20 backdrop-blur-sm border border-primary/20 text-foreground rounded-full text-sm font-medium mb-8 shadow-lg">
                <Sparkles className="h-4 w-4 text-primary" />
                フリーランスエンジニア
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6"
            >
              あなたのビジネスを
              <br />
              <GradientText className="inline-block mt-2">
                <TypeWriter
                  texts={["Webの力", "テクノロジー", "デザイン", "スピード"]}
                  speed={120}
                  deleteSpeed={80}
                  delay={2500}
                />
              </GradientText>
              <span className="text-foreground">で加速させる</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              LP制作からWebアプリ開発まで、
              スタートアップ・中小企業に寄り添った
              <span className="text-foreground font-medium">コストパフォーマンスの高いWeb制作</span>を提供します。
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                size="lg"
                className="group relative overflow-hidden bg-gradient-to-r from-primary to-orange-500 hover:from-primary/90 hover:to-orange-500/90 shadow-xl shadow-primary/25 text-lg px-8 py-6"
                asChild
              >
                <Link href="#contact">
                  <span className="relative z-10 flex items-center">
                    無料相談する
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="group border-2 hover:bg-primary/5 text-lg px-8 py-6"
                asChild
              >
                <Link href="#pricing">
                  <Play className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                  料金シミュレーター
                </Link>
              </Button>
            </motion.div>
          </div>

          {/* Right: Image Showcase */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            {/* Main Device Mockup */}
            <div className="relative">
              {/* Laptop Frame */}
              <div className="relative bg-gray-900 rounded-2xl p-2 shadow-2xl">
                <div className="bg-gray-800 rounded-t-xl p-1">
                  <div className="flex gap-1.5 px-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                  </div>
                </div>
                <div className="relative aspect-[16/10] overflow-hidden rounded-b-lg">
                  <Image
                    src="/images/hero/laptop-screen.jpg"
                    alt="Web Development"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Floating Phone Mockup */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-8 -left-12 w-32"
              >
                <div className="bg-gray-900 rounded-2xl p-1.5 shadow-xl">
                  <div className="relative aspect-[9/19] overflow-hidden rounded-xl">
                    <Image
                      src="/images/hero/mobile-app.jpg"
                      alt="Mobile App"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Floating Stats Card */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -top-4 -right-8 bg-card border border-border rounded-xl p-4 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
                    <span className="text-green-500 text-lg">↑</span>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-500">+150%</div>
                    <div className="text-xs text-muted-foreground">CVR向上</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats - Mobile Only */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          className="grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto mt-16 lg:hidden"
        >
          {[
            { value: 50, suffix: "+", label: "制作実績" },
            { value: 98, suffix: "%", label: "満足度" },
            { value: 5, suffix: "年+", label: "経験年数" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="relative group"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-4 sm:p-6">
                <div className="text-3xl sm:text-4xl font-bold text-primary">
                  <CountUp end={stat.value} suffix={stat.suffix} duration={2000 + index * 200} />
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <ScrollIndicator />
    </section>
  );
}
