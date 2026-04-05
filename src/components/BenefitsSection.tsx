import Icon from "@/components/ui/icon";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const benefits = [
  {
    icon: "Zap",
    title: "Практика вместо теории",
    desc: "Никаких скучных тестов — только реальные задачи от профессионалов из индустрии",
  },
  {
    icon: "Target",
    title: "Реальные задачи",
    desc: "Кейсы основаны на том, с чем специалисты работают каждый день в настоящих компаниях",
  },
  {
    icon: "Lightbulb",
    title: "Понимание профессии",
    desc: "После кейса ты точно знаешь, нравится ли тебе это направление — и почему",
  },
  {
    icon: "Clock",
    title: "10 минут",
    desc: "Короткий формат, который можно пройти в перерыве или после школы",
  },
  {
    icon: "Gift",
    title: "Бесплатно",
    desc: "MVP доступен без оплаты — попробуй несколько направлений и выбери своё",
  },
  {
    icon: "Shield",
    title: "Без давления",
    desc: "Здесь нет правильных ответов — только честный опыт и твоя реакция на него",
  },
];

export function BenefitsSection() {
  const headingRef = useScrollAnimation() as React.RefObject<HTMLDivElement>;
  const cardsRef = useScrollAnimation(0.05) as React.RefObject<HTMLDivElement>;

  return (
    <section className="relative z-10 py-24 px-4">
      <div className="container max-w-5xl mx-auto">
        <div ref={headingRef} className="fade-up text-center mb-16">
          <span className="text-primary text-sm font-mono uppercase tracking-widest mb-4 block">Преимущества</span>
          <h2 className="text-4xl md:text-5xl font-sentient font-bold mb-6">
            Почему это{" "}
            <span className="gradient-text">работает</span>
          </h2>
        </div>

        <div ref={cardsRef} className="stagger-children grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {benefits.map((item, i) => (
            <div
              key={i}
              className="card-glow bg-card rounded-2xl p-6 border border-border"
            >
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Icon name={item.icon} fallback="Star" size={20} className="text-primary" />
              </div>
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-foreground/60 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}