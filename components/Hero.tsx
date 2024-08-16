import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useLanguage } from "./LanguageContext";

const content = {
  en: {
    title: "Smile Brighter, Live Better with Kabir Dental Clinic",
    subtitle: "Your trusted partner in achieving the perfect smile.",
    cta1: "Book an Appointment",
    cta2: "Contact Us",
  },
  da: {
    title: "با کلینیک دندان کبیر، لبخند درخشان‌تر و زندگی بهتری داشته باشید",
    subtitle: "شریک مورد اعتماد شما در دستیابی به لبخند کامل.",
    cta1: "نوبت بگیرید",
    cta2: "تماس با ما",
  },
};

const Hero: React.FC = () => {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-4 text-gray-900"
          >
            {t.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl mb-8 text-gray-700"
          >
            {t.subtitle}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-center space-x-4"
          >
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              {t.cta1}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-50"
            >
              {t.cta2}
            </Button>
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/images/hero-background.jpg"
          alt="Smiling patient with dentist"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </motion.div>
    </section>
  );
};

export default Hero;
