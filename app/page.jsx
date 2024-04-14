import Hero from "@/components/main/Hero";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        {/* <Skills /> */}
        {/* <Encryption /> */}
        {/* <Projects /> */}
      </div>
    </main>
  );
}