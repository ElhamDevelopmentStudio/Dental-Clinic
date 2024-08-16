"use client";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useLanguage } from "./LanguageContext";

const content = {
  en: {
    clinicName: "Kabir Dental Clinic",
    description: "Your trusted partner in achieving the perfect smile.",
    quickLinks: "Quick Links",
    contactInfo: "Contact Info",
    newsletter: "Newsletter",
    subscribe:
      "Subscribe to our newsletter for the latest updates and special offers.",
    address: "123 Smile Street, Dental City, DC 45678",
    phone: "(123) 456-7890",
    email: "info@kabirdentalclinic.com",
    subscribeButton: "Subscribe",
    home: "Home",
    aboutUs: "About Us",
    services: "Services",
    contactUs: "Contact Us",
    enterEmail: "Enter your email",
    copyright: "© 2024 Kabir Dental Clinic. All rights reserved.",
  },
  da: {
    clinicName: "کلینیک دندان کبیر",
    description: "شریک مورد اعتماد شما در دستیابی به لبخند کامل.",
    quickLinks: "لینک‌های سریع",
    contactInfo: "اطلاعات تماس",
    newsletter: "خبرنامه",
    subscribe:
      "برای آخرین به‌روزرسانی‌ها و پیشنهادات ویژه در خبرنامه ما عضو شوید.",
    address: "خیابان ۱۲۳ لبخند، شهر دندانپزشکی، DC 45678",
    phone: "(123) 456-7890",
    email: "info@kabirdentalclinic.com",
    subscribeButton: "عضویت",
    home: "خانه",
    aboutUs: "درباره ما",
    services: "خدمات",
    contactUs: "تماس با ما",
    enterEmail: "ایمیل خود را وارد کنید",
    copyright: "© ۲۰۲۴ کلینیک دندان کبیر. تمام حقوق محفوظ است.",
  },
};

const Footer: React.FC = () => {
  const { language } = useLanguage();
  const t = content[language];
  const isRTL = language === "da";

  return (
    <footer className={`bg-gray-900 text-white py-12 ${isRTL ? "rtl" : "ltr"}`}>
      <div className="container mx-auto px-4">
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 ${
            isRTL ? "text-right" : "text-left"
          }`}
        >
          <div>
            <h3 className="text-xl font-semibold mb-4">{t.clinicName}</h3>
            <p className="mb-4">{t.description}</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">{t.quickLinks}</h3>
            <ul>
              <li className="mb-2">
                <Link href="/" className="hover:text-gray-400">
                  {t.home}
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/about" className="hover:text-gray-400">
                  {t.aboutUs}
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/services" className="hover:text-gray-400">
                  {t.services}
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/contact" className="hover:text-gray-400">
                  {t.contactUs}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">{t.contactInfo}</h3>
            <p className="mb-2">{t.address}</p>
            <p className="mb-2">{t.phone}</p>
            <p className="mb-2">
              <a href={`mailto:${t.email}`} className="hover:text-gray-400">
                {t.email}
              </a>
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">{t.newsletter}</h3>
            <p className="mb-4">{t.subscribe}</p>
            <form className="flex flex-col sm:flex-row items-center">
              <Input
                type="email"
                placeholder={t.enterEmail}
                className={`mb-4 sm:mb-0 ${
                  isRTL ? "sm:ml-4" : "sm:mr-4"
                } w-full sm:w-auto`}
              />
              <Button>{t.subscribeButton}</Button>
            </form>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-400">{t.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
