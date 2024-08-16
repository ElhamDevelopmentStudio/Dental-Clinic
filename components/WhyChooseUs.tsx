"use client";
import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { useLanguage } from "./LanguageContext";

const reasons = {
  en: [
    {
      title: "State-of-the-Art Facility",
      description:
        "Our clinic is equipped with the latest dental technology to provide the best possible care.",
    },
    {
      title: "Experienced Professionals",
      description:
        "Our team of dentists has extensive experience in various fields of dentistry, ensuring expert care.",
    },
    {
      title: "Personalized Care",
      description:
        "We believe in treating each patient as an individual, with personalized treatment plans tailored to your needs.",
    },
    {
      title: "Comfortable Environment",
      description:
        "We strive to create a welcoming and relaxing atmosphere for our patients.",
    },
    {
      title: "Flexible Scheduling",
      description:
        "We offer flexible appointment times to accommodate your busy schedule.",
    },
  ],
  da: [
    {
      title: "تجهیزات پیشرفته",
      description:
        "کلینیک ما مجهز به آخرین تکنولوژی‌های دندانپزشکی برای ارائه بهترین مراقبت ممکن است.",
    },
    {
      title: "متخصصان باتجربه",
      description:
        "تیم دندانپزشکان ما تجربه گسترده‌ای در زمینه‌های مختلف دندانپزشکی دارند و مراقبت تخصصی را تضمین می‌کنند.",
    },
    {
      title: "مراقبت شخصی",
      description:
        "ما اعتقاد داریم که هر بیمار را به عنوان یک فرد مجزا درمان کنیم و برنامه‌های درمانی شخصی سازی شده متناسب با نیازهای شما ارائه دهیم.",
    },
    {
      title: "محیط راحت",
      description:
        "ما سعی می‌کنیم فضای خوشایند و آرامش‌بخشی برای بیماران خود ایجاد کنیم.",
    },
    {
      title: "برنامه‌ریزی انعطاف‌پذیر",
      description:
        "ما اوقات ملاقات انعطاف‌پذیری را برای تطابق با برنامه شلوغ شما ارائه می‌دهیم.",
    },
  ],
};

const WhyChooseUs: React.FC = () => {
  const { language } = useLanguage();
  const reasonsContent = reasons[language];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900">
            {language === "en"
              ? "Why Choose Kabir Dental Clinic?"
              : "چرا کلینیک دندان کبیر را انتخاب کنید؟"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasonsContent.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>{reason.title}</CardTitle>
                    <CardDescription>{reason.description}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
