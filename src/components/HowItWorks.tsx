const steps = [
  {
    num: "01",
    title: "Выбери направление",
    desc: "Маркетинг, дизайн, IT, финансы — выбери сферу, которая тебя интересует или о которой ты совсем не знаешь",
    color: "from-violet-500/20 to-purple-500/10",
    border: "border-violet-500/30",
  },
  {
    num: "02",
    title: "Реши реальный кейс",
    desc: "Выполни короткое задание — такое же, как делают настоящие специалисты каждый день на работе",
    color: "from-blue-500/20 to-cyan-500/10",
    border: "border-blue-500/30",
  },
  {
    num: "03",
    title: "Пойми, подходит ли тебе",
    desc: "Получи честную обратную связь и рекомендации — что развивать, если понравилось, или куда двигаться дальше",
    color: "from-emerald-500/20 to-teal-500/10",
    border: "border-emerald-500/30",
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="relative z-10 py-24 px-4">
      <div className="container max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-mono uppercase tracking-widest mb-4 block">Как это работает</span>
          <h2 className="text-4xl md:text-5xl font-sentient font-bold mb-6">
            Три шага до{" "}
            <span className="gradient-text">ясности</span>
          </h2>
          <p className="text-foreground/60 text-lg max-w-xl mx-auto">
            Вся сессия занимает около 10 минут
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 relative">
          <div className="hidden md:block absolute top-1/3 left-[16%] right-[16%] h-px bg-gradient-to-r from-violet-500/30 via-blue-500/30 to-emerald-500/30" />

          {steps.map((step, i) => (
            <div
              key={i}
              className={`card-glow bg-gradient-to-br ${step.color} rounded-2xl p-8 border ${step.border} relative`}
            >
              <div className="text-5xl font-sentient font-bold text-foreground/10 mb-4">{step.num}</div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-foreground/60 leading-relaxed text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
