import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import Image from "next/image";
import { useLanguage } from "./LanguageContext";
import {
  Calendar as CalendarIcon,
  Clock,
  Phone,
  Mail,
  Smile,
  Star,
  ChevronDown,
  ArrowRight,
  CircleCheck,
} from "lucide-react";

const content = {
  en: {
    title: "Smile Brighter, Live Better with Kabir Dental Clinic",
    subtitle: "Your trusted partner in achieving the perfect smile.",
    cta1: "Book an Appointment",
    cta2: "Contact Us",
    features: [
      "State-of-the-art Technology",
      "Experienced Dentists",
      "Comfortable Environment",
    ],
    bookingTitle: "Book Your Appointment",
    bookingDescription: "Choose a date and time that works best for you.",
    name: "Your Name",
    email: "Your Email",
    submit: "Confirm Booking",
  },
  da: {
    title: "با کلینیک دندان کبیر، لبخند درخشان‌تر و زندگی بهتری داشته باشید",
    subtitle: "شریک مورد اعتماد شما در دستیابی به لبخند کامل.",
    cta1: "نوبت بگیرید",
    cta2: "تماس با ما",
    features: ["تکنولوژی پیشرفته", "دندانپزشکان با تجربه", "محیط راحت"],
    bookingTitle: "نوبت خود را رزرو کنید",
    bookingDescription: "تاریخ و زمانی را که برای شما مناسب است انتخاب کنید.",
    name: "نام شما",
    email: "ایمیل شما",
    submit: "تأیید رزرو",
  },
};

const Hero: React.FC = () => {
  const { language } = useLanguage();
  const t = content[language];
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [date, setDate] = useState<Date | undefined>(new Date());

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-4 text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-400"
          >
            {t.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl mb-8 text-gray-700"
          >
            {t.subtitle}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12"
          >
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              {t.cta1}
            </Button>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-blue-600 text-blue-600 hover:bg-blue-50"
                  >
                    <Phone className="mr-2 h-4 w-4" /> {t.cta2}
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Call us: +1 234 567 8900</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex justify-center space-x-4 mb-12"
          >
            {t.features.map((feature, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="text-sm py-2 px-4"
              >
                <CircleCheck className="mr-2 h-4 w-4" /> {feature}
              </Badge>
            ))}
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
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
      </motion.div>

      <AnimatePresence>
        {isBookingOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed bottom-8 right-8 z-50"
          >
            <Card>
              <CardContent className="p-6">
                <p className="text-sm text-gray-500 mb-2">
                  Next available appointment:
                </p>
                <p className="text-lg font-semibold mb-4">Today, 2:00 PM</p>
                <Button size="sm" className="w-full">
                  Book Now <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;
