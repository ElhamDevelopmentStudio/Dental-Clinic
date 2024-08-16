"use client"
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/LanguageContext";
import { motion } from "framer-motion";

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-4 right-4 z-50"
    >
      <Button
        variant="outline"
        onClick={() => setLanguage(language === "en" ? "da" : "en")}
        className="bg-white text-black hover:bg-gray-200"
      >
        {language === "en" ? "دری" : "English"}
      </Button>
    </motion.div>
  );
};

export default LanguageSwitcher;
