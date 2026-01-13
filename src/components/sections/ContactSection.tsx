"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, Loader2, CheckCircle, Mail, MessageSquare, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";

const contactSchema = z.object({
  name: z.string().min(1, "お名前を入力してください"),
  email: z.string().email("有効なメールアドレスを入力してください"),
  company: z.string().optional(),
  service: z.string().min(1, "サービスを選択してください"),
  budget: z.string().optional(),
  message: z.string().min(10, "お問い合わせ内容は10文字以上で入力してください"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const contactFeatures = [
  {
    icon: Mail,
    title: "メールで返信",
    description: "いただいた内容を確認後、メールにてご連絡いたします",
  },
  {
    icon: Clock,
    title: "2営業日以内",
    description: "お問い合わせから2営業日以内にご返信いたします",
  },
  {
    icon: MessageSquare,
    title: "無料相談",
    description: "初回のご相談・お見積もりは無料です",
  },
];

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("送信に失敗しました");
      }

      setIsSubmitted(true);
      reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("送信に失敗しました。時間をおいて再度お試しください。");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/contact/background.jpg"
            alt="Office"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-muted/95" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-xl mx-auto text-center"
          >
            <Card className="shadow-xl">
              <CardContent className="p-12">
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-10 w-10 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  お問い合わせありがとうございます
                </h3>
                <p className="text-muted-foreground mb-6">
                  内容を確認の上、2営業日以内にご連絡いたします。
                  <br />
                  しばらくお待ちください。
                </p>
                <Button onClick={() => setIsSubmitted(false)} size="lg">
                  新しいお問い合わせ
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/contact/background.jpg"
          alt="Office"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-muted/95" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4"
            >
              Contact
            </motion.span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              お問い合わせ
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              ご相談・お見積もりは無料です。お気軽にお問い合わせください。
            </p>

            {/* Contact Features */}
            <div className="space-y-4 mb-8">
              {contactFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="p-3 bg-primary/10 rounded-xl flex-shrink-0">
                    <feature.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Decorative Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl hidden lg:block">
              <div className="relative aspect-[16/9]">
                <Image
                  src="/images/contact/collaboration.jpg"
                  alt="Collaboration"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/60 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <p className="text-lg font-semibold">
                  一緒に素敵なWebサイトを作りましょう
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="shadow-xl">
              <CardContent className="p-6 sm:p-8">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <Label htmlFor="name">
                      お名前 <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="name"
                      placeholder="山田 太郎"
                      {...register("name")}
                      className={errors.name ? "border-destructive" : ""}
                    />
                    {errors.name && (
                      <p className="text-sm text-destructive">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <Label htmlFor="email">
                      メールアドレス <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      {...register("email")}
                      className={errors.email ? "border-destructive" : ""}
                    />
                    {errors.email && (
                      <p className="text-sm text-destructive">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  {/* Company */}
                  <div className="space-y-2">
                    <Label htmlFor="company">会社名（任意）</Label>
                    <Input
                      id="company"
                      placeholder="株式会社○○"
                      {...register("company")}
                    />
                  </div>

                  {/* Service */}
                  <div className="space-y-2">
                    <Label>
                      ご検討中のサービス <span className="text-destructive">*</span>
                    </Label>
                    <Select onValueChange={(value) => setValue("service", value)}>
                      <SelectTrigger
                        className={errors.service ? "border-destructive" : ""}
                      >
                        <SelectValue placeholder="選択してください" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="lp">LP制作</SelectItem>
                        <SelectItem value="webapp">Webアプリ開発</SelectItem>
                        <SelectItem value="maintenance">運用保守</SelectItem>
                        <SelectItem value="other">その他・相談</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.service && (
                      <p className="text-sm text-destructive">
                        {errors.service.message}
                      </p>
                    )}
                  </div>

                  {/* Budget */}
                  <div className="space-y-2">
                    <Label>ご予算（任意）</Label>
                    <Select onValueChange={(value) => setValue("budget", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="選択してください" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="~30">〜30万円</SelectItem>
                        <SelectItem value="30-50">30〜50万円</SelectItem>
                        <SelectItem value="50-100">50〜100万円</SelectItem>
                        <SelectItem value="100-300">100〜300万円</SelectItem>
                        <SelectItem value="300~">300万円以上</SelectItem>
                        <SelectItem value="undecided">未定</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <Label htmlFor="message">
                      お問い合わせ内容 <span className="text-destructive">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="ご要望やご質問をご記入ください"
                      rows={5}
                      {...register("message")}
                      className={errors.message ? "border-destructive" : ""}
                    />
                    {errors.message && (
                      <p className="text-sm text-destructive">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  {/* Submit */}
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        送信中...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        送信する
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
