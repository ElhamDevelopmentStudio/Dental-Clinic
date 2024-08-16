"use client";
import { NextPage } from "next";
import Head from "next/head";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Kabir Dental Clinic - Your Trusted Partner in Dental Care</title>
        <meta
          name="description"
          content="Achieve the perfect smile with Kabir Dental Clinic. We offer a wide range of dental services in a comfortable environment."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LanguageSwitcher />

      <main>
        <Hero />
        <AboutUs />
        <Services />
        <Team />
        <Testimonials />
        <WhyChooseUs />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
