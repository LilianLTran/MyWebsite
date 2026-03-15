export default function HobbiesPage() {
  return (
    <div className="px-6 py-12 lg:px-10">
      {/* Header */}
      <section className="pt-10">
        <div className="grid gap-6 md:grid-cols-[300px_minmax(0,1fr)] 
          items-center">

          {/* Video */}
          <div className="overflow-hidden rounded-xl border border-neutral-200 
            dark:border-neutral-800">
            <div className="aspect-video">
              <iframe
                src="https://www.youtube.com/embed/LV16lKiJhsc"
                title="Jubensha example"
                loading="lazy"
                  allow={
                    "accelerometer; autoplay; clipboard-write; " +
                    "encrypted-media; gyroscope; picture-in-picture"
                  }
                allowFullScreen
                className="h-full w-full"
              />
            </div>
          </div>

          {/* Text */}
          <div>
            <h2 className="text-2xl font-semibold">Jubensha</h2>
            <div className="mt-4 leading-7 text-neutral-600 
              dark:text-neutral-300 text-justify">
              <p className="mt-2">
                Jubensha is a social deduction game where players take on 
                characters in a mystery story and work together to uncover 
                hidden truths. Through discussion, reasoning, and 
                interpretation of clues, the narrative gradually unfolds.
              </p>

              <p className="mt-2">
                What fascinates me most is the balance between deduction and 
                creativity. Playing a character requires seeing the world from 
                perspectives different from our own, and through that process 
                of reasoning and empathy we often uncover insights about people 
                and stories that we might otherwise overlook. Those insights 
                are not limited to the game itself—they often help us 
                understand the real world more deeply.
              </p>
            </div>
          </div>

        </div>
      </section>

      <section className="pt-12">
        <p className="leading-7 text-neutral-600 dark:text-neutral-300 text-justify">
          I’m drawn to hobbies that combine creativity with structure.
          Whether building software or participating in narrative games,
          I enjoy systems where thoughtful design shapes the experience.
        </p>
      </section>
    </div>
  );
}