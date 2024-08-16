import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import Image from "next/image";
import { useLanguage } from "./LanguageContext";

const content = {
  en: {
    title: "Our Expert Team",
    description:
      "Our team of experienced and compassionate dental professionals is dedicated to providing you with the highest quality of care. Meet the faces behind Kabir Dental Clinic.",
    team: [
      {
        name: "Dr. Kabir Ahmed",
        title: "DDS",
        specialty: "General and Cosmetic Dentistry",
        description:
          "Dr. Kabir has over 15 years of experience in providing comprehensive dental care. He is passionate about creating beautiful smiles and ensuring patient comfort.",
        image: "/images/dr-kabir.jpg",
      },
      {
        name: "Dr. Sarah Khan",
        title: "DMD",
        specialty: "Pediatric Dentistry",
        description:
          "Dr. Sarah is a specialist in pediatric dentistry and loves working with children. Her friendly approach helps kids feel at ease during their dental visits.",
        image: "/images/dr-sarah.jpg",
      },
      {
        name: "Dr. Anil Mehta",
        title: "MDS",
        specialty: "Orthodontics",
        description:
          "With a focus on orthodontic care, Dr. Anil provides personalized treatment plans to help patients achieve a perfectly aligned smile.",
        image: "/images/dr-anil.jpg",
      },
    ],
  },
  da: {
    title: "تیم متخصص ما",
    description:
      "تیم ما متشکل از متخصصان دندانپزشکی با تجربه و دلسوز است که متعهد به ارائه بالاترین کیفیت مراقبت به شما هستند. با چهره‌های پشت کلینیک دندان کبیر آشنا شوید.",
    team: [
      {
        name: "داکتر کبیر احمد",
        title: "DDS",
        specialty: "دندانپزشکی عمومی و زیبایی",
        description:
          "داکتر کبیر بیش از 15 سال تجربه در ارائه مراقبت‌های جامع دندانپزشکی دارد. او مشتاق ایجاد لبخندهای زیبا و اطمینان از راحتی بیمار است.",
        image: "/images/dr-kabir.jpg",
      },
      {
        name: "داکتر سارا خان",
        title: "DMD",
        specialty: "دندانپزشکی اطفال",
        description:
          "داکتر سارا متخصص دندانپزشکی اطفال است و عاشق کار با کودکان است. رویکرد دوستانه او به کودکان کمک می‌کند تا در طول ویزیت‌های دندانپزشکی احساس راحتی کنند.",
        image: "/images/dr-sarah.jpg",
      },
      {
        name: "داکتر انیل مهتا",
        title: "MDS",
        specialty: "ارتودنسی",
        description:
          "داکتر انیل با تمرکز بر مراقبت‌های ارتودنسی، برنامه‌های درمانی شخصی‌سازی شده را برای کمک به بیماران در دستیابی به لبخندی کاملاً منظم ارائه می‌دهد.",
        image: "/images/dr-anil.jpg",
      },
    ],
  },
};

const Team: React.FC = () => {
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
          <p className="text-lg mb-12 text-center text-gray-700 max-w-3xl mx-auto">
            {t.description}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardHeader>
                    <div className="mb-4 relative w-full h-64">
                      <Image
                        src={member.image}
                        alt={member.name}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-t-lg"
                      />
                    </div>
                    <CardTitle>
                      {member.name}, {member.title}
                    </CardTitle>
                    <p className="text-sm font-medium text-gray-500 mb-2">
                      {member.specialty}
                    </p>
                    <CardDescription>{member.description}</CardDescription>
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

export default Team;
