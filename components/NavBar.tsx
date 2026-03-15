"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavbarProps = {
  isDark?: boolean;
};

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Hobbies", path: "/hobbies" },
]

export default function Navbar({ isDark = false }: NavbarProps) {
  const pathname = usePathname()

  return (
    <header
      className={`z-30 border-b backdrop-blur lg:fixed lg:top-0 lg:right-0 
        lg:w-[70%] ${
        isDark
          ? "border-white/10 bg-neutral-950/85"
          : "border-neutral-200 bg-white/85"
      }`}
    >
      <div className="flex items-center justify-between px-6 py-4 lg:px-10">
        <nav className="flex items-center gap-6 text-sm font-medium">
          {navItems.map((item) => {
            const isActive = pathname == item.path;

            return (
              <Link
                key={item.path}
                href={item.path}
                className={`group relative pb-1 transition ${
                  isDark
                    ? "text-white/80 hover:text-white"
                    : "text-neutral-600 hover:text-neutral-900"
                } ${isActive ? (
                  isDark ? "text-white" : "text-neutral-900"
                ) : ""}`}
              >
                {item.name}
                <span
                  className={`absolute left-0 -bottom-[2px] h-[2px] 
                    rounded-full bg-blue-500 transition-all duration-300 ${
                    isActive
                      ? "w-full opacity-100"
                      : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
                  }`}
                />
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}