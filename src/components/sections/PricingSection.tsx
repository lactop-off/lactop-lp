"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Laptop, Code2, Settings, Calculator } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type ServiceType = "lp" | "webapp" | "maintenance";

interface Plan {
  name: string;
  price: number;
  priceLabel: string;
  description: string;
  features: string[];
  recommended?: boolean;
}

interface ServiceData {
  id: ServiceType;
  name: string;
  icon: typeof Laptop;
  description: string;
  plans: Plan[];
}

const services: ServiceData[] = [
  {
    id: "lp",
    name: "LP制作",
    icon: Laptop,
    description: "ランディングページの制作",
    plans: [
      {
        name: "シンプル",
        price: 150000,
        priceLabel: "15万円〜",
        description: "シンプルなLPを短期間で",
        features: [
          "1ページ構成",
          "セクション5つ程度",
          "レスポンシブ対応",
          "基本的なSEO設定",
          "納期：約2週間",
        ],
      },
      {
        name: "スタンダード",
        price: 250000,
        priceLabel: "25万円〜",
        description: "しっかり訴求したい方に",
        features: [
          "1ページ構成",
          "セクション8つ程度",
          "レスポンシブ対応",
          "アニメーション演出",
          "お問い合わせフォーム",
          "SEO対策込み",
          "納期：約3週間",
        ],
        recommended: true,
      },
      {
        name: "プレミアム",
        price: 450000,
        priceLabel: "45万円〜",
        description: "本格的なサイトを構築",
        features: [
          "複数ページ（〜5P）",
          "フルカスタムデザイン",
          "CMS機能付き",
          "高度なアニメーション",
          "アクセス解析設置",
          "SEO対策込み",
          "納期：約5週間",
        ],
      },
    ],
  },
  {
    id: "webapp",
    name: "Webアプリ開発",
    icon: Code2,
    description: "オーダーメイドのWebアプリケーション",
    plans: [
      {
        name: "MVP",
        price: 700000,
        priceLabel: "70万円〜",
        description: "最小限の機能で素早くリリース",
        features: [
          "基本機能の実装",
          "ユーザー認証",
          "シンプルなUI",
          "レスポンシブ対応",
          "納期：約1ヶ月",
        ],
      },
      {
        name: "スタンダード",
        price: 1400000,
        priceLabel: "140万円〜",
        description: "本格的なWebアプリケーション",
        features: [
          "フル機能実装",
          "管理画面付き",
          "データベース設計",
          "API連携（1〜2件）",
          "テスト込み",
          "納期：約2ヶ月",
        ],
        recommended: true,
      },
      {
        name: "フルセット",
        price: 3000000,
        priceLabel: "300万円〜",
        description: "大規模・複雑なシステム",
        features: [
          "複雑なビジネスロジック",
          "複数のAPI連携",
          "高度なセキュリティ",
          "パフォーマンス最適化",
          "ドキュメント整備",
          "納期：約3ヶ月〜",
        ],
      },
    ],
  },
  {
    id: "maintenance",
    name: "運用保守",
    icon: Settings,
    description: "公開後のサポート・メンテナンス",
    plans: [
      {
        name: "ライト",
        price: 15000,
        priceLabel: "1.5万円/月",
        description: "最低限のサポート",
        features: [
          "月2時間まで対応",
          "軽微な修正・更新",
          "定期バックアップ",
          "メール対応",
        ],
      },
      {
        name: "スタンダード",
        price: 30000,
        priceLabel: "3万円/月",
        description: "安心のサポート体制",
        features: [
          "月5時間まで対応",
          "コンテンツ更新",
          "セキュリティ対策",
          "月次レポート",
          "Slack/チャット対応",
        ],
        recommended: true,
      },
      {
        name: "プレミアム",
        price: 50000,
        priceLabel: "5万円/月",
        description: "優先的なサポート",
        features: [
          "月10時間まで対応",
          "優先対応",
          "改善提案",
          "定期ミーティング",
          "緊急時対応",
        ],
      },
    ],
  },
];

export function PricingSection() {
  const [selectedService, setSelectedService] = useState<ServiceType>("lp");
  const [selectedPlan, setSelectedPlan] = useState<string>("スタンダード");

  const currentService = services.find((s) => s.id === selectedService)!;
  const currentPlan = currentService.plans.find((p) => p.name === selectedPlan);

  return (
    <section id="pricing" className="bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            <Calculator className="h-4 w-4" />
            料金シミュレーター
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">料金プラン</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            サービスとプランを選んで、料金をシミュレーションできます
          </p>
        </motion.div>

        {/* Service Selection */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-4 mb-8"
        >
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => {
                setSelectedService(service.id);
                setSelectedPlan("スタンダード");
              }}
              className={`flex items-center gap-3 px-6 py-4 rounded-xl border-2 transition-all ${
                selectedService === service.id
                  ? "border-primary bg-primary/5"
                  : "border-border bg-card hover:border-primary/50"
              }`}
            >
              <service.icon
                className={`h-6 w-6 ${
                  selectedService === service.id
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              />
              <div className="text-left">
                <div className="font-semibold">{service.name}</div>
                <div className="text-xs text-muted-foreground">
                  {service.description}
                </div>
              </div>
            </button>
          ))}
        </motion.div>

        {/* Plans */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedService}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
          >
            {currentService.plans.map((plan) => (
              <Card
                key={plan.name}
                className={`relative cursor-pointer transition-all hover:shadow-lg ${
                  selectedPlan === plan.name
                    ? "border-primary ring-2 ring-primary/20"
                    : "border-border"
                } ${plan.recommended ? "md:-mt-4 md:mb-4" : ""}`}
                onClick={() => setSelectedPlan(plan.name)}
              >
                {plan.recommended && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                      おすすめ
                    </span>
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-lg">{plan.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    {plan.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="text-center mb-6">
                    <span className="text-3xl font-bold text-primary">
                      {plan.priceLabel}
                    </span>
                  </div>
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 max-w-xl mx-auto"
        >
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="p-6">
              <div className="text-center">
                <p className="text-sm opacity-80 mb-2">お見積もり目安</p>
                <div className="flex items-center justify-center gap-4 mb-4">
                  <div>
                    <span className="text-sm opacity-80">
                      {currentService.name}
                    </span>
                    <span className="mx-2">-</span>
                    <span className="font-semibold">{selectedPlan}</span>
                  </div>
                </div>
                <p className="text-4xl font-bold mb-4">
                  {currentPlan?.priceLabel}
                </p>
                <p className="text-sm opacity-80 mb-6">
                  ※ 上記は目安です。詳細はヒアリング後にお見積もりいたします。
                </p>
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white text-primary hover:bg-white/90"
                  asChild
                >
                  <Link href="#contact">この内容で相談する</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
