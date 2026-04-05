import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const audiences = [
  {
    emoji: "🎒",
    title: "Школьники 14–18 лет",
    desc: "Ещё не знаешь, кем хочешь стать? Попробуй несколько профессий прямо сейчас — без обязательств и давления",
    tags: ["ЕГЭ", "Выбор вуза", "После 9 класса"],
    gradient: "from-violet-500/10 to-purple-500/5",
    border: "border-violet-500/20",
  },
  {
    emoji: "📚",
    title: "Студенты",
    desc: "Учишься, но не уверен, что это твоё? Проверь смежные направления и найди, что зажигает тебя по-настоящему",
    tags: ["Смена специализации", "Подработка", "Карьера"],
    gradient: "from-blue-500/10 to-cyan-500/5",
    border: "border-blue-500/20",
  },
  {
    emoji: "👨‍👩‍👧",
    title: "Родители",
    desc: "Хотите помочь ребёнку с выбором? ПрофПроба даёт честный ответ без споров и давления — просто практика",
    tags: ["Помощь детям", "Объективный взгляд", "Совместно"],
    gradient: "from-emerald-500/10 to-teal-500/5",
    border: "border-emerald-500/20",
  },
];

export function AudienceSection() {
  const headingRef = useScrollAnimation() as React.RefObject<HTMLDivElement>;
  const cardsRef = useScrollAnimation(0.1) as React.RefObject<HTMLDivElement>;

  return (
    <section id="audience" className="relative z-10 py-24 px-4">
      <div className="container max-w-5xl mx-auto">
        <div ref={headingRef} className="fade-up text-center mb-16">
          <span className="text-primary text-sm font-mono uppercase tracking-widest mb-4 block">Для кого</span>
          <h2 className="text-4xl md:text-5xl font-sentient font-bold mb-6">
            Это для{" "}
            <span className="gradient-text">тебя</span>
          </h2>
        </div>

        <div ref={cardsRef} className="stagger-children grid md:grid-cols-3 gap-6">
          {audiences.map((item, i) => (
            <div
              key={i}
              className={`card-glow bg-gradient-to-br ${item.gradient} rounded-2xl p-8 border ${item.border}`}
            >
              <div className="text-4xl mb-4">{item.emoji}</div>
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-foreground/60 text-sm leading-relaxed mb-5">{item.desc}</p>
              <div className="flex flex-wrap gap-2">
                {item.tags.map(tag => (
                  <span key={tag} className="text-xs bg-white/5 text-foreground/50 border border-white/10 rounded-full px-3 py-1">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}