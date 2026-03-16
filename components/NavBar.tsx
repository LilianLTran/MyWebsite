"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Hobbies", path: "/hobbies" },
]

export default function Navbar() {
  const pathname = usePathname()

  return (
    <header className="
      z-30 border-b backdrop-blur 
      lg:fixed lg:top-0 lg:right-0 lg:w-[70%] 
      border-neutral-200 dark:border-white/30  
      bg-white/85 dark:bg-neutral-950/85
    ">
      <div className="flex items-center justify-between px-6 py-4 lg:px-10">
        <nav className="flex items-center gap-6 text-sm font-medium">
          {navItems.map((item) => {
            const isActive = pathname == item.path || 
              pathname.startsWith(item.path + "/");
            return (
              <Link
                key={item.path}
                href={item.path}
                className={`group relative pb-1 transition text-neutral-600 
                  hover:text-neutral-800 dark:hover:text-white
                  ${isActive ? (
                    "text-neutral-950 dark:text-white"
                  ) : ""}`
                }
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