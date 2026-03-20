"use client";

import { forwardRef, useRef, useState, useEffect } from "react";
import HTMLFlipBook from "react-pageflip";

import { loricGuidebook } from "./LoricGuide";

type PageProps = {
  title?: string;
  rule?: string;
  note?: string;
  pageNumber?: number;
  totalPages?: number;
  cover?: boolean;
};

const GuidePage = forwardRef<HTMLDivElement, PageProps>(function GuidePage(
  { title, rule, note, pageNumber, totalPages, cover = false },
  ref,
) {
  if (cover) {
    return (
      <div
        ref={ref}
        className="h-full w-full border border-stone-300 bg-gradient-to-br from-stone-100 to-stone-200 p-8 text-stone-900 shadow-lg dark:border-stone-700 dark:from-stone-900 dark:to-stone-800 dark:text-stone-100"
      >
        <div className="flex h-full flex-col justify-between rounded-xl border border-stone-300/70 p-8 dark:border-stone-700/70">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-stone-500 dark:text-stone-400">
              Blood on the Clocktower
            </p>
            <h2 className="mt-28 text-4xl font-semibold italic text-center">Loric Guidebook</h2>
          </div>

          <p className="text-sm opacity-70 text-stone-500 dark:text-stone-400">
            Flip from the middle like an open book
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className="h-full w-full border border-stone-300 bg-stone-50 p-6 text-stone-900 shadow-md dark:border-stone-700 dark:bg-stone-900 dark:text-stone-100"
    >
      <div className="flex h-full flex-col">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-2xl font-semibold italic">{title}</h3>

          {pageNumber && totalPages ? (
            <span className="shrink-0 text-xs tracking-[0.2em] text-stone-500 dark:text-stone-400">
              Page {pageNumber}/{totalPages}
            </span>
          ) : null}
        </div>

        <div className="mt-6 rounded-xl border border-stone-200 bg-white p-4 dark:border-stone-800 dark:bg-stone-950">
          <p className="font-mono text-sm leading-7 text-stone-800 dark:text-stone-200">
            {rule}
          </p>
        </div>

        <p className="mt-5 text-sm leading-7 text-stone-700 dark:text-stone-300">
          {note}
        </p>

        <div className="mt-auto pt-6 text-right text-[9px] opacity-70 uppercase tracking-[0.2em] text-stone-400 dark:text-stone-500">
          Loric Guidebook
        </div>
      </div>
    </div>
  );
});

export default function BOTCPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const totalPages = loricGuidebook.length + 1;
  const [currentPage, setCurrentPage] = useState(0);
  const bookRef = useRef<any>(null);

  return (
    <>
      <section>
        <h1 className="text-4xl font-semibold tracking-tight">
          Blood on the Clocktower
        </h1>

        <p className="mt-3 max-w-3xl text-neutral-600 dark:text-neutral-300">
          A collection of chaotic, fun, and experimental interactions.
        </p>
      </section>

      <section className="pt-10">
        <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-950 lg:p-8">
          <div className="mb-8">
            <p className="mt-2 text-sm leading-6 text-neutral-600 dark:text-neutral-300">
              A personal set of notes on characters, fabled roles, and interactions
              that create especially funny, chaotic, or interesting situations.
            </p>
          </div>

          {isMobile ? (
            <div className="space-y-6">
              {loricGuidebook.map((item, index) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-stone-300 bg-stone-50 p-5 dark:border-stone-700 dark:bg-stone-900"
                >
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-semibold italic">{item.title}</h3>
                    <span className="text-[10px] text-stone-400">
                      Page {index + 1}/{totalPages}
                    </span>
                  </div>

                  <pre className="mt-3 rounded bg-white p-3 text-xs dark:bg-stone-950 whitespace-pre-wrap">
                    <code>{item.rule}</code>
                  </pre>

                  <p className="mt-3 text-sm text-stone-700 dark:text-stone-300">
                    {item.note}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <div
              className={`flex justify-center transition-all duration-500 ${
                currentPage === 0 ? "lg:-translate-x-[190px]" : ""
              }`}
            >
              <HTMLFlipBook
                width={380}
                height={540}
                minWidth={300}
                maxWidth={380}
                minHeight={420}
                maxHeight={540}
                size="stretch"
                drawShadow
                flippingTime={700}
                usePortrait={false}
                startPage={0}
                autoSize
                maxShadowOpacity={0.3}
                showCover
                mobileScrollSupport
                clickEventForward
                useMouseEvents
                swipeDistance={30}
                showPageCorners
                disableFlipByClick={false}
                className=""
                style={{}}
                startZIndex={0}
                ref={bookRef}
                onFlip={(e) => setCurrentPage(e.data)}
              >
                <GuidePage cover />

                {loricGuidebook.map((item, index) => (
                  <GuidePage
                    key={item.title}
                    title={item.title}
                    rule={item.rule}
                    note={item.note}
                    pageNumber={index + 2}
                    totalPages={totalPages}
                  />
                ))}
              </HTMLFlipBook>
            </div>
          )}
        </div>
      </section>
    </>
  );
}