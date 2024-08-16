"use client";
import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { useLanguage } from "./LanguageContext";

const testimonials = {
  en: [
    {
      name: "Aisha R.",
      feedback: `The team at Kabir Dental Clinic is amazing! They made me feel so comfortable and took great care of my dental needs. I can't stop smiling!`,
    },
    {
      name: "Rohan K.",
      feedback:
        "I had a great experience with Dr. Kabir. The clinic is modern and clean, and the staff is very professional. Highly recommended!",
    },
    {
      name: "Fatima S.",
      feedback:
        "My kids love visiting Dr. Sarah. She is so patient and kind, and her approach has made them enjoy their dental visits.",
    },
  ],
  da: [
    {
      name: "عایشه ر.",
      feedback: `تیم کلینیک دندان کبیر فوق‌العاده است! آن‌ها باعث شدند احساس راحتی کنم و مراقبت عالی از نیازهای دندانی من داشتند. نمی‌توانم لبخند زدن را متوقف کنم!`,
    },
    {
      name: "روحان ک.",
      feedback:
        "من تجربه عالی با دکتر کبیر داشتم. کلینیک مدرن و تمیز است و کارکنان بسیار حرفه‌ای هستند. بسیار توصیه می‌شود!",
    },
    {
      name: "فاطمه س.",
      feedback:
        "بچه‌های من عاشق دیدار با دکتر سارا هستند. او بسیار صبور و مهربان است و روش او باعث شده که آن‌ها از دیدارهای دندانی لذت ببرند.",
    },
  ],
};

const Testimonials: React.FC = () => {
  const { language } = useLanguage();
  const testimonialsContent = testimonials[language];

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
            {language === "en" ? "What Our Patients Say" : "نظر بیماران ما"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonialsContent.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>{testimonial.name}</CardTitle>
                    <CardDescription>{testimonial.feedback}</CardDescription>
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

export default Testimonials;
