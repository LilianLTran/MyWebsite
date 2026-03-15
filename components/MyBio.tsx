import Image from "next/image";
import { Mail, Github, Linkedin } from "lucide-react";

import { profile } from "@/data/profile";

export default function MyBio() {
  return (
    <section className="relative flex min-h-[60vh] w-full items-center 
      justify-center overflow-hidden bg-neutral-900 px-6 py-12 lg:fixed 
      lg:left-0 lg:top-0 lg:h-screen lg:min-h-0 lg:w-[30%] lg:px-0 lg:py-0">
      <Image
        src="/background.jpg"
        alt="Profile background"
        fill
        priority
        sizes="30vw"
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/35" />

      <div className="relative z-10 flex min-h-[340px] w-full max-w-[280px] 
        flex-col items-center justify-center px-6 text-center text-white">
        <div className="mb-5 h-24 w-24 overflow-hidden rounded-full border-4 
          border-white/70 shadow-xl">
          <Image
            src="/profile.jpg"
            alt="Profile"
            width={96}
            height={96}
            priority
            className="h-full w-full object-cover"
          />
        </div>

        <h1 className="text-3xl font-semibold leading-tight tracking-tight">
          {profile.fullName}
        </h1>

        <p className="mt-2 text-sm leading-5 text-white/85">
          {profile.handle}
        </p>

        <p className="mt-4 min-h-[84px] text-base leading-7 text-white/90">
          {profile.headline}
        </p>

        <div className="mt-6 flex items-center gap-4 text-white/85">
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="transition hover:scale-110 hover:text-white"
          >
            <Mail className="h-5 w-5" />
          </a>

          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="transition hover:scale-110 hover:text-white"
          >
            <Github className="h-5 w-5" />
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transition hover:scale-110 hover:text-white"
          >
            <Linkedin className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}