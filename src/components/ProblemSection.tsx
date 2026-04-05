import Icon from "@/components/ui/icon";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const problems = [
  {
    icon: "HelpCircle",
    text: "8 из 10 выбирают специальность, не зная, чем реально занимается профессионал",
  },
  {
    icon: "BookX",
    text: "Профориентационные тесты дают расплывчатые советы без конкретики",
  },
  {
    icon: "TrendingDown",
    text: "Половина студентов разочаровывается в профессии уже на первом курсе",
  },
];

export function ProblemSection() {
  const headingRef = useScrollAnimation() as React.RefObject<HTMLDivElement>;
  const cardsRef = useScrollAnimation(0.1) as React.RefObject<HTMLDivElement>;

  return (
    <section className="relative z-10 py-24 px-4">
      <div className="container max-w-5xl mx-auto">
        <div ref={headingRef} className="fade-up text-center mb-16">
          <span className="text-primary text-sm font-mono uppercase tracking-widest mb-4 block">Проблема</span>
          <h2 className="text-4xl md:text-5xl font-sentient font-bold mb-6">
            Большинство выбирают профессию{" "}
            <span className="gradient-text">вслепую</span>
          </h2>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto leading-relaxed">
            Никто не рассказывает, каково это — быть дизайнером, программистом или маркетологом в реальной жизни
          </p>
        </div>

        <div ref={cardsRef} className="stagger-children grid md:grid-cols-3 gap-6">
          {problems.map((item, i) => (
            <div
              key={i}
              className="card-glow bg-card rounded-2xl p-6 border border-border"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Icon name={item.icon} fallback="CircleAlert" size={22} className="text-primary" />
              </div>
              <p className="text-foreground/70 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}