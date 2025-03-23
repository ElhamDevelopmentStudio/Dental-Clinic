import { useState, useRef, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
} from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
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
  Coffee,
  Globe,
  Languages,
  Trophy,
  GraduationCap,
  User,
  Briefcase,
  Stethoscope,
  MousePointerClick,
} from "lucide-react";

const content = {
  en: {
    title: "Meet Our World-Class Dental Experts",
    description:
      "At Kabir Dental Clinic, we bring together a team of internationally renowned dental professionals, each with a unique set of skills and a passion for creating healthy, beautiful smiles. Discover the faces behind our cutting-edge treatments and personalized care.",
    team: [
      {
        name: "Dr. Kabir Ahmed",
        title: "DDS, FICOI",
        specialty: "Advanced Cosmetic and Implant Dentistry",
        description:
          "Dr. Kabir, with over 20 years of experience, is a pioneer in cosmetic dentistry and implantology. His innovative techniques have transformed thousands of smiles worldwide.",
        image: "/images/dr-kabir.jpg",
        expertise: ["Smile Makeovers", "All-on-4 Implants", "Invisalign"],
        education: [
          "DDS, Harvard School of Dental Medicine",
          "Fellowship, International Congress of Oral Implantologists",
          "Advanced Cosmetic Dentistry, New York University",
        ],
        achievements: [
          "Voted 'Top Cosmetic Dentist' for 5 consecutive years",
          "Published author in the Journal of Cosmetic Dentistry",
          "Keynote speaker at International Dental Symposium",
        ],
        languages: ["English", "Dari", "French"],
        hobbies: ["Photography", "Mountain Climbing", "Culinary Arts"],
      },
      {
        name: "Dr. Sarah Khan",
        title: "DMD, MS",
        specialty: "Pediatric Dentistry and Orthodontics",
        description:
          "Dr. Sarah combines her expertise in pediatric dentistry and orthodontics to provide comprehensive care for young patients. Her gentle approach and use of cutting-edge technology make dental visits a joy for children.",
        image: "/images/dr-sarah.jpg",
        expertise: [
          "Early Orthodontic Intervention",
          "Pediatric Sedation",
          "Special Needs Dentistry",
        ],
        education: [
          "DMD, University of Pennsylvania School of Dental Medicine",
          "MS in Pediatric Dentistry, Boston University",
          "Orthodontic Mini-Residency, Loma Linda University",
        ],
        achievements: [
          "Recipient of the 'Young Pediatric Dentist of the Year' award",
          "Developer of 'Happy Teeth' app for children's dental education",
          "Regular contributor to parenting magazines on children's oral health",
        ],
        languages: ["English", "Dari", "Urdu"],
        hobbies: ["Children's Book Writing", "Violin", "Volunteer Work"],
      },
      {
        name: "Dr. Anil Mehta",
        title: "MDS, PhD",
        specialty: "Oral and Maxillofacial Surgery",
        description:
          "Dr. Anil is a renowned oral surgeon specializing in complex facial reconstructions and advanced dental implant procedures. His research in tissue engineering is paving the way for groundbreaking treatments.",
        image: "/images/dr-anil.jpg",
        expertise: [
          "Zygomatic Implants",
          "Orthognathic Surgery",
          "3D-Printed Facial Prosthetics",
        ],
        education: [
          "MDS in Oral Surgery, King's College London",
          "PhD in Biomedical Engineering, Imperial College London",
          "Fellowship in Craniofacial Surgery, Mayo Clinic",
        ],
        achievements: [
          "Patent holder for novel bone grafting material",
          "Principal investigator for NIH-funded research on jaw regeneration",
          "Visiting professor at multiple international universities",
        ],
        languages: ["English", "Hindi", "German"],
        hobbies: ["3D Printing", "Scuba Diving", "Classical Music"],
      },
    ],
  },
  da: {
    title: "با تیم متخصصین دندانپزشکی جهانی ما آشنا شوید",
    description:
      "در کلینیک دندانپزشکی کبیر، ما تیمی از متخصصین برجسته‌ی دندانپزشکی را گرد هم آورده‌ایم که هر کدام دارای مهارت‌های منحصر به فرد و اشتیاق برای ایجاد لبخندهای سالم و زیبا هستند. با چهره‌های پشت درمان‌های پیشرفته و مراقبت‌های شخصی‌سازی شده‌ی ما آشنا شوید.",
    team: [
      {
        name: "داکتر کبیر احمد",
        title: "DDS، FICOI",
        specialty: "دندانپزشکی زیبایی پیشرفته و ایمپلنت",
        description:
          "داکتر کبیر با بیش از ۲۰ سال تجربه، پیشگام در زمینه‌ی دندانپزشکی زیبایی و ایمپلنتولوژی است. تکنیک‌های نوآورانه‌ی او هزاران لبخند را در سراسر جهان متحول کرده است.",
        image: "/images/dr-kabir.jpg",
        expertise: ["اصلاح لبخند", "ایمپلنت All-on-4", "اینویزیلاین"],
        education: [
          "DDS، دانشکده دندانپزشکی هاروارد",
          "فلوشیپ، کنگره بین‌المللی ایمپلنتولوژیست‌های دهان",
          "دندانپزشکی زیبایی پیشرفته، دانشگاه نیویورک",
        ],
        achievements: [
          "انتخاب به عنوان 'برترین دندانپزشک زیبایی' برای ۵ سال متوالی",
          "نویسنده‌ی منتشر شده در مجله‌ی دندانپزشکی زیبایی",
          "سخنران اصلی در سمپوزیوم بین‌المللی دندانپزشکی",
        ],
        languages: ["انگلیسی", "دری", "فرانسوی"],
        hobbies: ["عکاسی", "کوهنوردی", "هنرهای آشپزی"],
      },
      {
        name: "داکتر سارا خان",
        title: "DMD، MS",
        specialty: "دندانپزشکی اطفال و ارتودنسی",
        description:
          "داکتر سارا تخصص خود در دندانپزشکی اطفال و ارتودنسی را ترکیب کرده تا مراقبت‌های جامعی برای بیماران جوان ارائه دهد. رویکرد ملایم او و استفاده از تکنولوژی پیشرفته، ویزیت‌های دندانپزشکی را برای کودکان لذت‌بخش می‌کند.",
        image: "/images/dr-sarah.jpg",
        expertise: [
          "مداخله‌ی زودهنگام ارتودنسی",
          "آرام‌بخشی اطفال",
          "دندانپزشکی نیازهای ویژه",
        ],
        education: [
          "DMD، دانشکده دندانپزشکی دانشگاه پنسیلوانیا",
          "MS در دندانپزشکی اطفال، دانشگاه بوستون",
          "دوره‌ی کوتاه‌مدت ارتودنسی، دانشگاه لوما لیندا",
        ],
        achievements: [
          "دریافت جایزه‌ی 'دندانپزشک جوان اطفال سال'",
          "توسعه‌دهنده‌ی اپلیکیشن 'دندان‌های شاد' برای آموزش دندانپزشکی کودکان",
          "همکار منظم مجلات والدین در زمینه‌ی سلامت دهان و دندان کودکان",
        ],
        languages: ["انگلیسی", "دری", "اردو"],
        hobbies: ["نویسندگی کتاب کودکان", "نواختن ویولن", "کار داوطلبانه"],
      },
      {
        name: "داکتر انیل مهتا",
        title: "MDS، PhD",
        specialty: "جراحی دهان، فک و صورت",
        description:
          "داکتر انیل یک جراح برجسته‌ی دهان است که در بازسازی‌های پیچیده‌ی صورت و روش‌های پیشرفته‌ی ایمپلنت دندانی تخصص دارد. تحقیقات او در زمینه‌ی مهندسی بافت، راه را برای درمان‌های انقلابی هموار می‌کند.",
        image: "/images/dr-anil.jpg",
        expertise: [
          "ایمپلنت‌های زایگوماتیک",
          "جراحی ارتوگناتیک",
          "پروتزهای صورت چاپ سه‌بعدی",
        ],
        education: [
          "MDS در جراحی دهان، کینگز کالج لندن",
          "PhD در مهندسی پزشکی، امپریال کالج لندن",
          "فلوشیپ در جراحی جمجمه و صورت، کلینیک مایو",
        ],
        achievements: [
          "دارنده‌ی حق ثبت اختراع برای ماده‌ی نوین پیوند استخوان",
          "محقق اصلی پروژه‌ی تحقیقاتی بازسازی فک با بودجه‌ی NIH",
          "استاد مدعو در چندین دانشگاه بین‌المللی",
        ],
        languages: ["انگلیسی", "هندی", "آلمانی"],
        hobbies: ["چاپ سه‌بعدی", "غواصی", "موسیقی کلاسیک"],
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
  expertise: string[];
  education: string[];
  achievements: string[];
  languages: string[];
  hobbies: string[];
};

const Team: React.FC = () => {
  const { language } = useLanguage();
  const t = content[language];
  const [selectedDoctor, setSelectedDoctor] = useState<DoctorType | null>(null);
  const constraintsRef = useRef(null);

  const openModal = (doctor: DoctorType) => {
    setSelectedDoctor(doctor);
  };

  const closeModal = () => {
    setSelectedDoctor(null);
  };

  const MotionCard = motion(Card);

  return (
    <section className="py-16 bg-gradient-to-b from-white to-blue-50">
      <AnimatePresence>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, type: "spring" }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-400">
              {t.title}
            </h2>
            <p className="text-xl mb-16 text-center text-gray-700 max-w-4xl mx-auto leading-relaxed">
              {t.description}
            </p>
          </motion.div>

          <div ref={constraintsRef} className="relative">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, staggerChildren: 0.2 }}
            >
              {t.team.map((member, index) => (
                <MotionCard
                  key={index}
                  layoutId={`card-${index}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0px 10px 30px rgba(0,0,0,0.1)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  drag
                  dragConstraints={constraintsRef}
                  onClick={() => openModal(member)}
                  className="cursor-pointer bg-white backdrop-blur-sm bg-opacity-80 border border-gray-200"
                >
                  <CardHeader>
                    <motion.div
                      className="mb-6 relative w-full h-80 overflow-hidden rounded-lg"
                      whileHover={{ scale: 1.05 }}
                    >
                      <Image
                        src={member.image}
                        alt={member.name}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                      />
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0"
                        whileHover={{ opacity: 0.6 }}
                      />
                    </motion.div>
                    <CardTitle className="text-2xl mb-2">
                      {member.name}
                    </CardTitle>
                    <p className="text-md font-medium text-blue-600 mb-2">
                      {member.title} - {member.specialty}
                    </p>
                    <CardDescription className="text-gray-600">
                      {member.description}
                    </CardDescription>
                    <motion.div
                      className="mt-4 flex flex-wrap gap-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      {member.expertise.slice(0, 3).map((skill, idx) => (
                        <Badge
                          key={idx}
                          variant="secondary"
                          className="bg-blue-100 text-blue-800"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </motion.div>
                  </CardHeader>
                </MotionCard>
              ))}
            </motion.div>
          </div>
        </div>
      </AnimatePresence>

      <AnimatePresence>
        {selectedDoctor && (
          <Dialog open={!!selectedDoctor} onOpenChange={closeModal}>
            <DialogContent className="max-w-6xl w-11/12 h-[90vh] p-0 overflow-hidden">
              <motion.div
                layoutId={`card-${t.team.indexOf(selectedDoctor)}`}
                initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                exit={{ opacity: 0, scale: 0.8, rotateY: 15 }}
                transition={{ duration: 0.5, type: "spring" }}
                style={{ perspective: "1000px" }}
                className="h-full flex flex-col"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
                  <motion.div
                    className="relative h-96 lg:h-full"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src={selectedDoctor.image}
                      alt={selectedDoctor.name}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-l-lg"
                    />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.6 }}
                    />
                    <motion.div
                      className="absolute bottom-4 left-4 text-white"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <h2 className="text-3xl font-bold mb-2">
                        {selectedDoctor.name}
                      </h2>
                      <p className="text-xl flex items-center">
                        <Briefcase className="w-5 h-5 mr-2" />
                        {selectedDoctor.title} - {selectedDoctor.specialty}
                      </p>
                    </motion.div>
                  </motion.div>
                  <div className="p-8 overflow-y-auto">
                    <Tabs defaultValue="about" className="w-full">
                      <TabsList className="grid w-full grid-cols-4 mb-6">
                        <TabsTrigger value="about">
                          <User className="w-4 h-4 mr-2" /> About
                        </TabsTrigger>
                        <TabsTrigger value="expertise">
                          <Zap className="w-4 h-4 mr-2" /> Expertise
                        </TabsTrigger>
                        <TabsTrigger value="education">
                          <GraduationCap className="w-4 h-4 mr-2" /> Education
                        </TabsTrigger>
                        <TabsTrigger value="achievements">
                          <Trophy className="w-4 h-4 mr-2" /> Achievements
                        </TabsTrigger>
                      </TabsList>
                      <TabsContent
                        value="about"
                        className="h-[50vh] overflow-y-auto"
                      >
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1 }}
                        >
                          <p className="text-gray-700 mb-6">
                            {selectedDoctor.description}
                          </p>
                          <div className="grid grid-cols-2 gap-6">
                            <div>
                              <h4 className="font-semibold mb-2 flex items-center">
                                <Languages className="w-5 h-5 mr-2 text-blue-600" />{" "}
                                Languages
                              </h4>
                              <ul className="list-disc list-inside">
                                {selectedDoctor.languages.map((lang, idx) => (
                                  <li key={idx}>{lang}</li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h4 className="font-semibold mb-2 flex items-center">
                                <Coffee className="w-5 h-5 mr-2 text-blue-600" />{" "}
                                Hobbies
                              </h4>
                              <ul className="list-disc list-inside">
                                {selectedDoctor.hobbies.map((hobby, idx) => (
                                  <li key={idx}>{hobby}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </motion.div>
                      </TabsContent>
                      <TabsContent
                        value="expertise"
                        className="h-[50vh] overflow-y-auto"
                      >
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1 }}
                        >
                          <h3 className="text-lg font-semibold mb-4 flex items-center">
                            <Stethoscope className="w-6 h-6 mr-2 text-blue-600" />{" "}
                            Areas of Expertise
                          </h3>
                          <div className="space-y-4">
                            {selectedDoctor.expertise.map((skill, idx) => (
                              <motion.div
                                key={idx}
                                initial={{ width: 0 }}
                                animate={{ width: "100%" }}
                                transition={{ delay: 0.2 * idx, duration: 0.8 }}
                              >
                                <div className="flex justify-between mb-1">
                                  <span className="flex items-center">
                                    <MousePointerClick className="w-4 h-4 mr-2 text-blue-600" />{" "}
                                    {skill}
                                  </span>
                                  <span>{90 + idx * 2}%</span>
                                </div>
                                <Progress
                                  value={90 + idx * 2}
                                  className="h-2"
                                />
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      </TabsContent>
                      <TabsContent
                        value="education"
                        className="h-[50vh] overflow-y-auto"
                      >
                        <motion.ul
                          className="space-y-4"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1 }}
                        >
                          {selectedDoctor.education.map((edu, idx) => (
                            <motion.li
                              key={idx}
                              className="flex items-center"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.1 * idx }}
                            >
                              <BookOpen className="w-6 h-6 mr-2 text-blue-600" />
                              <span>{edu}</span>
                            </motion.li>
                          ))}
                        </motion.ul>
                      </TabsContent>
                      <TabsContent
                        value="achievements"
                        className="h-[50vh] overflow-y-auto"
                      >
                        <motion.ul
                          className="space-y-4"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1 }}
                        >
                          {selectedDoctor.achievements.map(
                            (achievement, idx) => (
                              <motion.li
                                key={idx}
                                className="flex items-center"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 * idx }}
                              >
                                <Award className="w-6 h-6 mr-2 text-yellow-500" />
                                <span>{achievement}</span>
                              </motion.li>
                            )
                          )}
                        </motion.ul>
                      </TabsContent>
                    </Tabs>
                    <motion.div
                      className="mt-8 flex flex-col items-center"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <Button className="w-full max-w-md" size="lg">
                        <Users className="w-5 h-5 mr-2" /> Book an Appointment
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
              <DialogClose asChild></DialogClose>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Team;
