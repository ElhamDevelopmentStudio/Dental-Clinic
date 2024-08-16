"use client";
import { NextPage } from "next";
import Head from "next/head";
import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const galleryItems = [
  {
    title: "State-of-the-Art Treatment Rooms",
    description:
      "Our clinic features three modern treatment rooms equipped with the latest dental technology. Two rooms are dedicated to male patients, ensuring privacy and comfort. For our female patients, we have a separate treatment room staffed entirely by female doctors and nurses, providing a secure and respectful environment. Our commitment to patient care is evident in every detail, from the ergonomic dental chairs to the calming decor that soothes the senses.",
    image: "/1.jpg",
  },
  {
    title: "Dedicated Care for Our Female Patients",
    description:
      "Understanding the cultural nuances and respecting the privacy of our female patients, we have a specially designated treatment room that is exclusively for women. This room is managed by our all-female medical team, who are experts in their field and dedicated to providing personalized and empathetic care. At Kabir Dental Clinic, we are committed to creating a safe and comforting space for all our patients.",
    image: "/2.jpg",
  },
  {
    title: "Comfortable and Spacious Waiting Area",
    description:
      "Our waiting room is designed to be a sanctuary of comfort for those accompanying our patients. With plush seating, soft lighting, and a calm atmosphere, we aim to make your wait as pleasant as possible. Enjoy a selection of reading materials, complimentary refreshments, and access to free Wi-Fi while you wait. Our waiting room reflects our commitment to providing a holistic and patient-centered experience.",
    image: "/3.jpg",
  },
  {
    title: "Welcoming Registration Hall",
    description:
      "Upon entering Kabir Dental Clinic, you are greeted by our spacious and inviting registration hall. Our friendly staff, trained in customer relations, are here to assist you with the registration process and answer any questions you may have. The hall's open layout and warm ambiance set the tone for a pleasant and seamless visit to our clinic. We believe that a great dental experience begins with a warm welcome.",
    image: "/4.jpg",
  },
  {
    title: "Cutting-Edge Dental Technology",
    description:
      "At Kabir Dental Clinic, we pride ourselves on using the latest in dental technology to provide the best care possible. From digital X-rays to advanced sterilization equipment, our facility is equipped with everything necessary to ensure precise and safe dental procedures. We continually invest in technology to improve our patients' experience and outcomes.",
    image: "/1.jpg",
  },
  {
    title: "Our Dedicated Team at Work",
    description:
      "Our team of skilled dentists, hygienists, and support staff work tirelessly to ensure that each patient receives the highest quality of care. With a focus on building trust and rapport, our staff are dedicated to making every visit a positive experience. From the moment you walk in, our team is here to provide personalized attention and care, ensuring that all your dental needs are met.",
    image: "/2.jpg",
  },
];

const GalleryPage: NextPage = () => {
  const [selectedItem, setSelectedItem] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });

  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Gallery - Kabir Dental Clinic</title>
        <meta
          name="description"
          content="Explore our state-of-the-art dental clinic facilities and equipment."
        />
      </Head>

      <main ref={containerRef} className="relative">
        <motion.div
          className="fixed inset-0 z-0"
          style={{
            backgroundImage: "url('2.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: useTransform(scrollYProgress, [0, 1], [1, 0.2]),
          }}
        />

        <div className="relative z-10">
          <header className="py-16 text-center text-black bg-black bg-opacity-50">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Explore Our Clinic
            </h1>
            <p className="text-xl max-w-3xl mx-auto px-4">
              At Kabir Dental Clinic, we have thoughtfully designed our spaces
              to ensure every visitor feels welcomed and cared for. Take a tour
              of our facility and discover the environment where your dental
              journey begins.
            </p>
          </header>

          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {galleryItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer group"
                    onClick={() => setSelectedItem(index)}
                  >
                    <motion.div
                      className="aspect-w-16 aspect-h-9"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Image
                        src={item.image}
                        alt={item.title}
                        layout="fill"
                        objectFit="cover"
                      />
                    </motion.div>
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="text-white text-xl font-semibold">
                        {item.title}
                      </h3>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </div>

        <Dialog
          open={selectedItem !== null}
          onOpenChange={() => setSelectedItem(null)}
        >
          {selectedItem !== null && (
            <DialogContent className="max-w-4xl">
              <DialogHeader>
                <DialogTitle>{galleryItems[selectedItem].title}</DialogTitle>
              </DialogHeader>
              <div className="relative aspect-w-16 aspect-h-9 mb-4">
                <Image
                  src={galleryItems[selectedItem].image}
                  alt={galleryItems[selectedItem].title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <DialogDescription>
                {galleryItems[selectedItem].description}
              </DialogDescription>
              <div className="flex justify-between mt-4">
                <Button
                  variant="outline"
                  onClick={() =>
                    setSelectedItem((prev) =>
                      prev! > 0 ? prev! - 1 : galleryItems.length - 1
                    )
                  }
                >
                  <ChevronLeft className="mr-2 h-4 w-4" /> Previous
                </Button>
                <Button
                  variant="outline"
                  onClick={() =>
                    setSelectedItem((prev) =>
                      prev! < galleryItems.length - 1 ? prev! + 1 : 0
                    )
                  }
                >
                  Next <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </DialogContent>
          )}
        </Dialog>
      </main>
    </div>
  );
};

export default GalleryPage;
