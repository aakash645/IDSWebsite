'use client';

interface SolutionHeroProps {
  title: string;
  image: string;
}

export function SolutionHero({ title, image }: SolutionHeroProps) {
  return (
    <div className="relative rounded-3xl overflow-hidden h-64 md:h-80 mb-10 group border border-white/10">
      <img
        alt={title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        src={image}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent opacity-60"></div>
    </div>
  );
}
