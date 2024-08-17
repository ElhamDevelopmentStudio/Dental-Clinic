import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";
import { useLanguage } from "./LanguageContext";
import {
  X,
  Phone,
  Mail,
  Clock,
  Award,
  BookOpen,
  Users,
  Star,
  Heart,
  Zap,
  Smile,
  Coffee,
} from "lucide-react";

const content = {
  en: {
    title: "Meet Our Exceptional Dental Experts",
    description:
      "At Kabir Dental Clinic, we pride ourselves on our team of highly skilled and compassionate dental professionals. Each member brings a wealth of experience and a commitment to providing you with world-class oral care. Discover the faces behind your healthiest smile!",
    team: [
      {
        name: "Dr. Kabir Ahmed",
        title: "DDS, FICOI",
        specialty: "General and Cosmetic Dentistry",
        description:
          "Dr. Kabir Ahmed is the founder and lead dentist at Kabir Dental Clinic. With over 15 years of experience, he has transformed countless smiles and lives. Dr. Kabir's expertise in cosmetic dentistry and his gentle approach have earned him a reputation as one of the most sought-after dentists in the region.",
        image: "/images/dr-kabir.jpg",
        skills: [
          { name: "General Dentistry", level: 95 },
          { name: "Cosmetic Procedures", level: 98 },
          { name: "Dental Implants", level: 90 },
        ],
        achievements: [
          "Fellow of the International Congress of Oral Implantologists",
          "Best Cosmetic Dentist Award 2023",
          "Published author in Journal of Cosmetic Dentistry",
        ],
      },
      {
        name: "Dr. Sarah Khan",
        title: "DMD, MS",
        specialty: "Pediatric Dentistry",
        description:
          "Dr. Sarah Khan is our pediatric dentistry specialist, dedicated to providing gentle and fun dental care for children. Her playful approach and expertise in managing dental anxiety make her a favorite among our youngest patients. Dr. Sarah is committed to instilling good oral habits that last a lifetime.",
        image: "/dr.jpg",
        skills: [
          { name: "Pediatric Dentistry", level: 97 },
          { name: "Preventive Care", level: 95 },
          { name: "Behavior Management", level: 93 },
        ],
        achievements: [
          "Master's in Pediatric Dentistry",
          "Child-Friendly Dentist of the Year 2022",
          "Developer of 'Smile Safari' - an interactive dental education program for kids",
        ],
      },
      {
        name: "Dr. Anil Mehta",
        title: "MDS, PhD",
        specialty: "Orthodontics",
        description:
          "Dr. Anil Mehta is our orthodontics virtuoso, specializing in creating perfectly aligned smiles. With his innovative approaches to teeth straightening and jaw alignment, Dr. Anil has helped patients of all ages achieve the smile of their dreams. His research in accelerated orthodontics has garnered international recognition.",
        image: "/images/dr-anil.jpg",
        skills: [
          { name: "Orthodontics", level: 98 },
          { name: "Invisalign", level: 96 },
          { name: "Jaw Alignment", level: 94 },
        ],
        achievements: [
          "PhD in Accelerated Orthodontics",
          "Innovator Award at International Orthodontics Conference 2023",
          "Pioneer of 'Swift Smile' - a rapid teeth alignment technique",
        ],
      },
    ],
  },
  da: {
    title: "با تیم متخصص دندانپزشکی ما آشنا شوید",
    description:
      "در کلینیک دندانپزشکی کبیر، ما به تیم متخصص و دلسوز خود افتخار می‌کنیم. هر یک از اعضای تیم ما تجربه‌ای غنی و تعهدی راسخ در ارائه مراقبت‌های دهان و دندان در سطح جهانی دارند. با چهره‌های پشت لبخند سالم خود آشنا شوید!",
    team: [
      {
        name: "داکتر کبیر احمد",
        title: "DDS، FICOI",
        specialty: "دندانپزشکی عمومی و زیبایی",
        description:
          "داکتر کبیر احمد، بنیانگذار و دندانپزشک ارشد کلینیک دندانپزشکی کبیر است. با بیش از ۱۵ سال تجربه، او لبخندها و زندگی‌های بی‌شماری را متحول کرده است. تخصص داکتر کبیر در دندانپزشکی زیبایی و رویکرد ملایم او، او را به یکی از پرطرفدارترین دندانپزشکان منطقه تبدیل کرده است.",
        image: "/images/dr-kabir.jpg",
        skills: [
          { name: "دندانپزشکی عمومی", level: 95 },
          { name: "روش‌های زیبایی", level: 98 },
          { name: "ایمپلنت‌های دندانی", level: 90 },
        ],
        achievements: [
          "عضو کنگره بین‌المللی متخصصان ایمپلنت دهان",
          "جایزه بهترین دندانپزشک زیبایی سال ۲۰۲۳",
          "نویسنده مقالات در مجله دندانپزشکی زیبایی",
        ],
      },
      {
        name: "داکتر سارا خان",
        title: "DMD، MS",
        specialty: "دندانپزشکی اطفال",
        description:
          "داکتر سارا خان، متخصص دندانپزشکی اطفال ما، متعهد به ارائه مراقبت‌های دندانی ملایم و سرگرم‌کننده برای کودکان است. رویکرد بازیگوشانه و تخصص او در مدیریت اضطراب دندانپزشکی، او را به محبوب جوان‌ترین بیماران ما تبدیل کرده است. داکتر سارا متعهد به ایجاد عادات خوب دهانی است که یک عمر دوام می‌آورد.",
        image: "/images/dr-sarah.jpg",
        skills: [
          { name: "دندانپزشکی اطفال", level: 97 },
          { name: "مراقبت‌های پیشگیرانه", level: 95 },
          { name: "مدیریت رفتار", level: 93 },
        ],
        achievements: [
          "کارشناسی ارشد دندانپزشکی اطفال",
          "دندانپزشک دوستدار کودک سال ۲۰۲۲",
          "طراح 'سافاری لبخند' - یک برنامه آموزش دندانپزشکی تعاملی برای کودکان",
        ],
      },
      {
        name: "داکتر انیل مهتا",
        title: "MDS، PhD",
        specialty: "ارتودنسی",
        description:
          "داکتر انیل مهتا، استاد ارتودنسی ما، متخصص در ایجاد لبخندهای کاملاً منظم است. با رویکردهای نوآورانه خود در صاف کردن دندان‌ها و تراز فک، داکتر انیل به بیماران در همه سنین کمک کرده است تا به لبخند رویایی خود دست یابند. تحقیقات او در زمینه ارتودنسی سریع، شهرت بین‌المللی کسب کرده است.",
        image: "/images/dr-anil.jpg",
        skills: [
          { name: "ارتودنسی", level: 98 },
          { name: "اینویزیلاین", level: 96 },
          { name: "تراز فک", level: 94 },
        ],
        achievements: [
          "دکترای تخصصی در ارتودنسی سریع",
          "جایزه نوآور در کنفرانس بین‌المللی ارتودنسی ۲۰۲۳",
          "پیشگام 'لبخند سریع' - یک تکنیک تراز سریع دندان",
        ],
      },
    ],
  },
};

type DoctorType = {
  name: string;
  title: string;
  specialty: string;
  description: string;
  image: string;
  skills: { name: string; level: number }[];
  achievements: string[];
};

const Team: React.FC = () => {
  const { language } = useLanguage();
  const t = content[language];
  const [selectedDoctor, setSelectedDoctor] = useState<DoctorType | null>(null);
  // Removed isHovering state as it's no longer needed

  const openModal = (doctor: DoctorType) => {
    setSelectedDoctor(doctor);
  };

  const closeModal = () => {
    setSelectedDoctor(null);
  };

  const MotionCard = motion(Card);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const descriptionVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, delay: 0.2, ease: "easeOut" },
    },
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-100">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-8 text-center text-gray-900"
          variants={titleVariants}
          initial="hidden"
          animate="visible"
        >
          {t.title}
        </motion.h2>
        <motion.p
          className="text-xl mb-12 text-center text-gray-700 max-w-3xl mx-auto"
          variants={descriptionVariants}
          initial="hidden"
          animate="visible"
        >
          {t.description}
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.team.map((member, index) => (
            <MotionCard
              key={index}
              variants={cardVariants}
              custom={index}
              initial="hidden"
              animate="visible"
              // Removed whileHover and whileTap as they're not needed
              onClick={() => openModal(member)}
              className="cursor-pointer overflow-hidden"
              // Removed onHoverStart and onHoverEnd
            >
              <CardHeader>
                {/* Removed motion.div and its animation */}
                <div className="mb-4 relative w-full h-64 overflow-hidden rounded-t-lg">
                  <Image
                    src={member.image}
                    alt={member.name}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 transform hover:scale-110"
                  />
                </div>
                <CardTitle className="text-2xl font-bold">
                  {member.name}
                </CardTitle>
                <p className="text-md font-medium text-primary mb-2">
                  {member.title}
                </p>
                <Badge variant="secondary" className="mb-2">
                  {member.specialty}
                </Badge>
                <CardDescription className="text-sm">
                  {member.description.slice(0, 100)}...
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <Button variant="outline" size="sm" className="mt-2">
                    Learn More
                  </Button>
                  {/* Removed motion.div and its animation */}
                  <div className="flex space-x-1">
                    <Star className="w-5 h-5 text-yellow-400" />
                    <Star className="w-5 h-5 text-yellow-400" />
                    <Star className="w-5 h-5 text-yellow-400" />
                    <Star className="w-5 h-5 text-yellow-400" />
                    <Star className="w-5 h-5 text-yellow-400" />
                  </div>
                </div>
              </CardContent>
            </MotionCard>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedDoctor && (
          <Dialog open={!!selectedDoctor} onOpenChange={closeModal}>
            <DialogContent className="max-w-4xl h-[420px]">
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotateX: -15 }}
                animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                exit={{ opacity: 0, scale: 0.8, rotateX: 15 }}
                transition={{ duration: 0.5, type: "spring" }}
                style={{ perspective: "1000px" }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="relative h-96 md:h-full">
                    <Image
                      src={selectedDoctor.image}
                      alt={selectedDoctor.name}
                      objectFit="cover"
                      className="rounded-lg"
                      fill
                    />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.6 }}
                      transition={{ duration: 0.5 }}
                    />
                    <motion.div
                      className="absolute bottom-4 left-4 text-white"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                    >
                      <h2 className="text-3xl font-bold mb-2">
                        {selectedDoctor.name}
                      </h2>
                      <p className="text-xl">{selectedDoctor.title}</p>
                    </motion.div>
                  </div>
                  <div>
                    <motion.p
                      className="text-xl text-primary font-semibold mb-4"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                    >
                      {selectedDoctor.specialty}
                    </motion.p>
                    <Tabs defaultValue="about">
                      <TabsList>
                        <TabsTrigger value="about">About</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="achievements">
                          Achievements
                        </TabsTrigger>
                      </TabsList>
                      <TabsContent value="about">
                        <motion.p
                          className="text-gray-700 mb-4"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4, duration: 0.5 }}
                        >
                          {selectedDoctor.description}
                        </motion.p>
                        <motion.div
                          className="flex flex-wrap gap-2 mb-4"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5, duration: 0.5 }}
                        >
                          <Badge variant="secondary">
                            <Phone className="w-4 h-4 mr-1" /> Available for
                            Consultations
                          </Badge>
                          <Badge variant="secondary">
                            <Mail className="w-4 h-4 mr-1" /> Quick Responses
                          </Badge>
                          <Badge variant="secondary">
                            <Clock className="w-4 h-4 mr-1" /> Flexible Hours
                          </Badge>
                        </motion.div>
                      </TabsContent>
                      <TabsContent value="skills">
                        <motion.div
                          className="space-y-4"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4, duration: 0.5 }}
                        >
                          {selectedDoctor.skills.map((skill, index) => (
                            <div key={index}>
                              <div className="flex justify-between mb-1">
                                <span>{skill.name}</span>
                                <span>{skill.level}%</span>
                              </div>
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${skill.level}%` }}
                                transition={{
                                  delay: 0.5 + index * 0.1,
                                  duration: 0.8,
                                  ease: "easeOut",
                                }}
                              >
                                <Progress value={skill.level} className="h-2" />
                              </motion.div>
                            </div>
                          ))}
                        </motion.div>
                      </TabsContent>
                      <TabsContent value="achievements">
                        <motion.ul
                          className="space-y-2"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4, duration: 0.5 }}
                        >
                          {selectedDoctor.achievements.map(
                            (achievement, index) => (
                              <motion.li
                                key={index}
                                className="flex items-center"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                  delay: 0.5 + index * 0.1,
                                  duration: 0.5,
                                }}
                              >
                                <Award className="w-5 h-5 mr-2 text-primary" />
                                <span>{achievement}</span>
                              </motion.li>
                            )
                          )}
                        </motion.ul>
                      </TabsContent>
                    </Tabs>
                    <motion.div
                      className="mt-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6, duration: 0.5 }}
                    >
                      <Button className="w-full">
                        <Users className="w-4 h-4 mr-2" /> Book an Appointment
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
              <DialogClose asChild>
                <Button
                  className="absolute top-1 right-1 hover:bg-gray-100"
                  variant="ghost"
                  size="icon"
                ></Button>
              </DialogClose>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Team;
