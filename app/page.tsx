import Hero from "../components/sections/Hero";
// Home now focuses on the hero; other sections live on their own pages

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
    </div>
  );
}
