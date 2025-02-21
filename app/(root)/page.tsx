import React from "react";
import HeroSection from "@/components/HeroSection";
import Services from "@/components/Services";
import LetUsShowYouSection from "@/components/LetUsShowYouSection";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import Reviews from "@/components/Reviews";
import { JoinUsSection } from "@/components/JoinUsSection";
import { ScrollHandler } from "@/components/ScrollHandler";
import {
  Cog,
  FolderGit2,
  Star,
  Headset,
  FileCheck2,
  House,
} from "lucide-react";
import { FloatingDock } from "@/components/ui/floating-dock";

export default function Home() {
  const links = [
    {
      title: "Home",
      icon: (
        <House className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#home",
    },
    {
      title: "Services",
      icon: (
        <Cog className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#services",
    },
    {
      title: "Let Us Show",
      icon: (
        <FileCheck2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#let-us-show",
    },
    {
      title: "Projects",
      icon: (
        <FolderGit2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#projects",
    },
    {
      title: "Reviews",
      icon: (
        <Star className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#reviews",
    },
    {
      title: "Contact Us",
      icon: (
        <Headset className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/contact-us",
    },
  ];
  return (
    <section>
      <ScrollHandler />
      <HeroSection />
      <Services />
      <LetUsShowYouSection />
      <Projects />
      <Reviews />
      <JoinUsSection />
      <Footer />
      <div className="flex items-center justify-center w-full fixed bottom-0 z-40">
        <FloatingDock items={links} />
      </div>
    </section>
  );
}
