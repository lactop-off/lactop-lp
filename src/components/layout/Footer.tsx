import Link from "next/link";
import { Mail, MapPin } from "lucide-react";

const navigation = [
  { name: "サービス", href: "#services" },
  { name: "料金", href: "#pricing" },
  { name: "実績", href: "#works" },
  { name: "制作の流れ", href: "#flow" },
  { name: "FAQ", href: "#faq" },
  { name: "お問い合わせ", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">L</span>
              </div>
              <span className="font-bold text-lg">Lactop</span>
            </Link>
            <p className="text-sm text-background/70">
              スタートアップ・中小企業向けに<br />
              LP制作・Webアプリ開発を提供する<br />
              フリーランスエンジニアです。
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold mb-4">ナビゲーション</h3>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-background/70 hover:text-background transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">お問い合わせ</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-background/70">
                <Mail className="h-4 w-4" />
                <span>lactop.official@gmail.com</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-background/70">
                <MapPin className="h-4 w-4" />
                <span>日本</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-sm text-background/50">
            &copy; 2025 Lactop. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
