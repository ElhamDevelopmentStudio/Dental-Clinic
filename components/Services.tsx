import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { useLanguage } from "./LanguageContext";

const content = {
  en: {
    title: "Our Dental Services",
    services: [
      {
        title: "General Dentistry",
        description:
          "Routine check-ups, cleanings, and preventive care to keep your smile healthy and bright.",
      },
      {
        title: "Cosmetic Dentistry",
        description:
          "Enhance your smile with our cosmetic treatments, including teeth whitening, veneers, and bonding.",
      },
      {
        title: "Orthodontics",
        description:
          "Straighten your teeth with our advanced orthodontic solutions like Invisalign and traditional braces.",
      },
      {
        title: "Dental Implants",
        description:
          "Replace missing teeth with our durable and natural-looking dental implants.",
      },
      {
        title: "Pediatric Dentistry",
        description:
          "Gentle and compassionate dental care tailored for our youngest patients.",
      },
      {
        title: "Emergency Dental Care",
        description:
          "Immediate care for dental emergencies, including toothaches, broken teeth, and more.",
      },
    ],
    cta: "Explore All Services",
  },
  da: {
    title: "خدمات دندانپزشکی ما",
    services: [
      {
        title: "دندانپزشکی عمومی",
        description:
          "معاینات منظم، پاکسازی و مراقبت‌های پیشگیرانه برای حفظ لبخند سالم و درخشان شما.",
      },
      {
        title: "دندانپزشکی زیبایی",
        description:
          "لبخند خود را با درمان‌های زیبایی ما از جمله سفید کردن دندان، لمینت و باندینگ بهبود بخشید.",
      },
      {
        title: "ارتودنسی",
        description:
          "دندان‌های خود را با راه حل‌های ارتودنسی پیشرفته مانند اینویزیلاین و براکت‌های سنتی صاف کنید.",
      },
      {
        title: "ایمپلنت دندان",
        description:
          "دندان‌های از دست رفته را با ایمپلنت‌های بادوام و طبیعی ما جایگزین کنید.",
      },
      {
        title: "دندانپزشکی اطفال",
        description:
          "مراقبت‌های دندانپزشکی ملایم و دلسوزانه متناسب با کوچکترین بیماران ما.",
      },
      {
        title: "مراقبت‌های دندانپزشکی اورژانسی",
        description:
          "مراقبت فوری برای اورژانس‌های دندانپزشکی، از جمله دندان درد، دندان‌های شکسته و موارد دیگر.",
      },
    ],
    cta: "مشاهده تمام خدمات",
  },
};

const Services: React.FC = () => {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900">
            {t.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              {t.cta}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
