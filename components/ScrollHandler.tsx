"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export const ScrollHandler = () => {
  const pathname = usePathname();

  useEffect(() => {
    // Handle hash changes for smooth scrolling
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          // Smooth scroll to the element
          element.scrollIntoView({ behavior: "smooth" });
        } else {
          console.log("no element")
        }
      }
    };

    // Initial check for hash in URL
    if (window.location.hash) {
      setTimeout(handleHashChange, 100);
    }

    // Listen for hash changes
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [pathname]);

  return null; // This component doesn't render anything
};