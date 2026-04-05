import { GL } from "./gl";
import { Pill } from "./Pill";
import { Button } from "./ui/button";
import { useState } from "react";
import { Header } from "./Header";

export function Hero() {
  const [hovering, setHovering] = useState(false);

  return (
    <div className="flex flex-col h-svh justify-between relative z-10">
      <GL hovering={hovering} />
      <Header />

      <div className="pb-20 mt-auto text-center relative">
        <Pill className="mb-6">БЕТА-ВЕРСИЯ</Pill>
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-sentient font-bold leading-tight">
          Попробуй профессию<br />
          <span className="gradient-text font-sentient">прежде, чем выбрать</span>
        </h1>
        <p className="text-base sm:text-lg text-foreground/60 text-balance mt-6 max-w-[480px] mx-auto leading-relaxed">
          Реальные задания вместо тестов — пойми, твоё это или нет
        </p>

        <div className="flex items-center justify-center gap-4 mt-10 flex-wrap">
          <a href="#bot">
            <Button
              className="rounded-full px-8 py-3 text-base font-semibold bg-primary text-white hover:bg-primary/90"
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
            >
              Попробовать →
            </Button>
          </a>
          <a href="#how">
            <Button
              variant="outline"
              className="rounded-full px-8 py-3 text-base font-medium border-white/20 text-foreground/70 hover:text-foreground hover:border-white/40"
            >
              Как это работает
            </Button>
          </a>
        </div>

        <p className="text-foreground/30 text-sm mt-6 font-mono">
          Бесплатно · Без регистрации · 10 минут
        </p>
      </div>
    </div>
  );
}
