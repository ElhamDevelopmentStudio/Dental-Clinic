import { motion } from "framer-motion";
import { useLanguage } from "./LanguageContext";

const content = {
  en: {
    title: "About Kabir Dental Clinic",
    paragraph1:
      "At Kabir Dental Clinic, we believe in providing exceptional dental care in a friendly and comfortable environment. Our state-of-the-art facility and experienced dental professionals ensure that every patient receives personalized care and attention.",
    paragraph2:
      "With years of experience in dentistry, we are committed to helping you achieve optimal dental health and a smile that you can be proud of.",
  },
  da: {
    title: "درباره کلینیک دندان کبیر",
    paragraph1:
      "در کلینیک دندان کبیر، ما به ارائه مراقبت‌های دندانپزشکی استثنایی در محیطی دوستانه و راحت باور داریم. تجهیزات پیشرفته و متخصصان با تجربه ما اطمینان می‌دهند که هر بیمار مراقبت و توجه شخصی دریافت می‌کند.",
    paragraph2:
      "با سال‌ها تجربه در دندانپزشکی، ما متعهد به کمک به شما در دستیابی به سلامت دندان بهینه و لبخندی هستیم که می‌توانید به آن افتخار کنید.",
  },
};

const AboutUs: React.FC = () => {
  const { language } = useLanguage();
  const t = content[language];

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
            {t.title}
          </h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg mb-6 text-gray-700">{t.paragraph1}</p>
            <p className="text-lg text-gray-700">{t.paragraph2}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
