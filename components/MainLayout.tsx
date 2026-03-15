"use client";

import { ReactNode, useEffect, useState } from "react";
import MyBio from "@/components/MyBio";
import Navbar from "@/components/NavBar";

const getIsNight = () => {
  const hour = new Date().getHours();
  return hour >= 19 || hour < 6;
};

type MainLayoutProps = {
  children: ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
  const [isDark, setIsDark] = useState(getIsNight);

  useEffect(() => {
    const updateThemeByTime = () => {
      setIsDark(getIsNight());
    };

    updateThemeByTime();
    const interval = setInterval(updateThemeByTime, 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen">
      <div className="flex min-h-screen flex-col lg:flex-row">
        <MyBio />

        <section
          className={`min-h-screen w-full transition-colors duration-500 lg:ml-[30%] lg:w-[70%] ${
            isDark ? "bg-neutral-950 text-white" : "bg-white text-neutral-900"
          }`}
        >
          <Navbar isDark={isDark} />

          <div className="px-6 py-12 lg:px-10">{children}</div>
        </section>
      </div>
    </main>
  );
}